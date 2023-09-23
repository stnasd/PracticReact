import './HistoryPage.scss'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';


const HistoryPage = () => {
    const navigate = useNavigate()
    const userOnline = useSelector(state => state.login.userOnline)

    useEffect(() => {
        if (!userOnline) {
            navigate('/')
        }
    }, [userOnline, navigate])

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


