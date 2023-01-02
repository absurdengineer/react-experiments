import { ChangeEvent } from "react";
import useCookie from "./hooks/useCookie";

interface HandleChange {
  (event: ChangeEvent<HTMLInputElement>): void;
}

const App = () => {
  const [name, setName, deleteName] = useCookie("name", "Dilshad");

  const handleChange: HandleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <>
        <h1>Hello {name}</h1>
        <input type="text" value={name} onChange={handleChange} />
        <button onClick={deleteName}>Delete Name</button>
      </>
    </>
  );
};

export default App;
