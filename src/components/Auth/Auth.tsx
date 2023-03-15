import { FC } from "react";
import { GoogleAuth } from "./GoogleAuth";
import { MailRegister } from "./MailRegister";

export const Auth: FC = () => {
  return (
    <div className="contentGrid">
      <div>
        <GoogleAuth />
      </div>
      <div>
        <MailRegister />{" "}
      </div>
    </div>
  );
};
