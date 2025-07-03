import React from "react";

const Footer = () => {
  return (
    <div className="py-[20px] flex flex-col gap-6">
      <ul className="grid grid-cols-2 md:flex md:flex-row gap-2 md:gap-4 font-Sora text-white">
        <li>
          <a href="/#home">Home</a>
        </li>
        <li>
          <a href="/#about">About</a>
        </li>
        <li>
          <a href="/#skills">Skills</a>
        </li>
        <li>
          <a href="/#projects">Projects</a>
        </li>
        <li>
          <a href="/#contact">Contact</a>
        </li>
      </ul>
      <p className="font-Sora text-white tracking-[1]">
        &copy; 2025 Build with 💕 by Nisa
      </p>
    </div>
  );
};

export default Footer;
