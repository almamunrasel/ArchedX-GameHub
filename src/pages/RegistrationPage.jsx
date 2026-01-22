import React, { useContext, useState } from 'react';
import { FaEyeSlash } from 'react-icons/fa';
import { PiEyesBold } from 'react-icons/pi';
import { Link, useNavigate } from 'react-router';
import AuthContext from '../Context/AuthContext';
import { motion, AnimatePresence } from "framer-motion";

const RegistrationPage = () => {

  const navigate=useNavigate();
  const {createUser,setLoading} = useContext(AuthContext);
  const [error,setError] = useState('');
  const [success,setSuccess]=useState('');
  const [show,setShow]=useState(false);
  
   const passwordRegex =
  /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
  
  const handleRegister=(e)=>{
    e.preventDefault();
    // const name=e.target.name.value;
    // const photo=e.target.photo.value;
    const email = e.target.email.value;
    const password=e.target.password.value;
    const terms= e.target.terms.checked;
    // console.log(name,photo,email,password);
    

    if (!passwordRegex.test(password)) {
      return setError("Password must be one uppercase,one lowercase and 6 characters");
    }
    setError('');
    setSuccess(false);
    if(!terms){
      setError('please accept our terms and conditions');
      return;
    }
    createUser(email,password)
    .then(res=>{
      const user= res.user;
      console.log(user);
      
      setSuccess(true);
      e.target.reset();
      navigate('/');


    })
    .catch(error=>{
      setError(error.message);
    })
    .finally(() => setLoading(false))



  }
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
   <div className='flex justify-center  items-center '>
         <div className="card bg-base-200 w-full max-w-sm shrink-0 shadow-2xl py-5">
          <h2 className='font-semibold text-2xl text-center'>Register Your account</h2>
            <form onSubmit={handleRegister}   className="card-body">
              <fieldset className="fieldset">
                     {/* name field */}
                 <label className="label font-semibold">Your Name</label>
                <input type="text" name='name' className="input " placeholder="Enter Your name" required />
                {/* {
                  nameError && <p className='text-xs text-error '>{nameError}</p>
                } */}

                {/* photo field */}
                <label className="label font-semibold">Photo URL</label>
                <input type="text" name='photo' className="input " placeholder="Enter Your Photo URL" required />


                {/* emial field */}
                <label className="label font-semibold">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" required />

                {/* password field */}
                <label className="label font-semibold">Password</label>
                {/* <input type="password" name='password' className="input" placeholder="Password"  required/> */}
                <div className='relative'>
                  <input type={ show ?"text":"password"} className='input' name='password' placeholder='Password' required/>
                  <button type='button' onClick={()=>setShow(!show)} className='btn btn-xs top-2 right-6 absolute'>
                    {
                      show? <FaEyeSlash/> : <PiEyesBold/>
                     
                    }
                  </button>

                </div>

           <div>
              <label class="label">
                  <input type="checkbox" name='terms'  class="checkbox" />
                  Accept Our terms and Condition
              </label>

          </div>
           {
          error && <p className='text-red-400'>{error}</p>
           }

               
               
                
                <button type='submit' className="btn btn-neutral mt-4">Register</button>
                <p className='font-semibold text-center pt-5'>Already Have An Account ? <Link to='/auth/login' className='text-secondary hover:underline'>Login</Link> </p>
              </fieldset>
              
        {
          success && <p className='text-green-400'> you have been registered successfully</p>
        }
            </form>
          </div>
      </div>
      </motion.div>
  );
};

export default RegistrationPage;