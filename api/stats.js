// Statistiques d'ouverture d'une campagne.
// URL : https://flipitapp.ai/api/stats?c=NOM_CAMPAGNE&sent=NOMBRE_ENVOYES
// Renvoie un JSON avec le nombre d'ouvertures uniques et le taux d'ouverture.

const KV_URL   = process.env.KV_REST_API_URL   || process.env.UPSTASH_REDIS_REST_URL;
const KV_TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

async function kv(args) {
  const path = args.map(encodeURIComponent).join("/");
  const r = await fetch(`${KV_URL}/${path}`, {
    headers: { Authorization: `Bearer ${KV_TOKEN}` },
  });
  return r.json();
}

export default async function handler(req, res) {
  const url = new URL(req.url, "http://x");
  const c = (url.searchParams.get("c") || "default").slice(0, 64);
  const sent = Number(url.searchParams.get("sent") || 0);

  let unique = 0, total = 0;
  try {
    const a = await kv(["SCARD", `opens:${c}`]);
    const b = await kv(["GET", `opens_total:${c}`]);
    unique = Number(a && a.result) || 0;
    total = Number(b && b.result) || 0;
  } catch (_) {}

  const rate = sent > 0 ? Math.round((unique / sent) * 1000) / 10 : null;

  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.status(200).json({
    campagne: c,
    ouvertures_uniques: unique,
    chargements_totaux: total,
    envoyes: sent || undefined,
    taux_ouverture_pourcent: rate,
  });
}
