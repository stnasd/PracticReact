import { useHttp } from '../hooks/http.hook';
import CharsList from '../CharsList/CharsList';
import SearchItem from '../SearchItem/SearchItem';
import './MainPage.scss'
import { motion } from 'framer-motion'




const MainPage = () => {


    return (
        <motion.div className="app__main"
            initial={{ opacity: 0, transition: { duration: 0.1 } }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
        >
            <div className="app__main-grid">
                <CharsList />
            </div>
            <SearchItem />
        </motion.div>
    )
}


export default MainPage;