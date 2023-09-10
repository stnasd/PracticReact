import CharInfo from "../../CharInfo/CharInfo";
import SearchItem from "../../SearchItem/SearchItem";
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux';
import { useEffect } from "react";

import './CharInfoBlock.scss'
import { fetchCharacters } from "./CharInfoSlice";



const CharInfoBlock = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCharacters())
    }, [])



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