import { userAuth } from "./userAuth";
import { Action } from "./actions";
export const executeCore = (action: Action) => {
  if (action.type === "UPDATE_USER") {
    userAuth.login(action);
  }
};
