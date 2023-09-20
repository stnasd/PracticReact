import SearchItem from "../../SearchItem/SearchItem";
import { Link } from "react-router-dom";
import './SearchPage.scss'
import { motion } from 'framer-motion'
import inkognito from '../../../images/inkognito.jpg'
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

const SearchPage = () => {
    const userAuthorized = useSelector(state => state.login.userLogIn)
    const navigate = useNavigate()
    useEffect(() => {
        if (userAuthorized === false) {
            navigate('/signup')
        }
    }, [userAuthorized, navigate])
    return (
        <motion.div className="app__search"
            initial={{ opacity: 0, transition: { duration: 0.1 } }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
        >
            <div className="app__search-text">По вашему запросу найдено</div>
            <div className="search__block">
                <div className="search__block-grid">
                    <div
                        className="char__item"
                        timeout={700}
                    >
                        <img src={inkognito} alt='inkognito' className='' />
                        <div className="char__name">name</div>
                        <div className="char__item-playedby">Кто играл :</div>
                        <Link to="/info"><button>Больше информации</button></Link>
                    </div>
                    <div
                        className="char__item"
                        timeout={700}
                    >
                        <img src={inkognito} alt='inkognito' className='' />
                        <div className="char__name">name</div>
                        <div className="char__item-playedby">Кто играл :</div>
                        <Link to="/info"><button>Больше информации</button></Link>
                    </div>
                    <div
                        className="char__item"
                        timeout={700}
                    >
                        <img src={inkognito} alt='inkognito' className='' />
                        <div className="char__name">name</div>
                        <div className="char__item-playedby">Кто играл :</div>
                        <Link to="/info"><button>Больше информации</button></Link>
                    </div>
                </div>
                <SearchItem />
            </div>
        </motion.div>
    )
}

export default SearchPage;