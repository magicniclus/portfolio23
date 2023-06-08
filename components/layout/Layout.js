import React from "react";
import Head from "next/head";

const Layout = (props) => {
  const robots = props.robots || "follow";
  const canonical = props.canonical || "";
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.title} />
        <meta name="robots" content={"index, " + robots} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="fr" />
        {/* <link
          rel="canonical"
          href={
            "https://www.adsventure-agency.com/agences/" +
            props.title.toLowerCase()
          }
        /> */}
      </Head>
      <div className="min-h-screen bg-dark w-screen flex flex-col justify-between item-center mx-auto max-w-[2000px]">
        {props.children}
      </div>
    </>
  );
};

export default Layout;
