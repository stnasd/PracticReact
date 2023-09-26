import { deleteFavoriteCharacter } from "./FavoritePage.slice";
import { fetchCharacter } from "../MainPage/MainPageSlice";
import { useDeleteFavoriteMutation } from "../../../apiFirebase/apiFireBaseSlice";
import { useLazyGetInfoUserQuery } from "../../../apiFirebase/apiFireBaseSlice";
import { userData } from "../LoginPage/LoginPageSlice";
import FavoriteListItem from "../../FavoriteList/FavoriteListItem";
import "./FavoritePage.scss";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const FavoritePage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [triggerGetinfo] = useLazyGetInfoUserQuery();
    const [deleteFavoriteFn] = useDeleteFavoriteMutation();
    const userOnline = useSelector((state) => state.login.userOnline);
    const email = useSelector((state) => state.login.userEmail);
    const favoriteCharacters = useSelector(
        (state) => state.favorite.favoriteIdCharacters
    );

    useEffect(() => {
        if (!userOnline) {
            navigate("/");
        }
    }, [userOnline, navigate]);

    useEffect(() => {
        triggerGetinfo(email).then((res) => {
            const { favorite, history } = res.data;
            dispatch(userData({ favorite, history }));
        });
    }, [triggerGetinfo, dispatch, email]);

    const onDeleteFavorite = (favoriteItem) => {
        const data = deleteFavoriteFn({ email, favoriteItem });
        data.then((res) => {
            const { favorite, history } = res.data;
            dispatch(userData({ favorite, history }));
            dispatch(deleteFavoriteCharacter(favoriteItem));
        });
    };
    const onChangeTargetCharacter = (e) => {
        dispatch(fetchCharacter(e));
        navigate("/info");
    };

    return (
        <motion.div
            className="app__favorite"
            initial={{ opacity: 0, transition: { duration: 0.1 } }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
        >
            <div className="app__favorite-text">
                Ваши избранные персонажи
                <button>Очистить все</button>
            </div>
            <div className="app__favorite-grid">
                <FavoriteListItem
                    onChangeTargetCharacter={onChangeTargetCharacter}
                    onDeleteFavorite={onDeleteFavorite}
                    favoriteCharacters={favoriteCharacters}
                />
            </div>
        </motion.div>
    );
};

export default FavoritePage;
