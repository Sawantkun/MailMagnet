import React, { useState } from 'react';
import { Field, Formik } from "formik";
import Navbar from "../components/Navbar";
import { Button, Card, CardBody, Image, Input, InputGroup, InputRightElement, Stack } from "@chakra-ui/react";
import Hero from "../assets/svgs/login.svg"
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleSwitchChange = () => {
      setIsDarkMode(!isDarkMode);
    };
    const navigate = useNavigate();
    const handleDashboard = () => {
      navigate('/dashboard')
    }
    const handlePassword = () => {
      navigate('/ForgotPassword')
    }
    return(
        <div className={`w-100 h-[100vh] ${isDarkMode ? 'bg-[#0B1623] text-white' : 'bg-white text-black'}`}>
        <Navbar isDarkMode={isDarkMode} onSwitchChange={handleSwitchChange}/>
        <div className="w-9/12 h-100 px-[150px] mt-[100px] py-[100px] mx-auto flex items-center justify-between border rounded">
           <img className='w-[350px]' src={Hero} alt="Hero Image"/>
            <div className='w-5/12'>
                <h1 className='text-center text-3xl font-bold mb-9'>Welcome Back </h1>
                <Stack spacing={3}>
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
                        
                    </Stack>
                    <div className='w-100 text-center mt-5 cursor-pointer opacity-50 hover:opacity-100 transition-all' onClick={handlePassword}>Forgot Password?</div>
                    <div className='text-center mt-5'>
                        <button className={`font-bold text-md bg-cyan-500 px-5 py-1 rounded-full ${isDarkMode ? ' text-black' : 'text-white'}`} onClick={handleDashboard}>Log In</button>
                    </div>
            </div>
        </div>
    </div>
    )
}

export default Login;
