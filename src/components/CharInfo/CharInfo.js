import './CharInfo.scss'
import inkognito from '../../images/inkognito.jpg'

const CharInfo = () => {
    return (
        <div className="char__info">
            <div className="char__info-items">
                <img src={inkognito} alt='inkognito' />
                <div className="char__info-descr">
                    <div className="info__name">Имя :</div>
                    <div className="info__aliases">Псевдоним :</div>
                    <div className="info__books">Книги :</div>
                    <div className="info__born">Родился :</div>
                    <div className="info__culture">Культура :</div>
                    <div className="info__playedby">Кто играл :</div>
                    <div className="info__name">Титул :</div>
                </div>
            </div>
            <div className="char__info-favorite">
                <button className='button__favorite'>Добаваить в избранное </button>
                <button className='button__favorite'>Удалить из избранного </button>
            </div>
        </div>
    )
}

export default CharInfo;