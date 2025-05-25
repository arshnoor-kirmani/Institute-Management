import React from "react";
import SectionTitle from "../Home/Components/SectionTitle";
import { Users } from "@phosphor-icons/react";
import FormComponents from "../Home/Components/FormComponents";

export default function Vocational() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-custom-300 text-white py-4">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl font-bold">Vocational</h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-6 mb-4 grid justify-center items-center">
        <SectionTitle
          title={" Welcome to Vocational"}
          className="underline underline-offset-4 text-4xl font-bold mb-4"
        />
        <p className="text-custom-400 text-md w-full text-center">
          Vocational Training and Skill Development
        </p>
      </div>
      <div className="max-w-7xl my-5 mx-auto p-6 bg-white shadow-md rounded-lg">
        <div className=" font-semibold mb-4 border-2 rounded-2xl border-custom-200 grid grid-cols-2  py-5 px-3 gap-5 justify-center items-center">
          <div className="flex flex-col justify-center items-center px-8 h-full">
            <div className="text-center">
              {" "}
              <h1 className="text-3xl capitalize">
                Lets make education more productive
              </h1>
              <span className="text-md text-custom-400 capitalize mt-2">
                b.voc | M.voc | ph.d programmes
              </span>
            </div>
            <div className="text-custom-400 text-md  grid grid-cols-2 gap-2 grid-rows-4 mt-10 capitalize text-center">
              <span>B.Voc in Fashion Design </span>
              <span>ashion Design </span>
              <span>Interior Design </span>
              <span>Animation </span>
              <span>Multimedia </span>
              <span>Graphic Design </span>
              <span>Web Development </span>
              <span>Data Science</span>
            </div>
          </div>
          <div className="grid px-8  capitalize border-l-2 border-custom-200">
             <h1 className="text-3xl font-semibold mb-4">
              Get in touch with us
            </h1>
            <p className="text-custom-400 text-md mb-4">
              Interested in our vocational courses?
              <br />
              <span className="text-custom-500 text-sm">
                Fill out the form below to receive more information and details
                about our programs.
              </span>
            </p>
            <FormComponents />
            <h1 className="text-2xl font-semibold mb-4">
              Fill the form to get more details
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
