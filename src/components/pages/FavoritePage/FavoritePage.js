import { useAllSelectors } from "../../selectors/selectors";
import { fetchCharacter } from "../MainPage/MainPage.Slice";
import { useDeleteFavoriteMutation } from "../../../apiFirebase/apiFireBase.Slice";
import { useLazyGetInfoUserQuery } from "../../../apiFirebase/apiFireBase.Slice";
import FavoriteListItem from "../../FavoriteList/FavoriteListItem";
import "./FavoritePage.scss";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const FavoritePage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [triggerGetinfo] = useLazyGetInfoUserQuery();
    const [deleteFavoritemFn] = useDeleteFavoriteMutation();

    const { userOnline, userEmail, favoriteIdCharacters } = useAllSelectors();
    useEffect(() => {
        if (!userOnline) {
            navigate("/");
        }
    }, [userOnline, navigate]);

    useEffect(() => {
        triggerGetinfo(userEmail);
    }, [triggerGetinfo, dispatch, userEmail]);

    const onDeleteFavorite = (favoriteItem) => {
        deleteFavoritemFn({ userEmail, favoriteItem });
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
            <div className="app__favorite-text">Ваши избранные персонажи</div>
            <div className="app__favorite-grid">
                {favoriteIdCharacters.length !== 0 ? (
                    <FavoriteListItem
                        onChangeTargetCharacter={onChangeTargetCharacter}
                        onDeleteFavorite={onDeleteFavorite}
                        favoriteIdCharacters={favoriteIdCharacters}
                    />
                ) : (
                    <div className="history__items-url">
                        Избранных персонажей пока нет
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default FavoritePage;
