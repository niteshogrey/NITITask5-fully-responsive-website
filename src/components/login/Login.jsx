import React from 'react'
import '../login/login.css'
const Login = () => {
  return (
    <div className='login-form-container'>
        <div className='form'>
            <h3>sign in</h3>
            <span>username</span>
            <input type="email"name='' className='box' placeholder='enter your email' />
            <span>password</span>
            <input type="password" name="" className='box' placeholder="enter password" id="" />
            <input type="submit" value="sign in" className='btn' />
            <p>don't have an account? <a href="/register"> create an account</a></p>

        </div>
    </div>
  )
}

export default Login