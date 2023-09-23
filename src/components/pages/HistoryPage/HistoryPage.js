import './HistoryPage.scss'
import { motion } from 'framer-motion'
import { useEffect } from 'react';
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { useronline } from "../LoginPage/LoginPageSlice";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const HistoryPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if (user !== null && user) {
                dispatch(useronline(user.email))
            } else {
                dispatch(useronline('offline'))
                navigate('/')
            }
        })
    }, [dispatch, navigate])

    return (
        <motion.div className="app__history"
            initial={{ opacity: 0, transition: { duration: 0.1 } }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
        >
            <div className="app__history-block">
                <div className="history__text">История посещений</div>
                <div className="history__items">
                    <div className="history__items-url">Здесь будет url</div>
                    <div className="history__items-url">Здесь будет url</div>
                    <div className="history__items-url">Здесь будет url</div>
                    <div className="history__items-url">Здесь будет url</div>
                    <div className="history__items-url">Здесь будет url</div>
                </div>
            </div>
        </motion.div>
    )
}

export default HistoryPage;


