import { useGlobalState } from "../hooks/useGlobalState";
import { NoPropComponent } from "../types/component.types";
import Component4 from "./Component4";

const Component3: NoPropComponent = () => {
  const [globalState] = useGlobalState();
  return (
    <>
      <h3>Component 3 {globalState.name}</h3>
      <Component4 />
    </>
  );
};

export default Component3;
