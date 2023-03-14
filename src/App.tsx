import { FC } from "react";
import "./App.css";

import { getApp } from "firebase/app";

export const App: FC = () => {
  return <div>{JSON.stringify(getApp())}</div>;
};
