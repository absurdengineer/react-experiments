import useDarkMode from "./hooks/useDarkMode";

const App = () => {
  const [darkMode, setDarkMode] = useDarkMode(true);

  return (
    <>
      <div className={"viewbox " + (darkMode ? "darkviewbox" : "lightviewbox")}>
        <h1>Hello World!</h1>
        <button
          className={"button " + (darkMode ? "darkbutton" : "lightbutton")}
          onClick={() => setDarkMode((state) => !state)}
        >
          Toggle theme
        </button>
      </div>
    </>
  );
};

export default App;
