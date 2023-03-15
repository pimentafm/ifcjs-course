import { FC, useEffect, useState } from "react";
import { Auth } from "./Auth/Auth";
import { User } from "./User/User";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useUserContext } from "../UserProvider";

export const Main: FC = () => {
  const auth = getAuth();
  const [user, setUser] = useUserContext();

  useEffect(() => {
    onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({ ...firebaseUser });
      } else {
        setUser(null);
      }
    });
  }, []);
  return (
    <div className="centerContainer">{Boolean(user) ? <User /> : <Auth />}</div>
  );
};
