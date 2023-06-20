import Link from "next/link";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useSelector, useDispatch } from "react-redux";

const Footer = (props) => {
  const color = props.text;
  const gitRef = useRef(null);
  const linkdinRef = useRef(null);
  const twitterRef = useRef(null);
  const mailRef = useRef(null);
  const titleRef = useRef(null);

  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  const makeClass = `md:h-6 h-3 ${state.firstView ? "translate-y-6" : ""}`;

  useEffect(() => {
    if (state.firstView) {
      const elements = [
        gitRef.current,
        linkdinRef.current,
        twitterRef.current,
        mailRef.current,
        titleRef.current,
      ];
      gsap.fromTo(
        elements,
        { y: 30, opacity: 0 },
        {
          duration: 0.5,
          y: 0,
          opacity: 1,
          ease: "power5.out",
          onComplete: () => {
            dispatch({ type: "UPDATE_FIRST_VIEW", payload: false });
          },
        }
      );
    } else null;
  }, []);

  return (
    <footer
      className={`w-full py-8  px-3 md:px-16 flex items-end justify-${
        props.reseauView ? "between" : "end"
      }`}
    >
      <div className={`${props.reseauView ? "flex" : "hidden"}`}>
        <a
          className="mr-3 md:mr-5 overflow-hidden"
          href="https://github.com/magicniclus"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            ref={gitRef}
            className={makeClass}
            src="./img/reseaux/github.png"
            style={{ color: color || "#D9D9D9" }}
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="mr-3 md:mr-5 overflow-hidden"
          href="https://www.linkedin.com/in/nicolas-castera-%F0%9F%AB%B5-adsventure-%F0%9F%A6%BE-771a45a6/"
        >
          <img
            ref={linkdinRef}
            className={makeClass}
            src="./img/reseaux/linkdin.png"
            style={{ color: color || "#D9D9D9" }}
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="mr-3 md:mr-5 overflow-hidden"
          href="https://twitter.com/CasteranicolasC"
        >
          <img
            ref={twitterRef}
            className={makeClass}
            src="./img/reseaux/twitter.png"
            style={{ color: color || "#D9D9D9" }}
          />
        </a>
        <a
          className="overflow-hidden"
          href="mailto:casteranicolas.contact@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            ref={mailRef}
            className={makeClass}
            src="./img/reseaux/mail.png"
            style={{ color: color || "#D9D9D9" }}
          />
        </a>
      </div>
      <h2
        ref={titleRef}
        className="font-light text-xs md:text-left text-right "
        style={{ color: color || "#D9D9D9" }}
      >
        Front-end developer
      </h2>
    </footer>
  );
};

export default Footer;
