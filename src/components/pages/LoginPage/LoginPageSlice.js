import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userLogIn: false,
}

const LoginPageSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        userLogin: (state) => {
            state.userLogIn = true;
        },
        userLogout: (state) => {
            state.userLogIn = false;
        }
    },
});

const { actions, reducer } = LoginPageSlice;

export const {
    userLogin,
    userLogout
} = actions;
export default reducer;