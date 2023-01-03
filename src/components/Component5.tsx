import { useGlobalState } from "../hooks/useGlobalState";
import { NoPropComponent } from "../types/component.types";
import Component6 from "./Component6";

const Component5: NoPropComponent = () => {
  const [globalState] = useGlobalState();
  return (
    <>
      <h5>Component 5 {globalState.name}</h5>
      <Component6 />
    </>
  );
};

export default Component5;
