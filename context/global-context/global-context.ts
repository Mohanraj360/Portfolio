import { Dispatch, SetStateAction, createContext } from "react";

interface GlobalContextInterface {
  stateValue: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
}

const contextInit: GlobalContextInterface = {
  stateValue: false,
  setState: () => void 0
};

const GlobalContext = createContext<GlobalContextInterface>(contextInit);

export default GlobalContext;
