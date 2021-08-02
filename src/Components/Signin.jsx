import React, {useState} from 'react'
import {Link, BrowserRouter as Router} from 'react-router-dom'


function Signin() {
        
    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState("")
    const [ShowPassword, setShowPassword] = useState(false)

    const handleChangeU = (e) => {
        setUsername(e.target.value);
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
        <div className='left_card_sign'>
            <h1 className='get_started_h1'>Welcome Back!</h1>
            <form onSubmit={handleSubmit}>
                <label>USER NAME
                <div className='border'>
                    <input type="text" onChange={(e) => handleChangeU(e)} value={Username} required/>
                    <i class="material-icons">person</i>
                </div>
                </label>
                
                <label id='ok'>PASSWORD
                <div className='border'>
                    <input type={ShowPassword === true ? 'text' : 'password'} onChange={handleChangeP} value={Password} required/>
                    <i class="material-icons" onClick={handleChangeI}>visibility</i>
                </div>
                </label>
                <div className='forPass'>
                    <Link>Forgot Password?</Link>
                </div>
                
                <input className='submitButtonLogin' type='submit' value='Sign In' />
                <div className='form_footer'>
                    <p>Not a member?</p>
                    <Link to='/register'>Sign Up</Link>
                </div>
            </form>
            </div>
        <div className='right_card_sign'>
            <h1 className='hihi'>Take your Challange Today.</h1>
            <div className='register-image'>
                <div className='okoks'>

                </div>
            </div>
         </div>
        </div>
        
    )
}

export default Signin;
