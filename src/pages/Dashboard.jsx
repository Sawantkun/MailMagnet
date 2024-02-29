// Dashboard.js
import React, { useState } from 'react';
import MainNav from '../components/MainNav';
import SideBar from '../components/SideBar';
import Services from './Services';
import Setting from './Setting';

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleMenuItemClick = (index) => {
    setCurrentPage(index);
  };
  
  return (
    <div>
    <MainNav />
    <div className='flex w-full'>
      <div className='w-1/5'>
      <SideBar onMenuItemClick={handleMenuItemClick} />
      </div>
      <div className='w-4/5 '>
        {currentPage === 0 && <Services />}
        {currentPage === 1 && <EmailTemplates />}
        {currentPage === 2 && <Setting />}
      </div>
    </div>
  </div>
  );
};

export default Dashboard;
