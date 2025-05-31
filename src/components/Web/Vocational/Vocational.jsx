import React from "react";
import SectionTitle from "../Home/Components/SectionTitle";
import { Users } from "@phosphor-icons/react";
import FormComponents from "../Home/Components/FormComponents";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Vocational() {
  const InstituteFullName = useSelector(
    (state) => state.instituteInfo.instituteName
  );
  const InstituteShortName = useSelector(
    (state) => state.instituteInfo.instituteShortName
  );
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
      <div className="max-w-7xl my-5 mx-auto p-6 bg-white shadow-md rounded-lg grid gap-10">
        {/********************************************************************/}
        <div className=" font-semibold mb-4 border- rounded-2xl grid grid-cols-2 *:py-5 py-0 px-3 gap-5 justify-center items-center">
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
          <div className="grid px-8  capitalize border-2 border-custom-700 rounded-2xl">
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
            <h1 className="text-sm font-semibold mb-4 text-custom-500 text-center mt-5">
              *************** Fill the form to get more details ***************
            </h1>
          </div>
        </div>
        {/********************************************************************/}
        <div className="grid grid-cols-2 gap-3 border-t-2 border-custom-400 py-5">
          <div className="grid gap-2 text-justify px-5 pr-6">
            <h1 className="text-custom-600 text-2xl font-semibold">
              About {InstituteFullName}
            </h1>
            <div>
              <p className="text-custom-500 text-md">
                {InstituteFullName} a name tagged to enhance the strength of
                Indian higher education while offering the quality and
                nurtureful education in almost every theme of major disciplines.
                {InstituteFullName} being as a top ranking university of India
                commits to bring the student with bright future. We also conduct
                our counseling session under the operation head where we analyze
                the interest of the students as per their past education and
                experience and then offer the best suited career programs.
              </p>
            </div>
          </div>
          <div className="grid gap-2 text-justify px-5 pr-6">
            <h1 className="text-custom-600 text-2xl font-semibold">
              Advantage of Collaboration
            </h1>
            <ul className="list-disc ml-8 text-custom-500 text-md">
              <li>
                VTP Account Management end to end solutions – students enrolment
                to their final certification
              </li>
              <li>Authorisation Certificate for the VTP</li>
              <li>ERP & LMS login for the VTP</li>
              <li>Mobile application & LMS for the Students</li>
              <li>Online Expert Lectures</li>
              <li>Training & Placement Assisstance</li>
              <li>UGC approved B.Voc Degree/Diploma</li>
            </ul>
          </div>
        </div>
        {/********************************************************************/}
        <div className="grid gap-4 text-justify px-5 pr-6">
          <div>
            <SectionTitle
              title={"Structure of "}
              subTitle={"Vocational Programmes"}
            />
          </div>
          <div className="h-fit relative grid grid-cols-[repeat(7,auto)] gap-4 *:border-1 py-3 items-center justify-center ">
            <div className="size-28 rounded-full cursor-pointer grid grid-cols-1 grid-rows-2 overflow-hidden items-center justify-center text-xs">
              <div
                id="top"
                className="bg-custom-600 text-white w-full h-full flex items-center justify-center font-semibold p-3 capitalize"
              >
                <h1>B.voc degree</h1>
              </div>
              <div
                id="bottom"
                className=" border-double border-custom-100 text-custom-600 w-full h-full grid items-center justify-center font-semibold pb-2"
              >
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-md">03</h1>
                  <span className="block text-xs">Year</span>
                </div>
              </div>
            </div>
            <div className="size-33 rounded-full cursor-pointer grid grid-cols-1 grid-rows-2 overflow-hidden items-center justify-center">
              <div
                id="top"
                className="bg-custom-600 text-white w-full h-full flex items-center justify-center font-semibold p-3 text-sm"
              >
                <h1>B.voc degree</h1>
              </div>
              <div
                id="bottom"
                className=" border-double border-custom-100 text-custom-600 w-full h-full grid items-center justify-center font-semibold pb-2"
              >
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-xl">03</h1>
                  <span className="block text-sm">Year</span>
                </div>
              </div>
            </div>
            <div className="size-38 rounded-full cursor-pointer grid grid-cols-1 grid-rows-2 overflow-hidden items-center justify-center">
              <div
                id="top"
                className="bg-custom-600 text-white w-full h-full flex items-center justify-center font-semibold p-3 text-md"
              >
                <h1>B.voc degree</h1>
              </div>
              <div
                id="bottom"
                className=" border-double border-custom-100 text-custom-600 w-full h-full grid items-center justify-center font-semibold py-2"
              >
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-2xl">03</h1>
                  <span className="block text-md">Year</span>
                </div>
              </div>
            </div>
            <div className="size-43 rounded-full cursor-pointer grid grid-cols-1 grid-rows-2 overflow-hidden items-center justify-center">
              <div
                id="top"
                className="bg-custom-600 text-white w-full h-full flex items-center justify-center font-semibold p-3 text-xl"
              >
                <h1>B.voc degree</h1>
              </div>
              <div
                id="bottom"
                className=" border-double border-custom-100 text-custom-600 w-full h-full grid items-center justify-center font-semibold "
              >
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-3xl">03</h1>
                  <span className="block text-xl">Year</span>
                </div>
              </div>
            </div>
            <div className="size-38 rounded-full cursor-pointer grid grid-cols-1 grid-rows-2 overflow-hidden items-center justify-center">
              <div
                id="top"
                className="bg-custom-600 text-white w-full h-full flex items-center justify-center font-semibold p-3 text-md"
              >
                <h1>B.voc degree</h1>
              </div>
              <div
                id="bottom"
                className="border-1 border-custom-100 text-custom-600 w-full h-full grid items-center justify-center font-semibold py-2"
              >
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-2xl">03</h1>
                  <span className="block text-md">Year</span>
                </div>
              </div>
            </div>

            <div className="size-33 rounded-full cursor-pointer grid grid-cols-1 grid-rows-2 overflow-hidden items-center justify-center">
              <div
                id="top"
                className="bg-custom-600 text-white w-full h-full flex items-center justify-center font-semibold p-3 text-sm"
              >
                <h1>B.voc degree</h1>
              </div>
              <div
                id="bottom"
                className=" border-double border-custom-100 text-custom-600 w-full h-full grid items-center justify-center font-semibold pb-2"
              >
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-xl">03</h1>
                  <span className="block text-sm">Year</span>
                </div>
              </div>
            </div>
            <div className="size-28 rounded-full cursor-pointer grid grid-cols-1 grid-rows-2 overflow-hidden items-center justify-center text-xs">
              <div
                id="top"
                className="bg-custom-600 text-white w-full h-full flex items-center justify-center font-semibold p-3 capitalize"
              >
                <h1>B.voc degree</h1>
              </div>
              <div
                id="bottom"
                className=" border-double border-custom-100 text-custom-600 w-full h-full grid items-center justify-center font-semibold pb-2"
              >
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-md">03</h1>
                  <span className="block text-xs">Year</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
