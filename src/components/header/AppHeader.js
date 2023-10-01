import { useAllSelectors } from "../selectors/selectors";
import { useronline, userDropData } from "../pages/LoginPage/LoginPage.Slice";
import { userQuit } from "../pages/FavoritePage/FavoritePage.slice";
import { useSignoutMutation } from "../../apiFirebase/apiFireBase.Slice";
import SearchItem from "../SearchItem/SearchItem";
import CharacterSearchList from "../CharacterSearchList/CharacterSearchList";
import "./AppHeader.scss";
import cucumber from "../../images/14-68.jpg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AppHeader = () => {
    const [onUserSignOut] = useSignoutMutation();
    const { userOnline } = useAllSelectors();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onLogoutFn = () => {
        onUserSignOut();
        navigate("/");
        dispatch(userDropData());
        dispatch(useronline("offline"));
        dispatch(userQuit());
    };

    const header = userOnline ? (
        <header className="app__header">
            <nav className="app__header-nav">
                <Link to="/">
                    <p style={{ zIndex: 2 }}>Main</p>
                    <img
                        src={cucumber}
                        alt="header logo"
                        className="header__logo"
                    />
                </Link>
                <label className="form__label" htmlFor="button__char">
                    Найти персонажа
                </label>
                <br />
                <SearchItem />
                <CharacterSearchList />
                <div className="app__header-buttons">
                    <Link to="/favorite">
                        <button>Избранное</button>
                    </Link>
                    <Link to="/history">
                        <button>История</button>
                    </Link>
                    <button onClick={() => onLogoutFn()}>Выйти</button>
                </div>
            </nav>
        </header>
    ) : (
        <header className="app__header">
            <nav className="app__header-nav">
                <Link to="/">
                    <p style={{ zIndex: 2 }}>Main</p>
                    <img
                        src={cucumber}
                        alt="header__logo"
                        className="header__logo"
                    />
                </Link>
                <div className="app__header-buttons">
                    <Link to="/login">
                        <button>Войти</button>
                    </Link>
                    <Link to="/signup">
                        <button>Регистрация</button>
                    </Link>
                </div>
            </nav>
        </header>
    );

    return header;
};

export default AppHeader;
