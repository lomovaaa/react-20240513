import { FC } from "react";
import { Header } from "../header/component";
import { Footer } from "../footer/component";
import { ThemeContextProvider } from "../../contexts/theme/provider";
import { UserContextProvider } from "../../contexts/user/provider";
import { Outlet } from "react-router-dom";

export const Layout: FC = () => (
  <ThemeContextProvider>
    <UserContextProvider>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
      <div id="modal" />
    </UserContextProvider>
  </ThemeContextProvider>
);
