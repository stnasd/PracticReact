import { useAllSelectors } from "../selectors/selectors";
import { useDeleteFavoriteMutation } from "../../apiFirebase/apiFireBase.Slice";
import { useUpdateFavoriteMutation } from "../../apiFirebase/apiFireBase.Slice";
import dataTextButtonsOnline from "../context/context";
import "./CharInfo.scss";
import Spinner from "../Spinner/Spinner";
import ErrorMessenge from "../ErrorMessenge/ErrorMessenge";
import { useContext } from "react";

const CharInfo = () => {
    const textButtonsContext = useContext(dataTextButtonsOnline);
    const { add, deleted } = textButtonsContext;
    const [updateFavoriteFn] = useUpdateFavoriteMutation();
    const [deleteFavoriteFn] = useDeleteFavoriteMutation();

    const { userEmail, userOnlineFavorite, character, characterLoading } =
        useAllSelectors();

    const { image, location, origin, species, status, type, name, id } =
        character;

    const onAddNewFavorite = (newFavorite) => {
        updateFavoriteFn({ userEmail, newFavorite });
    };
    const onDeleteFavorite = (favoriteItem) => {
        deleteFavoriteFn({ userEmail, favoriteItem });
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
        if (userOnlineFavorite && userOnlineFavorite.length === 0) {
            return buttonAdd;
        }
        if (userOnlineFavorite) {
            for (let i = 0; i < userOnlineFavorite.length; i++) {
                if (userOnlineFavorite.includes(id)) {
                    return buttonDelete;
                } else {
                    return buttonAdd;
                }
            }
        }
    };

    if (characterLoading === "loading") {
        return <Spinner />;
    } else if (characterLoading === "error") {
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
        </div>
    );
};

export default CharInfo;
