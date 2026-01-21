
import steamIcon from '../assets/steamIcon.png'
import { Link, NavLink } from 'react-router';
import AuthContext from '../Context/AuthContext';
import { useContext } from 'react';

import userIcon from '../assets/user.png';

const Navbar = () => {


  const {user,logOut} =useContext(AuthContext);

  const handleLogOut=()=>{
    logOut()
    .then(()=>{
      alert("you logged out succesfully")
    })
    .error((error)=>{
      alert(error);
    })

  }
 
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
    <a className="btn btn-ghost text-xl hover:scale-105 transition">ArcadeX</a>
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

     <img className='w-8 h-8 rounded-full' src={`${user?user.photoURL: userIcon}`} alt="" /> <br/>
     {
          user && <p>{user.email}</p>
        }
    {/* {user.email}
    <NavLink to='/auth/login' className="btn hover:scale-105 transition">Login</NavLink> */}

     {
          user? <button onClick={handleLogOut} className='btn btn-primary px-10'>Logout</button>:  <Link to='/auth/login' className='btn btn-primary px-10'>Login</Link>
        }
  </div>
</div>
  );
};

export default Navbar;