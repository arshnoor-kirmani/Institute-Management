import React from 'react'

export default function FloatingComponent() {
  return (
    <>
      <div
              className="fixed bottom-[15%] -right-4 cursor-pointer bg-custom-600 text-white px-5 py-2 rounded-md flex -rotate-90"
              onClick={() => {
                const nav = document.getElementById("FloationEnrollContainer");
                nav.classList.toggle("hidden");
                nav.classList.toggle("flex");
              }}
            >
              <h1 className="">Enroll Now</h1>
            </div>
            <div
              id="floatingOptions"
              className="fixed top-[65%] -left-3 cursor-pointer  text-white px-5 py-2 rounded-md grid gap-1 font-semibold"
            >
              <div
                id="option1"
                className="bg-custom-600/90 text-white p-2 rounded-md flex w-fit cursor-pointer"
                onClick={() => {
                  const nav = document.getElementById("FloationEnrollContainer");
                  nav.classList.toggle("hidden");
                  nav.classList.toggle("flex");
                }}
              >
                <h1>CCC/O'level</h1>
              </div>
              <div
                id="option2"
                className="bg-custom-600/90 text-white p-2 rounded-md flex w-fit cursor-pointer"
                onClick={() => {
                  const nav = document.getElementById("FloationEnrollContainer");
                  nav.classList.toggle("hidden");
                  nav.classList.toggle("flex");
                }}
              >
                <h1>University Programes</h1>
              </div>
              <div
                id="option3"
                className="bg-custom-600/90 text-white p-2 rounded-md flex w-fit cursor-pointer"
                onClick={() => {
                  const nav = document.getElementById("FloationEnrollContainer");
                  nav.classList.toggle("hidden");
                  nav.classList.toggle("flex");
                }}
              >
                <h1>Diploma Programs</h1>
              </div>
              <div
                id="option4"
                className="bg-custom-600/90 text-white p-2 rounded-md flex w-fit cursor-pointer"
                onClick={() => {
                  const nav = document.getElementById("FloationEnrollContainer");
                  nav.classList.toggle("hidden");
                  nav.classList.toggle("flex");
                }}
              >
                <h1>Other</h1>
              </div>
            </div>
    </>
  )
}
