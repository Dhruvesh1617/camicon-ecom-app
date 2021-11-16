import React,{useReducer} from 'react';


export const registerReducer=(state,{type,payload})=>
{
    switch(type)
    {
        case "username":
            return {...state,username:payload}
        case "email":
            return {...state,email:payload}
        case "password":
            return {...state,password:payload}
        default:
            return state;
    }
}



function Register() {

const [{username,email,password},dispatch]=useReducer(registerReducer,{username:"",email:"",password:""})

    return (
        <>
        <div className="credentials-page cred-card shadow">
        <h2 style={{textAlign:"center"}}>Register</h2>
        <input type="text" placeholder="username" className="credential_elements" required
        onClick={(e)=>dispatch({type:"username",payload:e.target.value})}></input>
        <input type="email" placeholder="email"  className="credential_elements" required
        onClick={(e)=>dispatch({type:"email",payload:e.target.value})}
        ></input>
        <input type="password" placeholder="password"   className="credential_elements" required
        onClick={(e)=>dispatch({type:"password",payload:e.target.value})}
        ></input>
        <div>
        <button>Register</button>
        </div>
        </div>
        </>
    )
}

export default Register
