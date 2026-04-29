// Centralized copy — French primary, English as fallback structure
const COPY = {
  fr: {
    nav: {
      features: "Fonctionnalités",
      how: "Comment ça marche",
      pricing: "Tarifs",
      faq: "FAQ",
      support: "Support",
      download: "Télécharger",
    },
    beta: {
      pill: "BETA PUBLIQUE",
      line: "Nous sommes en bêta. Trouvez un bug majeur → gagnez des jours d'abonnement gratuits.",
      cta: "Signaler un bug",
    },
    hero: {
      tag: "SCANNER DE MARKETPLACE · 24/7",
      title_a: "Soyez le ",
      title_b: "premier",
      title_c: " sur chaque deal.",
      sub: "FlipIt AI scanne Facebook Marketplace, Kijiji et Craigslist sans relâche. Dès qu'une annonce sous-évaluée correspond à vos critères, vous recevez la notification. Avant tout le monde.",
      cta_app: "App Store",
      cta_play: "Google Play",
      cta_sub: "Gratuit à télécharger · Abonnement requis pour les alertes",
      live_label: "EN DIRECT",
      scanning: "Analyse en cours",
    },
    how: {
      eyebrow: "— WORKFLOW",
      title: "Trois étapes. Aucune recherche manuelle.",
      steps: [
        {
          num: "01",
          title: "Créez votre profil de recherche",
          body: "Catégorie, mots-clés, prix max, rayon géographique. Aussi précis que vous voulez.",
          tag: "Configurer",
        },
        {
          num: "02",
          title: "L'IA scanne en continu",
          body: "Notre moteur analyse chaque nouvelle annonce en quelques secondes, compare au marché, et filtre les vraies opportunités.",
          tag: "24/7",
        },
        {
          num: "03",
          title: "Recevez l'alerte en temps réel",
          body: "Notification push instantanée avec le lien direct. Vous êtes le premier à contacter le vendeur.",
          tag: "< 30s",
        },
      ],
    },
    features: {
      eyebrow: "— CAPACITÉS",
      title: "Conçu pour agir vite.",
      list: [
        { k: "Alertes instantanées", v: "Notification push sous 30 secondes après la publication de l'annonce." },
        { k: "Multi-plateforme", v: "Facebook Marketplace, Kijiji et Craigslist en une seule app." },
        { k: "Filtres précis", v: "Prix, catégorie, mots-clés, zone géographique, état de l'objet." },
        { k: "Détection de sous-évaluation", v: "L'IA compare au marché et met en avant les vraies bonnes affaires." },
        { k: "Profils multiples", v: "Plusieurs stratégies de recherche en parallèle (plan Pro)." },
        { k: "Historique & favoris", v: "Retrouvez et comparez toutes vos alertes passées." },
      ],
    },
    stats: {
      eyebrow: "— EN DIRECT",
      items: [
        { n: "2.4M+", l: "Annonces analysées cette semaine" },
        { n: "< 30s", l: "Délai moyen d'alerte" },
        { n: "3", l: "Marketplaces surveillées en continu" },
        { n: "100%", l: "Automatisé, zéro recherche manuelle" },
      ],
    },
    forWho: {
      eyebrow: "— POUR QUI",
      title: "Fait pour tous ceux qui ne veulent plus rater une affaire.",
      personas: [
        {
          tag: "Revendeur pro",
          title: "Les flippers",
          body: "Vous achetez pour revendre. Chaque minute compte. FlipIt AI transforme des heures de scroll en alertes ciblées.",
        },
        {
          tag: "Chasseur de bonnes affaires",
          title: "Les particuliers malins",
          body: "Vous cherchez un canapé, un vélo, un iPhone. L'app vous prévient quand LA bonne offre tombe — sans passer vos soirées à rafraîchir.",
        },
        {
          tag: "Collectionneur",
          title: "Les niches spécifiques",
          body: "Vinyles rares, pièces vintage, équipement photo. Paramétrez vos critères pointus et laissez l'IA veiller.",
        },
      ],
    },
    deals: {
      eyebrow: "— EXEMPLES",
      title: "Le genre d'alertes que vous recevez.",
      sub: "Annonces détectées par FlipIt AI. Prix marché estimé par notre IA.",
      list: [
        { cat: "Mobilier", item: "Canapé cuir italien — Montréal", listed: "450 $", market: "1 200 $", save: "62%", time: "il y a 12s", platform: "FB Marketplace" },
        { cat: "Électronique", item: "iPhone 15 Pro 256GB — Laval", listed: "720 $", market: "1 050 $", save: "31%", time: "il y a 47s", platform: "Kijiji" },
        { cat: "Vélo", item: "Vélo route carbone Cervélo", listed: "890 $", market: "2 400 $", save: "63%", time: "il y a 1m", platform: "Craigslist" },
        { cat: "Outillage", item: "Compresseur DeWalt 60gal — neuf", listed: "380 $", market: "799 $", save: "52%", time: "il y a 2m", platform: "FB Marketplace" },
      ],
    },
    testimonials: {
      eyebrow: "— UTILISATEURS BÊTA",
      title: "Les premiers utilisateurs ne peuvent plus s'en passer.",
      list: [
        {
          q: "J'ai acheté un vélo Cervélo à 40% du prix marché 14 secondes après la mise en ligne. Impossible sans FlipIt.",
          n: "Marc L.",
          r: "Flipper, Montréal",
        },
        {
          q: "Je cherchais une table Vitra depuis 6 mois. Alerte reçue un mardi à 2h du matin, contact envoyé, table achetée. Fini les heures de scroll.",
          n: "Sophie T.",
          r: "Designer, Québec",
        },
        {
          q: "Revente de matériel photo, mon chiffre d'affaires a doublé en deux mois. L'app paie son abonnement en une seule alerte.",
          n: "Julien R.",
          r: "Revendeur pro, Laval",
        },
      ],
    },
    pricing: {
      eyebrow: "— TARIFS",
      title: "Deux plans. Zéro engagement.",
      sub: "Annulez à tout moment. Premier mois remboursé si aucune alerte pertinente.",
      plans: [
        {
          name: "Starter",
          price: "24",
          period: "/ mois",
          desc: "Un profil de recherche. Notifications instantanées illimitées.",
          features: [
            "1 profil de recherche actif",
            "Notifications push instantanées",
            "Accès aux 3 marketplaces",
            "Historique 30 jours",
            "Support par courriel",
          ],
          cta: "Commencer",
          highlight: false,
        },
        {
          name: "Pro",
          price: "79",
          period: "/ mois",
          desc: "Pour les flippers sérieux et chasseurs multi-catégories.",
          features: [
            "Jusqu'à 5 profils de recherche",
            "Notifications prioritaires (plus rapides)",
            "Accès aux 3 marketplaces",
            "Historique illimité & export",
            "Détection de sous-évaluation avancée",
            "Support prioritaire",
          ],
          cta: "Passer Pro",
          highlight: true,
          tag: "LE PLUS POPULAIRE",
        },
      ],
    },
    faq: {
      eyebrow: "— QUESTIONS",
      title: "Tout ce qu'il faut savoir.",
      list: [
        {
          q: "C'est vraiment en temps réel ?",
          a: "Oui. Notre infrastructure scanne les marketplaces 24/7 et les nouvelles annonces sont analysées sous 30 secondes. Dès qu'une annonce correspond à votre profil, vous recevez une notification push.",
        },
        {
          q: "Sur quelles marketplaces ça fonctionne ?",
          a: "Facebook Marketplace, Kijiji et Craigslist. D'autres plateformes arriveront après la sortie de bêta.",
        },
        {
          q: "Quelle est la différence entre Starter et Pro ?",
          a: "Starter (24 $/mois) : 1 profil de recherche. Pro (79 $/mois) : jusqu'à 5 profils parallèles, notifications prioritaires, détection de sous-évaluation avancée et historique illimité.",
        },
        {
          q: "L'app est en bêta — qu'est-ce que ça veut dire ?",
          a: "L'IA apprend encore à mieux détecter vos préférences. Il peut y avoir des bugs. Tout bug majeur signalé à l'équipe est récompensé avec des jours d'abonnement gratuits.",
        },
        {
          q: "Je peux annuler quand je veux ?",
          a: "Oui, aucun engagement. Annulation en un clic depuis l'app. Le premier mois est remboursé si vous ne recevez aucune alerte pertinente.",
        },
        {
          q: "Quelles zones géographiques sont couvertes ?",
          a: "Canada (toutes les grandes villes) et États-Unis au lancement. Paramétrez un rayon autour de votre ville pour des résultats locaux.",
        },
      ],
    },
    footer: {
      tagline: "Soyez le premier sur chaque deal.",
      download: "Télécharger l'app",
      sections: {
        product: { title: "Produit", links: ["Fonctionnalités", "Tarifs", "Comment ça marche", "FAQ"] },
        company: { title: "Entreprise", links: ["À propos", "Contact", "Blog", "Carrières"] },
        legal: { title: "Légal", links: ["Politique de confidentialité", "Termes et conditions", "Cookies", "Mentions légales"] },
      },
      copy: "© 2026 FlipIt AI. Tous droits réservés.",
      madein: "Conçu au Québec 🇨🇦",
    },
  },
  en: {
    nav: {
      features: "Features",
      how: "How it works",
      pricing: "Pricing",
      faq: "FAQ",
      support: "Support",
      download: "Download",
    },
    hero: {
      tag: "MARKETPLACE SCANNER · 24/7",
      title_a: "Be the ",
      title_b: "first",
      title_c: " on every deal.",
      sub: "FlipIt AI scans Facebook Marketplace, Kijiji and Craigslist non-stop. The moment an underpriced listing matches your criteria, you get the notification. Before anyone else.",
      cta_app: "App Store",
      cta_play: "Google Play",
      cta_sub: "Free to download · Subscription required for alerts",
      live_label: "LIVE",
      scanning: "Scanning",
    },
    how: {
      eyebrow: "— WORKFLOW",
      title: "Three steps. Zero manual searching.",
      steps: [
        { num: "01", title: "Create your search profile", body: "Category, keywords, max price, geographic radius. As precise as you want.", tag: "Setup" },
        { num: "02", title: "AI scans continuously", body: "Our engine analyzes every new listing in seconds, benchmarks against the market, and filters the real opportunities.", tag: "24/7" },
        { num: "03", title: "Get the real-time alert", body: "Instant push notification with a direct link. You're the first to contact the seller.", tag: "< 30s" },
      ],
    },
    features: {
      eyebrow: "— CAPABILITIES",
      title: "Built to act fast.",
      list: [
        { k: "Instant alerts", v: "Push notification within 30 seconds of a listing going live." },
        { k: "Multi-platform", v: "Facebook Marketplace, Kijiji and Craigslist in one app." },
        { k: "Precise filters", v: "Price, category, keywords, geographic zone, item condition." },
        { k: "Undervalue detection", v: "AI benchmarks against the market and surfaces the real deals." },
        { k: "Multiple profiles", v: "Several search strategies running in parallel (Pro plan)." },
        { k: "History & favourites", v: "Find and compare all your past alerts." },
      ],
    },
    stats: {
      eyebrow: "— LIVE",
      items: [
        { n: "2.4M+", l: "Listings analyzed this week" },
        { n: "< 30s", l: "Average alert delay" },
        { n: "3", l: "Marketplaces monitored 24/7" },
        { n: "100%", l: "Automated, zero manual searching" },
      ],
    },
    forWho: {
      eyebrow: "— FOR WHO",
      title: "Made for everyone who refuses to miss a deal.",
      personas: [
        { tag: "Pro reseller", title: "The flippers", body: "You buy to resell. Every minute counts. FlipIt AI turns hours of scrolling into targeted alerts." },
        { tag: "Deal hunter", title: "The smart shoppers", body: "You're looking for a couch, a bike, an iPhone. The app notifies you when THE right offer drops — without spending your evenings refreshing." },
        { tag: "Collector", title: "The niche hunters", body: "Rare vinyl, vintage pieces, camera gear. Set your precise criteria and let the AI keep watch." },
      ],
    },
    deals: {
      eyebrow: "— EXAMPLES",
      title: "The kind of alerts you'll receive.",
      sub: "Listings detected by FlipIt AI. Market price estimated by our AI.",
      list: [
        { cat: "Furniture", item: "Italian leather sofa — Montreal", listed: "$450", market: "$1,200", save: "62%", time: "12s ago", platform: "FB Marketplace" },
        { cat: "Electronics", item: "iPhone 15 Pro 256GB — Laval", listed: "$720", market: "$1,050", save: "31%", time: "47s ago", platform: "Kijiji" },
        { cat: "Cycling", item: "Cervélo carbon road bike", listed: "$890", market: "$2,400", save: "63%", time: "1m ago", platform: "Craigslist" },
        { cat: "Tools", item: "DeWalt 60gal compressor — new", listed: "$380", market: "$799", save: "52%", time: "2m ago", platform: "FB Marketplace" },
      ],
    },
    testimonials: {
      eyebrow: "— BETA USERS",
      title: "Early users can't live without it.",
      list: [
        { q: "I bought a Cervélo at 40% of market value 14 seconds after it was listed. Impossible without FlipIt.", n: "Marc L.", r: "Flipper, Montreal" },
        { q: "I'd been searching for a Vitra table for 6 months. Alert received on a Tuesday at 2am, message sent, table bought. No more hours of scrolling.", n: "Sophie T.", r: "Designer, Quebec City" },
        { q: "Camera gear reselling — my revenue doubled in two months. The app pays for itself with a single alert.", n: "Julien R.", r: "Pro reseller, Laval" },
      ],
    },
    pricing: {
      eyebrow: "— PRICING",
      title: "Two plans. No commitment.",
      sub: "Cancel anytime. First month refunded if no relevant alerts received.",
      plans: [
        {
          name: "Starter", price: "24", period: "/ month",
          desc: "One search profile. Unlimited instant notifications.",
          features: ["1 active search profile", "Instant push notifications", "Access to all 3 marketplaces", "30-day history", "Email support"],
          cta: "Get started", highlight: false,
        },
        {
          name: "Pro", price: "79", period: "/ month",
          desc: "For serious flippers and multi-category hunters.",
          features: ["Up to 5 search profiles", "Priority notifications (faster)", "Access to all 3 marketplaces", "Unlimited history & export", "Advanced undervalue detection", "Priority support"],
          cta: "Go Pro", highlight: true, tag: "MOST POPULAR",
        },
      ],
    },
    faq: {
      eyebrow: "— QUESTIONS",
      title: "Everything you need to know.",
      list: [
        { q: "Is it truly real-time?", a: "Yes. Our infrastructure scans marketplaces 24/7 and new listings are analyzed within 30 seconds. As soon as a listing matches your profile, you receive a push notification." },
        { q: "Which marketplaces does it cover?", a: "Facebook Marketplace, Kijiji and Craigslist. More platforms will be added after the beta period." },
        { q: "What's the difference between Starter and Pro?", a: "Starter ($24/month): 1 search profile. Pro ($79/month): up to 5 parallel profiles, priority notifications, advanced undervalue detection and unlimited history." },
        { q: "The app is in beta — what does that mean?", a: "The AI is still learning to better detect your preferences. There may be bugs. Any major bug reported to the team is rewarded with free subscription days." },
        { q: "Can I cancel anytime?", a: "Yes, no commitment. Cancel in one click from the app. First month refunded if you receive no relevant alerts." },
        { q: "Which geographic areas are covered?", a: "Canada (all major cities) and the United States at launch. Set a radius around your city for local results." },
      ],
    },
    footer: {
      tagline: "Be the first on every deal.",
      download: "Download the app",
      sections: {
        product: { title: "Product", links: ["Features", "Pricing", "How it works", "FAQ"] },
        company: { title: "Company", links: ["About", "Contact", "Blog", "Careers"] },
        legal: { title: "Legal", links: ["Privacy Policy", "Terms and Conditions", "Cookies", "Legal notices"] },
      },
      copy: "© 2026 FlipIt AI. All rights reserved.",
      madein: "Built in Quebec 🇨🇦",
    },
  },
};

window.COPY = COPY;
