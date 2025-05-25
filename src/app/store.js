import { configureStore } from "@reduxjs/toolkit";
import HomeSlice from "./webstore/HomeSlice/HomeSlice";
import HeaderSlice from "./webstore/HeaderSlice/HeaderSlice";
import FooterSlice from "./webstore/FooterSlice/FooterSlice";
import ProgrammeSlice from "./webstore/ProgrammeSlice/ProgrammeSlice";
const store = configureStore({
  reducer: {
    home: HomeSlice,
    header: HeaderSlice,
    footer: FooterSlice,
    coursenames: ProgrammeSlice,
  },
});

export default store;
