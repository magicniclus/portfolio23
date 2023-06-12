import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Nav from "../components/organismes/navigations/Nav";
import Layout from "../components/layout/Layout";
import Footer from "../components/organismes/footer/Footer";
import Galerie from "../components/organismes/galerie/Galerie";
import { gsap } from "gsap";

export default function Home() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const newBgRef = useRef(null);

  useEffect(() => {
    dispatch({ type: "LOADER", payload: true });
  }, []);

  useEffect(() => {
    if (state.projectIsOpen.isOpen) {
      const tl = gsap.timeline({ defaults: { duration: 0.4 } });

      tl.fromTo(
        newBgRef.current,
        { height: "0", backgroundColor: "#373634" },
        {
          height: "97%",
          backgroundColor: state.projectIsOpen.color,
          ease: "power4.out",
        }
      ).fromTo(
        newBgRef.current,
        { width: "97%", height: "97%" },
        { width: "100%", height: "100%", delay: 0.4, ease: "power4.out" }
      );

      return () => tl.kill();
    }
  }, [state.projectIsOpen]);

  return (
    <Layout>
      <header>
        <Nav />
      </header>
      <main className="relative overflow-hidden">
        <Galerie />
        <div
          className=" fixed my-auto bottom-0 left-1/2 transform -translate-x-1/2 z-40 h-0"
          style={{
            width: "97%",
          }}
          ref={newBgRef}
        ></div>
      </main>
      <Footer reseauView={true} text={"#EDEAE6"} />
    </Layout>
  );
}
