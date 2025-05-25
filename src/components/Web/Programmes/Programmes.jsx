import React from "react";
import { useParams } from "react-router";
import SectionTitle from "../Home/Components/SectionTitle";
import { useSelector } from "react-redux";

export default function Programmes() {
  const { coursename } = useParams();
  const CourseName = useSelector((state) => state.coursenames);
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-custom-300 text-white py-4">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl font-bold">Programmes</h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-6 mb-4">
        <SectionTitle
          title={"Faculty of "}
          subTitle={CourseName[coursename].title}
          className="underline underline-offset-4 text-4xl font-bold mb-4"
        />
      </div>
      <div className="max-w-7xl my-5 mx-auto p-6 bg-white shadow-md rounded-lg">
        <div className="text-center text-2xl font-semibold mb-4">
          {CourseName[coursename].subtitle}
        </div>
        <div className="text-lg mb-6">
          {CourseName[coursename].overview.map((item, index) => (
            <p key={index} className="mb-4 text-custom-600">
              {item}
            </p>
          ))}
        </div>
        <div className="text-lg font-bold mb-4">Courses Offered:</div>
        <ul className="list-disc list-inside mb-6 ">
          {CourseName[coursename].CourseNames.map((course, index) => (
            <li key={index} className="text-custom-600 mb-2">
              {course}
            </li>
          ))}
        </ul>
        <button className="bg-custom-500 text-white px-4 py-2 cursor-pointer rounded hover:bg-custom-600">
          {CourseName[coursename].buttontext}
        </button>
      </div>
    </div>
  );
}
