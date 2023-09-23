import Form from '../../Form/Form'
import { motion } from 'framer-motion'
import './LoginPage.scss'
import { useNavigate } from 'react-router-dom'
import { useLazyLoginQuery } from '../../../apiFirebase/apiFireBaseSlice'


const LoginPage = () => {
    const navigate = useNavigate()
    const [triggerLoginUser] = useLazyLoginQuery()

    const onHandleSubmit = (args) => {
        triggerLoginUser(args)
            .then(res => {
                if (res.data === 'ok') {
                    navigate('/')
                }
            })
    }

    return (
        <motion.div className='login'
            initial={{ opacity: 0, transition: { duration: 0.1 } }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
        >
            <Form title="Войти" onHandleSubmit={onHandleSubmit} />
        </motion.div>
    )
}

export default LoginPage;