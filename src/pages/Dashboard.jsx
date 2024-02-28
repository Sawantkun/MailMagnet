// Dashboard.js
import React, { useState } from 'react';
import MainNav from '../components/MainNav';
import SideBar from '../components/SideBar';
import Services from './Services';

const Dashboard = () => {

  
  return (
    <div>
      <MainNav/>
      <div className='flex w-full'>
      <SideBar/>
      <Services/>
      </div>
    </div>
  );
}

export default Dashboard;
