import { Button, Card, CardBody, Image, Input, InputGroup, InputRightElement, Stack } from "@chakra-ui/react";
import React, { useState } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';


const Setting = () => {

    const [show, setShow] = useState(false);
    const [shows, setShows] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);    
    return(
        <div className="w-full p-3 flex flex-col gap-4 ${isDarkMode ? 'bg-[#0B1623] text-white' : 'bg-white text-black'}`}">
        <h2 className="text-2xl"><b>Personal Settings</b></h2>
        <Card>
            <CardBody className="flex flex-col gap-3">
                <h2 className="text-xl"><b>Contact Details</b></h2>
                <label>
                    Name
                    <Input type="text" name="name" id="name" placeholder="Enter Your Name" autoComplete='off'/>
                </label>
                <Button colorScheme="blue" className="w-20 ">Update</Button>
            </CardBody>
        </Card>
        <Card>
            <CardBody className="flex flex-col gap-3">
                <h2 className="text-xl"><b>Password</b></h2>
                <label>
                    New Password
                    <InputGroup size='md'>
                        <Input
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='Enter password'
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' className='opacity-50' size='sm' onClick={() => setShow(!show)}>
                                {show ? <HiEyeOff /> : <HiEye />} 
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </label>
                <label>
                    Confirm Password
                    <InputGroup size='md'>
                        <Input
                            pr='4.5rem'
                            type={shows ? 'text' : 'password'}
                            placeholder='Enter password'
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' className='opacity-50' size='sm' onClick={() => setShows(!shows)}>
                                {shows ? <HiEyeOff /> : <HiEye />} 
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </label>
                <Button colorScheme="blue" className="w-20">Update</Button>
            </CardBody>
        </Card>
    </div>
    
    )
}

export default Setting;