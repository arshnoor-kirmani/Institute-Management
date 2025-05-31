import { MagnifyingGlassIcon, Plus } from "@phosphor-icons/react";
import React from "react";

export default function Students() {
  return (
    <div className="size-full grid grid-cols-1 grid-rows-[10%_85%] items-center justify-center gap-2 *:border">
      <div id="search" className="flex size-full py-2 gap-2 px-2">
        <div
          id="searchbox"
          className="size-full flex border border-custom-300 rounded-md overflow-hidden"
        >
          <button className="flex py-2 px-4 justify-center items-center text-xl bg-custom-100">
            <MagnifyingGlassIcon />
          </button>
          <input type="text" name="search" className="size-full" />
        </div>
        <div id="other" className="flex gap-2 text-xl">
          <div
            id="filter"
            className="border-1 flex justify-center items-center rounded-md "
          >
            <select
              name="filter"
              id=" "
              className="flex size-fit py-2 px-4 justify-center items-center rounded-md"
            >
              <option value="newest">Newest</option>
              <option value="newest">Newest</option>
              <option value="newest">Newest</option>
            </select>
          </div>
          <div className="">
            <button className=" cursor-pointer flex gap-2 size-full justify-center items-center py-2 px-3  bg-custom-600 text-custom-50 border-2 rounded-md border-custom-800">
              <Plus />
              Student
            </button>
          </div>
        </div>
      </div>
      <div
        id="students"
        className="grid items-center justify-center size-full rounded-xl overflow-hidden grid-cols-1 grid-rows-[5%_94%]"
      >
        <div id="ctg" className="size-full items-center justify-center">
          <ul className="size-full flex gap-2 items-center justify-evenly text-sm font-bold bg-custom-100 py-3 px-4 rounded-md">
            <li className="">
              <input type="checkbox" name="" id="" />
            </li>
            <li className="">Roll No/ID</li>
            <li className="">Photo</li>
            <li className="">Name</li>
            <li className="">Gender</li>
            <li className="">Date</li>
            <li className="">Father Name</li>
            <li className="">Address</li>
            <li className="">Contact No</li>
            <li className="">Email</li>
            <li className="">Status</li>
            <li className="">Action</li>
          </ul>
        </div>
        <div id="contai" className="grid        ">
          <div id="student">
            <ul
              className="flex
            "
            >
              <li>
                <input type="checkbox" name="" id="" />
              </li>
              <li>12345</li>
              <li>
                <div>
                  <img src="/utils/images/user.png" alt="user" />
                </div>
              </li>
              <li>John Doe</li>
              <li>Male</li>
              <li>01/01/2025</li>
              <li>Mike</li>
              <li>Lakhimpur-Kheri</li>
              <li>+91 665655654</li>
              <li>johndor@gmail.com</li>
              <li>Active</li>
              <li>
                <button>Edit</button>
                <button>Deactivete</button>
                <button>Delete</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
