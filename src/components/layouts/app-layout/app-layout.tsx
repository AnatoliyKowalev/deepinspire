import React, { FC, PropsWithChildren } from "react";

import Footer from "./footer";
import Header from "./header";

const AppLayout: FC<PropsWithChildren> = ({ children }) => (
  <main className="grid relative">
    <Header />
    {children}
    <Footer />
  </main>
);

export default AppLayout;
