import './LoginPage.scss'
import Form from '../../Form/Form'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useLazyLoginQuery } from '../../../apiFirebase/apiFireBaseSlice'
import { userLogin } from './LoginPageSlice'


const LoginPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [trigger] = useLazyLoginQuery()

    const onHandleSubmit = (args) => {
        const data = trigger(args)
        data.then((res) => {
            if (res.data === 'ok') {
                dispatch(userLogin())
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