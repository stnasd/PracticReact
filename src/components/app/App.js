import AnimatedRoutes from "./AnimatedRoutes";
import { useronline } from "../pages/LoginPage/LoginPageSlice";
import { useLazyGetInfoUserQuery } from "../../apiFirebase/apiFireBaseSlice";
import { userData } from "../pages/LoginPage/LoginPageSlice";
import { fetchFavoriteCharacter } from "../pages/FavoritePage/FavoritePage.slice";
import AppHeader from "../header/AppHeader";
import Spinner from "../Spinner/Spinner";
import { BrowserRouter as Router } from "react-router-dom";
import { Suspense } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";

function App() {
    const [triggerGetinfo] = useLazyGetInfoUserQuery();
    const dispatch = useDispatch();

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user !== null && user) {
                dispatch(useronline(user.email));
                triggerGetinfo(user.email).then((res) => {
                    const { favorite, history } = res.data;
                    dispatch(userData({ favorite, history }));
                    favorite.forEach((item) => {
                        dispatch(fetchFavoriteCharacter(item));
                    });
                });
            } else {
                dispatch(useronline("offline"));
            }
        });
        return unsubscribe;
    }, [dispatch, triggerGetinfo]);

    return (
        <Router>
            <div className="app">
                <AppHeader />
                <Suspense fallback={<Spinner />}>
                    <AnimatedRoutes />
                </Suspense>
            </div>
        </Router>
    );
}

export default App;
