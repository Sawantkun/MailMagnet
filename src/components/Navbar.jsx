import React from 'react';
import { Switch, Button, useColorMode } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ isDarkMode, onSwitchChange }) => {
  const { toggleColorMode } = useColorMode();

  const handleSwitchChange = () => {
    onSwitchChange();
    toggleColorMode();
  };
  
const navigate = useNavigate();
  const handleSignUp = () => {
    navigate('/SignUp')
  }
  const handleLogin = () => {
    navigate('/Login')
  }

  return (
    <nav>
      <div className={`flex items-center justify-between w-100 px-[50px] py-6 ${isDarkMode ? 'bg-[#0B1623] text-white' : 'bg-white text-black'}`}>
        <span className={`font-extrabold text-3xl`}>@MailMagnet</span>
        <div className='w-[350px] flex items-center justify-between'>
          <Switch size='lg' colorScheme='bg-cyan-500' onChange={handleSwitchChange} />
          <button className='font-bold text-xl' onClick={handleLogin}>Sign In</button>
          <button className={`font-bold text-xl bg-cyan-500 px-7 py-2 rounded-full ${isDarkMode ? ' text-black' : 'text-white'}`} onClick={handleSignUp}>Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
