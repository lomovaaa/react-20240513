import { FC, PropsWithChildren } from "react";
import { Header } from "../header/component";
import { Footer } from "../footer/component";

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);
