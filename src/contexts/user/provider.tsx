import { FC, PropsWithChildren, useMemo, useState } from "react";
import { UserContext } from "./context";
import { Nullable } from "../../types";

export const UserContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<Nullable<string>>(null);

  const userContextValue = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user]
  );

  return <UserContext.Provider value={userContextValue}>{children}</UserContext.Provider>;
};
