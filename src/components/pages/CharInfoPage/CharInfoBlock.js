import CharInfo from "../../CharInfo/CharInfo";
import SearchItem from "../../SearchItem/SearchItem";
import { motion } from 'framer-motion'
import { useNavigate } from "react-router-dom";
import './CharInfoBlock.scss'
import { useSelector } from 'react-redux';
import { useEffect } from "react";


const CharInfoBlock = () => {
    const navigate = useNavigate()
    const userOnline = useSelector(state => state.login.userOnline)
    useEffect(() => {
        if (!userOnline) {
            navigate('/')
        }
    }, [userOnline, navigate])

    return (
        <motion.div
            className="char__block"
            initial={{ opacity: 0, transition: { duration: 0.1 } }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
        >
            <CharInfo />
            <SearchItem />
        </motion.div>
    )
}

export default CharInfoBlock;