import './AppHeader.scss'

import { Link } from 'react-router-dom'


const AppHeader = () => {

    const logger = true

    const header =
        logger ? <header className='app__header'>
            <nav className='app__header-nav'>
                <Link to="/"><img src={'https://developer.mozilla.org/ru/'} alt="header logo" /></Link>
                <form action="" method="get">
                    <input name="s" placeholder="Искать здесь..." type="search" defaultValue="1" />
                    <Link to="/search"><button type="submit">Поиск</button></Link>
                </form>
                <div className='app__header-buttons'>
                    <Link to="/login"><button>Войти</button></Link>
                    <Link to="/signup"><button>Регистрация</button></Link>
                </div>
            </nav>
        </header> :
            <header className='app__header'>
                <nav className='app__header-nav'>
                    <Link to="/"><img src={'https://developer.mozilla.org/ru/'} alt="header logo" /></Link>
                    <div className='app__header-buttons'>
                        <Link to="/favorite"><button >Избранное</button></Link>
                        <Link to="/history"><button>История</button></Link>
                        <Link to="/"><button>Выйти</button></Link>
                    </div>
                </nav>
            </header>

    return (
        header
    )
}



export default AppHeader;