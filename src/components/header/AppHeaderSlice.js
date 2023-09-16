import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userLogin: false
}

const HeaderSlice = createSlice({
    name: 'filterLoggerUser',
    initialState,
    reducers: {
        userLogIn: (state) => {
            state.userLogin = true
        },
        userLogOut: (state) => {
            state.userLogin = false
        }
    },
});

const { actions, reducer } = HeaderSlice;

export const {
    userLogIn,
    userLogOut
} = actions;
export default reducer;