import './AppHeader.scss'


const AppHeader = () => {

    const logger = false

    const header =
        logger ? <header className='app__header'>
            <nav className='app__header-nav'>
                <img src={'https://developer.mozilla.org/ru/'} alt="header logo" />
                <form action="" method="get">
                    <input name="s" placeholder="Искать здесь..." type="search" value="" />
                    <button type="submit">Поиск</button>
                </form>
                <div className='app__header-buttons'>
                    <button>Войти</button>
                    <button>Регистрация</button>
                </div>
            </nav>
        </header> :
            <header className='app__header'>
                <nav className='app__header-nav'>
                    <img src={''} alt="header logo" />
                    <div className='app__header-buttons'>
                        <button >Избранное</button>
                        <button>История</button>
                        <button>Выйти</button>
                    </div>
                </nav>
            </header>

    return (
        header
    )
}



export default AppHeader;