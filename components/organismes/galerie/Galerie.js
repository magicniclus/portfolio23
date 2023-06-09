import React, { useEffect, useRef, useState } from "react";
import { project } from "../../../data/projects";
import gsap from "gsap";
import { useSelector } from "react-redux";

const Galerie = () => {
  const refs = useRef([]);
  const [imageAreLoaded, setImageAreLoaded] = useState(0); // [false, false, false, false, false, false, false, false, false, false
  const [hoveredImageWidth, setHoveredImageWidth] = useState(null);
  const [cursorPosition, setCursorPosition] = useState(null);
  const [indexSelected, setIndexSelected] = useState({
    select: null,
    previousOne: null,
    previousTwo: null,
    nextOne: null,
    nextTwo: null,
  });

  const state = useSelector((state) => state);

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

  useEffect(() => {
    if (!state.firstView && imageAreLoaded === project.length) {
      refs.current.forEach((el, idx) => {
        gsap.fromTo(
          el,
          { scaleY: 0.02, x: "1000px", opacity: 0 },
          {
            duration: 0.7,
            delay: idx !== 0 ? 0.1 * idx - 0.05 : null,
            scaleY: 1,
            x: 0,
            ease: "power3.out",
            opacity: 1,
          }
        );
      });
    }
  }, [state.firstView, imageAreLoaded, project.length]);

  return (
    <div
      className="flex justify-between mx-auto max-w-fit rounded-b-lg overflow-hidden"
      onMouseLeave={updateAllRef}
    >
      {project.map((item, idx) => (
        <img
          onLoad={() => {
            console.log("Image loaded");
            setImageAreLoaded((update) => update + 1);
          }}
          src={item.presentation}
          alt={item.title}
          className="flex m-1 rounded-lg filter grayscale hover:grayscale-0 transition duration-500 ease-in-out cursor-pointer"
          style={{
            objectFit: "cover",
            height: "400px",
            width: "50px",
            transform: "translateX(1000px)",
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
