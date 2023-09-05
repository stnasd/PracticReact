import CinemaItems from '../CinemaItems/CinemaItems'
import './MainPage.scss'



const MainPage = () => {


    return (
        <div className="app__main">
            <form action="" method="get" className="app__main-form">
                <input name="s" placeholder="Искать здесь..." type="search" />
                <button type="submit">Поиск</button>
            </form>
            <div className="app__main-grid">
                <CinemaItems />
            </div>
        </div>
    )
}


export default MainPage;