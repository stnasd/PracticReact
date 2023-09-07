import './HistoryPage.scss'
import { motion } from 'framer-motion'

const HistoryPage = () => {
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


