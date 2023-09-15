import './SignupPage.scss'
import Form from '../../Form/Form';
import { motion } from 'framer-motion'
import { useSignupMutation } from '../../../apiFirebase/apiFireBaseSlice';


const SignupPage = () => {

    const onSubmit = useSignupMutation


    return (
        <motion.div
            className='signup'
            initial={{ opacity: 0, transition: { duration: 0.1 } }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
        >
            <Form title="Зарегистрироваться" onSubmit={onSubmit} />
        </motion.div>
    );
};




export default SignupPage;