import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userEmail: "",
    userOnline: "",
    userOnlineFavorite: "",
    userOnlineHistory: "",
};

const LoginPageSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        useronline: (state, actionUser) => {
            if (actionUser.payload !== "offline") {
                state.userOnline = true;
                state.userEmail = actionUser.payload;
            } else if (actionUser.payload === "offline") {
                state.userOnline = false;
                state.userEmail = "";
            }
        },
        userData: (state, actionFavorite) => {
            state.userOnlineFavorite = actionFavorite.payload.favorite;
            state.userOnlineHistory = actionFavorite.payload.history;
        },
        userDropData: (state) => {
            state.userOnlineFavorite = "";
            state.userOnlineHistory = "";
        },
    },
});

const { actions, reducer } = LoginPageSlice;

export const { userDropData, userData, useronline } = actions;
export default reducer;
