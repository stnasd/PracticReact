import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useCharService from '../../../services/CharsServices'




const initialState = {
    characters: [],
    newCharacters: [],
    charLoadingStatus: 'idle',
    page: 1
}

export const fetchCharacters = createAsyncThunk(
    'characters/fetchCharacters',
    () => {
        const { getAllCharacters } = useCharService()
        const res = getAllCharacters()
        return res
    }
)

const MainPageSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        addCharactersPage: (state) => {
            state.page = state.page + 1
        },
        addCharactersItems: (state, action) => {
            state.characters = [...state.characters, ...action.payload];
        }
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


const { actions, reducer } = MainPageSlice;

export const {
    addCharactersPage,
    addCharactersItems
} = actions;
export default reducer;