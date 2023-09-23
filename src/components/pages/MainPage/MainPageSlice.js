import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useCharService from '../../../services/CharsServices'


const initialState = {
    charactersList: [],
    character: [],
    charsLoadingStatus: 'idle',
    charLoadingStatus: 'idle',
    page: 1
}
export const fetchCharacter = createAsyncThunk(
    'characters/fetchCharacter',
    (id) => {
        const { getCharacter } = useCharService()
        const res = getCharacter(id)
        return res
    }
)

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
            state.charactersList.push(...[...action.payload]);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCharacters.pending, state => { state.charsLoadingStatus = 'loading'; })
            .addCase(fetchCharacters.fulfilled,
                (state, action) => {
                    state.charsLoadingStatus = 'idle';
                    state.charactersList = action.payload;
                })
            .addCase(fetchCharacters.rejected,
                state => {
                    state.charsLoadingStatus = 'error';
                })
            .addCase(fetchCharacter.pending, state => { state.charLoadingStatus = 'loading'; })
            .addCase(fetchCharacter.fulfilled,
                (state, actionUser) => {
                    state.charLoadingStatus = 'idle';
                    state.character = actionUser.payload
                })
            .addCase(fetchCharacter.rejected,
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