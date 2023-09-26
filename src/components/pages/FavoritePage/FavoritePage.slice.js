import useCharService from "../../../services/CharsServices";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    favoriteIdCharacters: [],
    loadingStatus: "",
};

export const fetchFavoriteCharacter = createAsyncThunk(
    "characters/fetchFavoriteCharacter",
    (id) => {
        const { getCharacter } = useCharService();
        const res = getCharacter(id);
        return res;
    }
);

const FavoritePageSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        deleteFavoriteCharacter: (state, actionId) => {
            state.favoriteIdCharacters = state.favoriteIdCharacters.filter(
                (item) => {
                    return item.id !== actionId.payload;
                }
            );
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFavoriteCharacter.pending, (state) => {
                state.loadingStatus = "loading";
            })
            .addCase(fetchFavoriteCharacter.fulfilled, (state, action) => {
                state.loadingStatus = "idle";
                state.favoriteIdCharacters.push(action.payload);
            })
            .addCase(fetchFavoriteCharacter.rejected, (state) => {
                state.loadingStatus = "error";
            })
            .addDefaultCase(() => {});
    },
});

const { actions, reducer } = FavoritePageSlice;

export const { deleteFavoriteCharacter } = actions;
export default reducer;
