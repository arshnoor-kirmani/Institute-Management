import React from "react";

export default function SectionTitle({ title, className, subTitle }) {
  return (
    <h1
      className={`text-4xl decoration-2 text-custom-800 font-bold text-center cursor-pointer capitalize ${
        className || ""
      }`}
    >
      {title} <span className="text-custom-400">{subTitle || ""}</span>
    </h1>
  );
}
