import React from "react";
import { Link } from "react-router";
import SectionTitle from "../Home/Components/SectionTitle";

export default function About() {
  const InstituteFullName = "Hope Group of Institutions";
  const InstituteShotName = "HGI";
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-custom-300 text-white py-4">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl font-bold">
            About {InstituteShotName || ""}
          </h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-6 mb-4 grid justify-center items-center">
        <SectionTitle
          title={" Welcome to "}
          subTitle={InstituteFullName || ""}
          className="underline underline-offset-4 text-4xl font-bold mb-4"
        />
        <p className="text-custom-400 text-md w-full text-center">
          Empowering Futures Through Technology & Education
        </p>
      </div>
      <div className="max-w-7xl my-5 mx-auto p-6 bg-white shadow-md rounded-lg">
        <div className="text-center text-2xl font-semibold mb-4">
          Who We Are
        </div>
        <div className="text-lg mb-6">
          <p className="mb-4 text-custom-600">
            At Hope Group of Institutions, our mission is to provide
            <span className="font-bold"> accessible, career-focused </span>
            education to students from all walks of life. From computer courses
            that teach real-world tech skills to university-recognized distance
            degree programs, we are dedicated to helping students move forward.
            <span className="text-custom-600 font-semibold">
              —academically and professionally
            </span>
          </p>
          <p className="mb-4 text-custom-600">
            We’ve trained hundreds of students from local schools and colleges
            and have become a center for practical learning, skill-building, and
            now, higher education.
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-custom-600">
            Our Key Offerings:
          </h1>
          <ul className="list-disc md:pl-10 pl-5 grid gap-4 mt-3">
            <li>
              <div>
                <h1 className="text-xl font-semibold text-custom-500">
                  Professional Courses:
                </h1>
                <ul className="list-disc md:pl-10 pl-5 ">
                  <li>Web Development</li>
                  <li>Data Science</li>
                  <li>Digital Marketing</li>
                  <li>Graphic Design</li>
                  <li>O'Level</li>
                  <li>Tally & Office Automation</li>
                  <li>Programming (Python, C, C++)</li>
                  <li>PGDCA</li>
                  <li>Programming (Python, C, C++)</li>
                  <li>PGDCA Basic & Advanced Computer Skills</li>
                </ul>
              </div>
            </li>
            <li>
              <div>
                <h1 className="text-xl font-semibold text-custom-500">
                  🎓 Distance University Programs (UG & PG):
                </h1>
                <p className="text-custom-500">
                  We offer university-affiliated distance learning programs for
                  students who want to pursue higher education with flexibility:
                </p>
                <ul className="list-disc md:pl-10 pl-5">
                  <li>Distance University Programs (UG & PG)</li>
                  <li>Bachelor of Arts (B.A.)</li>
                  <li>Bachelor of Science (B.Sc.)</li>
                  <li>Bachelor of Commerce (B.Com)</li>
                  <li>Master of Arts (M.A.)</li>
                  <li>Master of Science (M.Sc.)</li>
                  <li>Master of Commerce (M.Com)</li>
                  <li>Bachelor of Business Administration (BBA)</li>
                  <li>Master of Business Administration (MBA)</li>
                  <li>Bachelor of Computer Applications (BCA)</li>
                  <li>Postgraduate Courses also available</li>
                  <li>Diploma in Computer Applications (DCA)</li>
                  <li>Postgraduate Diploma in Computer Applications (PGDCA)</li>
                </ul>
                <p className="text-custom-500">
                  These programs are ideal for students who wish to continue
                  their education while working, preparing for competitive
                  exams, or upskilling in parallel with technical training.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 gap-2">
          <h1 className="text-2xl font-semibold text-custom-600">
            Why Choose Hope?
          </h1>
          <ul className="list-disc md:pl-10 pl-5">
            <li>UGC-recognized Distance Education Partner </li>
            <li>Job-Oriented Computer Courses </li>
            <li>Placement Assistance</li>
            <li>Online & Offline Classes </li>
            <li>Practical Training + Live Projects</li>
            <li>Affordable Fees & Easy Admission Process</li>
          </ul>
        </div>
        <div className="grid grid-cols-1 gap-2">
          <h1 className="text-2xl font-semibold text-custom-600">
            Testimonials
          </h1>
          <div className="text-custom-800 text-md ml-5 ">
            "Hope helped me complete my B.A. while learning web design. Today,
            I’m working and studying at the same time."
            <span className="text-custom-400 block ml-4 text-sm font-semibold">
              — Sonal Mishra, B.A. Student + Web Design Trainee
            </span>
          </div>
          <div className="text-custom-800 text-md ml-5 ">
            “I couldn’t attend college full-time, but Hope gave me a second
            chance through distance education. I passed B.Com while working
            part-time.”
            <span className="text-custom-400 block ml-4 text-sm font-semibold">
              — Rajeev Kumar, B.Com Graduate
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3">
          <h1 className="text-2xl font-semibold text-custom-600">
            Join Hope Group of Institutions Today
          </h1>
          <p className="text-custom-500 ml-5 text-md">
            At Hope Group of Institutions, we believe that education is the key
            to unlocking opportunities and transforming lives. Our Whether
            you're looking to build tech skills, pursue a degree, or do both
            <span className="text-custom-400 block ml-4 text-sm font-semibold">
              —Hope Group of Institutions is your gateway to a better future.
              Take your first step today!
            </span>
          </p>
          <div id="AboutAUI" className="text-custom-500 ml-5 text-md my-3">
            <ul className=" grid gap-4">
              <li>📍 Location: Near GGIC School, Lakhimpur Kheri, U.P. </li>
              <li>📞 Contact: 7007578352, 7275409996 </li>
              <li>🌐 Website: www.hope institutions.in</li>
              <li>📧 Email: sanjay.niec13@gmail.com</li>
            </ul>
          </div>
        </div>

        {/*  */}
      </div>
    </div>
  );
}
{
  /* <div className=" md:px-5 px-2 grid grid-cols-1 grid-rows-[20% auto] gap-2">
      <div id="top" className="text-left text-custom-600 py-4">
        <h1 className="text-3xl font-bold">
          <SectionTitle
            title={"About"}
            subTitle={InstituteShotName}
            className="underline underline-offset-5"
          />
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-5 text-custom-600">
        <div className="grid grid-cols-1 gap-2">
          <h1 className="text-2xl font-semibold text-custom-600 ">
            Welcome to {InstituteFullName}
            <p className="text-custom-400 text-sm">
              Empowering Futures Through Technology & Education
            </p>
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-2">
          <h1 className="text-custom-600 font-semibold text-2xl">Who We Are</h1>
          <p className="text-custom-500">
            At Hope Group of Institutions, our mission is to provide
            <span className="font-bold"> accessible, career-focused </span>
            education to students from all walks of life. From computer courses
            that teach real-world tech skills to university-recognized distance
            degree programs, we are dedicated to helping students move forward.
            <span className="text-custom-600 font-semibold">
              
              —academically and professionally
            </span>
          </p>
          <p className="text-custom-500">
            We’ve trained hundreds of students from local schools and colleges
            and have become a center for practical learning, skill-building, and
            now, higher education.
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-custom-600">
            Our Key Offerings:
          </h1>
          <ul className="list-disc md:pl-10 pl-5 grid gap-4 mt-3">
            <li>
              <div>
                <h1 className="text-xl font-semibold text-custom-500">
                  Professional Courses:
                </h1>
                <ul className="list-disc md:pl-10 pl-5 ">
                  <li>Web Development</li>
                  <li>Data Science</li>
                  <li>Digital Marketing</li>
                  <li>Graphic Design</li>
                  <li>O'Level</li>
                  <li>Tally & Office Automation</li>
                  <li>Programming (Python, C, C++)</li>
                  <li>PGDCA</li>
                  <li>Programming (Python, C, C++)</li>
                  <li>PGDCA Basic & Advanced Computer Skills</li>
                </ul>
              </div>
            </li>
            <li>
              <div>
                <h1 className="text-xl font-semibold text-custom-500">
                  🎓 Distance University Programs (UG & PG):
                </h1>
                <p className="text-custom-500">
                  We offer university-affiliated distance learning programs for
                  students who want to pursue higher education with flexibility:
                </p>
                <ul className="list-disc md:pl-10 pl-5">
                  <li>Distance University Programs (UG & PG)</li>
                  <li>Bachelor of Arts (B.A.)</li>
                  <li>Bachelor of Science (B.Sc.)</li>
                  <li>Bachelor of Commerce (B.Com)</li>
                  <li>Master of Arts (M.A.)</li>
                  <li>Master of Science (M.Sc.)</li>
                  <li>Master of Commerce (M.Com)</li>
                  <li>Bachelor of Business Administration (BBA)</li>
                  <li>Master of Business Administration (MBA)</li>
                  <li>Bachelor of Computer Applications (BCA)</li>
                  <li>Postgraduate Courses also available</li>
                  <li>Diploma in Computer Applications (DCA)</li>
                  <li>Postgraduate Diploma in Computer Applications (PGDCA)</li>
                </ul>
                <p className="text-custom-500">
                  These programs are ideal for students who wish to continue
                  their education while working, preparing for competitive
                  exams, or upskilling in parallel with technical training.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 gap-2">
          <h1 className="text-2xl font-semibold text-custom-600">
            Why Choose Hope?
          </h1>
          <ul className="list-disc md:pl-10 pl-5">
            <li>UGC-recognized Distance Education Partner </li>
            <li>Job-Oriented Computer Courses </li>
            <li>Placement Assistance</li>
            <li>Online & Offline Classes </li>
            <li>Practical Training + Live Projects</li>
            <li>Affordable Fees & Easy Admission Process</li>
          </ul>
        </div>
        <div className="grid grid-cols-1 gap-2">
          <h1 className="text-2xl font-semibold text-custom-600">
            Testimonials
          </h1>
          <div className="text-custom-800 text-md ml-5 ">
            "Hope helped me complete my B.A. while learning web design. Today,
            I’m working and studying at the same time."
            <span className="text-custom-400 block ml-4 text-sm font-semibold">
              — Sonal Mishra, B.A. Student + Web Design Trainee
            </span>
          </div>
          <div className="text-custom-800 text-md ml-5 ">
            “I couldn’t attend college full-time, but Hope gave me a second
            chance through distance education. I passed B.Com while working
            part-time.”
            <span className="text-custom-400 block ml-4 text-sm font-semibold">
              — Rajeev Kumar, B.Com Graduate
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3">
          <h1 className="text-2xl font-semibold text-custom-600">
            Join Hope Group of Institutions Today
          </h1>
          <p className="text-custom-500 ml-5 text-md">
            At Hope Group of Institutions, we believe that education is the key
            to unlocking opportunities and transforming lives. Our Whether
            you're looking to build tech skills, pursue a degree, or do both
            <span className="text-custom-400 block ml-4 text-sm font-semibold">
              
              —Hope Group of Institutions is your gateway to a better future.
              Take your first step today!
            </span>
          </p>
          <div id="AboutAUI" className="text-custom-500 ml-5 text-md my-3">
            <ul className=" grid gap-4">
              <li>📍 Location: Near GGIC School, Lakhimpur Kheri, U.P. </li>
              <li>📞 Contact: 7007578352, 7275409996 </li>
              <li>🌐 Website: www.hope institutions.in</li>
              <li>📧 Email: sanjay.niec13@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div> */
}
