import useCharService from "../../../services/CharsServices";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    searchCharacters: [],
    foundСharacters: [],
    loadingStatus: "",
    inputChange: "",
};

export const getSearhCharacterFetch = createAsyncThunk(
    "favorite/fetchAddFavoriteCharacter",
    (name) => {
        const { getSearchCharacters } = useCharService();
        const res = getSearchCharacters(name);
        return res;
    }
);

const SearchItemSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        changeInputSearch: (state, actionInputChange) => {
            state.inputChange = actionInputChange.payload;
        },
        clearInput: (state) => {
            state.inputChange = "";
            state.searchCharacters = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getSearhCharacterFetch.pending, (state) => {
                state.loadingStatus = "loading";
            })
            .addCase(
                getSearhCharacterFetch.fulfilled,
                (state, actionCharSearch) => {
                    state.loadingStatus = "idle";
                    state.searchCharacters = actionCharSearch.payload;
                    state.foundСharacters = actionCharSearch.payload;
                }
            )
            .addCase(getSearhCharacterFetch.rejected, (state) => {
                state.searchCharacters = [];
                state.loadingStatus = "error";
            })
            .addDefaultCase(() => {});
    },
});

const { actions, reducer } = SearchItemSlice;

export const { changeInputSearch, clearInput } = actions;

export default reducer;
