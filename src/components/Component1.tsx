import { useGlobalState } from "../hooks/useGlobalState";
import { NoPropComponent } from "../types/component.types";
import Component2 from "./Component2";

const Component1: NoPropComponent = () => {
  const [globalState, dispatch] = useGlobalState();

  return (
    <>
      <button
        onClick={() => dispatch({ type: "SET_NAME", payload: "Dilshad" })}
      >
        Reset
      </button>
      <h1>Component 1 {globalState.name}</h1>
      <Component2 />
    </>
  );
};

export default Component1;
