import CharInfo from "../../CharInfo/CharInfo";
import SearchItem from "../../SearchItem/SearchItem";
import { motion } from "framer-motion";
import "./CharInfoBlock.scss";

const CharInfoBlock = () => {
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
    );
};

export default CharInfoBlock;
