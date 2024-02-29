// Dashboard.js
import React, { useState } from 'react';
import MainNav from '../components/MainNav';
import SideBar from '../components/SideBar';
import Services from './Services';
import Templates from './Templates';
import Settings from './Setting';

const Dashboard = () => {

  
  return (
    <div>
      <MainNav/>
      <div className='flex w-full'>
      <SideBar/>
      {/* <Services/> */}
      {/* <Templates/> */}
      <Settings/>
      </div>
    </div>
  );
}

export default Dashboard;
