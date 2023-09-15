import { useState } from "react";




const Form = ({ title, onSubmit }) => {
    const [email, setEmail] = useState('2222')
    const [pass, setPass] = useState('111')

    const resSignupHook = onSubmit({ email, pass })
    console.log(resSignupHook)
    return (
        <div className='signup__block'>
            <input
                className='signup__block-input'
                type="email"
                value={'www'}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
            />
            <input
                className='signup__block-input'
                type="password"
                value={23232}
                onChange={(e) => setPass(e.target.value)}
                placeholder="password"
            />
            <button
                className='login__block-button'
            >
                {title}
            </button>
        </div>
    )
}

export default Form;