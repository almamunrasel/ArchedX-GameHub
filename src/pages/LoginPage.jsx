import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import AuthContext from '../Context/AuthContext';
import { toast } from 'react-toastify';
import { FaEyeSlash } from 'react-icons/fa';
import { PiEyesBold } from 'react-icons/pi';
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const [show,setShow]=useState(false);
  const [error,setError]=useState('');
  const [success,setSuccess]=useState('')
  const {signIn,}=useContext(AuthContext);
  const navigate=useNavigate();

  const handleLogin=(e)=>{
    e.preventDefault();
    const email=e.target.email.value;
    const password=e.target.password.value;
    signIn(email,password)
    .then((res=>{
      const user=res.user;
      console.log(user);
      setSuccess('congratulations you logged in successfully');
      toast.success("Login successful!");
      e.target.reset();
       navigate(`${location.state?location.state : "/"}`)
    }))
    .catch(error=>{
      const errorMessage=error.message
      setError(errorMessage);
    })

  }


  return (
    <div className='flex justify-center items-center '>
        <div className="card bg-base-200 w-full max-w-sm shrink-0 shadow-2xl py-5  ">
            <h2 className='font-semibold text-2xl text-center'>Login Your account</h2>
            <form onSubmit={handleLogin} className="card-body ">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" required/>
                <label className="label">Password</label>
                {/* <input type="password" name='password' className="input" placeholder="Password" required /> */}
                <div className='relative'>
                                  <input type={ show ?"text":"password"} className='input' name='password' placeholder='Password' required/>
                                  <button type='button' onClick={()=>setShow(!show)} className='btn btn-xs top-2 right-6 absolute'>
                                    {
                                      show? <FaEyeSlash/> : <PiEyesBold/>
                                     
                                    }
                                  </button>
                
                                </div>
                <div><Link to='/auth/forgotpassword' className="link link-hover">Forgot password?</Link></div>
               

                {
                  error && <p className='text-red-500'>{error}</p>
                }
               
                <button type='submit'  className="btn btn-neutral mt-4">Login</button>
                 <button type='submit'  className="btn btn-neutral mt-4"> <FcGoogle /> Login With Google</button>
                <p className='font-semibold text-center pt-5'>Dont’t Have An Account ? <Link to='/auth/registration' className='text-secondary hover:underline'>Register</Link> </p>
              </fieldset>
              {
          success && <p className='text-green-400'> {success}</p>
              }
            </form>
          </div>
    </div>
  );
};

export default LoginPage;