import './AppHeader.scss'
import google from '../../images/google.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';


const AppHeader = () => {
    const logger = useSelector(state => state.filterLoggerUser.userLogin)

    const header = logger ?
        <header className='app__header'>
            <nav className='app__header-nav'>
                <Link to="/"><img src={google} alt="header logo" /></Link>
<<<<<<< HEAD
                <div className='app__header-buttons'>
                    <Link to="/favorite"><button >Избранное</button></Link>
                    <Link to="/history"><button>История</button></Link>
                    <Link to="/"><button>Выйти</button></Link>
                </div>
            </nav>
        </header> :
        <header className='app__header'>
            <nav className='app__header-nav'>
                <Link to="/"><img src={google} alt="header logo" /></Link>
=======
>>>>>>> 8af18e691da3026bd24648674fadd759ad96fd91
                <form action="" method="get">
                    <input name="s" placeholder="Искать здесь..." type="search" defaultValue="1" />
                    <Link to="/search"><button type="submit">Поиск</button></Link>
                </form>
                <div className='app__header-buttons'>
                    <Link to="/login"><button>Войти</button></Link>
                    <Link to="/signup"><button>Регистрация</button></Link>
                </div>
            </nav>
<<<<<<< HEAD
        </header>
=======
        </header> :
            <header className='app__header'>
                <nav className='app__header-nav'>
                    <Link to="/"><img src={google} alt="header logo" /></Link>
                    <div className='app__header-buttons'>
                        <Link to="/favorite"><button >Избранное</button></Link>
                        <Link to="/history"><button>История</button></Link>
                        <Link to="/"><button>Выйти</button></Link>
                    </div>
                </nav>
            </header>
>>>>>>> 8af18e691da3026bd24648674fadd759ad96fd91

    return (
        header
    )
}



export default AppHeader;