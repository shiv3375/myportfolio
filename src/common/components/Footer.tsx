import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center snap-center mb-20 md:mb-0">
      <p className="text-sm text-slate hover:text-green cursor-pointer m-4 font-mango">
        <Link href="/">Designed & Built by shiv</Link>
      </p>
    </footer>
  );
};

export default Footer;
