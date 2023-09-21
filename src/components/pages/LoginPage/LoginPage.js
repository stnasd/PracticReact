import Form from '../../Form/Form'
import { motion } from 'framer-motion'
import './LoginPage.scss'
import { useNavigate } from 'react-router-dom'
import { useDispatch, } from 'react-redux'
import { useLazyLoginQuery, useGetOnlineUserQuery } from '../../../apiFirebase/apiFireBaseSlice'
import { userLogin, userEmail } from './LoginPageSlice'
import { useEffect } from 'react'

const LoginPage = () => {
    const { data } = useGetOnlineUserQuery()

    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        if (data && data.online) {
            dispatch(userLogin())
            dispatch(userEmail(data.email))
            navigate('/')
        }
    })


    const [triggerLoginUser] = useLazyLoginQuery()

    const onHandleSubmit = (args) => {
        triggerLoginUser(args)
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