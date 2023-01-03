import { useGlobalState } from "../hooks/useGlobalState";
import { NoPropComponent } from "../types/component.types";

const Component6: NoPropComponent = () => {
  const [globalState, dispatch] = useGlobalState();
  return (
    <>
      <h6>Component 6 {globalState.name}</h6>
      <button onClick={() => dispatch({ type: "SET_NAME", payload: "Alam" })}>
        Change to "Alam"
      </button>
    </>
  );
};

export default Component6;
