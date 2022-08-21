import React from 'react'
import { useLocation, useNavigate ,Link} from 'react-router-dom';
import { useReducer } from 'react';
import { useData } from '../context/Datacontext';

const reducer=(state,{type,payload})=>
{
    switch(type)
    {
        case "EMAIL":
            return {...state,email:payload}
        case "PASSWORD":
            return {...state,password:payload}
        default:
            return state;
    }
}

export const Login1=()=> {
    const {loginUser,logOutUser,isAuthenticated}=useData()
    const [{email,password},dispatch]=useReducer(reducer,{email:"",password:""})
    const {state}=useLocation()
    const navigate=useNavigate()
    console.log(isAuthenticated)
    return (
        <>
        {isAuthenticated?
        (<div style={{marginTop:"5rem"}}>
        <button className='btn Primary-Button' onClick={logOutUser}>LogOut</button>
        </div>)
        :
        (<div className="credentials-page cred-card shadow">
        <h2 style={{textAlign:"center"}}>Login</h2>
        <input type="email"  placeholder="email"  className="credential_elements" 
        onChange={(e)=>dispatch({type:"EMAIL",payload:e.target.value})}
        ></input>
        <input type="password" placeholder="password"   className="credential_elements" 
        onChange={(e)=>dispatch({type:"PASSWORD",payload:e.target.value})}
        ></input>
        <div>
        <button onClick={(e)=>{
            loginUser(email,password,state,navigate);
           e.preventDefault();
        }}>Login</button>
       <span>not registered yet ?<Link to="/register">register</Link></span>
        </div>
        </div> )
}  
        </>
    )
}


