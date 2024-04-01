import React from 'react'
import '../register/register.css'
const Register = () => {
  return (
    <div className='login-form-container'>
        <div className='form'>
            <h3>sign up</h3>
            <span> Full Name</span>
            <input type="email"name='' className='box' placeholder='enter your full name' />
          
             <span>username</span>
            <input type="email"name='' className='box' placeholder='enter your email' />
            <span>password</span>
            <input type="password" name="" className='box' placeholder="enter your password" id="" />
            <input type="submit" value='register' className='btn' />
            <p>already have an account? <a href="/login"> sign in</a></p>
        </div>
    </div>
  )
}

export default Register