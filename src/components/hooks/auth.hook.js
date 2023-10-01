import { useronline } from "../pages/LoginPage/LoginPage.Slice";
import { clearInput } from "../pages/FoundCharactersPage/FoundCharactersPage.slice";
import { useLazyGetInfoUserQuery } from "../../apiFirebase/apiFireBase.Slice";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export const useAuth = () => {
    const dispatch = useDispatch();
    const [triggerGetinfo] = useLazyGetInfoUserQuery();

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user !== null && user) {
                dispatch(useronline(user.email));
                triggerGetinfo(user.email);
                dispatch(clearInput());
            } else {
                dispatch(useronline("offline"));
            }
        });
        return unsubscribe;
    }, [dispatch, triggerGetinfo]);
};
