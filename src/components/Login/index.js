import React from 'react'
import linkedinLogo from '../../assets/linkedIn.png'
import './styles.css'

function Login() {
    const register = () => {

    }
    const loginToApp = () => {

    }
  return (
    <div className='login'>
        <img src={linkedinLogo} alt='linkedin'/>
        <form onSubmit={loginToApp}>
            <input placeholder='Full Name (required if registering)' />
            <input placeholder='Profile pic URL (optional)' type='text'/>
            <input placeholder='Email' type='email' />
            <input placeholder='Password' type='password' />
            <button>Sign In</button>
        </form>
        <p>No t a member?
            <span className='login_register' onClick={register}>Register Now</span>
        </p>
    </div>
  )
}

export default Login