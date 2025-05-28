import { Camera } from "@phosphor-icons/react";
import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Profile() {
  const ProfileData = useSelector((state) => state.instituteInfo);
  const [inputEdit, setinputEdit] = useState(true);
  return (
    <div className="w-full h-full grid items-center justify-center text-2xl grid-cols-[45%_50%] p-2 gap-5">
      <div
        id="card"
        className=" size-full grid gap-2 grid-cols-1 grid-rows-[28%] p-2 py-4 border rounded-4xl bg-custom-100/40 drop-shadow-xl "
      >
        <div className="grid grid-cols-1 items-center justify-center h-fit">
          <div className="w-24 h-24 rounded-full border-2 flex items-center m-auto justify-center overflow-hidden relative">
            <img
              src={ProfileData.ownerProfileurl || "/utils/images/user.png"}
              alt={ProfileData.owner}
              className="size-full object-cover"
            />
            <div className="absolute bottom-2 right-2 cursor-pointer full size-fit p-1 bg-custom-700 flex items-center justify-center rounded-full text-custom-50">
              <Camera weight="bold" />
            </div>
          </div>
          <div className="text-center text-custom-800 grid items-center justify-center">
            <h1 className="text-custom-800 text-2xl">{ProfileData.owner}</h1>
            <span className="text-custom-500 text-[1rem]">
              {ProfileData.profession}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 justify-center items-center gap-x-5 px-2">
          {Object.entries(ProfileData.models).map(([key, value], index) => (
            <div
              key={nanoid()}
              className="text-[1rem] grid grid-cols-[60%_35%] gap-5 border-b-1 border-custom-400 pb-1"
            >
              <span>{key}</span>
              <span>{value}</span>
            </div>
          ))}
        </div>
        <div
          id="routes"
          className="grid items-center justify-center border-t-1 border-custom-400 grid-cols-1 grid-rows-[20%_80%] gap-1 p-2"
        >
          <div className="border-b-1 border-custom-400 pb-1 px-2 text-center w-fit m-auto ">
            <h1 className="text-custom-800 text-[1rem]">
              Website URL :{" "}
              <Link to={ProfileData.websiteofficial} className="font-semibold">
                {ProfileData.websiteofficial}
              </Link>
            </h1>
          </div>
          <div className="grid size-full ">
            <h1 className="text-500 text-xl underline underline-offset-4">
              Routes
            </h1>
            <ul className="grid grid-cols-3 text-[1rem] gap-2 text-custom-800 lowercase">
              {ProfileData.routes.map((route) => (
                <li key={nanoid()}>{route}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        id="edit"
        className="size-full grid gap-2 grid-cols-1 grid-rows-[10%]  p-2 py-4 "
      >
        <div className="grid items-center justify-center">
          <h1>Account SetUp</h1>
        </div>
        <div>
          <form
            className="grid gap-2 text-[1.2rem]"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid items-center justify-between py-2 gap-2 grid-cols-[15%_75%]">
              <label htmlFor="name">Name</label>
              <input
                readOnly={inputEdit}
                value={ProfileData.instituteContactPerson.name || ""}
                className="border-custom-500 border-b-1 outline-0 size-full px-1 py-2 placeholder:text-custom-500 text-[1rem] placeholder:capitalize"
                type="text"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="grid items-center justify-between py-2 gap-2 grid-cols-[15%_75%]">
              <label htmlFor="Speciailty">Speciailty</label>
              <input
                readOnly={inputEdit}
                value={ProfileData.instituteContactPerson.specialty || ""}
                className="border-custom-500 border-b-1 outline-0 size-full px-1 py-2 placeholder:text-custom-500 text-[1rem] placeholder:capitalize"
                type="text"
                id="Speciailty"
                placeholder="Enter your Speciailty"
              />
            </div>
            <div className="grid items-center justify-between py-2 gap-2 grid-cols-[15%_75%]">
              <label htmlFor="email">Email</label>
              <input
                readOnly={inputEdit}
                value={ProfileData.instituteContactPerson.email || ""}
                className="border-custom-500 border-b-1 outline-0 size-full px-1 py-2 placeholder:text-custom-500 text-[1rem] placeholder:capitalize"
                type="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="grid items-center justify-between py-2 gap-2 grid-cols-[15%_75%]">
              <label htmlFor="gender">gender</label>
              <input
                readOnly={inputEdit}
                value={ProfileData.instituteContactPerson.gender || ""}
                className="border-custom-500 border-b-1 outline-0 size-full px-1 py-2 placeholder:text-custom-500 text-[1rem] placeholder:capitalize"
                type="text"
                id="gender"
                placeholder="Enter your gender"
              />
            </div>
            <div className="grid items-center justify-between py-2 gap-2 grid-cols-[15%_75%]">
              <label htmlFor="phone">phone</label>
              <input
                readOnly={inputEdit}
                value={ProfileData.instituteContactPerson.phone || ""}
                className="border-custom-500 border-b-1 outline-0 size-full px-1 py-2 placeholder:text-custom-500 text-[1rem] placeholder:capitalize"
                type="text"
                id="phone"
                placeholder="Enter your phone"
              />
            </div>
            <div className="grid items-center justify-between py-2 gap-2 grid-cols-[15%_75%]">
              <label htmlFor="password">Password</label>
              <input
                readOnly={inputEdit}
                value={""}
                className="border-custom-500 border-b-1 outline-0 size-full px-1 py-2 placeholder:text-custom-500 text-[1rem] placeholder:capitalize"
                type="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="grid items-center justify-between py-2 gap-2 grid-cols-[15%_75%]">
              <button
                onClick={() => setinputEdit(!inputEdit)}
                className="text-md border rounded-md px-2 py-1 cursor-pointer hover:text-custom-50 hover:bg-custom-600 transition-all duration-300"
              >
                Edit
              </button>
              <Link
                className="text-sm underline underline-offset-2 text-custom-500 float-left"
                to={"/admin/forgot-password"}
              >
                Forget Password
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
