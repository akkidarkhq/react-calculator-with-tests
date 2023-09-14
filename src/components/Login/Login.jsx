import React from 'react'
import './Login.css'


import AuthService from '../../Services/auth.service';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    let navigate = useNavigate();
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [errMsg,setErrMsg] = useState("");
    
    const onChangeUsername = (e) => {
      const username = e.target.value;
      setUsername(username);
    }

    const onChangePassword = (e) => {
      const password = e.target.value;
      setPassword(password);
    }    

    const handleSubmit = (event) =>{
      event.preventDefault();
      // const status =  
      
      AuthService.login(username, password).
      then(respone=>{
        navigate("/calc")}
        ).catch((err)=>{
          if(err==401){
              setErrMsg("Please Check Your Credentials")
          }
        })
     
    };
     
  return (
    <div className='logincomp'> 
    <div className='label'> 
      Login
    </div>
      <form onSubmit={handleSubmit}>
        <div className='inputcontainer'>
        <label htmlFor="input-username">Username</label>
          
          <input className='input' 
          label="username"
            onChange={onChangeUsername} 
            value={username} 
            name='username' 
            type='text' 
            id='input-username'>

          </input>
          <label htmlFor="input-password">Password</label>
          <input className='input' label="password"
            onChange={onChangePassword} 
            name='password' 
            value={password} 
            type='password'
            id='input-password'>
          </input>
          <div>{errMsg}</div>
          <button className='loginbutton' id='submitButton' type='submit'>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login;