import './SignupPage.scss'
<<<<<<< HEAD
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
=======
import { motion } from 'framer-motion'






const SignupPage = () => {
>>>>>>> 8af18e691da3026bd24648674fadd759ad96fd91

    return (
        <motion.div
            className='signup'
            initial={{ opacity: 0, transition: { duration: 0.1 } }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
        >
<<<<<<< HEAD
            <Form title="Зарегистрироваться" onHandleSubmit={onHandleSubmit} />
=======
            <div className='signup__text'>Регистрация</div>
            <div className='signup__block'>
                <input
                    className='signup__block-input'
                    type="email"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                />
                <input
                    className='signup__block-input'
                    type="password"
                    // value={pass}
                    // onChange={(e) => setPass(e.target.value)}
                    placeholder="password"
                />
                <button
                    className='signup__block-button'
                // onClick={() => handleClick(email, pass)}
                >
                    Зарегистрироваться
                </button>
            </div>
>>>>>>> 8af18e691da3026bd24648674fadd759ad96fd91
        </motion.div>
    );
};




export default SignupPage;