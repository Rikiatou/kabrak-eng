export const WA_NUMBER = '237653561862';
export const waLink = (text) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

const apps = [
  {
    name: 'KABRAK Store',
    logo: '/kabrak-store-logo.png',
    href: 'https://kabrak-store.kabrakeng.com',
    screenshot: '/screenshots/kabrak-store-dashboard.png',
    cta: 'try',
    fr: {
      who: 'Boutiques, vêtements, cosmétiques, pâtisseries, quincailleries',
      points: ['Caisse et ticket imprimé', 'Stock par taille et couleur', 'Dettes clients et rappel WhatsApp'],
      desc: 'La caisse et la gestion de stock pour les boutiques. Chaque vente retire le stock, calcule le bénéfice et donne un ticket. La commerçante voit qui lui doit de l’argent, ferme sa caisse le soir et suit son bénéfice net. Ça marche sur téléphone, même quand internet coupe.',
      features: ['Caisse, ticket 58/80 mm et facture', 'Variantes : taille, couleur, paquet ou unité', 'Prix de gros selon la quantité', 'Dettes clients et rappel WhatsApp', 'Ouverture et clôture de caisse', 'Boutique en ligne avec commande WhatsApp'],
      price: 'À partir de 4 900 FCFA / mois',
    },
    en: {
      who: 'Shops, clothing, cosmetics, bakeries, hardware stores',
      points: ['Register and printed receipt', 'Stock by size and colour', 'Client debts and WhatsApp reminders'],
      desc: 'Point of sale and stock management for shops. Every sale removes stock, computes profit and prints a receipt. The owner sees who owes her money, closes the till at night and follows her net profit. It works on a phone, even when the internet drops.',
      features: ['Register, 58/80 mm receipt and invoice', 'Variants: size, colour, pack or unit', 'Wholesale prices by quantity', 'Client debts and WhatsApp reminders', 'Opening and closing the till', 'Online shop with WhatsApp ordering'],
      price: 'From 4,900 FCFA / month',
    },
  },
  {
    name: 'KABRAK Optic Pro',
    logo: '/logo-kabrakopticpro.png',
    href: 'https://app.kabrakopticpro.com',
    screenshot: '/screenshots/kabrak-optic-pro.png',
    cta: 'visit',
    fr: {
      who: 'Opticiens et magasins d’optique',
      points: ['Patients et ordonnances', 'Ventes et stock de montures', 'Assurances et mutuelles'],
      desc: 'Le logiciel des opticiens : fiches patients, ordonnances, ventes, stock de montures et de verres, assurances. Les factures et bordereaux sortent en PDF. Un opticien avec plusieurs magasins voit tout au même endroit.',
      features: ['Fiches patients et historique', 'Ordonnances en PDF', 'Stock de montures et verres', 'Assurances et mutuelles', 'Plusieurs magasins', 'Rapports de ventes'],
    },
    en: {
      who: 'Opticians and optical stores',
      points: ['Patients and prescriptions', 'Sales and frame stock', 'Insurance'],
      desc: 'Software for opticians: patient records, prescriptions, sales, frame and lens stock, insurance. Invoices and claim forms come out as PDF. An optician with several stores sees everything in one place.',
      features: ['Patient records and history', 'PDF prescriptions', 'Frame and lens stock', 'Insurance claims', 'Several stores', 'Sales reports'],
    },
  },
  {
    name: 'KABRAK Beauty & Spa',
    logo: '/kabrak-beauty-logo.jpg',
    href: 'https://beautyspa.kabrakeng.com',
    screenshot: '/screenshots/kabrak-beauty.png',
    cta: 'visit',
    fr: {
      who: 'Salons de beauté, barbershops, instituts',
      points: ['Rendez-vous', 'Caisse et factures', 'Équipe et commissions'],
      desc: 'Pour les salons de beauté, barbershops et instituts : agenda des rendez-vous, fiches clientes, caisse, factures et commissions de l’équipe. L’app s’installe sur le téléphone comme une application.',
      features: ['Agenda des rendez-vous', 'Fiches clientes', 'Caisse et factures', 'Équipe et commissions', 'Abonnements clientes', 'Thème beauté ou barbershop'],
    },
    en: {
      who: 'Beauty salons, barbershops, spas',
      points: ['Appointments', 'Register and invoices', 'Staff and commissions'],
      desc: 'For beauty salons, barbershops and spas: appointment calendar, client records, register, invoices and staff commissions. It installs on a phone like an app.',
      features: ['Appointment calendar', 'Client records', 'Register and invoices', 'Staff and commissions', 'Client memberships', 'Beauty or barbershop theme'],
    },
  },
  {
    name: 'KABRAK Exchange',
    logo: '/kabrak-exchange-logo.jpeg',
    href: 'https://exchange.kabrakeng.com',
    screenshot: '/screenshots/kabrak-exchange.png',
    cta: 'visit',
    fr: {
      who: 'Bureaux de change',
      points: ['Opérations de change', 'Caisse et solde du jour', 'Rapports PDF'],
      desc: 'Pour les bureaux de change : chaque achat et vente de devises est enregistré, la caisse de chaque devise est à jour et le solde du jour est calculé. Les rapports sortent en PDF.',
      features: ['Achat et vente de devises', 'Caisse par devise', 'Solde du jour', 'Historique des opérations', 'Rapports PDF', 'Interface simple et rapide'],
    },
    en: {
      who: 'Currency exchange offices',
      points: ['Exchange operations', 'Daily cash balance', 'PDF reports'],
      desc: 'For currency exchange offices: every purchase and sale of currency is recorded, each currency’s till stays up to date and the daily balance is computed. Reports come out as PDF.',
      features: ['Buying and selling currency', 'Till per currency', 'Daily balance', 'Operation history', 'PDF reports', 'Simple, fast interface'],
    },
  },
  {
    name: 'KABRAK Retail ERP',
    logo: '/kabrak-retail-logo.jpeg',
    href: 'https://kabrak-supermarket-erp-frontend.vercel.app',
    screenshot: '/screenshots/kabrak-retail-erp.png',
    cta: 'ask',
    fr: {
      who: 'Supermarchés et grands commerces',
      points: ['Caisse rapide, plusieurs postes', 'Achats et fournisseurs', 'Comptabilité'],
      desc: 'Pour les supermarchés : caisses rapides sur plusieurs postes, stock avec alertes, achats et fournisseurs, comptabilité et rapports. Il s’installe sur place et fonctionne sans internet, puis se synchronise.',
      features: ['Caisse rapide, plusieurs postes', 'Stock et alertes', 'Factures avec QR code', 'Achats et bons de commande', 'Comptabilité et compte de résultat', 'Hors ligne puis synchronisation'],
    },
    en: {
      who: 'Supermarkets and large stores',
      points: ['Fast multi-till register', 'Purchasing and suppliers', 'Accounting'],
      desc: 'For supermarkets: fast tills on several stations, stock with alerts, purchasing and suppliers, accounting and reports. It is installed on site, works without internet, then syncs.',
      features: ['Fast multi-till register', 'Stock and alerts', 'Invoices with QR code', 'Purchase orders', 'Accounting and P&L', 'Offline, then sync'],
    },
  },
];

export const getApps = (lang) => apps.map((a) => ({ ...a, ...(a[lang] || a.fr) }));
