import React from "react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
const FormulaireContact = () => {
  return (
    <form className="max-w-[350px] after:content-[''] after:w-full after:h-0.5 after:bg-clear after:mt-1 flex flex-col">
      <h2 className=" text-clear mb-3 font-sm font-bold">CONTACTEZ-MOI</h2>
      <div className="flex w-full justify-between">
        <input
          placeholder="Nom"
          className="bg-dark text-clear placeholder:text-clear placeholder:font-Roboto text-xs focus:outline-none w-10/12"
        ></input>
        <div className="flex items-center justify-between">
          <div className="rounded-full bg-clear w-5 h-5 flex justify-center items-center relative cursor-pointer">
            <ChevronRightIcon
              className="absolute -bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-1 h-5 w-5 flex-none text-dark"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormulaireContact;
