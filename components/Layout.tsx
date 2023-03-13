import React from "react";
import Nav from "./Nav";

const Layout: React.FC<any> = ({ children }) => {
  return (
    <>
      <Nav />
      <main className="main">{children}</main>
    </>
  );
};

export default Layout;
