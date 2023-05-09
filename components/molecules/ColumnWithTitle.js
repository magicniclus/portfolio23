import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useSelector } from "react-redux";

const ColumnWithTitle = (props) => {
  const title = props.title;
  const lign = props.lign;
  const column = props.column || "1";
  const updateClass = props.updateClass || "";
  const state = useSelector((state) => state);

  // Tableau de références pour chaque élément de lign
  const itemRefs = lign.map(() => useRef(null));

  const titleRef = useRef();

  useEffect(() => {
    const elements = itemRefs.map((ref) => ref.current);
    if (state.changePage) {
      gsap.fromTo(
        elements,
        { y: 0, opacity: 1 },
        {
          duration: 1,
          y: -30,
          opacity: 0,
          ease: "power5.out",
          stagger: {
            amount: 0.3 + column * 0.1,
            from: 0,
            each: 0.3,
          },
        }
      );
      gsap.fromTo(
        titleRef.current,
        { y: 0, opacity: 1 },
        {
          duration: 1,
          y: -30,
          opacity: 0,
          ease: "power5.out",
          stagger: {
            amount: 0.3 + column * 0.1,
            from: 0,
            each: 0.3,
          },
        }
      );
    }
  }, [state.changePage]);

  useEffect(() => {
    const elements = itemRefs.map((ref) => ref.current);
    gsap.fromTo(
      elements,
      { y: 30, opacity: 0 },
      {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "power5.out",
        stagger: {
          amount: 0.3 + column * 0.1,
          from: 0,
          each: 0.3,
        },
      }
    );
    gsap.fromTo(
      titleRef.current,
      { y: 30, opacity: 0 },
      {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "power5.out",
        stagger: {
          amount: 0.3 + column * 0.1,
          from: 0,
          each: 0.3,
        },
      }
    );
  }, []);

  return (
    <div className={updateClass}>
      <div className="overflow-hidden">
        <h2
          className="font-sm font-bold text-clear translate-y-6"
          ref={titleRef}
        >
          {title}
        </h2>
      </div>
      <ul className="mt-3">
        {lign.map((item, index) => (
          <div className="overflow-hidden">
            <li
              key={index}
              className="text-clear text-xs mt-1 translate-y-6"
              ref={itemRefs[index]}
            >
              {item}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ColumnWithTitle;
