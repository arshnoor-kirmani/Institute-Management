import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  FacultyofManagement: {
    title: "Management",
    subtitle: "Management Courses",
    buttontext: "Apply now",
    overview: [
      "The Faculty of Management offers a range of programs designed to equip students with the skills and knowledge necessary for success in the business world. Our courses cover various aspects of management, including strategic planning, organizational behavior, and financial management. Whether you are looking to start your career in management or advance your existing skills, our programs provide a solid foundation for your professional journey.",
      " The Faculty of Management is dedicated to fostering leadership and innovation in the business sector. Our curriculum is designed to provide students with a comprehensive understanding of management principles, practical skills, and real-world applications. We emphasize experiential learning through case studies, group projects, and internships, ensuring that our graduates are well-prepared to meet the challenges of today's dynamic business environment.",
    ],
    CourseNames: [
      "Bachelor of Business Administration (BBA)",
      "Master of Business Administration (MBA)",
      "Diploma in Management Studies",
      "Executive MBA",
    ],
  },
  FacultyofScience: {
    title: "Science",
    subtitle: "Science Courses",
    buttontext: "Apply now",
    overview: [
      "The Faculty of Science offers a diverse range of programs that explore the fundamental principles of the natural and physical sciences. Our courses are designed to provide students with a strong foundation in scientific theory and practical applications, preparing them for careers in research, technology, healthcare, and more.",
      "We emphasize hands-on learning through laboratory work, field studies, and research projects. Our faculty members are experts in their fields, providing students with mentorship and guidance as they navigate their academic and professional paths.",
    ],
    CourseNames: [
      "Bachelor of Science (BSc) in Physics",
      "Bachelor of Science (BSc) in Chemistry",
      "Bachelor of Science (BSc) in Biology",
      "Master of Science (MSc) in Environmental Science",
    ],
  },
  FacultyofArts: {
    title: "Arts",
    subtitle: "Arts Courses",
    buttontext: "Apply now",
    overview: [
      "The Faculty of Arts offers a rich tapestry of programs that delve into the humanities and social sciences. Our courses encourage critical thinking, creativity, and cultural understanding, preparing students for diverse careers in education, media, public service, and the arts.",
      "We provide a supportive environment where students can explore their interests, engage in interdisciplinary studies, and develop their unique voices. Our faculty members are passionate educators who inspire students to think deeply and engage with the world around them.",
      "We emphasize experiential learning through internships, community engagement, and research projects, allowing students to apply their knowledge in real-world contexts.",
    ],
    CourseNames: [
      "Bachelor of Arts (BA) in English Literature",
      "Bachelor of Arts (BA) in History",
      "Bachelor of Arts (BA) in Psychology",
      "Master of Arts (MA) in Sociology",
    ],
  },
  FacultyofCommerce: {
    title: "Commerce",
    subtitle: "Commerce Courses",
    buttontext: "Apply now",
    overview: [
      "The Faculty of Commerce provides a comprehensive education in business and finance, equipping students with the skills needed to thrive in the global marketplace. Our programs cover essential topics such as accounting, economics, marketing, and business law.",
      "We focus on practical applications and real-world scenarios, ensuring that our graduates are well-prepared for careers in various sectors, including banking, finance, and corporate management.",
      " Our faculty members are industry professionals who bring their expertise into the classroom, providing students with valuable insights and networking opportunities.",
    ],
    CourseNames: [
      "Bachelor of Commerce (BCom) in Accounting",
      "Bachelor of Commerce (BCom) in Finance",
      "Bachelor of Commerce (BCom) in Business Law",
      "Master of Commerce (MCom) in International Business",
    ],
  },
  "FacultyofEngineering&Technology": {
    title: "Engineering&Technology",
    subtitle: "Engineering Courses",
    buttontext: "Apply now",
    overview: [
      "The Faculty of Engineering offers cutting-edge programs that prepare students for careers in various engineering disciplines. Our courses combine theoretical knowledge with practical skills, ensuring that graduates are equipped to tackle complex engineering challenges.",
      "We emphasize innovation and problem-solving, encouraging students to engage in research and development projects. Our faculty members are experienced engineers who provide mentorship and guidance throughout the academic journey.",
    ],
    CourseNames: [
      "Bachelor of Engineering (BEng) in Civil Engineering",
      "Bachelor of Engineering (BEng) in Mechanical Engineering",
      "Bachelor of Engineering (BEng) in Electrical Engineering",
      "Master of Engineering (MEng) in Sustainable Energy Systems",
    ],
  },
  FacultyofLaw: {
    title: "Law",
    subtitle: "Law Courses",
    buttontext: "Apply now",
    overview: [
      "The Faculty of Law offers a rigorous education in legal principles and practices, preparing students for successful careers in the legal profession. Our programs cover various areas of law, including constitutional law, criminal law, and international law.",
      "We emphasize critical thinking, ethical reasoning, and practical skills through moot courts, internships, and legal clinics. Our faculty members are experienced legal practitioners who provide valuable insights and mentorship to our students.",
    ],
    CourseNames: [
      "Bachelor of Laws (LLB)",
      "Master of Laws (LLM) in Human Rights Law",
      "Diploma in Legal Studies",
      "Executive LLM in Corporate Law",
    ],
  },
  FacultyofPharmacy: {
    title: "Health Sciences & Pharmacy",
    subtitle: "Health Sciences Courses & Pharmacy",
    buttontext: "Apply now",
    overview: [
      "The Faculty of Health Sciences & Pharmacy offers a comprehensive education in healthcare and pharmaceutical sciences. Our programs are designed to equip students with the knowledge and skills necessary for careers in healthcare, pharmacy, and public health.",
      "We emphasize a patient-centered approach, focusing on the importance of healthcare delivery, medication management, and public health initiatives. Our faculty members are experienced healthcare professionals who provide mentorship and support to our students.",
    ],
    CourseNames: [
      "Bachelor of Science in Nursing (BSN)",
      "Master of Public Health (MPH)",
      "Diploma in Healthcare Management",
      "Executive MPH in Global Health",
    ],
  },
  "FacultyofHotelManagement&CateringTechnology": {
    title: "Hotel Management & Catering Technology",
    subtitle: "Hotel Management Courses",
    buttontext: "Apply now",
    overview: [
      "The Faculty of Hotel Management & Catering Technology offers specialized programs that prepare students for careers in the hospitality industry. Our courses cover various aspects of hotel management, catering, and event planning.",
      "We focus on practical skills and real-world applications, ensuring that our graduates are well-prepared to excel in the dynamic hospitality sector. Our faculty members are industry experts who provide valuable insights and networking opportunities.",
    ],
    CourseNames: [
      "Bachelor of Hotel Management (BHM)",
      "Diploma in Catering Technology",
      "Master of Hotel Management (MHM)",
      "Executive Diploma in Hospitality Management",
    ],
  },
};
const ProgrammeSlice = createSlice({
  name: "coursenames",
  initialState,
  reducers: {
    // Define your reducers here
  },
});

export default ProgrammeSlice.reducer;
