import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div className='min-h-screen'>
      <header className='w-11/12 mx-auto my-8'>
      <Navbar></Navbar>

      </header>
      <main className='w-11/12 mx-auto py-4'>
      <Outlet></Outlet>

      </main>
      
    </div>
  );
};

export default AuthLayout;