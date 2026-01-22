import React, {  } from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';




const HomeLayout = () => {

  return (
    <div className=''>
      <section className='w-11/12 mx-auto my-8'>
         <Navbar></Navbar>

      </section>
      <main className='w-9/12 mx-auto'>
        <Outlet></Outlet>

      </main>

      <footer>
        <Footer></Footer>
      </footer>
      

     

     
     

     
      
    </div>
  );
};

export default HomeLayout;