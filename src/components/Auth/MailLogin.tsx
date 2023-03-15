import { FC, useState } from "react";

export const MailLogin: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <form className="contentFlexVertical">
      <label className="coolLabel">
        Email address
        <input
          className="coolField"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </label>

      <label className="coolLabel">
        Password
        <input
          className="coolField"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </label>

      <button type="submit" className="coolButton">
        Register
      </button>
    </form>
  );
};
