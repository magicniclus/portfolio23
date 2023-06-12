import React from "react";
import Head from "next/head";
import Nav from "../organismes/navigations/Nav";
import Footer from "../organismes/footer/Footer";

const ProjectLayout = (props) => {
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
      </Head>
      <div
        className="min-h-screen w-screen flex flex-col justify-between item-center mx-auto max-w-[2000px]"
        style={{ backgroundColor: props.bg }}
      >
        <header>
          <Nav
            bg={props.bg}
            text={props.text || "clear"}
            post={props.all}
            projectPage={true}
            button="CLOSE"
          />
        </header>
        {props.children}
        <Footer
          reseauView={false}
          bg={props.bg}
          text={props.text || "#EDEAE6"}
        />
      </div>
    </>
  );
};

export default ProjectLayout;
