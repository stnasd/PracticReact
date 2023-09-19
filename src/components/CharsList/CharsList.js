import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const CharsList = ({ charactersList, userAuthorized }) => {

    const renderItems = (arr, userLogin) => {

        return arr.map(item => {
            const { image, name, id, origin } = item
            const renderButtons = (userLogin) => {
                if (userLogin === true) {
                    return (
                        <>
                            <button className='button__char-add'>add</button>
                            <button className='button__char-delete'>x</button>
                        </>
                    )
                } else {
                    return null
                }
            }

            const buttons = renderButtons(userLogin)
            return (
                <div
                    className="char__item"
                    timeout={700}
                    key={id}
                >
                    <img src={`${image}`} alt={name} />
                    <div className="char__name">name : {name}</div>
                    <div className="char__item-playedby">Origin : {origin}</div>
                    {buttons}
                    <Link to="/info"><button className='char__info-button'>Больше информации</button></Link>
                </div>
            )
        })
    }

    const charElements = renderItems(charactersList, userAuthorized)
    return (
        <>
            {charElements}
        </>
    )
}

CharsList.propTypes = {
    props: PropTypes.object
}

export default CharsList;