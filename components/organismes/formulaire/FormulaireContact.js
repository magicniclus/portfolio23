import React, { useEffect, useState, useRef, use } from "react";
import { ChevronRightIcon, HeartIcon } from "@heroicons/react/20/solid";
import { gsap } from "gsap";
import { useSelector } from "react-redux";

const FormulaireContact = () => {
  const state = useSelector((state) => state);

  const [formNumber, setFormNumber] = useState(0);
  const [formIsSubmit, setFormIsSubmit] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

  const [requireBtn, setRequireBtn] = useState(false);

  const formRef = useRef();
  const barRef = useRef();
  const titleRef = useRef();
  const inputOneRef = useRef(null);
  const inputTwoRef = useRef(null);
  const inputThreeRef = useRef(null);
  const inputFourRef = useRef(null);
  const inputFiveRef = useRef(null);
  const iconRefOne = useRef(null);
  const iconRefTwo = useRef(null);
  const btnRef = useRef(null);

  const makeInputClass =
    "bg-dark text-clear placeholder:text-clear placeholder:font-Roboto text-xs focus:outline-none w-full translate-y-8 opacity-0 h-full max-h-[18px]";

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

      default:
        return titleRef.current;
    }
  };

  const updateForm = () => {
    switch (formNumber) {
      case 0:
        return (
          <div className="overflow-hidden w-10/12">
            <input
              placeholder="Nom"
              className={makeInputClass}
              ref={inputOneRef}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              require
            />
          </div>
        );

      case 1:
        return (
          <div className="overflow-hidden w-10/12">
            <input
              placeholder="Entreprise"
              className={makeInputClass}
              ref={inputTwoRef}
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              require
            />
          </div>
        );

      case 2:
        return (
          <div className="overflow-hidden w-10/12">
            <input
              placeholder="Téléphone"
              className={makeInputClass}
              ref={inputThreeRef}
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              require
            />
          </div>
        );

      case 3:
        return (
          <div className="overflow-hidden w-10/12">
            <input
              placeholder="Email"
              className={makeInputClass}
              ref={inputFourRef}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              require
            />
          </div>
        );

      case 4:
        return (
          <div className="overflow-hidden w-10/12">
            <textarea
              placeholder="Vos besoins"
              className={makeInputClass}
              ref={inputFiveRef}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              style={{ resize: "none" }}
            />
          </div>
        );

      default:
        return (
          <div className="overflow-hidden w-10/12">
            <input
              placeholder="Nom"
              className={makeInputClass}
              ref={inputOneRef}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              require
            />
          </div>
        );
    }
  };

  const updateFormNumber = async () => {
    const targetElement = targets();

    if (formNumber != 4) {
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
    } else {
      null;
    }
  };

  const updateRequireBtn = () => {
    switch (formNumber) {
      case 0:
        return setRequireBtn(form.name.length > 0);

      case 1:
        return setRequireBtn(form.company.length > 0);

      case 2:
        return setRequireBtn(form.phone.length > 0);

      case 3:
        return setRequireBtn(form.email.length > 0);

      case 4:
        return setRequireBtn(true);

      default:
        return setRequireBtn(false);
    }
  };

  useEffect(() => {
    updateRequireBtn();
  }, [formNumber, form]);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    gsap.fromTo(
      iconRefOne.current,
      { y: -9 },
      {
        y: 30,
        duration: 0.5,
        ease: "power5.out",
        onComplete: () => {
          setFormIsSubmit(true);
        },
      }
    );
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
          setForm({ ...form, message: "Merci" });
          gsap.fromTo(
            targetElement,
            { y: 30, opacity: 0 },
            {
              duration: 0.5,
              y: 0,
              ease: "power5.out",
              opacity: 1,
            }
          );
        },
      }
    );
  };

  useEffect(() => {
    if (formIsSubmit) {
      gsap.fromTo(
        iconRefTwo.current,
        { y: 30 },
        {
          y: -9,
          duration: 0.5,
          ease: "power5.out",
        }
      );
    }
  }, [formIsSubmit]);

  const makeIcon = () => {
    if (!formIsSubmit) {
      return (
        <ChevronRightIcon
          className="absolute -bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-1 h-5 w-5 flex-none text-dark"
          aria-hidden="true"
          ref={iconRefOne}
        />
      );
    } else {
      return (
        <HeartIcon
          className="absolute -bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-1 h-5 w-5 flex-none text-dark"
          aria-hidden="true"
          ref={iconRefTwo}
        />
      );
    }
  };

  return (
    <div className="overflow-hidden">
      <form
        className="max-w-[350px] flex flex-col"
        ref={formRef}
        onSubmit={handleSubmit}
      >
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
          <div
            className={`flex items-center justify-between overflow-hidden ${
              requireBtn ? "cursor-pointer" : "cursor-not-allowed"
            }`}
          >
            <button
              type={formNumber === 4 ? "submit" : "button"}
              className={`rounded-full ${
                requireBtn
                  ? "bg-clear cursor-pointer"
                  : "bg-clearImmediate cursor-not-allowed"
              } w-5 h-5 flex justify-center items-center relative cursor-pointer translate-y-8 opacity-0`}
              onClick={updateFormNumber}
              ref={btnRef}
              disabled={requireBtn ? false : true}
            >
              {makeIcon()}
            </button>
          </div>
        </div>
      </form>
      <div className="overflow-hidden">
        <div
          ref={barRef}
          className="w-full h-0.5 bg-clear mt-1 max-w-[350px] translate-y-8 opacity-0"
        ></div>
      </div>
    </div>
  );
};

export default FormulaireContact;
