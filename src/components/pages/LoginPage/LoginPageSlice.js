import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    userEmail: '',
    userOnline: ''
}

const LoginPageSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        useronline: (state, actionUser) => {
            if (actionUser.payload !== 'offline') {
                state.userOnline = true
                state.userEmail = actionUser.payload
            } else if (actionUser.payload === 'offline') {
                state.userOnline = false
                state.userEmail = ''
            }
        },
    },
});

const { actions, reducer } = LoginPageSlice;

export const {
    useronline
} = actions;
export default reducer;