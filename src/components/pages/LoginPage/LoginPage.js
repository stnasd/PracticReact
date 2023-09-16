<<<<<<< HEAD
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


=======
import { motion } from 'framer-motion'
import './LoginPage.scss'

const LoginPage = () => {
>>>>>>> 8af18e691da3026bd24648674fadd759ad96fd91
    return (
        <motion.div className='login'
            initial={{ opacity: 0, transition: { duration: 0.1 } }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
        >
<<<<<<< HEAD
            <Form title="Войти" onHandleSubmit={onHandleSubmit} />
=======
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
>>>>>>> 8af18e691da3026bd24648674fadd759ad96fd91
        </motion.div>
    )
}

export default LoginPage;