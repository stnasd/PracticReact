import { motion } from 'framer-motion'
import Form from '../../Form/Form'
import './LoginPage.scss'

const LoginPage = () => {
    return (
        <motion.div className='login'
            initial={{ opacity: 0, transition: { duration: 0.1 } }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
        >
            <Form title="Войти" />
        </motion.div>
    )
}

export default LoginPage;