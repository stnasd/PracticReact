
import { Link } from 'react-router-dom'

const CharsList = (props) => {

    const renderItems = (arr) => {
        return arr.map(item => {
            const { image, name, id, origin } = item
            return (
                <div
                    className="char__item"
                    timeout={700}
                    key={id}
                >
                    <img src={`${image}`} alt={name} />
                    <div className="char__name">name : {name}</div>
                    <div className="char__item-playedby">Origin : {origin}</div>
                    <Link to="/info"><button>Больше информации</button></Link>
                </div>
            )
        })
    }

    const charElements = renderItems(props.charactersList)
    return (
        <>
            {charElements}
        </>
    )
}

export default CharsList;