import { fetchCharacter } from "../pages/MainPage/MainPageSlice";
import { clearInput } from "../pages/FoundCharactersPage/FoundCharactersPage.slice";
import { useDispatch, useSelector } from "react-redux";
import "./CharacterSearchList.scss";
import { useNavigate } from "react-router-dom";

const CharacterSearchList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const characters = useSelector((state) => state.search.searchCharacters);
    let chars;

    const onChangeTargetCharacter = (id) => {
        dispatch(fetchCharacter(id));
        dispatch(clearInput());
        navigate("/info");
    };

    if (Array.isArray(characters) && characters.length > 5) {
        chars = characters.slice(0, 6);
    }
    const renderItems = (characters) => {
        if (Array.isArray(characters) && characters.length !== 0) {
            return characters.map((item) => {
                const { image, name, id, status } = item;
                return (
                    <div
                        className="char__search"
                        timeout={700}
                        key={id}
                        onClick={() => onChangeTargetCharacter(id)}
                    >
                        <img src={`${image}`} alt={name} />
                        <div className="char__search-name">name : {name}</div>
                        <div className="char__search-status">
                            Status : {status}
                        </div>
                    </div>
                );
            });
        }
    };
    const renderCharacters = renderItems(chars);
    return (
        <div className="search__char-grid">
            {Array.isArray(chars) && chars.length !== 0
                ? renderCharacters
                : null}
        </div>
    );
};

export default CharacterSearchList;
