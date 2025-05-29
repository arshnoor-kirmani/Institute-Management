import React from "react";

export default function Comming() {
  return (
    <div className="flex items-center justify-center h-screen bg-amber-50">
      <div className="text-3xl font-bold">
        <h1 className="text-5xl text-center text-custom-700">Comming Soon</h1>
        <p className="text-md mt-4 text-custom-600">
          This page is under construction.
        </p>
        <p className="text-lg mt-2 text-custom-500 text-center">
          Thank you for your patience!{" "}
          <span className="mt-2 text-sm">- Admin Team</span>
        </p>
      </div>
    </div>
  );
}
