import React, { useEffect, useRef, useState } from "react";
import { project } from "../../../data/projects";
import gsap from "gsap";

const Galerie = () => {
  const refs = useRef([]);
  const [hoveredImageWidth, setHoveredImageWidth] = useState(null);
  const [cursorPosition, setCursorPosition] = useState(null);
  const [indexSelected, setIndexSelected] = useState({
    select: null,
    previousOne: null,
    previousTwo: null,
    nextOne: null,
    nextTwo: null,
  });

  const updateAllRef = () => {
    refs.current.forEach((el, idx) => {
      gsap.to(el, {
        duration: 0.5,
        width: "50px",
        ease: "power3.out",
      });
    });
  };

  function handleMouseMove(event, index) {
    const imageWidth = refs.current[index].getBoundingClientRect().width;
    const cursorPosition = event.nativeEvent.offsetX;
    setHoveredImageWidth(imageWidth);
    setCursorPosition(cursorPosition);
  }

  function convertFromPercentage(percentage, min, max) {
    return (percentage / 100) * (max - min) + min;
  }

  useEffect(() => {
    refs.current.forEach((el, idx) => {
      if (idx === indexSelected.select) {
        gsap.to(el, {
          duration: 0.5,
          width: "150px",
          ease: "power3.out",
        });
      } else if (idx === indexSelected.nextOne) {
        gsap.to(el, {
          duration: 0.5,
          width: `${convertFromPercentage(
            Math.round((cursorPosition / hoveredImageWidth) * 100),
            100,
            150
          )}px`,
          ease: "power3.out",
        });
      } else if (idx === indexSelected.nextTwo) {
        gsap.to(el, {
          duration: 0.5,
          width: `${convertFromPercentage(
            Math.round((cursorPosition / hoveredImageWidth) * 100),
            70,
            100
          )}px`,
          ease: "power3.out",
        });
      } else if (idx === indexSelected.previousTwo) {
        gsap.to(el, {
          duration: 0.5,
          width: `${convertFromPercentage(
            100 - Math.round((cursorPosition / hoveredImageWidth) * 100),
            70,
            100
          )}px`,
          ease: "power3.out",
        });
      } else if (idx === indexSelected.previousOne) {
        gsap.to(el, {
          duration: 0.5,
          width: `${convertFromPercentage(
            100 - Math.round((cursorPosition / hoveredImageWidth) * 100),
            100,
            150
          )}px`,
          ease: "power3.out",
        });
      }
    });
  }, [indexSelected, cursorPosition, hoveredImageWidth]);

  return (
    <div
      className="flex justify-between mx-auto max-w-fit"
      onMouseLeave={updateAllRef}
    >
      {project.map((item, idx) => (
        <img
          src={item.presentation}
          alt={item.title}
          className="flex m-1 rounded-lg filter grayscale hover:grayscale-0 transition duration-500 ease-in-out cursor-pointer"
          style={{
            objectFit: "cover",
            height: "550px",
            width: "50px",
          }}
          onMouseEnter={() =>
            setIndexSelected((indexSelected) => ({
              ...indexSelected,
              select: idx,
              previousOne: idx - 1,
              previousTwo: idx - 2,
              nextOne: idx + 1,
              nextTwo: idx + 2,
            }))
          }
          onMouseLeave={() =>
            setIndexSelected((indexSelected) => ({
              ...indexSelected,
              select: null,
              previousOne: null,
              previousTwo: null,
              nextOne: null,
              nextTwo: null,
            }))
          }
          onMouseMove={(event) => handleMouseMove(event, idx)}
          ref={(el) => (refs.current[idx] = el)}
          key={idx}
        />
      ))}
    </div>
  );
};

export default Galerie;
