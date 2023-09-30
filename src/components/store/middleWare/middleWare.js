import {
    userData,
    userDeleteHistoryItem,
} from "../../pages/LoginPage/LoginPage.Slice";
import { fetchAddFavoriteCharacter } from "../../pages/FavoritePage/FavoritePage.slice";
import { fetchFavoriteCharacter } from "../../pages/FavoritePage/FavoritePage.slice";
import { deleteFavoritemCharacter } from "../../pages/FavoritePage/FavoritePage.slice";

export const favoriteMiddleWare = (state) => (next) => (action) => {
    if (action.type === "api/executeMutation/fulfilled") {
        if (
            !action.payload.deleteFavorite &&
            action.payload !== "ok" &&
            !action.payload.deleteHistory
        ) {
            const { favorite, history } = action.payload;
            state.dispatch(userData({ favorite, history }));
            state.dispatch(fetchAddFavoriteCharacter(favorite));
        }
        if (action.payload.deleteFavorite) {
            state.dispatch(
                deleteFavoritemCharacter(action.payload.deletedItem)
            );
            const { favorite, history } = action.payload;
            state.dispatch(userData({ favorite, history }));
        }
        if (action.payload.deleteHistory) {
            state.dispatch(userDeleteHistoryItem(action.payload.deletedItem));
            const { favorite, history } = action.payload;
            state.dispatch(userData({ favorite, history }));
        }
    }
    if (action.type === "api/executeQuery/fulfilled") {
        if (action.payload.getAll === true) {
            const { favorite, history } = action.payload;
            state.dispatch(userData({ favorite, history }));
            state.dispatch(fetchFavoriteCharacter(favorite));
        }
    }

    next(action);
};
