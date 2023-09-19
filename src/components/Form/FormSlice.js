import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    userEmail: '',
    userPass: ''
}

const FormSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        changeUserEmail: (state,action) => {
            state.userEmail = action.payload;
        },
        changeUserPass: (state, action) => {
            state.userPass = action.payload;
        }
    },
});

const { actions, reducer } = FormSlice;

export const {
    changeUserEmail,
    changeUserPass
} = actions;
export default reducer;