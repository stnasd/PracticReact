import './AppHeader.scss'
import google from '../../images/google.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useronline } from '../pages/LoginPage/LoginPageSlice';
import { useSignoutMutation } from '../../apiFirebase/apiFireBaseSlice';


const AppHeader = () => {
    const [onUserSignOut,] = useSignoutMutation()
    const userAuthorized = useSelector(state => state.login.userOnline)
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const onLogoutFn = () => {
        onUserSignOut()
        navigate('/')
        dispatch(useronline('offline'))
    }

    const header = userAuthorized ?
        <header className='app__header'>
            <nav className='app__header-nav'>
                <Link to="/"><img src={google} alt="header logo" /></Link>
                <div className='app__header-buttons'>
                    <Link to="/favorite"><button >Избранное</button></Link>
                    <Link to="/history"><button>История</button></Link>
                    <button onClick={() => onLogoutFn()}>Выйти</button>
                </div>
            </nav>
        </header> :
        <header className='app__header'>
            <nav className='app__header-nav'>
                <Link to="/"><img src={google} alt="header logo" /></Link>
                <form action="" method="get">
                    <input name="s" placeholder="Искать здесь..." type="search" defaultValue="1" />
                    <Link to="/search"><button type="submit">Поиск</button></Link>
                </form>
                <div className='app__header-buttons'>
                    <Link to="/login"><button>Войти</button></Link>
                    <Link to="/signup"><button>Регистрация</button></Link>
                </div>
            </nav>
        </header>

    return (
        header
    )
}

export default AppHeader;