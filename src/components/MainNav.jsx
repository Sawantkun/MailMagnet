// MainNav.js
import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalBody,
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

  const { toggleColorMode } = useColorMode();

  const handleSwitchChange = () => {
    onSwitchChange();
    toggleColorMode();
  };
  const navigate = useNavigate();
  const handleHome = () => {
    navigate('/')
  }


  return (
    <nav className={`flex justify-between w-full h-16 pr-[40px] py-[40px] text-xl ${isDarkMode ? 'bg-white text-black' : ' bg-[#152840] text-white'}`}>
      <div className="flex items-center justify-between w-[650px]">
        <div className={`cursor-pointer text-3xl font-bold py-[22px] px-[50px] ${isDarkMode ? 'bg-white text-black' : 'bg-[#0B1623] text-white'}`} onClick={handleHome}>@MailMagnet</div>
        <span className="font-semibold">QUOTA REMAINING: 200 EMAILS</span>
      </div>
      <div className="flex items-center font-semibold justify-between w-[400px]">
        <div>
          <sup onClick={handleOpenModal} className='py-1 px-3 mx-2 text-white cursor-pointer rounded-full bg-gray-500'>
          1
        </sup>
        <span>Welcome, user</span>
        </div>
        <span >Support</span>
        <span>Sign Out</span>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <ModalOverlay />
          <ModalContent>
          <ModalHeader textAlign="center" fontSize="2xl" fontWeight="bold" color={"cyan.500"}>
              Updates
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody className="border-l-cyan-500 border-l-4">
              <ol className="list-decimal">
                <li className='m-2 p-1'> 
                  <Badge variant='solid' colorScheme='green'>
                   New
                  </Badge>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et consectetur blanditiis quos veniam perspiciatis ea.
                </li>
                <li className='m-2 p-1'> 
                  <Badge variant='subtle' colorScheme='purple'>
                    Improved
                  </Badge>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et consectetur blanditiis quos veniam perspiciatis ea.
                </li>
                <li className='m-2 p-1'> 
                  <Badge variant='outline' colorScheme='red'>
                    Removed
                  </Badge>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et consectetur blanditiis quos veniam perspiciatis ea.
                </li>
                
              </ol>
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </nav>
  );
};

export default MainNav;
