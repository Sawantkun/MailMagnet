import React from 'react';
import { Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';

const Faqs = ({ isDarkMode, onSwitchChange }) => {
  const { toggleColorMode } = useColorMode();

  const handleSwitchChange = () => {
    onSwitchChange();
    toggleColorMode();
  };
  return (
   <div className={`${isDarkMode ? 'bg-[#0B1623] text-white' : 'bg-white text-black'}`}>
     <div className='w-3/5 mx-auto h-100 pt-10'>
      <p className='text-base mb-4 text-center text-cyan-500 pb-5'>Navigate with Ease, Explore with Confidence: Your FAQs, Unveiled.</p>
      <h1 className='text-6xl font-bold mb-4 text-center pb-20'>FAQ's</h1>
    <div className='pb-20'>
    <Accordion  allowToggle>
    <AccordionItem className='mb-5'>
    <h2 className='text-4xl font-medium pt-2 pb-2 border-l-4  border-cyan-500'>
      <AccordionButton _expanded={{color: '#06B6D4' }}>
        <Box as="span" flex='1' textAlign='left'>
          Section 1 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={8} pt={6} className='border-l-4  border-cyan-500'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel> 
  </AccordionItem>
  </Accordion>

  <Accordion allowToggle>
  <AccordionItem  className='mb-5'>
    <h2 className='text-4xl font-medium  pt-2 pb-2 border-l-4  border-cyan-500'>
      <AccordionButton _expanded={{color: '#06B6D4' }}>
        <Box as="span" flex='1' textAlign='left'>
          Section 2 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={8} pt={6} className='border-l-4 border-cyan-500'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  </Accordion>

  <Accordion allowToggle>
  <AccordionItem  className='mb-5'>
    <h2 className='text-4xl font-medium pt-2 pb-2 border-l-4 border-cyan-500'>
      <AccordionButton _expanded={{color: '#06B6D4' }}>
        <Box as="span" flex='1' textAlign='left'>
          Section 3 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={8} pt={6} className='border-l-4 border-cyan-500'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  </Accordion>

  <Accordion allowToggle>
  <AccordionItem  className='mb-5'>
    <h2 className='text-4xl font-medium pt-2 pb-2 border-l-4 border-cyan-500'>
      <AccordionButton _expanded={{color: '#06B6D4' }}>
        <Box as="span" flex='1' textAlign='left'>
          Section 4 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={8} pt={6} className='border-l-4 border-cyan-500'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  </Accordion>


  <Accordion allowToggle>
  <AccordionItem>
    <h2 className='text-4xl font-medium pt-2 pb-2 border-l-4 border-cyan-500'>
      <AccordionButton _expanded={{color: '#06B6D4' }}>
        <Box as="span" flex='1' textAlign='left'>
          Section 5 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={8} pt={6} className='border-l-4 border-cyan-500'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
</div>

    </div>
   </div>
  );
};

export default Faqs;
