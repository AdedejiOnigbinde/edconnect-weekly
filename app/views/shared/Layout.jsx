import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <>
      <Header user={props.user} />
      <main className="mx-auto py-3 w-75">{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
