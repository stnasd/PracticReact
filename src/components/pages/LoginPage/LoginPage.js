import { motion } from 'framer-motion'
import './LoginPage.scss'

const LoginPage = () => {
    return (
        <motion.div className='login'
            initial={{ opacity: 0, transition: { duration: 0.1 } }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
        >
            <div className='login__text'>Войти</div>
            <div className='login__block'>
                <input
                    className='login__block-input'
                    type="email"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                />
                <input
                    className='login__block-input'
                    type="password"
                    // value={pass}
                    // onChange={(e) => setPass(e.target.value)}
                    placeholder="password"
                />
                <button
                    className='login__block-button'
                // onClick={() => handleClick(email, pass)}
                >
                    Войти
                </button>
            </div>
        </motion.div>
    )
}

export default LoginPage;