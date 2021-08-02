import React, { useState, useNavigate  } from 'react';
import '../ComponentStyles/Registration.css'
import Signin from './Signin';
import App from '../App'
import CheckPassword from '../CheckPassword';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

export default function Registration(){
    //let history = useHistory();
    const [Username, setUsername] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [ShowPassword, setShowPassword] = useState(false)

    const handleChangeU = (e) => {
        setUsername(e.target.value);
    }

    const handleChangeE = (e) => {
        setEmail(e.target.value);
    }

    const handleChangeP = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChangeI = (e) => {
        e.preventDefault();
        setShowPassword(!ShowPassword);
    }

    return (
        <div className='main'>
        <div className='left_card'>
            <h1 className='get_started_h1'>Get Started</h1>
            <form onSubmit={handleSubmit}>
                <label>USER NAME
                <div className='border'>
                    <input type="text" onChange={(e) => handleChangeU(e)} value={Username} required/>
                    <i class="material-icons">person</i>
                </div>
                </label>
                
                <label>EMAIL ADDRESS
                    <div className='border'>
                        <input type="email" onChange={handleChangeE} onClick={(e) => e.preventDefault()} value={Email} required/>
                        <i class="material-icons">email</i>
                    </div>
                </label>
                
                
                <label id='ok'>CHOOSE PASSWORD
                <div className='border'>
                    <input type={ShowPassword === true ? 'text' : 'password'} onChange={handleChangeP} value={Password} required/>
                    <i class="material-icons" onClick={handleChangeI}>visibility</i>
                </div>
                </label>

                {Password !== "" ? <CheckPassword pass={Password}/> : null}
                
                <input className='submitButton' type='submit' value='Create Account' />
                <div className='form_footer'>
                    <p>Already a member?</p>
                        <Link to='/login'>Sign in</Link>
                </div>
            </form>
        </div>
        <div className='right_card'>
            <h1 className='hihi'>Take your Challange Today.</h1>
            <div className='register-image'>
                <div className='okok'>

                </div>
            </div>
        </div>
        </div>
    );
}