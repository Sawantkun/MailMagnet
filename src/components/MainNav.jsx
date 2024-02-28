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
      <div className="flex items-center justify-between w-[650px]">
        <div className={`cursor-pointer text-3xl font-bold  py-[22px] px-[52px]  ${isDarkMode ? 'bg-white text-black' : 'bg-[#0B1623] text-white'}`} onClick={handleHome}>@MailMagnet</div>
        <span className="font-semibold">QUOTA REMAINING: 200 EMAILS</span>
      </div>
      <div className="flex items-center font-semibold justify-between w-[400px]">
        <div>
          <sup onClick={handleOpenModal} className='px-2 mx-2 text-white cursor-pointer rounded-full bg-gray-500'>
          1
        </sup>
        <span>Welcome, user</span>
        </div>
        <span >Support</span>
        <span className='cursor-pointer' onClick={handleLogIn}>Sign Out</span>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <ModalOverlay />
          <ModalContent>
          <ModalHeader textAlign="center" fontSize="2xl" fontWeight="bold" color={"cyan.500"}>
              Updates
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody className="border-l-cyan-500 border-l-4 ">
              <ol className="list-decimal">
                <li className='m-2 p-1'> 
                  <Badge variant='solid' colorScheme='green'>
                   New
                  </Badge>
                      &nbsp; Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et consectetur blanditiis quos veniam perspiciatis ea.
                </li>
                <li className='m-2 p-1'> 
                  <Badge variant='subtle' colorScheme='purple'>
                    Improved
                  </Badge>
                    &nbsp; Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et consectetur blanditiis quos veniam perspiciatis ea.
                </li>
                <li className='m-2 p-1'> 
                  <Badge variant='outline' colorScheme='red'>
                    Removed
                  </Badge>
                    &nbsp; Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et consectetur blanditiis quos veniam perspiciatis ea.
                </li>
              </ol>
            </ModalBody>
            <ModalFooter>
              <p className='w-full border-t-2 border-t-cyan-500 px-auto text-center py-2'>MailMagnet News</p>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </nav>
  );
};

export default MainNav;
