import React, { useState } from 'react'
import linkedinLogo from '../../assets/linkedIn.png'
import './styles.css'
import { auth } from '../../firebase'
import { Provider, useDispatch } from 'react-redux'

function Login() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [profilePic, setProfilePic] = useState('')
  const dispatch = useDispatch

    const register = () => {
      if(!name){
        return alert("Please enter a fullname")
      }
      auth.createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user.updateProfile({
          displayName: name,
          photoUrl: profilePic
        })
        .then(() => {

        })
      })
    }
    const loginToApp = (e) => {
      e.preventDefault()
    }
  return (
    <div className='login'>
        <img src={linkedinLogo} alt='linkedin'/>
        <form onSubmit={loginToApp}>
            <input value={name} onChange={e => setName(e.target.value)}
             placeholder='Full Name (required if registering)' />
            <input placeholder='Profile pic URL (optional)' type='text'/>
            <input value={email} onChange={e => setEmail(e.target.value)}
            placeholder='Email' type='email' />
            <input value={password} onChange={e => setPassword(e.target.value)}
             placeholder='Password' type='password' />
            <button>Sign In</button>
        </form>
        <p>No t a member?
            <span className='login_register' onClick={register}>Register Now</span>
        </p>
    </div>
  )
}

export default Login