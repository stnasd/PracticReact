import Form from '../../Form/Form'
import './LoginPage.scss'
import { motion } from 'framer-motion'
import { useLoginQuery } from '../../../apiFirebase/apiFireBaseSlice'
import { useState } from 'react'
import { userLogIn } from '../../header/AppHeaderSlice'
import { useDispatch  } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useLoginQuery({email,pass},{
        skip: true
    })
    const onHandleSubmit = (args)=>{
        setEmail(args.email);
        setPass(args.pass)
        dispatch(userLogIn())
        navigate('/')
    }

    return (
        <motion.div className='login'
            initial={{ opacity: 0, transition: { duration: 0.1 } }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
        >
            <Form title="Войти" onHandleSubmit={onHandleSubmit}/>
        </motion.div>
    )
}

export default LoginPage;