import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Home, Weblayout } from "./Web";
import { AdminLayout } from "./Admin";
import { nanoid } from "@reduxjs/toolkit";
import { Programmes, About, Vocational } from "./Web";

export default function App() {
  const NavBtnsValues = useSelector((state) => state.header.NavBtnsValues);
  const ImportantBtns = useSelector((state) => state.header.ImportantBtns);
  let str = "";
  return (
    <Routes>
      <Route path="/" element={<Weblayout />}>
        <Route path="" element={<Home />} />
        <Route key={nanoid()} path="about" element={<About />} />
        <Route
          key={nanoid()}
          path="programmes/:coursename"
          element={<Programmes />}
        />
        <Route key={nanoid()} path="vocational" element={<Vocational />} />
        <Route key={nanoid()} path="admission" element={<Admission />} />
        {/*  <Route
            key={nanoid()}
            path="research"
            element={<Research/>}
          /> 
          <Route
            key={nanoid()}
            path="placements"
            element={<Placements/>}
          /> 
          <Route
            key={nanoid()}
            path="studentzone"
            element={<Student Zone/>}
          /> 
          <Route
            key={nanoid()}
            path="lifehope"
            element={<LifeHope/>}
          /> 
          <Route
            key={nanoid()}
            path="admission2025"
            element={<Admission2025/>}
          /> 
          <Route
            key={nanoid()}
            path="blog"
            element={<Blog/>}
          /><Route
            key={nanoid()}
            path="downloads"
            element={<Downloads/>}
          /><Route
            key={nanoid()}
            path="applynow"
            element={<Apply Now/>}
          /><Route
            key={nanoid()}
            path="studentlogin"
            element={<Student Login/>}
          /><Route
            key={nanoid()}
            path="login"
            element={<Login/>}
          /><Route
            key={nanoid()}
            path="contactus"
            element={<Contact Us/>}
          /> */}
      </Route>
      <Route path="/dashboard" element={<AdminLayout />}>
        <Route path="home" element={<h1>Home</h1>} />
        <Route path="about" element={<h1>About</h1>} />
        <Route path="contact" element={<h1>Contact</h1>} />
      </Route>
      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="/dashboard" element={<Dashboard />}>
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route> */}
      <Route path="*" exact={true} element={<h1>Not Found</h1>} />
    </Routes>
  );
}
