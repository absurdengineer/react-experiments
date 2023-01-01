import en from "./en.json";
import es from "./es.json";
import de from "./de.json";

export type Locale = "en" | "es" | "de";
export type Locales = { value: Locale; name: string }[];
type Translate = (path: string, locale?: string) => string;
type Messages = {
  [key: string]: Object;
};

export const defaultLocale: Locale = "en";
export const fallbackLocale: Locale = "en";

const locales: Messages = {
  en: en,
  es: es,
  de: de,
};

export const availableLocales: Locales = [
  {
    value: "en",
    name: "English",
  },
  {
    value: "es",
    name: "Español",
  },
  {
    value: "de",
    name: "German",
  },
];

export const translate: Translate = (path, locale = defaultLocale) => {
  const message = path
    .split(".")
    .reduce((o: any, p) => (o[p] ? o[p] : path), locales[locale]);
  return message;
};

const locale = {
  availableLocales,
  defaultLocale,
  fallbackLocale,
  translate,
};

export default locale;
