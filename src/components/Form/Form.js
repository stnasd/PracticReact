import PropTypes from 'prop-types'
import { Formik, Form as Forma, Field, ErrorMessage as FormikErrorMessage } from 'formik';
import * as Yup from 'yup'

const Form = ({ title, onHandleSubmit }) => {

    return (
        <div className='signup__block'>
            <Formik
                initialValues={{
                    email: '',
                    pass: ''
                }}
                validationSchema={Yup.object({
                    pass: Yup.string()
                        .min(6, 'Минимум 6 символа')
                        .max(15, 'Максимум 15 симфолов')
                        .required('Password: обязательное поле!'),
                    email: Yup.string()
                        .email('Не правильный email адрес')
                        .required('Email: Обязательное поле!'),
                })}
                onSubmit={({ email, pass }) => {
                    onHandleSubmit({ email, pass })
                }}
            >
                <Forma>
                    <Field
                        id="email"
                        name='email'
                        type='text'
                        placeholder="Enter name"
                        className="block-input" />
                    <Field
                        id="pass"
                        name='pass'
                        type='password'
                        placeholder="Enter name"
                        className="block-input" />
                    <button
                        type='submit'
                        className="login__block-button">
                        <div >{title}</div>
                    </button>
                    <FormikErrorMessage component="div" className="user__search-error" name="email" />
                    <FormikErrorMessage component="div" className="user__search-error" name="pass" />
                </Forma>
            </Formik>
        </div>
    )
}

Form.propTypes = {
    title: PropTypes.string,
    onHandleSubmit: PropTypes.func
}

export default Form;
