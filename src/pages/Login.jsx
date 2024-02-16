import React, { useState } from 'react';
import { Field, Formik } from "formik";
import Navbar from "../components/Navbar";
import { Button, Card, CardBody, Image, Input, InputGroup, InputRightElement, Stack } from "@chakra-ui/react";
import Hero from "../assets/svgs/inboxcleanup.svg"

const Login = () => {

    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleSwitchChange = () => {
      setIsDarkMode(!isDarkMode);
    };
    
    return(
        <div className={`w-100 h-[100vh] ${isDarkMode ? 'bg-[#0B1623] text-white' : 'bg-white text-black'}`}>
        <Navbar isDarkMode={isDarkMode} onSwitchChange={handleSwitchChange}/>
        <div className="w-9/12 vh-100 items-center px-[50px] py-[100px] flex justify-between mx-auto">
            <div className='w-5/12'>
                <h1 className='text-start text-3xl font-bold mb-3'>Login </h1>
                <Stack spacing={3}>
                        <Input type="Email" name="email" id="email" placeholder="Enter Your Email Id" />
                        <InputGroup size='md'>
                            <Input
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='Enter password'
                            />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                    {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        
                    </Stack>
                <div className='text-center mt-5'>
                    <button className="font-bold text-white text-xl bg-cyan-500 px-7 py-2 rounded-full">Save</button>
                </div>
            </div>
            <img className='w-[45%]' src={Hero} alt="Hero Image"/>
        </div>
    </div>
    )
}

export default Login;
