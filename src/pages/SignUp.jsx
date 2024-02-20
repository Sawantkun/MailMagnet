import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import { Button, Card, CardBody, Image, Input, InputGroup, InputRightElement, Stack } from "@chakra-ui/react";
import Hero from "../assets/svgs/signup.svg"
import { HiEye, HiEyeOff } from 'react-icons/hi'; // Import eye icons from react-icons library
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    const [shows, setShows] = React.useState(false);
    const handleClicks = () => setShows(!shows);

    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleSwitchChange = () => {
      setIsDarkMode(!isDarkMode);
    };
    const navigate = useNavigate();
    const handleDashboard = () => {
      navigate('/dashboard')
    }

    return (
        <div className={`w-100 h-[100vh] ${isDarkMode ? 'bg-[#0B1623] text-white' : 'bg-white text-black'}`}>
            <Navbar isDarkMode={isDarkMode} onSwitchChange={handleSwitchChange} />
            <div className="w-9/12 h-100 px-[50px] mt-[50px] py-[100px] mx-auto flex items-center justify-between border rounded">
                <div>
                    <h1 className='text-center text-3xl font-bold mb-9'>Let's Get Started</h1>
                    <Stack spacing={3}>
                        <InputGroup className='gap-3'>
                            <Input type="text" name="name" id="name" placeholder="Enter Your First Name" autoComplete='off'/>
                            <Input type="text" name="userName" id="userName" placeholder="Enter Your Last Name" autoComplete='off'/>
                        </InputGroup>
                        <Input type="Email" name="email" id="email" placeholder="Enter Your Email Id" autoComplete='off'/>
                        <InputGroup size='md'>
                            <Input
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='Enter password'
                            />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' className='opacity-50' size='sm' onClick={handleClick}>
                                    {show ? <HiEyeOff /> : <HiEye />} 
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        <InputGroup>
                            <Input
                                pr='4.5rem'
                                type={shows ? 'text' : 'password'}
                                placeholder='Enter Confirm password'
                            />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' className='opacity-50' size='sm' onClick={handleClicks}>
                                    {shows ? <HiEyeOff /> : <HiEye />} 
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </Stack>
                    <div className='w-100 text-center mt-5 cursor-pointer opacity-50 hover:opacity-100 transition-all'>Forgot Password?</div>
                        <div className='text-center mt-5'>
                                <button className={`font-bold text-md bg-cyan-500 px-5 py-1 rounded-full ${isDarkMode ? ' text-black' : 'text-white'}`} onClick={handleDashboard}>Create</button>
                        </div>
                    </div>
            <img src={Hero} className='w-[400px]  mx-auto my-7' alt="Hero Image" />
            </div>
        </div>
    );
};

export default SignUp;
