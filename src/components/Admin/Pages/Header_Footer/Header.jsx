import React, { useState } from "react";
import {
  BellSimple,
  Chats,
  GearSix,
  MagnifyingGlass,
  SignOut,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
export default function Header() {
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<== States ==>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const show_hide_container = (id, outerhide = false, e) => {
    let element = document.querySelector(`#${id}`);
    element.classList.toggle("grid");
    element.classList.toggle("hidden");
  };

  const [InstituteNameColor, setInstituteNameColor] =
    useState("text-custom-950");
  const [textColor, setTextColor] = useState("text-custom-900");
  const [HeadericonsColor, setHeadericonsColor] = useState("#352f44");
  const [HeadericonsSize, setHeadericonsSize] = useState(20);
  const [searchBtnActive, setSearchBtnActive] = useState(false);
  const [UserName, setUserName] = useState("Arshnoor");
  const LogoImgSrc = ["/logo.png", "/vite.svg"];
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<==Funtions==>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const Logout = () => {
    alert("LogOut");
  };
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<== JSX ===>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  return (
    <header className="w-full h-25 border-1">
      <div className="border-1 border-custom-500 size-full bg-custom-100 py-1 px-2 ">
        <div className="text-[.8rem] w-fit h-full flex gap-3 float-left items-center text-2xl px-2 py-1 border-1 rounded-xl cursor-pointer">
          <Link to="/admin/dashboard" className="size-full">
            <img
              src={LogoImgSrc[0]}
              alt="InstituteLogo"
              className="size-full object-cover"
            />
          </Link>
        </div>
        <div className="flex justify-evenly float-right w-60 h-full items-center mr-3 border-1">
          <div
            className={`relative p-1.5 cursor-pointer flex items-center active:85 ${
              searchBtnActive
                ? "border-2 border-custom-900 w-8 h-7"
                : " hover:scale-105"
            }`}
            title="Search"
            onClick={(e) => {
              if (
                e.currentTarget == e.target ||
                e.target.localName == "svg" ||
                e.target.localName == "path"
              ) {
                let input = document.querySelector("#searchInputBox");
                input.classList.toggle("hidden");
                input.classList.toggle("inline");
              }
            }}
          >
            <input
              type="text"
              name="search"
              id="searchInputBox"
              className="border-2 border-custom-900 absolute right-full hidden"
            />
            <MagnifyingGlass size={HeadericonsSize} weight="thin" />
          </div>
          <div
            className="relative p-1.5 cursor-pointer flex items-center hover:scale-105 active:85 "
            title="Massage"
          >
            <Chats size={HeadericonsSize} weight="duotone" />
          </div>
          <div
            className="relative p-1.5 cursor-pointer flex items-center hover:scale-105 active:85 "
            title="Notifiction"
          >
            <BellSimple size={HeadericonsSize} weight="duotone" />
          </div>
          <div
            className="relative p-1.5 cursor-pointer flex items-center hover:scale-105 active:85 "
            title="Setting"
          >
            <GearSix size={HeadericonsSize} weight="duotone" />
          </div>
          <div className="p-2 rounded-md  bg-custom-800/40 relative">
            <div
              className="cursor-pointer"
              onClick={(event) => {
                show_hide_container("userinfobox", false, event);
              }}
            >
              <img
                src={LogoImgSrc[1]}
                alt=""
                className="size-6 pointer-events-none"
              />
            </div>
            <div
              className="absolute hidden outline-custom-900 outline-1 rounded-sm right-5 top-full mt-2 size-42  grid-rows-[20%_80%] bg-custom-300"
              id="userinfobox"
            >
              <div className="bg-custom-700/80 flex justify-center item-center text-custom-50">
                <h1>{UserName}</h1>
              </div>
              <ul className="grid grid-rows-3">
                <li
                  className={`flex items-center ${textColor} p-1 border-b-1 border-custom-800 cursor-pointer active:scale-98 transition-all duration-200`}
                >
                  Account Settings
                </li>
                <li
                  className={`flex items-center ${textColor} p-1 border-b-1 border-custom-800 cursor-pointer active:scale-98 transition-all duration-200`}
                >
                  Options
                </li>
                <li
                  className={`flex items-center ${textColor} p-1 cursor-pointer active:scale-98 transition-all duration-200`}
                  onClick={Logout}
                >
                  Log Out
                  <SignOut
                    size={HeadericonsSize}
                    weight="thin"
                    className="ml-1.5"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
