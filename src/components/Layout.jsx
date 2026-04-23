import React from "react";
import Nav from "./Nav";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  return (
    <div>
      <Nav />

      <div key={location.pathname}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
