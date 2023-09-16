import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useCharService from '../../../services/CharsServices'

<<<<<<< HEAD
const initialState = {
    charactersList: [],
    newCharactersList: [],
=======



const initialState = {
    characters: [],
    newCharacters: [],
>>>>>>> 8af18e691da3026bd24648674fadd759ad96fd91
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
<<<<<<< HEAD
            state.charactersList.push(...[...action.payload]);
=======
            state.characters.push(...[...action.payload]);
>>>>>>> 8af18e691da3026bd24648674fadd759ad96fd91
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCharacters.pending, state => { state.charLoadingStatus = 'loading'; })
            .addCase(fetchCharacters.fulfilled,
                (state, action) => {
                    state.charLoadingStatus = 'idle';
<<<<<<< HEAD
                    state.charactersList = action.payload;
=======
                    state.characters = action.payload;
>>>>>>> 8af18e691da3026bd24648674fadd759ad96fd91
                })
            .addCase(fetchCharacters.rejected,
                state => {
                    state.charLoadingStatus = 'error';
                })
            .addDefaultCase(() => { })
    }
});

<<<<<<< HEAD
=======

>>>>>>> 8af18e691da3026bd24648674fadd759ad96fd91
const { actions, reducer } = MainPageSlice;

export const {
    addCharactersPage,
    addCharactersItems
} = actions;
export default reducer;