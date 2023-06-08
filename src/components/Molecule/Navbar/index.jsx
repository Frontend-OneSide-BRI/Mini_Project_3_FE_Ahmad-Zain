import React from "react";

import Logo from "src/components/Atom/Logo";
import Button from "src/components/Atom/Button";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-36 py-2">
      <Logo />
      <Button text="Sign In" className="text-sm w-20 h-8" />
    </div>
  );
};

export default Navbar;
