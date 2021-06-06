import React,{ useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import './Login.css'


const Login = () => {
    const [EmailId, setEmailId] = useState('')
    const [password, setPassword] = useState('')
    let history = useHistory();

    const handleEmailChange = event => {
        setEmailId(event.target.value)
    }

    const handleLogin = () => {
    }
    
    const handlePasswordChange = event => {
        setPassword(event.target.value)
    }
    return (
            <div className='Login'>
                <div className='headerName'>
                    <span >LOGIN</span>
                </div>
                <div >
                    <input type='text' className='InputField' placeholder='Email Id' value={EmailId} onChange={handleEmailChange} />
                </div>
                
                <div>
                    <input type='password' className='InputField' placeholder='Password' value={password} onChange={handlePasswordChange} />
                </div>

                <div className='buttons'>
                    <button className='LoginButton' onClick={handleLogin()}>Login</button>
                    <button className='CancelButton' onClick={() => history.push('/home')}>Close</button>
                </div>
                
            </div>
    )
}

export default Login

