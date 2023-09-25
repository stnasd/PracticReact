import dataTextButtonsOnline from "../context/context";
import PropTypes from "prop-types";
import { useContext } from "react";
import { useSelector } from "react-redux";

const CharsList = ({
    charactersList,
    userAuthorized,
    onChangeTargetCharacter,
}) => {
    const userFavorite = useSelector((state) => state.login.userOnlineFavorite);
    const textButtonsContext = useContext(dataTextButtonsOnline);
    const { add, deleted } = textButtonsContext;

    const renderItems = (arr, userLogin, data) => {
        return arr.map((item) => {
            const { image, name, id, origin } = item;
            const renderButtonsFn = () => {
                if (userFavorite.length === 0) {
                    return <button className="button__char-add">{add}</button>;
                } else {
                    for (let i = 0; i < userFavorite.length; i++) {
                        if (id === userFavorite[i]) {
                            return (
                                <button className="button__char-add">
                                    {deleted}
                                </button>
                            );
                        } else {
                            return (
                                <button className="button__char-add">
                                    {add}
                                </button>
                            );
                        }
                    }
                }
            };
            return (
                <div className="char__item" timeout={700} key={id}>
                    <img src={`${image}`} alt={name} />
                    <div className="char__name">name : {name}</div>
                    <div className="char__item-playedby">Origin : {origin}</div>
                    {userLogin ? renderButtonsFn() : null}
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

    const charElements = renderItems(
        charactersList,
        userAuthorized,
        userFavorite
    );
    return <>{charElements}</>;
};

CharsList.propTypes = {
    props: PropTypes.object,
};

export default CharsList;
