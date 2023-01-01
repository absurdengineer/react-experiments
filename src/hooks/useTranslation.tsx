import { useReducer } from "react";
import { defaultLocale, Locale, translate } from "../locale";

type Type = "CHANGE" | "RESET";
type Action = {
  type: Type;
  payload: Locale;
};
type T = (path: string) => string;

const useTranslation = () => {
  const localeReducer = (state: Locale, action: Action) => {
    switch (action.type) {
      case "CHANGE":
        return action.payload;
      case "RESET":
        return defaultLocale;
      default:
        return state;
    }
  };
  const [locale, dispatch] = useReducer(localeReducer, defaultLocale);

  const t: T = (path) => {
    return translate(path, locale);
  };
  return { t, locale, setLocale: dispatch };
};

export default useTranslation;
