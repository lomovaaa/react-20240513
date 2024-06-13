import { useContext } from "react";
import { UserContext } from "../contexts/user/context";

export const useUser = () => {
  const { user, setUser } = useContext(UserContext);

  const login = (userName: string) => setUser?.(userName);

  const logout = () => setUser?.(null);

  return { user, login, logout };
};
