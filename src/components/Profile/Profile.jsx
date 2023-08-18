import React, { useState } from 'react';
import AuthService from '../../Services/auth.service';
import './Profile.css'
import Login from '../Login/Login';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Avatar } from '@mui/material';
import prof from './download.jpg' 



export const Profile = () => {

    const currentUser = AuthService.getCurrentUser();

    const [isLoggedIn,setIsLoggedIn] = useState(false)
    let nav = useNavigate();

    const logoutHandler = () => {
        AuthService.logout();
        nav("/login")
    }

    useEffect(()=>{
      if(currentUser!=null){
        setIsLoggedIn(true);
      }
    },[])

    const ProfileInfo = () => {
        return(
           <div className="container">
             <Avatar src={prof}  sx={{ width: 56, height: 56 }}/>
          <header >
            <h3>
              <strong>{currentUser.username}</strong> Profile
            </h3>
          </header>
          <p>
            <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
            {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
          </p>
          <p>
            <strong>Id:</strong> {currentUser.id}
          </p>
          <p>
            <strong>Email:</strong> {currentUser.email}
          </p>
          <strong>Authorities:</strong>
          <ul>
            {currentUser.roles &&
              currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
          </ul>
          {/* <div className='link' id='calc'><Link to="/calc">Calculate</Link></div> */}
          <button onClick={()=>logoutHandler()}>log me out</button>
         
        </div> 
    )}

    const ErrorProf = () => {
      return(
         <div className="container">
          <h1>
            PLEASE LOG IN FIRST TO VISIT YOUR PROFILE
          </h1>
          <Link className='links' to="/login" > Go to Login page </Link>
        </div>)
    }
    
    return(
      isLoggedIn ?<ProfileInfo/> : <ErrorProf/>
      )
      
    }
