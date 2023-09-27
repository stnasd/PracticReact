import useCharService from "../../../services/CharsServices";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    favoriteIdCharacters: [],
    loadingStatus: "",
    addLoadingStatus: "",
};

export const fetchFavoriteCharacter = createAsyncThunk(
    "favorite/fetchFavoriteCharacter",
    (id) => {
        const { getFavoriteCharacters } = useCharService();
        const res = getFavoriteCharacters(id);
        return res;
    }
);

export const fetchAddFavoriteCharacter = createAsyncThunk(
    "favorite/fetchAddFavoriteCharacter",
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
        deleteFavoritemCharacter: (state, actionId) => {
            state.favoriteIdCharacters = state.favoriteIdCharacters.filter(
                (item) => {
                    return item.id !== actionId.payload;
                }
            );
        },
        userQuit: (state) => {
            state.favoriteIdCharacters = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFavoriteCharacter.pending, (state) => {
                state.loadingStatus = "loading";
            })
            .addCase(
                fetchFavoriteCharacter.fulfilled,
                (state, actionFavorite) => {
                    state.loadingStatus = "idle";
                    state.favoriteIdCharacters = actionFavorite.payload;
                }
            )
            .addCase(fetchFavoriteCharacter.rejected, (state) => {
                state.loadingStatus = "error";
            })
            .addCase(fetchAddFavoriteCharacter.pending, (state) => {
                state.addLoadingStatus = "loading";
            })
            .addCase(
                fetchAddFavoriteCharacter.fulfilled,
                (state, actionFavorite) => {
                    state.addLoadingStatus = "idle";
                    state.favoriteIdCharacters.push(actionFavorite.payload);
                }
            )
            .addCase(fetchAddFavoriteCharacter.rejected, (state) => {
                state.addLoadingStatus = "error";
            })
            .addDefaultCase(() => {});
    },
});

const { actions, reducer } = FavoritePageSlice;

export const { deleteFavoritemCharacter, userQuit } = actions;
export default reducer;
