import { FC, PropsWithChildren } from "react";
import { Header } from "../header/component";
import { Footer } from "../footer/component";
import { ThemeContextProvider } from "../../contexts/theme/provider";

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <ThemeContextProvider>
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  </ThemeContextProvider>
);
