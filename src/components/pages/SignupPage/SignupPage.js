import './SignupPage.scss'
import Form from '../../Form/Form';
import { motion } from 'framer-motion'
import { useSignupMutation } from '../../../apiFirebase/apiFireBaseSlice';
import { useNavigate } from 'react-router-dom'

const SignupPage = () => {
    const [createHero,] = useSignupMutation()
    const navigate = useNavigate()
    const onHandleSubmit = ({ email, pass }) => {
        createHero({ email, pass }).unwrap()
        navigate('/login')
    }

    return (
        <motion.div
            className='signup'
            initial={{ opacity: 0, transition: { duration: 0.1 } }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
        >
            <Form title="Зарегистрироваться" onHandleSubmit={onHandleSubmit} />
            <div className='signup__text'>Регистрация</div>
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
                    className='signup__block-button'
                    onClick={() => handleClick(email, pass)}
                >
                    Зарегистрироваться
                </button>
            </div>
        </motion.div>
    );
};




export default SignupPage;