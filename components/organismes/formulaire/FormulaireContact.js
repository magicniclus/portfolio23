import React, { useEffect, useState, useRef } from "react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { gsap } from "gsap";
import { useSelector } from "react-redux";

const FormulaireContact = () => {
  const state = useSelector((state) => state);

  const [formNumber, setFormNumber] = useState(0);

  const formRef = useRef();
  const barRef = useRef();
  const titleRef = useRef();
  const inputOneRef = useRef(null);
  const inputTwoRef = useRef(null);
  const inputThreeRef = useRef(null);
  const inputFourRef = useRef(null);
  const inputFiveRef = useRef(null);
  const inputSixRef = useRef(null);
  const btnRef = useRef(null);

  const makeInputClass =
    "bg-dark text-clear placeholder:text-clear placeholder:font-Roboto text-xs focus:outline-none w-10/12 translate-y-8 opacity-0";

  const targets = () => {
    switch (formNumber) {
      case 0:
        return inputOneRef.current;

      case 1:
        return inputTwoRef.current;

      case 2:
        return inputThreeRef.current;

      case 3:
        return inputFourRef.current;

      case 4:
        return inputFiveRef.current;

      case 5:
        return inputSixRef.current;

      default:
        return titleRef.current;
    }
  };

  const updateFormNumber = async () => {
    const targetElement = targets();

    gsap.fromTo(
      targetElement,
      { y: 0, opacity: 1 },
      {
        duration: 0.5,
        y: -30,
        ease: "power5.out",
        opacity: 0,
        onComplete: () => {
          setFormNumber((e) => e + 1);
        },
      }
    );
  };

  const updateForm = () => {
    switch (formNumber) {
      case 0:
        return (
          <div className="overflow-hidden">
            <input
              placeholder="Nom"
              className={makeInputClass}
              ref={inputOneRef}
            />
          </div>
        );

      case 1:
        return (
          <div className="overflow-hidden">
            <input
              placeholder="Entreprise"
              className={makeInputClass}
              ref={inputTwoRef}
            />
          </div>
        );

      case 2:
        return (
          <div className="overflow-hidden">
            <input
              placeholder="Téléphone"
              className={makeInputClass}
              ref={inputThreeRef}
            />
          </div>
        );

      case 3:
        return (
          <div className="overflow-hidden">
            <input
              placeholder="Email"
              className={makeInputClass}
              ref={inputFourRef}
            />
          </div>
        );

      case 4:
        return (
          <div className="overflow-hidden">
            <input
              placeholder="Téléphone"
              className={makeInputClass}
              ref={inputFiveRef}
            />
          </div>
        );

      case 5:
        return (
          <div className="overflow-hidden">
            <textarea
              placeholder="Vos besoins"
              className={makeInputClass}
              ref={inputSixRef}
            />
          </div>
        );

      default:
        return (
          <div className="overflow-hidden">
            <input
              placeholder="Nom"
              className={makeInputClass}
              ref={inputOneRef}
            />
          </div>
        );
    }
  };

  useEffect(() => {
    const targetElement = targets();

    gsap.fromTo(
      targetElement,
      { y: 30, opacity: 0 },
      {
        duration: 0.5,
        y: 0,
        ease: "power5.out",
        opacity: 1,
        delay: formNumber > 0 ? 0 : 0.6,
      }
    );
  }, [formNumber]);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: 30 },
      {
        duration: 0.5,
        y: 0,
        opacity: 1,
        ease: "power5.out",
        delay: 0.5,
      }
    );
    gsap.fromTo(
      barRef.current,
      { y: 30 },
      {
        duration: 0.5,
        opacity: 1,
        y: 0,
        ease: "power5.out",
        delay: 0.5,
      }
    );
    gsap.fromTo(
      btnRef.current,
      { y: 30 },
      {
        duration: 0.5,
        opacity: 1,
        y: 0,
        ease: "power5.out",
        delay: 0.6,
      }
    );
  }, []);

  useEffect(() => {
    const targetElement = targets();
    if (state.changePage) {
      gsap.fromTo(
        targetElement,
        { y: 0 },
        {
          duration: 0.5,
          y: -30,
          opacity: 0,
          delay: 0.3,
        }
      );
      gsap.fromTo(
        titleRef.current,
        { y: 0 },
        {
          duration: 0.5,
          y: -30,
          ease: "power5.out",
          opacity: 0,
          delay: 0.2,
        }
      );
      gsap.fromTo(
        barRef.current,
        { y: 0 },
        {
          duration: 0.5,
          opacity: 0,
          y: -30,
          ease: "power5.out",
          delay: 0.3,
        }
      );
      gsap.fromTo(
        btnRef.current,
        { y: 0 },
        {
          duration: 0.5,
          opacity: 0,
          y: -30,
          ease: "power5.out",
          delay: 0.3,
        }
      );
    } else null;
  }, [state.changePage]);

  return (
    <div className="overflow-hidden">
      <form className="max-w-[350px] flex flex-col" ref={formRef}>
        <div className="overflow-hidden">
          <h2
            className="text-clear mb-3 font-sm font-bold translate-y-8 opacity-0"
            ref={titleRef}
          >
            CONTACTEZ-MOI
          </h2>
        </div>
        <div className="flex w-full justify-between">
          {updateForm()}
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="rounded-full bg-clear w-5 h-5 flex justify-center items-center relative cursor-pointer translate-y-8 opacity-0"
              onClick={updateFormNumber}
              ref={btnRef}
            >
              <ChevronRightIcon
                className="absolute -bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-1 h-5 w-5 flex-none text-dark"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </form>
      <div
        ref={barRef}
        className="w-full h-0.5 bg-clear mt-1 max-w-[350px] translate-y-8 opacity-0"
      ></div>
    </div>
  );
};

export default FormulaireContact;
