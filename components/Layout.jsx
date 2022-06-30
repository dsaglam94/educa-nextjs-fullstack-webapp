import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <main>
      <Nav />
      <section>{children}</section>
      <Footer />
    </main>
  );
};

export default Layout;
