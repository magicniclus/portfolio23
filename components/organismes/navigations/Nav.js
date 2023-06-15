import Link from "next/link";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const Nav = (props) => {
  const dispatch = useDispatch();
  const titleRef = useRef();

  const btnRef = useRef();

  const refNameOne = useRef();
  const refNameTwo = useRef();
  const refNameThree = useRef();
  const refNameFour = useRef();
  const refNameFive = useRef();
  const refNameSix = useRef();
  const refNameSeven = useRef();

  const refAboutOne = useRef();
  const refAboutTwo = useRef();
  const refAboutThree = useRef();
  const refAboutFour = useRef();
  const refAboutFive = useRef();

  const button = props.button || "ABOUT";

  const router = useRouter();
  const name = !props.name
    ? button != "ABOUT"
      ? "ABOUT"
      : "NICOLAS"
    : props.name;

  useEffect(() => {
    gsap.fromTo(
      btnRef.current,
      { y: 40, opacity: 0 },
      { duration: 0.5, y: 0, opacity: 1, ease: "power5.out" }
    );
    if (name === "NICOLAS") {
      const targets = [
        refNameOne.current,
        refNameTwo.current,
        refNameThree.current,
        refNameFour.current,
        refNameFive.current,
        refNameSix.current,
        refNameSeven.current,
      ];
      gsap.fromTo(
        targets,
        { x: -50 },
        {
          duration: 0.5,
          x: 0,
          ease: "power5.out",
        }
      );
    } else {
      const targets = [
        refAboutOne.current,
        refAboutTwo.current,
        refAboutThree.current,
        refAboutFour.current,
        refAboutFive.current,
      ];
      gsap.fromTo(
        targets,
        { x: -50 },
        {
          duration: 0.5,
          x: 0,
          ease: "power5.out",
        }
      );
    }
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_PAGE", payload: true });
    setTimeout(() => {
      dispatch({ type: "UPDATE_PAGE", payload: false });
    }, 1200);
    if (name === "NICOLAS") {
      const targets = [
        refNameOne.current,
        refNameTwo.current,
        refNameThree.current,
        refNameFour.current,
        refNameFive.current,
        refNameSix.current,
        refNameSeven.current,
      ];
      gsap.fromTo(
        targets,
        { x: 0 },
        {
          duration: 0.5,
          x: 50,
          ease: "power5.out",
        }
      );
    } else {
      const targets = [
        refAboutOne.current,
        refAboutTwo.current,
        refAboutThree.current,
        refAboutFour.current,
        refAboutFive.current,
      ];
      gsap.fromTo(
        targets,
        { x: 0 },
        {
          duration: 0.5,
          x: 50,
          ease: "power5.out",
        }
      );
    }
    gsap.fromTo(
      btnRef.current,
      {
        y: 0,
      },
      {
        duration: 0.5,
        y: -40,
        opacity: 0,
        ease: "power5.out",
        onComplete: () => {
          router.push(button === "CLOSE" ? "/" : "/about");
        },
      }
    );
  };

  const handleName = (color) => {
    return (
      <>
        {name === "NICOLAS" ? (
          <Link
            href="/"
            className="font-bold text-5xl flex"
            style={{ color: color || "#D9D9D9" }}
          >
            <div className="overflow-hidden">
              <span className=" inline-block translate-x-10" ref={refNameOne}>
                N
              </span>
            </div>

            <div className="overflow-hidden">
              <span className=" inline-block translate-x-10" ref={refNameTwo}>
                I
              </span>
            </div>

            <div className="overflow-hidden">
              <span className=" inline-block translate-x-10" ref={refNameThree}>
                C
              </span>
            </div>

            <div className="overflow-hidden">
              <span className=" inline-block translate-x-10" ref={refNameFour}>
                O
              </span>
            </div>
            <div className="overflow-hidden">
              <span className=" inline-block translate-x-10" ref={refNameFive}>
                L
              </span>
            </div>

            <div className="overflow-hidden">
              <span className=" inline-block translate-x-10" ref={refNameSix}>
                A
              </span>
            </div>

            <div className="overflow-hidden">
              <span className=" inline-block translate-x-10" ref={refNameSeven}>
                S
              </span>
            </div>
          </Link>
        ) : (
          <Link
            href="/"
            className="font-bold text-5xl flex"
            style={{ color: color || "#D9D9D9" }}
            onClick={handleClick}
          >
            <div className="overflow-hidden">
              <span className=" inline-block translate-x-10" ref={refAboutOne}>
                A
              </span>
            </div>

            <div className="overflow-hidden">
              <span className=" inline-block translate-x-10" ref={refAboutTwo}>
                B
              </span>
            </div>

            <div className="overflow-hidden">
              <span
                className=" inline-block translate-x-10"
                ref={refAboutThree}
              >
                O
              </span>
            </div>

            <div className="overflow-hidden">
              <span className=" inline-block translate-x-10" ref={refAboutFour}>
                U
              </span>
            </div>

            <div className="overflow-hidden">
              <span className=" inline-block translate-x-10" ref={refAboutFive}>
                T
              </span>
            </div>
          </Link>
        )}
      </>
    );
  };

  const handleCloseButton = () => {
    return (
      <a href="/" className="flex items-center flex-col">
        {/* <h1
          ref={titleRef}
          className="text-xs text-center font-bold"
          style={{ color: props.post.textColor }}
        >
          {capitalizeFirstLetter(props.post.title)}
        </h1> */}
        {/* <div
          className={`w-4 h-0.5 rotate-90 mt-3`}
          style={{ backgroundColor: props.post.textColor }}
        ></div> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={props.post.textColor}
          className="w-4 h-4 mt-3"
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    );
  };

  return (
    <div className={`w-full py-8 px-16 flex items-end justify-between`}>
      {handleName(props.text)}
      {/* {props.projectPage ? handleCloseButton() : null} */}
      <div className="overflow-hidden">
        <Link href={button === "CLOSE" ? "/" : "/about"}>
          <span
            className="text-xs underline cursor-pointer inline-block translate-y-6"
            style={{ color: props.text || "#D9D9D9" }}
            ref={btnRef}
            onClick={handleClick}
          >
            {button}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
