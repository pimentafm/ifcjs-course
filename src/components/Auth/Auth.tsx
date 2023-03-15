import { FC } from "react";
import { GoogleAuth } from "./GoogleAuth";
import { MailLogin } from "./MailLogin";
import { MailRegister } from "./MailRegister";

export const Auth: FC = () => {
  return (
    <div className="contentGrid">
      <div>
        <GoogleAuth />
      </div>
      <div>
        <MailRegister />
      </div>
      <div>
        <MailLogin />
      </div>
    </div>
  );
};
