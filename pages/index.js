import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Nav from "../components/organismes/navigations/Nav";
import Layout from "../components/layout/Layout";
import Footer from "../components/organismes/footer/Footer";

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
      <main></main>
      <Footer />
    </Layout>
  );
}
