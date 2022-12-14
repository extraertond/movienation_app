import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EN from "../../assets/locales/en.json";
import ES from "../../assets/locales/es.json";

const resources = {
  en: {
    translation: EN,
  },
  es: {
    translation: ES,
  },
};

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources,
});

export default i18n;
