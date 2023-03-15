import { FC } from "react";
import "./App.css";

import { Main } from "./components/Main";
import { UserProvider } from "./UserProvider";

export const App: FC = () => {
  return (
    <UserProvider>
      <Main />
    </UserProvider>
  );
};
