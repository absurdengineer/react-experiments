import { useGlobalState } from "../hooks/useGlobalState";
import { NoPropComponent } from "../types/component.types";
import Component3 from "./Component3";

const Component2: NoPropComponent = () => {
  const [globalState] = useGlobalState();

  return (
    <>
      <h2>Component 2 {globalState.name}</h2>
      <Component3 />
    </>
  );
};

export default Component2;
