import { FC, PropsWithChildren } from "react";
import { Themes } from "../../contexts/theme/context";
import { useTheme } from "../../hooks/use-theme";

type ButtonProps = PropsWithChildren<React.ComponentPropsWithoutRef<"button">>;

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  const { theme } = useTheme();

  const isLightTheme = theme === Themes.Light;

  return (
    <button
      style={{
        background: isLightTheme ? "white" : "black",
        color: isLightTheme ? "black" : "white",
      }}
      {...props}
    >
      {children}
    </button>
  );
};
