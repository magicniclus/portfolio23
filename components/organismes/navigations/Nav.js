import Link from "next/link";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const Nav = (props) => {
  const dispatch = useDispatch();

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
  const name = button != "ABOUT" ? "ABOUT" : "NICOLAS";

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
          amount: 0.4,
          from: 0,
          function: (i) => (i === 0 ? 0 : 0.4 * i),
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
          amount: 0.4,
          from: 0,
          function: (i) => (i === 0 ? 0 : 0.4 * i),
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
          amount: 0.4,
          from: 0,
          function: (i) => (i === 0 ? 0 : 0.4 * i),
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
          amount: 0.4,
          from: 0,
          function: (i) => (i === 0 ? 0 : 0.4 * i),
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

  const handleName = () => {
    return (
      <>
        {name === "NICOLAS" ? (
          <Link href="/" className="font-bold text-5xl text-clear flex">
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
          <Link href="/" className="font-bold text-5xl text-clear flex">
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

  return (
    <div className="w-full py-8 px-16 flex items-end justify-between">
      {handleName()}
      <div className="overflow-hidden">
        <Link href={button === "CLOSE" ? "/" : "/about"}>
          <span
            className="text-xs text-clear underline cursor-pointer inline-block translate-y-6"
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
