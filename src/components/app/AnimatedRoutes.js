import { lazy } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const CharInfoBlock = lazy(() => import('../pages/CharInfoPage/CharInfoBlock'));
const SearchPage = lazy(() => import('../pages/SearchPage/SearchPage'));
const HistoryPage = lazy(() => import('../pages/HistoryPage/HistoryPage'));
const FavoritePage = lazy(() => import('../pages/FavoritePage/FavoritePage'));
const SignupPage = lazy(() => import('../pages/SignupPage/SignupPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));

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