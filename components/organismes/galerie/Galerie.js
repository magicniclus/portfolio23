import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { project } from "../../../data/projects";
import gsap from "gsap";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../loader/Loader";

const Galerie = () => {
  const refs = useRef([]);
  const bottomRefs = useRef();
  const router = useRouter();
  const dispatch = useDispatch();
  const [hoveredImageWidth, setHoveredImageWidth] = useState(null);
  const [cursorPosition, setCursorPosition] = useState(null);
  const [indexSelected, setIndexSelected] = useState({
    select: null,
    previousOne: null,
    previousTwo: null,
    nextOne: null,
    nextTwo: null,
  });
  const [areImagesLoaded, setAreImagesLoaded] = useState(false);

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
    refs.current.forEach((el, idx) => {
      const timeline = gsap.timeline({
        defaults: {
          duration: 0.5, // la moitié de la durée totale
          delay: idx !== 0 ? 0.05 * idx : null,
          ease: "sine.out",
          scaleY: 0,
          opacity: 0,
        },
      });

      timeline
        .fromTo(
          el,
          {},
          { scaleY: 1 } // état à 50%
        )
        .fromTo(
          el,
          { scaleY: 2, opacity: 1 }, // nous avons déjà défini l'état initial dans la première animation
          { scaleY: 1, x: 0, opacity: 1 } // état final
        );
    });
  }, [areImagesLoaded]);

  useEffect(() => {
    gsap.set(bottomRefs.current, { clearProps: "all" });
    if (state.changePage) {
      gsap.fromTo(
        bottomRefs.current,
        { height: "0%" },
        {
          duration: 0.5,
          height: "100%",
          top: "0%",
          ease: "power3.out",
          onComplete: () => {
            gsap.to(bottomRefs.current, {
              duration: 0.5,
              top: "0%",
              ease: "power3.out",
            });
          },
        }
      );
    }
  }, [state.changePage]);

  const handleClick = (e, route, color) => {
    e.preventDefault();
    dispatch({
      type: "UPDATE_PROJECT_IS_OPEN",
      payload: { isOpen: true, color },
    });
    setTimeout(() => {
      router.push(`/projects/${route}`);
      dispatch({
        type: "UPDATE_PROJECT_IS_OPEN",
        payload: { isOpen: false, color: null },
      });
    }, 1200);
  };

  useEffect(() => {
    const loadImages = async () => {
      if (!project) {
        console.log("project is not defined yet");
        return;
      }

      try {
        const promises = project.map((item) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = item.presentation;
            img.onload = () => {
              console.log(`Image ${item.presentation} loaded successfully`);
              resolve();
            };
            img.onerror = reject;
          });
        });

        await Promise.all(promises);

        console.log("All images loaded successfully");
        if (state.firstView) {
          setTimeout(() => {
            setAreImagesLoaded(true);
          }, 1000);
        } else {
          setAreImagesLoaded(true);
        }
      } catch (err) {
        console.error("Failed to load images", err);
      }
    };

    loadImages();
  }, []);

  return (
    <>
      {areImagesLoaded ? (
        <div
          className="flex justify-between mx-auto max-w-fit rounded-b-lg relative"
          onMouseLeave={updateAllRef}
        >
          <div
            className="absolute right-0 w-full bg-dark z-30"
            ref={bottomRefs}
          ></div>
          {project.map((item, idx) => (
            <img
              src={item.presentation}
              alt={item.title}
              onClick={(e) => handleClick(e, item.title, item.color)}
              className="flex m-1 rounded-lg filter grayscale hover:grayscale-0 transition duration-500 ease-in-out cursor-pointer opacity-0"
              style={{
                objectFit: "cover",
                height: "400px",
                width: "50px",
                transform: "translateX(1500px)",
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
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Galerie;
