
import React,{useReducer} from 'react';
import { useLocation, useNavigate,Link } from 'react-router-dom';
import { useData } from '../context/Datacontext';



 const reducer=(state,{type,payload})=>
{
    switch(type)
    {
        case "NAME":
            return {...state,name:payload}
        case "EMAIL":
            return {...state,email:payload}
        case "PASSWORD":
            return {...state,password:payload}
        case "RESET":
            return {...state,
            name:"",
            email:"",
            password:"",
        }
        default:
            return state;
    }
}



export const Register=() => {

const [{name,email,password},dispatch]=useReducer(reducer,{name:"",email:"",password:""})
const {state}=useLocation();
const navigate=useNavigate();
const {registerUser}=useData();
    return (
        <>
        <div className="credentials-page cred-card shadow">
        <h2 style={{textAlign:"center"}}>Register</h2>
        <input type="string" placeholder="name" className="credential_elements" 
        onChange={(e)=>dispatch({type:"NAME",payload:e.target.value})}></input>
        <input type="email"  placeholder="email"  className="credential_elements" 
        onChange={(e)=>dispatch({type:"EMAIL",payload:e.target.value})}
        ></input>
        <input type="password" placeholder="password"   className="credential_elements" 
        onChange={(e)=>dispatch({type:"PASSWORD",payload:e.target.value})}
        ></input>
        <div>
        <button onClick={(e)=>{
            registerUser(name,email,password,state,navigate);
           e.preventDefault();
        }}>Register</button>
       <span>Already Registered?<Link to="/login">Login</Link></span>
        </div>
        </div>
        </>
    );
}
