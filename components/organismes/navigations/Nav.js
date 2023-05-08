import Link from "next/link";
import React from "react";

const Nav = (props) => {
  const button = props.button || "ABOUT";
  return (
    <div className="w-full py-8 px-16 flex items-end justify-between">
      <Link href="/" className="font-bold text-5xl text-clear">
        NICOLAS
      </Link>
      <Link
        href={button === "CLOSE" ? "/" : "/about"}
        className="text-xs text-clear underline"
      >
        {button}
      </Link>
    </div>
  );
};

export default Nav;
