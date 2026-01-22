import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import AuthContext from '../Context/AuthContext';

const UpdateProfile = () => {

  const  {updateUser,user,setUser} =useContext(AuthContext);
  const navigate=useNavigate();

  const updateProfile=(e)=>{
    e.preventDefault();
    const name=e.target.name.value;
    const photo =e.target.photo.value;
    updateUser({displayName:name,photoURL:photo})
    .then(()=>{
      setUser({...user,displayName:name,photoURL:photo});
      navigate('/');
      
    })
    .catch((error)=>{
      alert(error.message);

    })
  }


  return (
    <div className="flex  items-center justify-center bg-base-100 px-4">
      <div className="card bg-base-200 w-full max-w-sm shadow-2xl">
        <div className="card-body">
          <h2 className="text-2xl font-semibold text-center">
            Update Your Information
          </h2>

          <form onSubmit={updateProfile} className='space-y-4'>
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input "
              placeholder="Enter your name"
              required
            />

            <label className="label">Photo Url</label>
            <input
              type="text"
              name="photo"
              className="input "
              placeholder="Enter your photoURL"
              required
            />

            

            <button 
              type="submit"
              className="btn btn-secondary w-full mt-4"
             
            > Submit
            </button>
          </form>

          <p className="text-center mt-4">
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;