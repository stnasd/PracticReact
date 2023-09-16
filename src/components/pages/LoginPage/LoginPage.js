import Form from '../../Form/Form'
import './LoginPage.scss'
import { motion } from 'framer-motion'
import { useLoginQuery } from '../../../apiFirebase/apiFireBaseSlice'
import { useEffect, useState } from 'react'
import { userLogIn } from '../../header/AppHeaderSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onHandleSubmit = (args) => {
        setPass(args.pass);
        setEmail(args.email)
    }

    const { data } = useLoginQuery({ email, pass })

    useEffect(() => {
        if (data === 'ok') {
            dispatch(userLogIn())
        }
    }, [data, dispatch])

    useEffect(() => {
        if (data === 'ok') {
            navigate('/')
        }
    }, [data, navigate])


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