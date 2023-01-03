import { createContext, useContext, useReducer, Dispatch } from "react";

interface ChildrenProps {
  children: React.ReactNode;
}

interface GlobalState {
  loading: boolean;
  name: string;
}
type Type = "SET_LOADING" | "SET_NAME";
interface Action {
  type: Type;
  payload: any;
}
interface Reducer {
  (state: GlobalState, action: Action): GlobalState;
}

const initialGlobalState = {
  name: "Dilshad",
  loading: false,
};

const GlobalContext = createContext<{
  globalState: GlobalState;
  dispatch: Dispatch<React.SetStateAction<any>>;
}>({
  globalState: initialGlobalState,
  dispatch: () => null,
});

const globalReducer: Reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_NAME":
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

const initialValue: GlobalState = initialGlobalState;

export const GlobalProvider = ({ children }: ChildrenProps) => {
  const [globalState, dispatch] = useReducer(globalReducer, initialValue);
  return (
    <GlobalContext.Provider value={{ globalState, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => {
  const { globalState, dispatch } = useContext(GlobalContext);
  return [globalState, dispatch] as const;
};
