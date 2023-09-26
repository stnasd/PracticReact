import {
    fetchCharacters,
    fetchCharacter,
    addCharactersPage,
    addCharactersItems,
} from "./MainPageSlice";
import { fetchFavoriteCharacter } from "../FavoritePage/FavoritePage.slice";
import { deleteFavoriteCharacter } from "../FavoritePage/FavoritePage.slice";
import { useUpdateFavoriteMutation } from "../../../apiFirebase/apiFireBaseSlice";
import { useDeleteFavoriteMutation } from "../../../apiFirebase/apiFireBaseSlice";
import { userData } from "../LoginPage/LoginPageSlice";
import useCharService from "../../../services/CharsServices";
import CharsList from "../../CharsList/CharsList";
import SearchItem from "../../SearchItem/SearchItem";
import Spinner from "../../Spinner/Spinner";
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";
import "./MainPage.scss";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { getAllCharacters } = useCharService();
    const [updateFavoriteFn] = useUpdateFavoriteMutation();
    const [deleteFavoriteFn] = useDeleteFavoriteMutation();

    const loadingStatus = useSelector(
        (state) => state.characters.charsLoadingStatus
    );
    const charactersList = useSelector(
        (state) => state.characters.charactersList
    );
    const charsPage = useSelector((state) => state.characters.page);
    const email = useSelector((state) => state.login.userEmail);
    const favorite = useSelector((state) => state.login.userOnlineFavorite);
    const userOnline = useSelector((state) => state.login.userOnline);

    const onChangeTargetCharacter = (e) => {
        dispatch(fetchCharacter(e));
        navigate("/info");
    };

    const onAddNewFavorite = (newFavorite) => {
        const data = updateFavoriteFn({ email, newFavorite });
        data.then((res) => {
            const { favorite, history } = res.data;
            dispatch(userData({ favorite, history }));
            dispatch(fetchFavoriteCharacter(newFavorite));
        });
    };
    const onDeleteFavorite = (favoriteItem) => {
        const data = deleteFavoriteFn({ email, favoriteItem });
        data.then((res) => {
            const { favorite, history } = res.data;
            dispatch(userData({ favorite, history }));
            dispatch(deleteFavoriteCharacter(favoriteItem));
        });
    };

    useEffect(() => {
        dispatch(fetchCharacters());
    }, [dispatch]);

    const onLoadNewCharacters = (page) => {
        dispatch(addCharactersPage());
        const result = getAllCharacters(page + 1);
        result.then((res) => dispatch(addCharactersItems(res)));
    };

    if (loadingStatus === "loading") {
        return <Spinner />;
    } else if (loadingStatus === "error") {
        return <h5>Ошибка загрузки</h5>;
    }

    return (
        <motion.div
            className="app__main"
            initial={{ opacity: 0, transition: { duration: 0.1 } }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
        >
            <>
                <div className="app__main-grid">
                    <ErrorBoundary>
                        <CharsList
                            favorite={favorite}
                            charactersList={charactersList}
                            onChangeTargetCharacter={onChangeTargetCharacter}
                            onAddNewFavorite={onAddNewFavorite}
                            onDeleteFavorite={onDeleteFavorite}
                            userOnline={userOnline}
                        />
                    </ErrorBoundary>
                </div>
                <div className="app__main-search-field">
                    <label className="form__label" htmlFor="button__char">
                        Найти персонажа
                    </label>
                    <br />
                    <br />
                    <SearchItem />
                </div>
            </>
            <button
                className="button__char"
                onClick={() => onLoadNewCharacters(charsPage)}
            >
                <div className="inner">load more</div>
            </button>
        </motion.div>
    );
};
export default MainPage;
