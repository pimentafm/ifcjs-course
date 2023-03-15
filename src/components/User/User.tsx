import { FC } from "react";

import { useUserContext } from "../../UserProvider";

export const User: FC = () => {
  const [user] = useUserContext();
  return <>{user?.displayName}</>;
};
