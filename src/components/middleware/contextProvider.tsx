import {
  FC,
  PropsWithChildren,
  useReducer,
  createContext,
  Dispatch,
  useContext,
} from "react";
import { Action } from "./actions";
import { Authenticator } from "./authenticator";
import { executeCore } from "./coreHandler";
import { initialState, State } from "./state";
import { reducer } from "./stateHandler";

const appContext = createContext<[State, Dispatch<Action>]>([
  initialState,
  () => {},
]);

export const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useReducer(reducer, initialState);

  const dispatch = (value: Action) => {
    setState(value);
    executeCore(value);
  };

  return (
    <appContext.Provider value={[state, dispatch]}>
      <Authenticator />
      {children}
    </appContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(appContext);
};
