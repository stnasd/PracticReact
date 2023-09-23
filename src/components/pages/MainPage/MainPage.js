import CharsList from '../../CharsList/CharsList';
import SearchItem from '../../SearchItem/SearchItem';
import Spinner from '../../Spinner/Spinner';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';
import './MainPage.scss'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { fetchCharacters, fetchCharacter, addCharactersPage, addCharactersItems } from './MainPageSlice';
import useCharService from '../../../services/CharsServices';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { getAllCharacters } = useCharService()
    const loadingStatus = useSelector(state => state.characters.charsLoadingStatus)
    const charactersList = useSelector(state => state.characters.charactersList)
    const charsPage = useSelector(state => state.characters.page)
    const userAuthorized = useSelector(state => state.login.userOnline)

    const onChangeTargetCharacter = (e) => {
        dispatch(fetchCharacter(e))
        navigate('/info')
    }

    useEffect(() => {
        dispatch(fetchCharacters())
    }, [dispatch])

    const onLoadNewCharacters = (page) => {
        dispatch(addCharactersPage())
        const result = getAllCharacters(page + 1)
        result
            .then(res => dispatch(addCharactersItems(res)))
    }

    if (loadingStatus === "loading") {
        return <Spinner />;
    } else if (loadingStatus === "error") {
        return <h5 >Ошибка загрузки</h5>
    }

    return (
        <motion.div className="app__main"
            initial={{ opacity: 0, transition: { duration: 0.1 } }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
        >
            <>

                <div className="app__main-grid">
                    <ErrorBoundary>
                        <CharsList charactersList={charactersList}
                            userAuthorized={userAuthorized}
                            onChangeTargetCharacter={onChangeTargetCharacter}
                        />
                    </ErrorBoundary>
                </div>
                <SearchItem />
            </>
            <button className="button__char"
                onClick={() => onLoadNewCharacters(charsPage)}
            >
                <div className="inner">load more</div>
            </button >
        </motion.div >
    )
}

export default MainPage;