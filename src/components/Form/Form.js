import { useState } from "react";




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

export default Form;