import { createContext } from "react";
import { Nullable } from "../../types";

type UserContextProps = {
  user: Nullable<string>;
  setUser?: (user: Nullable<string>) => void;
};

export const UserContext = createContext<UserContextProps>({
  user: null,
});
