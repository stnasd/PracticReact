import Form from '../../Form/Form'
import { motion } from 'framer-motion'
import './LoginPage.scss'
import { useNavigate } from 'react-router-dom'
import { useDispatch, } from 'react-redux'
import { useLazyLoginQuery } from '../../../apiFirebase/apiFireBaseSlice'
import { useEffect } from 'react'
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { useronline } from './LoginPageSlice'


const LoginPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [triggerLoginUser] = useLazyLoginQuery()

    useEffect(() => {
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if (user !== null && user) {
                dispatch(useronline(user.email))
            } else {
                dispatch(useronline('offline'))
            }
        })
    }, [dispatch])

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