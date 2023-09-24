import './HistoryPage.scss'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';


const HistoryPage = () => {
    const navigate = useNavigate()
    const userOnline = useSelector(state => state.login.userOnline)
    const userHistory = useSelector(state => state.login.userOnlineHistory)
    useEffect(() => {
        if (!userOnline) {
            navigate('/')
        }
    }, [userOnline, navigate])

    const renderSearchHistoyItemsFn = (itemsHistory) => {
        if (itemsHistory.length !== 0) {
            return itemsHistory.map(item => {
                return (
                    <div className="history__items-url">{item}</div>
                )
            })
        } else {
            return (
                <div className="history__items-url">Истории поиска еще нет..</div>
            )
        }
    }
    const renderHistoryItems = renderSearchHistoyItemsFn(userHistory)
    return (
        <motion.div className="app__history"
            initial={{ opacity: 0, transition: { duration: 0.1 } }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
        >
            <div className="app__history-block">
                <div className="history__text">История поиска</div>
                <div className="history__items">
                    {renderHistoryItems}
                </div>
            </div>
        </motion.div>
    )
}

export default HistoryPage;


