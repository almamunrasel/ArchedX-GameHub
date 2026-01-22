
import steamIcon from '../assets/steamIcon.png'
import { Link, NavLink } from 'react-router';
import AuthContext from '../Context/AuthContext';
import { useContext,  } from 'react';

import userIcon from '../assets/user.png';
import { toast } from 'react-toastify';

const Navbar = () => {


  const {user,logOut} =useContext(AuthContext);
  

  const handleLogOut=()=>{
    logOut()
    .then(()=>{
     toast.success('you are logged out!')
    })
    .error((error)=>{
      alert(error);
    })

  }

  console.log(user);
 
  return (
   <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><NavLink  to='/'>Home</NavLink></li>
        <li>
          <NavLink to='/allgames'>All Games</NavLink>
          
        </li>
        <li><NavLink  to='/installedGame'>Installed Games</NavLink></li>
      </ul>
    </div>
    <img src={steamIcon} className='w-8 h-8' alt="" />
    <Link to='/' className="btn btn-ghost text-xl hover:scale-105 transition">ArcadeX</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink className='hover:scale-105 transition' to='/'>Home</NavLink></li>
      <li>
       <NavLink className='hover:scale-105 transition' to='/allgames'>All Games</NavLink>
      </li>
      <li><NavLink className='hover:scale-105 transition' to='/installedGame'>Installed Games</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">

    

    
    {
      !user && (
        <>
        <img src={userIcon} alt="guest" className="w-9 h-9 rounded-full border" />
        <Link to="/auth/login" className='btn btn-primary px-8'>Login</Link>
        </>
      )
    }
    {/* //logged in */}
    {/* {
      user && (
        <p>{user.name}</p>
      )
    } */}

    {
      user && (
        // <p>{user.name}</p>
        

        <div className="dropdown dropdown-end">
      <label tabIndex={0} className="cursor-pointer">
        <div className='flex flex-col md:flex-row items-center gap-3' >
           <p>{user.displayName}</p>
        <img
          src={user.photoURL ? user.photoURL : userIcon}
          alt="User"
          className="w-10 h-10 rounded-full border-2 border-secondary hover:scale-105 transition"
        />
        </div>
       
      </label>

      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-52 mt-3"
      >
        {/* <li className="text-xs px-2 text-accent">
          {user.email}
        </li> */}

        <li>
          <Link to='/auth/updateprofile'>Update Profile</Link>
        </li>

        <li>
          <button onClick={handleLogOut} className="text-red-400">
            Logout
          </button>
        </li>
      </ul>
    </div>

      )
    }
    
    
  </div>


  
</div>
  );
};

export default Navbar;