import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useSelector } from "react-redux";

const TextContainer = () => {
  const state = useSelector((state) => state);

  const pOne = useRef();
  const pTwo = useRef();
  const pThree = useRef();

  useEffect(() => {
    if (state.changePage) {
      const targets = [pOne.current, pTwo.current, pThree.current];
      gsap.fromTo(
        targets,
        { y: 0, opacity: 1 },
        {
          duration: 0.3,
          y: -200,
          opacity: 0,
          ease: "power5.out",
          stagger: {
            amount: 0.3,
            from: 0,
            each: 0.3,
          },
        }
      );
    } else null;
  }, [state.changePage]);

  useEffect(() => {
    const targets = [pOne.current, pTwo.current, pThree.current];
    gsap.fromTo(
      targets,
      { y: 200, opacity: 0 },
      {
        duration: 0.5,
        y: 0,
        opacity: 1,
        ease: "power5.out",
        stagger: {
          amount: 0.3,
          from: 0,
          each: 0.5,
        },
      }
    );
  }, []);
  return (
    <div>
      <div className="overflow-hidden md:mt-0 mt-10">
        <p
          className="text-clear text-xs inline-block translate-y-24"
          ref={pOne}
        >
          Jeune développeur passionné, ambitieux et très curieux, je suis
          particulièrement attiré par l'écosystème JavaScript. Toujours à
          l'affût des nouvelles technologies, je porte un intérêt tout
          particulier pour React et Next.js, qui offre de nombreux avantages en
          matière de performance, de référencement et d'expérience utilisateur.
        </p>
      </div>
      <div className="overflow-hidden">
        <p
          className="mt-6 text-clear text-xs inline-block translate-y-24"
          ref={pTwo}
        >
          En complément de mes compétences en Front-end, j'ai acquis une
          expertise dans l'utilisation de Firebase et Google API, qui permettent
          une gestion efficace des bases de données, de l'authentification et
          des services cloud. Je m'attache également à accorder une importance
          capitale aux détails, en utilisant des outils tels que GSAP pour les
          animations et Sass pour un code optimisé et facilement compréhensible.
        </p>
      </div>
      <div className="overflow-hidden">
        <p
          className="mt-6 text-clear text-xs inline-block translate-y-24"
          ref={pThree}
        >
          À l'écoute de mes clients, je saurai conseiller, orienter et adapter
          mon savoir-faire à vos attentes, en mettant à profit mes connaissances
          approfondies et mon expérience pratique avec ces technologies
          innovantes.
        </p>
      </div>
    </div>
  );
};

export default TextContainer;
