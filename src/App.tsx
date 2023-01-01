import useTranslation from "./hooks/useTranslation";
import { availableLocales, defaultLocale } from "./locale";

const App = () => {
  const { t, locale, setLocale } = useTranslation();

  return (
    <>
      <h1>{t("messages.hi")}</h1>
      <h2
        style={{
          margin: "10px",
        }}
      >
        Locales :
      </h2>
      <button
        style={{
          margin: "10px",
          padding: "5px 10px",
        }}
        disabled={locale === defaultLocale}
        // Unnecessary payload(need to fix it)
        onClick={() => setLocale({ type: "RESET", payload: defaultLocale })}
      >
        Reset
      </button>
      <ul>
        {availableLocales.map((availableLocale) => (
          <li
            style={{
              cursor: "pointer",
              border: "2px solid black",
              padding: "10px",
              margin: "10px",
              color: locale === availableLocale.value ? "white" : "black",
              backgroundColor:
                locale === availableLocale.value ? "green" : "transparent",
            }}
            onClick={() =>
              setLocale({ type: "CHANGE", payload: availableLocale.value })
            }
          >
            {availableLocale.name}
            {locale === availableLocale.value && " (Selected)"}
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
