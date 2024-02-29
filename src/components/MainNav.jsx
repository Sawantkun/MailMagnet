// MainNav.js
import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
} from '@chakra-ui/react';
import { Switch, useColorMode, Badge } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';


const MainNav = ({ isDarkMode, onSwitchChange }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const navigate = useNavigate();
  const handleHome = () => {
    navigate('/')
  }
  const handleLogIn = () => {
    navigate('/Login')
  }


  return (
    <nav className={`flex justify-between w-full h-16 pr-[40px] py-[40px] text-xl ${isDarkMode ? 'bg-white text-black' : ' bg-[#152840] text-white'}`}>
      <div className="flex items-center justify-between">
        <h4 className={`cursor-pointer text-3xl font-bold  py-[22px] px-[52px]  ${isDarkMode ? 'bg-white text-black' : 'bg-[#0B1623] text-white'}`} onClick={handleHome}>@MailMagnet</h4>
      </div>
      <div className="flex flex-row items-center justify-between w-full">
  <span className="font-semibold mx-3">QUOTA REMAINING: 200 EMAILS</span>
  <div className='flex items-center font-semibold gap-4'>
    <div>
      <sup onClick={handleOpenModal} className='px-2 mx-2 text-white cursor-pointer rounded-full bg-gray-500'>
        1
      </sup>
      <span>Welcome, user</span>
    </div>
    <span>Support</span>
    <span className='cursor-pointer' onClick={handleLogIn}>Sign Out</span>

  </div>
</div>

    </nav>
  );
};

export default MainNav;
