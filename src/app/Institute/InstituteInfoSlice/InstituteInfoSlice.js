import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  instituteName: "Hope Group of Institutions",
  owner: "Snajay Dheeman",
  ownerProfileurl: null,
  instituteShortName: "HGI",
  instituteLogo: "",
  instituteAddress:
    "Near G.G.I.C College, Lakhimpur-Kheri, Uttar Pradesh, India",
  instituteCity: "Lakhimpur-Kheri",
  instituteState: "Uttar Pradesh",
  institutePostalCode: "262701",
  instituteEmail: "hope@gmail.com",
  institutePhone: "1234567890",

  instituteWebsite: "www.hope.edu.in",
  instituteDescription:
    "Hope Group of Institutions is a premier educational institution dedicated to providing quality education and fostering holistic development in students. Our mission is to empower learners with knowledge, skills, and values that will enable them to excel in their chosen fields and contribute positively to society.",
  instituteSocialLinks: {
    facebook: "https://www.facebook.com/hope",
    twitter: "https://twitter.com/hope",
    instagram: "https://www.instagram.com/hope",
  },

  instituteContactPerson: {
    name: "Snajay Dheeman",
    email: "snajay.dheeman@hope.edu.in",
    phone: "1234567890",
    gender: "male",
  },
  instituteEstablishedYear: "2000",

  instituteAccreditation: "NAAC Accredited",
  instituteAffiliations: ["AICTE", "UGC"],
  instituteFacilities: {
    library: false,
    laboratory: false,
    sports: false,
    hostel: false,
    cafeteria: false,
  },
  instituteAchievements: [],
  institutePolicies: {
    admissionPolicy: "  Admission is based on merit and entrance exams.",
    codeOfConduct:
      "All students are expected to adhere to the code of conduct.",
    feePolicy: "Fees are to be paid on a semester basis.",
    attendancePolicy: "Minimum attendance of 75% is required.",
    examinationPolicy: "Exams will be conducted at the end of each semester.",
  },
  instituteFAQs: [],
  instituteTermsAndConditions: "Institute Terms and Conditions",
  instituteSupport: {
    email: "support@hope.edu.in",
    phone: "1234567890",
    supportHours: "9 AM - 5 PM",
  },
  models: {
    Module: 36,
    Lessons: 36,
    Assignments: 36,
    Quizzes: 36,
    Exams: 36,
    Teachers: 36,
  },
  websiteofficial: "https://hopeinstitutions.netlify.app",
  routes: [
    "/home",
    "/about",
    "/programmes",
    "/vocational",
    "/admission",
    "/research",
    "/placements",
    "/studentzone",
    "/lifehope",
    "/admission2025",
    "/downloads",
    "/applynow",
    "/studentlogin",
    "/login",
    "/contactus",
  ],
};
const instituteInfoSlice = createSlice({
  name: "instituteInfo",
  initialState,
});
export default instituteInfoSlice.reducer;
