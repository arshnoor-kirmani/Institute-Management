import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-custom-200/80 justify-center flex items-center text-custom-900 py-3">
      <Link to={"#"}>
        <h1 className="font-semibold text-md">
          <span className="text-custom-600 text-xs">Power by </span>
          <span>Arshnoor Kirmani</span>
        </h1>
      </Link>
    </div>
  );
}
