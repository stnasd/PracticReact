
import inkognito from '../../images/inkognito.jpg'
import { Link } from 'react-router-dom'

const CharsList = () => {

    return (
        <>
            <div
                className="char__item"
                timeout={700}
            >
                <img src={inkognito} alt='inkognito' className='' />
                <div className="char__name">name</div>
                <div className="char__item-playedby">Кто играл :</div>
                <Link to="/info"><button>Больше информации</button></Link>
            </div>
            <div
                className="char__item"
                timeout={700}
            >
                <img src={inkognito} alt='inkognito' className='' />
                <div className="char__name">name</div>
                <div className="char__item-playedby">Кто играл :</div>
                <Link to="/info"><button>Больше информации</button></Link>
            </div>
            <div
                className="char__item"
                timeout={700}
            >
                <img src={inkognito} alt='inkognito' className='' />
                <div className="char__name">name</div>
                <div className="char__item-playedby">Кто играл :</div>
                <Link to="/info"><button>Больше информации</button></Link>
            </div>
            <div
                className="char__item"
                timeout={700}
            >
                <img src={inkognito} alt='inkognito' className='' />
                <div className="char__name">name</div>
                <div className="char__item-playedby">Кто играл :</div>
                <Link to="/info"><button>Больше информации</button></Link>
            </div>
            <div
                className="char__item"
                timeout={700}
            >
                <img src={inkognito} alt='inkognito' className='' />
                <div className="char__name">name</div>
                <div className="char__item-playedby">Кто играл :</div>
                <Link to="/info"><button>Больше информации</button></Link>
            </div>
        </>
    )
}


export default CharsList;