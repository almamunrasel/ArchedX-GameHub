import React from 'react';
import { Link } from 'react-router';
import DownFooter from './DownFooter';

const Footer = () => {
  return (
    <div>
      <div className='up my-15 py-8 text-center bg-black'>
        <p className='text-xs text-accent-200 py-1'>Looking for recommendations</p>
        <p className='text-accent py-3 mb-3'>Sign in to view personalized recommendations </p>
       <Link to='/auth/login' className='bg-gradient-to-b from-[#8FAE1E] to-[#5F740F] text-white px-6 py-2 rounded-md  hover:from-[#9EC424] hover:to-[#6E8512]  '>Sign in</Link>

        <p className='py-3 my-3 text-accent'>Or <Link className='hover:text-[#2196F3]' to='/auth/registration'>Sign Up</Link> and join Steam for free</p>

      </div>

      <div >

        <DownFooter></DownFooter>



      </div>

      {/* <Link to='/auth/login'>Sign Up</Link> */}
      
    </div>
  );
};

export default Footer;