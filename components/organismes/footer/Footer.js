import Link from "next/link";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useSelector, useDispatch } from "react-redux";

const Footer = () => {
  const gitRef = useRef(null);
  const linkdinRef = useRef(null);
  const twitterRef = useRef(null);
  const mailRef = useRef(null);
  const titleRef = useRef(null);

  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  const makeClass = `h-6 ${state.firstView ? "translate-y-6" : ""}`;

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
    <footer className="w-full py-8 px-16 flex items-end justify-between">
      <div className="flex">
        <Link className="mr-5 overflow-hidden" href="/">
          <img
            ref={gitRef}
            className={makeClass}
            src="./img/reseaux/github.png"
          />
        </Link>
        <Link className="mr-5 overflow-hidden" href="/">
          <img
            ref={linkdinRef}
            className={makeClass}
            src="./img/reseaux/linkdin.png"
          />
        </Link>
        <Link className="mr-5 overflow-hidden" href="/">
          <img
            ref={twitterRef}
            className={makeClass}
            src="./img/reseaux/twitter.png"
          />
        </Link>
        <Link className=" overflow-hidden" href="/">
          <img
            ref={mailRef}
            className={makeClass}
            src="./img/reseaux/mail.png"
          />
        </Link>
      </div>
      <h2 ref={titleRef} className="font-light text-xs text-clear">
        Front-end developer
      </h2>
    </footer>
  );
};

export default Footer;
