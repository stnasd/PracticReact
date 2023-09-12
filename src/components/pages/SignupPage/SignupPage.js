import './SignupPage.scss'
import { motion } from 'framer-motion'






const SignupPage = () => {

    return (
        <motion.div
            className='signup'
            initial={{ opacity: 0, transition: { duration: 0.1 } }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
        >
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
        </motion.div>
    );
};




export default SignupPage;