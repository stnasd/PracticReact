import './CharInfo.scss'
import Spinner from '../Spinner/Spinner'
import ErrorMessenge from '../ErrorMessenge/ErrorMessenge'
import { useSelector } from 'react-redux'

const CharInfo = () => {
    const character = useSelector(state => state.characters.character)
    const loadingStatus = useSelector(state => state.characters.characterLoading)
    const { image, location, origin, species, status, type, name } = character

    if (loadingStatus === "loading") {
        return <Spinner />;
    } else if (loadingStatus === "error") {
        return <ErrorMessenge />
    }
    return (
        <div className="char__info">
            <div className="char__info-items">
                <img className="char__image-info" src={image} alt={name} />
                <div className="char__info-descr">
                    <div className="info__name">Name : {name ? name : 'no data yet'}</div>
                    <div className="info__aliases">Location : {location ? location : 'no data yet'}</div>
                    <div className="info__books">Origin : {origin ? origin : 'no data yet'}</div>
                    <div className="info__born">Species : {species ? species : 'no data yet'}</div>
                    <div className="info__culture">Status : {status ? status : 'no data yet'}</div>
                    <div className="info__playedby">Type : {type ? type : 'no data yet'}</div>
                </div>
            </div>
            <div className="char__info-favorite">
                <button className='button__favorite button__info-block'>Добаваить в избранное </button>
                <button className='button__favorite button__info-block'>Удалить из избранного </button>
            </div>
        </div>
    )
}

export default CharInfo;