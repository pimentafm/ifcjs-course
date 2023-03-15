import { FC, useState } from "react";

export const MailRegister: FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <form className="contentFlexVertical">
      <label className="coolLabel">
        Full Name
        <input
          className="coolField"
          type="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        ></input>
      </label>

      <label className="coolLabel">
        Email address
        <input
          className="coolField"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></input>
      </label>

      <label className="coolLabel">
        Password
        <input
          className="coolField"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
      </label>

      <button type="submit" className="coolButton">
        Register
      </button>
    </form>
  );
};
