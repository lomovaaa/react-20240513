import { FC, PropsWithChildren } from "react";
import { Header } from "../header/component";
import { Footer } from "../footer/component";
import { ThemeContextProvider } from "../../contexts/theme/provider";
import { UserContextProvider } from "../../contexts/user/provider";

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <ThemeContextProvider>
    <UserContextProvider>
      <div>
        <Header />
        {children}
        <Footer />
      </div>
      <div id="modal" />
    </UserContextProvider>
  </ThemeContextProvider>
);
