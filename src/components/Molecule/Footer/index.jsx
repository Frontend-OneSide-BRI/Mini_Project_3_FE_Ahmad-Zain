import React from "react";

const Footer = () => {
  return (
    <div className="text-sm bg-black text-neutral-300 px-40 py-12">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <p>FAQ</p>
          <p>Terms of Use</p>
        </div>
        <div className="flex flex-col">
          <p>Contact Us</p>
          <p>Help Center</p>
        </div>
        <div className="flex flex-col">
          <p>Cookie Preferences</p>
          <p>Corporate Information</p>
        </div>
      </div>
      <p className="mt-8">
        Questions? Contact me on{" "}
        <a
          href="https://www.linkedin.com/in/ahmad-zain-af/"
          className="text-blue-400 font-medium"
        >
          Linkedin
        </a>
      </p>
      <p className="mt-4">Muvy Indonesia</p>
    </div>
  );
};

export default Footer;
