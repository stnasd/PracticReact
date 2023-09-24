import { useNavigate } from "react-router-dom"
import { Formik, Form as Forma, Field, ErrorMessage as FormikErrorMessage } from 'formik';
import * as Yup from 'yup'
import { useSelector } from "react-redux";
import { useUbdateHistoryMutation } from '../../apiFirebase/apiFireBaseSlice';

const SearchItem = () => {
    const navigate = useNavigate()
    const [udateHistoryFn,] = useUbdateHistoryMutation()
    const email = useSelector(state => state.login.userEmail)

    const onSubmitSearchForm = (newHistory) => {
        udateHistoryFn({ email, newHistory })
        navigate('/info')
    }

    return (
        <Formik
            initialValues={{
                character: ''
            }}
            validationSchema={Yup.object({
                character: Yup.string()
                    .max(15, 'Максимум 15 символов')
                    .min(2, 'Минимум 2 символа')
                    .matches(/\D/g, "В поле должны быть только буквы.")
            })}
            onSubmit={({ character }) => {
                onSubmitSearchForm(character)
            }}
        >
            <Forma className="app__main-form">
                <Field
                    id="character"
                    name='character'
                    type='text'
                    placeholder="Enter name"
                    className="" />
                <button
                    type='submit'>
                    <div >Поиск</div>
                </button>
                <FormikErrorMessage component="div" className="user__search-error" name="character" />
            </Forma>
        </Formik>
    )
}

export default SearchItem