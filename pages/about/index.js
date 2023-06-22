import React from "react";
import Nav from "../../components/organismes/navigations/Nav";
import Layout from "../../components/layout/Layout";
import Footer from "../../components/organismes/footer/Footer";
import TextContainer from "../../components/molecules/TextContainer";
import FormulaireContact from "../../components/organismes/formulaire/FormulaireContact";
import ColumnWithTitle from "../../components/molecules/ColumnWithTitle";
import { personalInformations } from "../../data/personalInformations";

const index = () => {
  return (
    <Layout title="Nicolas | About">
      <header>
        <Nav button="CLOSE" />
      </header>
      <main className="w-full px-4 md:px-16 flex md:flex-row flex-col h-full justify-between">
        <div className="w-full md:w-5/12 md:max-w-[500px] flex flex-col min-h-full justify-around">
          <TextContainer />
          <FormulaireContact />
        </div>
        <div className="my-auto hidden md:flex flex-col items-end">
          <div className="flex min-w-[150px]">
            <div className="flex min-w-[150px]">
              <ColumnWithTitle
                title="CLIENTS"
                lign={personalInformations.client}
                updateClass="mr-24"
              />
            </div>
            <div className="flex min-w-[150px]">
              <ColumnWithTitle
                title="TECHNOLOGIES"
                lign={personalInformations.technologies}
              />
            </div>
          </div>
          <div className="flex min-w-[150px] mt-16">
            <ColumnWithTitle
              column={2}
              title="LEARNING"
              lign={personalInformations.learning}
            />
          </div>
          <div className="flex min-w-[150px] mt-16">
            <ColumnWithTitle
              column={3}
              title="CERTIFICATIONS"
              lign={personalInformations.certification}
            />
          </div>
        </div>
      </main>
      <Footer />
    </Layout>
  );
};

export default index;
