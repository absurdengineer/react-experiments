import Component1 from "./components/Component1";
import { GlobalProvider } from "./hooks/useGlobalState";

const App = () => {
  return (
    <GlobalProvider>
      <Component1 />
    </GlobalProvider>
  );
};

export default App;
