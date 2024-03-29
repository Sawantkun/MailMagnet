import React, { useState, useRef } from 'react';
import { IoMdClose } from 'react-icons/io';
import { FaUserLock } from 'react-icons/fa6';
import {
  Box,
  Text,
  Stepper,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  Input,
  Button,
  useSteps ,
  StepTitle ,
} from '@chakra-ui/react';

const steps = [
  { title: 'Enter Email', description: 'Contact Info' },
  { title: 'Enter OTP', description: 'OTP Verification' },
  { title: 'Reset Password', description: 'Enter New Password' },
];

function ForgotPassword() {
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  })
    const [completedSteps, setCompletedSteps] = useState([]);
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleInputChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;

    if (index < otp.length - 1 && value !== '') {
      inputRefs.current[index + 1].focus();
    }

    setOtp(newOtp);
  };

  const handleGenerateOtp = () => {
    setCompletedSteps([0]);
    setActiveStep(1);
  };

  const handleOtpSubmit = () => {
    if (otp.join('').length === 4) {
      setCompletedSteps([0, 1]);
      setActiveStep(2);
    } else {
      console.error('Invalid OTP');
    }
    setCompletedSteps([1]);
    setActiveStep(2);
  };

  return (
    <div className='mt-[50px] w-full'>
      <Box className='w-[700px] mx-auto' >
      <Stepper size='lg' index={activeStep} colorScheme='facebook'>
      {steps.map((step, index) => (
        <Step key={index} onClick={() => setActiveStep(index)} className='cursor-pointer'>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink='0'>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
      </Box>

      {activeStep === 0 && (
        <Box className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-md max-w-md w-full p-8 flex flex-col items-center">
          <FaUserLock size={70} className="mb-8 text-[#152840]" />
          <Text className="text-xl font-bold mb-4">Can't Recall Your Password?</Text>
          <Text className="mb-4 text-[#3e6492] text-center">Enter your email, we'll send you an OTP to get your account back!</Text>
          <Input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none"
          />
          <Box className="w-full flex justify-center">
          <Button colorScheme='facebook' className='mt-5' onClick={handleGenerateOtp}>Generate OTP</Button>

          </Box>
          <Box className="w-full text-center m-4">
            <Box className='flex items-center mb-6'>
              <hr className="w-1/2 border-t border-gray-300" />
              <Text className='text-gray-500'>OR</Text>
              <hr className="w-1/2 border-t border-gray-300" />
            </Box>
            <Text className="mt-6"><a href="/signup" className="text-[#152840]">Create a new account?</a></Text>
          </Box>
        </Box>
      )}

      {activeStep === 1 && (
        <Box className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-md max-w-md w-full p-8 flex flex-col items-center">          
          <Text className="text-2xl font-bold mb-4">Enter OTP</Text>
          <Text className="mb-6 text-[#3e6492]">Please enter the OTP sent to your email.</Text>
          <Box className="flex justify-center w-[250px]">
            {otp.map((value, index) => (
              <Input
                key={index}
                ref={(ref) => (inputRefs.current[index] = ref)}
                type="text"
                maxLength="1"
                value={value}
                onChange={(e) => handleInputChange(index, e.target.value)}
                className="w-12 h-12 text-center mr-2 rounded border border-gray-500 text-lg focus:outline-none"
              />
            ))}
          </Box>
          <Box className="w-full flex justify-center mt-6">
          <Button colorScheme='facebook' className='mt-5' onClick={handleOtpSubmit}>Submit</Button>

          </Box>
        </Box>
      )}

      {activeStep === 2 && (
        <Box className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-md max-w-md w-full p-6 flex flex-col items-center">
          <Text className="text-2xl font-bold mb-4">RESET PASSWORD</Text>
          <Text className="mb-6 text-[#3e6492]">Reset Your Password and Regain Control.</Text>
          <Input
            type="password"
            placeholder="Enter your new password"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none"
          />
          <Input
            type="password"
            placeholder="Confirm your new password"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none"
          />
          <Box className="w-full flex justify-center">
          <Button colorScheme='facebook' className='mt-5' onClick={handleOtpSubmit}>Reset Password</Button>

          </Box>
        </Box>
      )}
    </div>
  );
}

export default ForgotPassword;
