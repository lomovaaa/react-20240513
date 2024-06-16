import { FC, PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";

type TabProps = PropsWithChildren<{
  to: string;
}>;

export const Tab: FC<TabProps> = ({ children, to }) => {
  return (
    <NavLink
      style={({ isActive }) => ({
        color: isActive ? "green" : "black",
      })}
      to={to}
    >
      {children}
    </NavLink>
  );
};
