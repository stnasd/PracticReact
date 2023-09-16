
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
<<<<<<< HEAD
                    <Link to="/info"><button className='char__info-button'>Больше информации</button></Link>
=======
                    <Link to="/info"><button>Больше информации</button></Link>
>>>>>>> 8af18e691da3026bd24648674fadd759ad96fd91
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