import MainPage from '../pages/MainPage'
import CharInfoBlock from '../pages/CharInfoBlock';
import SearchPage from '../pages/SearchPage';
import HistoryPage from '../pages/HistoryPage';
import FavoritePage from '../pages/FavoritePage';
import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage';
import { Routes, Route, useLocation } from 'react-router-dom'

import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes = () => {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<MainPage />} />
                <Route path='/info' element={<CharInfoBlock />} />
                <Route path='/search' element={<SearchPage />} />
                <Route path='/history' element={<HistoryPage />} />
                <Route path='/favorite' element={<FavoritePage />} />
                <Route path='/signup' element={<SignupPage />} />
                <Route path='/login' element={<LoginPage />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes