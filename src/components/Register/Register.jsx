import React, { useState } from 'react';
import './Register.css';
import AuthService from '../../Services/auth.service';
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const nav = useNavigate()

  const [email,setEmail] = useState("")
  const [username,setUsename] = useState("");
  const [role,setRole] = useState([]);
  const [password,setPassword] = useState("");
  const [msg,setMsg] = useState('');
 
  const onChangEmail = (event) =>{
    setEmail(event.target.value);
  }

  const onChangeUsername= (event)=>{
    setUsename(event.target.value);
  }

  const onChangRole= (event)=>{
    addRole(event.target.value);
  }

  const onChangePassword =(event)=>{
    setPassword(event.target.value);
  }
  // const addExpStack = (obj) =>  setExpStack(prev => ([...prev,{type:obj.type,value:obj.value}])) 
  const addRole = (newRole) => { setRole(prev => ([...prev,newRole]));
    console.log(role)
  } 
  const ROLES_LIST = ["user", "admin", "mod"];
  

  const CheckboxList = ROLES_LIST.map((item, index) => { 
    return(
            <div className='roleContainer' key={index}>
                <input value={item} id={index} type="checkbox" onChange={onChangRole}/> <span>
                  {item}
                </span>
            </div>
    )        
      })
  const validate = () => {
   if(username=== '' || email ==='' || role.length==0 || password === ''){
    return false;
   }else
   return true;
  }

  const handleRegister =(e) =>{
    e.preventDefault();
    if(!validate()){
      setMsg("Cannot be be empty")
    }else{
        
      AuthService.register(username,email,role,password)
        .then(response=>{
          setMsg("reg successfull");

          if(response.status==200){
            nav("/login")
          }
          
        })
        .catch(err=>console.error(err));
    }
  }

  
    return (
      <div className='registercomp'> 
      <div className='label'> 
        Register New User
      </div>
      <form onSubmit={handleRegister} >
        <div className='inputcontainer'>
            Email
            <input className='input' name="email" value={email} onChange={onChangEmail} type='email' ></input>
            Username
            <input className='input' name="username" value={username} onChange={onChangeUsername} type='text' ></input>
            Role
            {CheckboxList}
            {/* <select className='input' name="role" type="checkbox" value={role} onChange={onChangRole}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select> */}
            Password
            <input className='input' name="pasword" value={password} onChange={onChangePassword} type='password'></input>
            <button className='registerbtn' type="submit">Register</button>
            {msg}
          </div>
          </form>
      </div>
    )
}

export default Register;