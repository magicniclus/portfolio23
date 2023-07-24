import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Loader = () => {
  const lettersRef = Array.from({ length: 10 }).map(() => React.createRef());

  useEffect(() => {
    gsap.set(
      lettersRef.map((ref) => ref.current),
      { opacity: 0 }
    );

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

    tl.staggerFromTo(
      lettersRef.map((ref) => ref.current),
      0.5,
      { y: "-30px", opacity: 0 },
      { y: "0px", opacity: 1, ease: "bounce" },
      0.1
    );
  }, []);

  return (
    <div className="h-screen fixed w-full mx-auto max-w-[2000px] bg-dark z-50 top-0 flex justify-center items-center text-clear text-xl font-bold">
      {["L", "o", "a", "d", "i", "n", "g", ".", ".", "."].map((letter, i) => (
        <span className="letter opacity-0" key={i} ref={lettersRef[i]}>
          {letter}
        </span>
      ))}
    </div>
  );
};

export default Loader;
