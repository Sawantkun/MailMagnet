import { Button, Card, CardBody, Image, Input, InputGroup, InputRightElement, Stack } from "@chakra-ui/react";
import React, { useState } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';


const Setting = () => {

    const [show, setShow] = useState(false);
    const [shows, setShows] = useState(false);

    return(
        <div className="w-9/12 bg-white">
            <h2 className="text-3xl"><b>Personal Settings</b></h2>
            <Card>
                <CardBody className="flex flex-col gap-3">
            <h2 className="text-2xl"><b>Contact Details</b></h2>
            <label>
            Name
            <Input type="text" name="name" id="name" placeholder="Enter Your Name" autoComplete='off'/>
            </label>
<Button colorScheme="blue">Update</Button>
</CardBody>
</Card>
<Card>
    <CardBody className="flex flex-col gap-3">
<h2 className="text-2xl"><b>Password</b></h2>
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
<Button colorScheme="blue">Update</Button>
</CardBody>
</Card>
        </div>
    )
}

export default Setting;