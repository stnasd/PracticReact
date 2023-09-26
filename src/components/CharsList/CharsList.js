import Spinner from "../Spinner/Spinner";
import dataTextButtonsOnline from "../context/context";
import PropTypes from "prop-types";
import { useContext } from "react";

const CharsList = ({
    charactersList,
    onChangeTargetCharacter,
    onDeleteFavorite,
    onAddNewFavorite,
    favorite,
    useronline,
}) => {
    // const userFavorite = useSelector((state) => state.login.userOnlineFavorite);
    const textButtonsContext = useContext(dataTextButtonsOnline);
    const { add, deleted } = textButtonsContext;
    const renderItems = (arr, data) => {
        return arr.map((item) => {
            const { image, name, id, origin } = item;
            const buttonDelete = (
                <button
                    className="button__char-add"
                    onClick={() => onDeleteFavorite(id)}
                >
                    {deleted}
                </button>
            );
            const buttonAdd = (
                <button
                    className="button__char-add"
                    onClick={() => onAddNewFavorite(id)}
                >
                    {add}
                </button>
            );
            const renderButtonsFn = () => {
                if (data && data.length === 0) {
                    return buttonAdd;
                }
                if (data) {
                    for (let i = 0; i < data.length; i++) {
                        if (data[i] === id) {
                            return buttonDelete;
                        }
                    }
                    for (let i = 0; i < data.length; i++) {
                        if (data[i] !== id) {
                            return buttonAdd;
                        }
                    }
                } else {
                    <Spinner />;
                }
            };
            const buttons = renderButtonsFn();
            return (
                <div className="char__item" timeout={700} key={id}>
                    <img src={`${image}`} alt={name} />
                    <div className="char__name">name : {name}</div>
                    <div className="char__item-playedby">Origin : {origin}</div>
                    {buttons}
                    <button
                        className="char__info-button"
                        onClick={() => onChangeTargetCharacter(id)}
                    >
                        Больше информации
                    </button>
                </div>
            );
        });
    };

    const charElements = renderItems(charactersList, favorite);
    return <>{charElements}</>;
};

CharsList.propTypes = {
    props: PropTypes.object,
};

export default CharsList;
