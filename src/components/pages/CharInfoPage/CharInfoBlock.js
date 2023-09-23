import CharInfo from "../../CharInfo/CharInfo";
import SearchItem from "../../SearchItem/SearchItem";
import { motion } from 'framer-motion'
import { useNavigate } from "react-router-dom";
import './CharInfoBlock.scss'
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { useronline } from "../LoginPage/LoginPageSlice";

const CharInfoBlock = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if (user !== null && user) {
                dispatch(useronline(user.email))
            } else {
                dispatch(useronline('offline'))
            }
        })
    }, [dispatch, navigate])

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