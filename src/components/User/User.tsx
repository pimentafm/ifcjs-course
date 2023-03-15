import { FC } from "react";

import { useUserContext } from "../../UserProvider";
import { Logout } from "./Logout";

export const User: FC = () => {
  const [user] = useUserContext();
  return (
    <div className="contentFlexVertical">
      {user?.displayName} <Logout />
    </div>
  );
};
