import React from 'react'
import { useState } from 'react';
import GoogleLogin from 'react-google-login'
import App from '../App';

export const Login = () => {
    const [loginData, setLoginData] = useState(
        localStorage.getItem('loginData')
        ? JSON.parse(localStorage.getItem('loginData'))
        : null
    );
    const handleFaliure=(result)=>{
        alert(result)
    };
    const handleLogin=async(googleData)=>{
        const res=await fetch('/api/google-login',{
            method: 'POST',
            body:JSON.stringify({
                token:googleData.tokenId,
            }),
            headers:{
                'Content-Type':'application/json',
            },
        });

        const data=await res.json();
        setLoginData(data);
        localStorage.setItem('loginData',JSON.stringify(data));
    };
    const handleLogout=() =>{
        localStorage.removeItem('loginData')
        setLoginData(null);
       
    };

  return (
      <div className='Login'>
          <header className='header'>
              <h1>Google Login</h1>
    <div>
        {
            loginData ?(
                <div>
                    <h3>You logged in as {loginData.email}</h3>
                    <button onClick={handleLogout}>Logout</button>
                    </div>
            )
            :(
                   <GoogleLogin
        clientId={process.env.LOGIN_CLIENT_ID}
        buttonText="Log in with Google"
        onSuccess={handleLogin}
        onFailure={handleFaliure}
        cookiePolicy={'single_host_origin'}
        ></GoogleLogin>
            )
        }
     
        </div>
        </header>
        </div>
  );
  }

  export default Login;
  
 