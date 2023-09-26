import { useLazyGetInfoUserQuery } from "../../../apiFirebase/apiFireBaseSlice";
import { userData } from "../LoginPage/LoginPageSlice";
import "./HistoryPage.scss";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const HistoryPage = () => {
    const dispatch = useDispatch();
    const [triggerGetinfo] = useLazyGetInfoUserQuery();
    const navigate = useNavigate();
    const userOnline = useSelector((state) => state.login.userOnline);
    const userHistory = useSelector((state) => state.login.userOnlineHistory);
    const email = useSelector((state) => state.login.userEmail);

    useEffect(() => {
        triggerGetinfo(email).then((res) => {
            const { favorite, history } = res.data;
            dispatch(userData({ favorite, history }));
        });
    }, [triggerGetinfo, dispatch, email]);

    useEffect(() => {
        if (!userOnline) {
            navigate("/");
        }
    }, [userOnline, navigate]);

    const renderSearchHistoyItemsFn = (itemsHistory) => {
        if (itemsHistory.length !== 0) {
            return itemsHistory.map((item) => {
                return (
                    <div className="history__items-url" key={uuidv4()}>
                        {item}
                    </div>
                );
            });
        } else {
            return (
                <div className="history__items-url">
                    Истории поиска пока нет..
                </div>
            );
        }
    };
    const renderHistoryItems = renderSearchHistoyItemsFn(userHistory);
    return (
        <motion.div
            className="app__history"
            initial={{ opacity: 0, transition: { duration: 0.1 } }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
        >
            <div className="app__history-block">
                <div className="history__text">История поиска</div>
                <div className="history__items">{renderHistoryItems}</div>
            </div>
        </motion.div>
    );
};

export default HistoryPage;
