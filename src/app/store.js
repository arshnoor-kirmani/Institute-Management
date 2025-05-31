import { configureStore } from "@reduxjs/toolkit";
import HomeSlice from "./webstore/HomeSlice/HomeSlice";
import HeaderSlice from "./webstore/HeaderSlice/HeaderSlice";
import FooterSlice from "./webstore/FooterSlice/FooterSlice";
import ProgrammeSlice from "./webstore/ProgrammeSlice/ProgrammeSlice";
import InstituteInfoSlice from "./InstituteinfoSlice/InstituteInfoSlice";

const store = configureStore({
  reducer: {
    home: HomeSlice,
    header: HeaderSlice,
    footer: FooterSlice,
    coursenames: ProgrammeSlice,
    instituteInfo: InstituteInfoSlice,
  },
});

export default store;
