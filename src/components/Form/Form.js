import PropTypes from 'prop-types'
import { useDispatch,} from 'react-redux';
import {changeUserEmail,changeUserPass} from './FormSlice'
import { useSelector } from 'react-redux'

const Form = ({ title, onHandleSubmit }) => {
    const dispatch = useDispatch()
    const email = useSelector(state=>state.form.userEmail)
    const pass = useSelector(state=>state.form.userPass)
    return (
        <div className='signup__block'>
                <input
                    type='text'
                    placeholder="Enter email" 
                    className='block-input'
                    onChange={e=>dispatch(changeUserEmail(e.target.value))}/>
                <input
                    type='password'
                    placeholder="Enter password" 
                    className='block-input'
                    onChange={e=>dispatch(changeUserPass(e.target.value))}/>
                    <button
                    className='login__block-button'
                    onClick={()=>onHandleSubmit({email,pass})}
                >
                    {title}
                </button>
        </div>
    )
}

Form.propTypes = {
    title: PropTypes.string,
    onHandleSubmit: PropTypes.func
}

export default Form;