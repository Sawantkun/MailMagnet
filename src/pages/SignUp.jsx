import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import { Button, Card, CardBody, Image, Input, InputGroup, InputRightElement, Stack } from "@chakra-ui/react";
import Hero from "../assets/svgs/inboxcleanup.svg"

const SignUp = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    const [shows, setShows] = React.useState(false);
    const handleClicks = () => setShows(!shows);

    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleSwitchChange = () => {
      setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`w-100 h-[100vh] ${isDarkMode ? 'bg-[#0B1623] text-white' : 'bg-white text-black'}`}>
            <Navbar isDarkMode={isDarkMode} onSwitchChange={handleSwitchChange} />
            <div className="w-9/12 h-100 px-[50px] py-[100px] mx-auto flex items-center justify-between">
                <div>
                    <h1 className='text-start text-3xl font-bold mb-5'>SignUp</h1>
                    <Stack spacing={3}>
                        <InputGroup className='gap-3'>
                            <Input type="text" name="name" id="name" placeholder="Enter Your Name" />
                            <Input type="text" name="userName" id="userName" placeholder="Enter Your User Name" />
                        </InputGroup>
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
                        <InputGroup>
                            <Input
                                pr='4.5rem'
                                type={shows ? 'text' : 'password'}
                                placeholder='Enter Confirm password'
                            />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClicks}>
                                    {shows ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </Stack>
                    <div className='text-center mt-5'>
                        <button className="font-bold text-white text-xl bg-cyan-500 px-7 py-2 rounded-full">Save</button>
                    </div>
                </div>
            <img src={Hero} className='w-[40%] mx-auto my-7' alt="Hero Image" />
            </div>
        </div>
    );
};

export default SignUp;
