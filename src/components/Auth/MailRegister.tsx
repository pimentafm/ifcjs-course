import { FC, useState, FormEvent } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useUserContext } from "../../UserProvider";
import { async } from "@firebase/util";

export const MailRegister: FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const auth = getAuth();
  const [user, setUser] = useUserContext();

  const onRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const newUser = response.user;
    await updateProfile(newUser, { displayName: name });

    setUser(user);
  };

  return (
    <form className="contentFlexVertical" onSubmit={onRegister}>
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
