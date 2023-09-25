import { useSignupMutation } from "../../../apiFirebase/apiFireBaseSlice";
import "./SignupPage.scss";
import Form from "../../Form/Form";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
    const [createUser] = useSignupMutation();
    const navigate = useNavigate();
    const onHandleSubmit = (args) => {
        createUser(args);
        navigate("/login");
    };

    return (
        <motion.div
            className="signup"
            initial={{ opacity: 0, transition: { duration: 0.1 } }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
        >
            <Form title="Зарегистрироваться" onHandleSubmit={onHandleSubmit} />
        </motion.div>
    );
};

export default SignupPage;
