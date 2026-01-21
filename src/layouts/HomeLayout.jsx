import React, {  } from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import { Outlet } from 'react-router';




const HomeLayout = () => {

  return (
    <div className='w-11/12 mx-auto'>
      <section className='my-8'>
         <Navbar></Navbar>

      </section>
      <Outlet></Outlet>

     
     

     
      
    </div>
  );
};

export default HomeLayout;