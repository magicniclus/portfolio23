import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Nav from "../components/organismes/navigations/Nav";
import Layout from "../components/layout/Layout";
import Footer from "../components/organismes/footer/Footer";
import Galerie from "../components/organismes/galerie/Galerie";
import Blob from "../components/molecules/Blob";

export default function Home() {
  const state = useState((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "LOADER", payload: true });
  }, []);

  return (
    <Layout>
      <header>
        <Nav />
      </header>
      <main>
        <Blob />
        <Galerie />
      </main>
      <Footer />
    </Layout>
  );
}
