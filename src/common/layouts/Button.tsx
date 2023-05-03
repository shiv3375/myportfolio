import Link from "next/link";
import React, { ReactNode } from "react";
type Props = {
  children?: ReactNode;
  title?: string;
  btnFullWidth?: boolean;
  path?: string;
};

const Button = ({ btnFullWidth, children, title, path }: Props) => {
  const btnChildren = children || title;
  let className =
    "flex justify-center items-center text-green bg-transparent border border-green rounded my-3 py-3 px-6 hover:bg-green-tint hover:outline-none font-mango";

  if (btnFullWidth) {
    className += " w-full block";
  }
  className = className.trim();
  return (
    <>
      {path && (
        <Link href={path}>
          <a className={className}>{btnChildren}</a>
        </Link>
      )}
      {!path && (
        <button type="button" className={className}>
          {btnChildren}
        </button>
      )}
    </>
  );
};

export default Button;
