import useDebounce from "../hooks/useDebounce.hook";
import { useUpdateHistoryMutation } from "../../apiFirebase/apiFireBase.Slice";
import { getSearhCharacterFetch } from "../pages/FoundCharactersPage/FoundCharactersPage.slice";
import { clearInput } from "../pages/FoundCharactersPage/FoundCharactersPage.slice";
import { changeInputSearch } from "../pages/FoundCharactersPage/FoundCharactersPage.slice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const SearchItem = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [updateHistoryFn] = useUpdateHistoryMutation();
    const email = useSelector((state) => state.login.userEmail);
    const newHistory = useSelector((state) => state.search.inputChange);
    const serchTerm = useDebounce(newHistory, 500);

    const onHandleChange = () => {
        dispatch(getSearhCharacterFetch(serchTerm));
    };
    useEffect(() => {
        if (serchTerm) {
            onHandleChange();
        }
        if (serchTerm === "") {
            dispatch(clearInput());
        }
        // eslint-disable-next-line
    }, [serchTerm]);

    const onSubmitSearchForm = (e) => {
        e.preventDefault();
        updateHistoryFn({ email, newHistory });
        dispatch(clearInput());
        navigate("/search");
    };

    return (
        <form
            className="app__main-form"
            onSubmit={(e) => {
                onSubmitSearchForm(e);
            }}
        >
            <input
                id="character"
                name="character"
                type="text"
                value={newHistory}
                placeholder="Enter name"
                className=""
                onChange={(e) => dispatch(changeInputSearch(e.target.value))}
            />
            <button type="submit">
                <div>Поиск</div>
            </button>
        </form>
    );
};

export default SearchItem;
