import { favoriteMiddleWare } from "./middleWare/middleWare";
import { apiFireBaseSlice } from "../../apiFirebase/apiFireBase.Slice";
import characters from "../pages/MainPage/MainPage.Slice";
import login from "../pages/LoginPage/LoginPage.Slice";
import favorite from "../pages/FavoritePage/FavoritePage.slice";
import search from "../pages/FoundCharactersPage/FoundCharactersPage.slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        characters,
        login,
        favorite,
        search,
        [apiFireBaseSlice.reducerPath]: apiFireBaseSlice.reducer,
    },
    middleware: (getDefaultMidleWare) =>
        getDefaultMidleWare().concat(
            apiFireBaseSlice.middleware,
            favoriteMiddleWare
        ),
    devTools: process.env.NODE_ENV !== "production",
});

export default store;
