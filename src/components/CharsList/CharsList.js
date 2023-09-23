import PropTypes from 'prop-types'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import dataTextButtonsOnline from '../context/context'

const CharsList = ({ charactersList, userAuthorized }) => {
    const textButtonsContext = useContext(dataTextButtonsOnline)
    const { add, deleted } = textButtonsContext
    const renderItems = (arr, userLogin) => {

        return arr.map(item => {
            const { image, name, id, origin } = item
            const renderButtons =
                (
                    <>
                        <button className='button__char-add'>{add}</button>
                        <button className='button__char-delete'>{deleted}</button>
                    </>
                )

            return (
                <div
                    className="char__item"
                    timeout={700}
                    key={id}
                >
                    <img src={`${image}`} alt={name} />
                    <div className="char__name">name : {name}</div>
                    <div className="char__item-playedby">Origin : {origin}</div>
                    {userLogin ? renderButtons : null}
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