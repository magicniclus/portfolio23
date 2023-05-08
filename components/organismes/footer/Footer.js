import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-8 px-16 flex items-end justify-between">
      <div className="flex">
        <Link className="mr-5" href="/">
          <img className="h-6" src="./img/reseaux/github.png" />
        </Link>
        <Link className="mr-5" href="/">
          <img className="h-6" src="./img/reseaux/linkdin.png" />
        </Link>
        <Link className="mr-5" href="/">
          <img className="h-6" src="./img/reseaux/twitter.png" />
        </Link>
        <Link className="" href="/">
          <img className="h-6" src="./img/reseaux/mail.png" />
        </Link>
      </div>
      <h2 className="font-light text-xs text-clear">Front-end developer</h2>
    </footer>
  );
};

export default Footer;
