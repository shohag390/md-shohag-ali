import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from './Components/Footer/Footer';
import Profile from './Components/Profile/Profile';

const App = () => {
  return (
    <div className='container mx-auto h-[100vh] w-full bg-[#061d34] root_bg p-[15px] flex flex-col gap-[15px] overflow-hidden'>
      <Navbar />
      <div className='flex justify-between gap-[15px]'>
        <Profile />
        <Outlet />
      </div>
    </div>
  );
};

export default App;