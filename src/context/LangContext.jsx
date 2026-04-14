import { createContext, useContext, useState } from 'react';

const LangContext = createContext();

export const translations = {
  fr: {
    nav: {
      home: 'Accueil', about: 'À Propos', services: 'Services',
      projects: 'Projets', contact: 'Contact', cta: 'Nous contacter',
    },
    footer: {
      tagline: 'Des solutions digitales qui fonctionnent pour l\'Afrique. Conçu et développé au Cameroun.',
      nav: 'Navigation', contact: 'Contact', startProject: 'Démarrer un projet',
      builtIn: 'Conçu au', rights: 'Tous droits réservés.',
    },
    whatsapp: 'Bonjour KABRAK Eng, je souhaite discuter d\'un projet.',
  },
  en: {
    nav: {
      home: 'Home', about: 'About', services: 'Services',
      projects: 'Projects', contact: 'Contact', cta: 'Contact us',
    },
    footer: {
      tagline: 'Digital solutions that work for Africa. Designed and built in Cameroon.',
      nav: 'Navigation', contact: 'Contact', startProject: 'Start a project',
      builtIn: 'Built in', rights: 'All rights reserved.',
    },
    whatsapp: 'Hello KABRAK Eng, I would like to discuss a project.',
  },
};

export function LangProvider({ children }) {
  const [lang, setLang] = useState('fr');
  const t = translations[lang];
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
