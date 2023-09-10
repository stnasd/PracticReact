import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useCharService from '../../../services/CharsServices'


const initialState = {
    characters: [],
    charLoadingStatus: 'idle'
}


export const fetchCharacters = createAsyncThunk(
    'characters/fetchCharacters',
    () => {
        const { getAllCharacters } = useCharService()
        console.log(getAllCharacters())
        return getAllCharacters()
    }
)


const CharInfoSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCharacters.pending, state => { state.charLoadingStatus = 'loading'; })
            .addCase(fetchCharacters.fulfilled,
                (state, action) => {
                    state.charLoadingStatus = 'idle';
                    state.characters = action.payload;
                })
            .addCase(fetchCharacters.rejected,
                state => {
                    state.charLoadingStatus = 'error';
                })
            .addDefaultCase(() => { })
    }
});



const { reducer } = CharInfoSlice;

export default reducer;