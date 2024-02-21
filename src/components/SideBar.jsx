import React, { useState } from 'react';
import { FaEnvelope, FaFileAlt, FaUser } from 'react-icons/fa';
import { Switch, useColorMode, Button, Icon, chakra } from '@chakra-ui/react';


const CustomSidebar = ({ isDarkMode, onSwitchChange }) => {
  const { toggleColorMode } = useColorMode();
  const [activeItem, setActiveItem] = useState(0);

  const handleSwitchChange = () => {
    onSwitchChange();
    toggleColorMode();
  };

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <div className={`border w-[387px] border-end h-[100vh] ${isDarkMode ? 'bg-[#0B1623] text-white' : 'bg-white text-black'}`}>
      <ul className=' pt-[20px]'>
        <li className={`flex items-center py-6 px-[18px] text-xl ${activeItem === 0 ? 'bg-gray-200' : ''}`}>
          <chakra.a
            href="#"
            onClick={() => handleItemClick(0)}
            color={activeItem === 0 ? 'cyan.800' : 'inherit'} 
          >
            <Icon as={FaEnvelope} boxSize={6} color={activeItem === 0 ? 'cyan.800' : 'inherit'} className='mx-4'></Icon>
            Email Services
          </chakra.a>
        </li>
        <li className={`flex items-center py-6 px-[18px] text-xl ${activeItem === 1 ? 'bg-gray-200' : ''}`}>
          <chakra.a
            href="#"
            onClick={() => handleItemClick(1)}
            color={activeItem === 1 ? 'cyan.800' : 'inherit'} 
          >
            <Icon as={FaFileAlt} boxSize={6} color={activeItem === 1 ? 'cyan.800' : 'inherit'} className='mx-4'></Icon>
            Email Templates
          </chakra.a>
        </li>
        <li className={`flex items-center py-6 px-[18px] text-xl ${activeItem === 2 ? 'bg-gray-200' : ''}`}>
          <chakra.a
            href="#"
            onClick={() => handleItemClick(2)}
            color={activeItem === 2 ? 'cyan.800' : 'inherit'} 
          >
            <Icon as={FaUser} boxSize={6} color={activeItem === 2 ? 'cyan.800' : 'inherit'} className='mx-4'></Icon>
            Personal Settings
          </chakra.a>
        </li>
      </ul>
    </div>
  );
};

export default CustomSidebar;
