import { apiFireBaseSlice } from "../../apiFirebase/apiFireBaseSlice";
import characters from "../pages/MainPage/MainPageSlice";
import login from "../pages/LoginPage/LoginPageSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        characters,
        login,
        [apiFireBaseSlice.reducerPath]: apiFireBaseSlice.reducer,
    },
    middleware: (getDefaultMidleWare) =>
        getDefaultMidleWare().concat(apiFireBaseSlice.middleware),
    devTools: process.env.NODE_ENV !== "production",
});

export default store;
