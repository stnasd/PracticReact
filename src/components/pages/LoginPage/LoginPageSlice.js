import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userLogIn: false,
    userEmail: '',
    userLoadingStatus: ''
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
        },
        userEmail: (state, actionEmail) => {
            state.userEmail = actionEmail
        }
    },
});

const { actions, reducer } = LoginPageSlice;

export const {
    userLogin,
    userLogout,
    userEmail
} = actions;
export default reducer;