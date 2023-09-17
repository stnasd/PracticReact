import { useState } from "react";
import PropTypes from 'prop-types'

const Form = ({ title, onHandleSubmit }) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    return (
        <div className='signup__block'>
            <input
                className='signup__block-input'
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
            />
            <input
                className='signup__block-input'
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="password"
            />
            <button
                className='login__block-button'
                onClick={() => {
                    onHandleSubmit({ email, pass });
                    setEmail('');
                    setPass('');
                }}
            >
                {title}
            </button>
        </div>
    )
}

Form.propTypes = {
    title: PropTypes.string,
    onHandleSubmit: PropTypes.func
}

export default Form;