import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="z-0 w-full h-screen flex flex-col overflow-auto">
      {children}
    </div>
  );
};

export default Layout;
