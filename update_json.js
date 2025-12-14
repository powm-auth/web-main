import fs from 'fs';
import path from 'path';

const updateFile = (filePath, seoData) => {
    const content = fs.readFileSync(filePath, 'utf8');
    const json = JSON.parse(content);
    json.seo = seoData;
    fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
    console.log(`Updated ${filePath}`);
};

const seoEn = {
    "defaultDescription": "Prove the age. Not the identity. Fast private proofs without revealing everything.",
    "defaultKeywords": "identity, privacy, zero knowledge, proof of age, wallet, powm",
    "home": {
        "title": "Home",
        "description": "Powm is the first double-blind identity wallet for the digital age."
    },
    "privacy": {
        "title": "Privacy Policy",
        "description": "Read our Privacy Policy to understand how we handle your data."
    },
    "terms": {
        "title": "Terms of Service",
        "description": "Read our Terms of Service to understand the rules of using our service."
    },
    "whitepaper": {
        "title": "Whitepaper",
        "description": "Read the Powm Whitepaper to understand the technology behind our identity wallet."
    },
    "notfound": {
        "title": "Page Not Found"
    },
    "wip": {
        "title": "Work in Progress"
    }
};

const seoFr = {
    "defaultDescription": "Prouvez l'âge. Pas l'identité. Des preuves privées et rapides sans tout révéler.",
    "defaultKeywords": "identité, confidentialité, zero knowledge, preuve d'âge, portefeuille, powm",
    "home": {
        "title": "Accueil",
        "description": "Powm est le premier portefeuille d'identité en double aveugle pour l'ère numérique."
    },
    "privacy": {
        "title": "Politique de Confidentialité",
        "description": "Lisez notre politique de confidentialité pour comprendre comment nous traitons vos données."
    },
    "terms": {
        "title": "Conditions d'Utilisation",
        "description": "Lisez nos conditions d'utilisation pour comprendre les règles d'utilisation de notre service."
    },
    "whitepaper": {
        "title": "Livre Blanc",
        "description": "Lisez le livre blanc de Powm pour comprendre la technologie derrière notre portefeuille d'identité."
    },
    "notfound": {
        "title": "Page Non Trouvée"
    },
    "wip": {
        "title": "En Cours"
    }
};

updateFile('src/locales/en/translation.json', seoEn);
updateFile('src/locales/fr/translation.json', seoFr);
