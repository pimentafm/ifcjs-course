import { FC, FormEvent, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const MailLogin: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const auth = getAuth();

  const onLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    await signInWithEmailAndPassword(auth, email, password);
  };

  return (
    <form className="contentFlexVertical" onSubmit={onLogin}>
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
        Login
      </button>
    </form>
  );
};
