import React, { useState } from 'react'
import "./login.css"
import { createUserWithEmailAndPassword } from 'firebase/auth'
function Login() {
    const [avatar,setAvatar]=useState({
        file:null,
        url:""
    })
    const handleAvatar=e=>{ 
        if(e.target.files[0]){
        setAvatar({
        file:e.target.files[0],
        url:URL.createObjectURL(e.target.files[0])
        })
    }
    }
    const handleRegister= async (e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const {username,email,password}=Object.fromEntries(formData);
        try{
            const res=await createUserWithEmailAndPassword(auth,email,password)
        }
        catch(err){
            console.log(err)
        }
        
    }
    const handleLogin=e=>{
        e.preventDefault()
        toast.error("Hello")
    }
  return (
    <div className="login">
    <div className="item">
        <h2>Welcome back,</h2>
        <form>
            <input type="text" placeholder="Email" name="email"></input>
            <input type="password" placeholder="Password" name="password"></input>
            <button>Sign In</button>
        </form>
        </div>  
       <div className='separator'></div> 
       <div className='item'>
       <h2>Create an Account</h2>
        <form onSubmit={handleRegister}>
            <label htmlFor="file"> 
            <img src={avatar.url || "./avatar.png"} alt=""/>
            Upload an image
            </label>
            <input type="file" id="file" style={{display:"none"}} onChange={handleAvatar}/>
            <input type="text" placeholder='Username' name="username"/>
            <input type="text" placeholder="Email" name="email"></input>
            <input type="password" placeholder="Password" name="password"></input>
            <button>Sign Up</button>
        </form>
        </div> 
    </div>
  )
}

export default Login
