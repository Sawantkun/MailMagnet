import React from 'react';
import { Switch, Button, useColorMode } from '@chakra-ui/react';

const Navbar = ({ isDarkMode, onSwitchChange }) => {
  const { toggleColorMode } = useColorMode();

  const handleSwitchChange = () => {
    onSwitchChange();
    toggleColorMode();
  };

  return (
    <nav>
      <div className={`flex items-center justify-between w-100 px-[50px] py-6 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <span className={`font-extrabold text-3xl`}>@MailMagnet</span>
        <div className='w-[350px] flex items-center justify-between'>
          <Switch size='lg' colorScheme='cyan' onChange={handleSwitchChange} />
          <button className='font-bold text-xl'>Sign In</button>
          <button className={`font-bold text-xl bg-cyan-500 px-7 py-2 rounded-full ${isDarkMode ? ' text-black' : 'text-white'}`}>Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
