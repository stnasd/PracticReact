import { useDeleteFavoriteMutation } from "../../apiFirebase/apiFireBase.Slice";
import { useUpdateFavoriteMutation } from "../../apiFirebase/apiFireBase.Slice";
import dataTextButtonsOnline from "../context/context";
import "./CharInfo.scss";
import Spinner from "../Spinner/Spinner";
import ErrorMessenge from "../ErrorMessenge/ErrorMessenge";
import { useSelector } from "react-redux";
import { useContext } from "react";

const CharInfo = () => {
    const textButtonsContext = useContext(dataTextButtonsOnline);
    const { add, deleted } = textButtonsContext;
    const [updateFavoriteFn] = useUpdateFavoriteMutation();
    const [deleteFavoriteFn] = useDeleteFavoriteMutation();
    const email = useSelector((state) => state.login.userEmail);
    const favorite = useSelector((state) => state.login.userOnlineFavorite);
    const character = useSelector((state) => state.characters.character);
    const loadingStatus = useSelector(
        (state) => state.characters.characterLoading
    );
    const { image, location, origin, species, status, type, name, id } =
        character;

    const onAddNewFavorite = (newFavorite) => {
        updateFavoriteFn({ email, newFavorite });
    };
    const onDeleteFavorite = (favoriteItem) => {
        deleteFavoriteFn({ email, favoriteItem });
    };
    const buttonDelete = (
        <button
            className="char__info-block-button"
            onClick={() => onDeleteFavorite(id)}
        >
            {deleted}
        </button>
    );
    const buttonAdd = (
        <button
            className="char__info-block-button"
            onClick={() => onAddNewFavorite(id)}
        >
            {add}
        </button>
    );
    const renderButtonsFn = () => {
        if (favorite && favorite.length === 0) {
            return buttonAdd;
        }
        if (favorite) {
            for (let i = 0; i < favorite.length; i++) {
                if (favorite.includes(id)) {
                    return buttonDelete;
                } else {
                    return buttonAdd;
                }
            }
        }
    };

    if (loadingStatus === "loading") {
        return <Spinner />;
    } else if (loadingStatus === "error") {
        return <ErrorMessenge />;
    }
    return (
        <div className="char__info">
            <div className="char__info-items">
                <img className="char__image-info" src={image} alt={name} />
                <div className="char__info-descr">
                    <div className="info__name">
                        Name : {name ? name : "no data yet"}
                    </div>
                    <div className="info__aliases">
                        Location : {location ? location : "no data yet"}
                    </div>
                    <div className="info__books">
                        Origin : {origin ? origin : "no data yet"}
                    </div>
                    <div className="info__born">
                        Species : {species ? species : "no data yet"}
                    </div>
                    <div className="info__culture">
                        Status : {status ? status : "no data yet"}
                    </div>
                    <div className="info__playedby">
                        Type : {type ? type : "no data yet"}
                    </div>
                </div>
            </div>
            {renderButtonsFn()}
            {/* <div className="char__info-favorite">
                <button className="button__favorite button__info-block"
                onClick={onAddNewFavorite(id)}>
                    Добаваить в избранное{" "}
                </button>
                <button className="button__favorite button__info-block"
                >
                    Удалить из избранного{" "}
                </button>
            </div> */}
        </div>
    );
};

export default CharInfo;
