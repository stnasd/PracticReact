import { Link } from "react-router-dom"




const SearchItem = () => {
    return (
        <form action="" method="get" className="app__main-form">
            <label className="form__label" htmlFor="button__char">Найти персонажа</label><br />
            <input placeholder="Искать здесь..." type="search" id="button__char" />
            <Link to="/search"><button type="submit">Поиск</button></Link>
        </form>
    )
}


export default SearchItem