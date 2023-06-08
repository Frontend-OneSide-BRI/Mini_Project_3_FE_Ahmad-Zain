import React from "react";

const Button = ({ text, className }) => {
  return (
    <button
      className={`bg-red-flix text-white font-semibold rounded-md duration-200 hover:bg-red-dark active:bg-red-darker ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
