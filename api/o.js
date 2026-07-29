// Endpoint de suivi des ouvertures — renvoie un pixel 1x1 invisible et enregistre l'ouverture.
// URL finale : https://flipitapp.ai/api/o?c=NOM_CAMPAGNE&e=courriel
//
// Stockage : Vercel KV (Upstash Redis) via son API REST — aucune dépendance npm requise.
// Les variables d'environnement sont ajoutées automatiquement quand tu crées le KV dans Vercel.

const KV_URL   = process.env.KV_REST_API_URL   || process.env.UPSTASH_REDIS_REST_URL;
const KV_TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

// GIF transparent 1x1
const PIXEL = Buffer.from("R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", "base64");

async function kv(args) {
  const path = args.map(encodeURIComponent).join("/");
  const r = await fetch(`${KV_URL}/${path}`, {
    headers: { Authorization: `Bearer ${KV_TOKEN}` },
  });
  return r.json();
}

export default async function handler(req, res) {
  try {
    const url = new URL(req.url, "http://x");
    const c = (url.searchParams.get("c") || "default").slice(0, 64);
    const e = (url.searchParams.get("e") || "").toLowerCase().slice(0, 120);
    if (e && KV_URL && KV_TOKEN) {
      // ensemble des ouvreurs uniques + compteur total de chargements
      await kv(["SADD", `opens:${c}`, e]);
      await kv(["INCR", `opens_total:${c}`]);
    }
  } catch (_) {
    // On renvoie le pixel quoi qu'il arrive : ne jamais casser l'affichage du courriel.
  }
  res.setHeader("Content-Type", "image/gif");
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0");
  res.setHeader("Pragma", "no-cache");
  res.status(200).send(PIXEL);
}
