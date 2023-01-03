import { useGlobalState } from "../hooks/useGlobalState";
import { NoPropComponent } from "../types/component.types";
import Component5 from "./Component5";

const Component4: NoPropComponent = () => {
  const [globalState] = useGlobalState();
  return (
    <>
      <h4>Component 4 {globalState.name}</h4>
      <Component5 />
    </>
  );
};

export default Component4;
