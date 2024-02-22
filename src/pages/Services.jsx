import React, { useState } from 'react';
import {
  Button,
  Box,
  Card,
  CardBody,
  Badge,
  Input,
  Checkbox,
  Alert,
  AlertIcon,
  AlertDescription,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
} from '@chakra-ui/react';
import { Tooltip } from '@chakra-ui/react';
import { CopyIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { SiGmail } from 'react-icons/si';

const Services = () => {
  const [copiedServiceId, setCopiedServiceId] = useState(null);
  const [services, setServices] = useState([]);
  const [editedIndex, setEditedIndex] = useState(null);
  const [showModal, setshowModal] = useState(false);
  const [showContent, setshowContent] = useState(false);
  const [copyIndex, setCopyIndex] = useState(null); // New state to track the copy index
  const [deleteClicked, setDeleteClicked] = useState(null); // New state to track delete click
  const [editClicked, setEditClicked] = useState(null); // New state to track edit click
  const [formData, setFormData] = useState({
    name: '',
    serviceId: '',
  });

  const handleSaveClick = () => {
    setServices((prevServices) => [...prevServices, formData]);
  };

  const handleCreateService = () => {
    if (editedIndex !== null) {
      setServices((prevServices) =>
        prevServices.map((service, index) =>
          index === editedIndex ? formData : service
        )
      );
      setEditedIndex(null);
    } else {
      handleSaveClick();
    }
    setFormData({
      name: '',
      serviceId: '',
    });
    setshowModal(false);
  };

  const handleDeleteClick = (index) => {
    setServices((prevServices) => prevServices.filter((_, i) => i !== index));
    setDeleteClicked(index); // Set delete clicked
    // Reset delete clicked state after a certain time (e.g., 1000 milliseconds)
    setTimeout(() => {
      setDeleteClicked(null);
    }, 1000);
  };

  const handleEditClick = (index) => {
    setEditedIndex(index);
    const editedService = services[index];
    setFormData({
      name: editedService.name,
      serviceId: editedService.serviceId,
    });
    setshowModal('Form');
    setEditClicked(index); // Set edit clicked
    // Reset edit clicked state after a certain time (e.g., 1000 milliseconds)
    setTimeout(() => {
      setEditClicked(null);
    }, 1000);
  };

  const handleCopyClick = (index) => {
    navigator.clipboard.writeText(services[index].serviceId);
    setCopiedServiceId(services[index].serviceId);
    setCopyIndex(index); // Set the index of the copied service
    // Reset copy index state after a certain time (e.g., 1000 milliseconds)
    setTimeout(() => {
      setCopiedServiceId(null);
      setCopyIndex(null);
    }, 1000);
  };

  return (
    <div className='m-5 w-full'>
      <div className='my-5'>
        <h2 className='text-2xl mb-2'>
          <b>Email Services</b>
        </h2>
        <Button bg='#152840' colorScheme='blue' onClick={() => setshowModal('Form')}>
          Add New Service
        </Button>
      </div>
      <div className='flex flex-col gap-4'>
        {services.map((data, index) => (
          <Card key={index}>
            <CardBody className='flex flex-col gap-5'>
              <div className='flex justify-between'>
                <div className='flex items-center gap-4'>
                  <Box boxSize='5'>
                    <SiGmail />
                  </Box>
                  <div>
                    <h5 className='font-bold text-red'>{data.name}</h5>
                    <div className='flex items-center gap-2 '>
                      <p>Service ID:</p>
                      <p className='font-bold'>{data.serviceId}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <Badge>Default</Badge>
                </div>
                <div className='grid grid-cols-3 gap-4'>
                  <DeleteIcon
                    onClick={() => handleDeleteClick(index)}
                    color={deleteClicked === index ? 'cyan' : 'black'} // Change color when clicked
                  />
                  <EditIcon
                    onClick={() => handleEditClick(index)}
                    color={editClicked === index ? 'cyan' : 'black'} // Change color when clicked
                  />
                  <Tooltip label={`Copied Service ID: ${copiedServiceId}`} isOpen={copyIndex === index} fontSize='md'>
                    <CopyIcon
                      onClick={() => handleCopyClick(index)}
                      color={copyIndex === index ? 'cyan' : 'black'} // Change color when clicked
                    />
                  </Tooltip>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
      <Modal isOpen={showModal} size={'xl'} onClose={() => setshowModal(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className='bg-[#0B1623] text-white'>Config Service</ModalHeader>
          <ModalCloseButton className='text-white' />
          <ModalBody>
            {showModal === 'Form' && (
              <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-5 '>
                  <Box boxSize='6'>
                    <SiGmail />
                  </Box>
                  <div>
                    <h5>Email</h5>
                    <div className='flex items-center gap-3'>
                      <p>Personal Service</p>
                      <p>500 emails per day</p>
                    </div>
                  </div>
                </div>
                <label>
                  <Text >Name</Text>
                  <Input
                    name='name'
                    id='name'
                    placeholder='Email'
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </label>
                <label>
                  <Text>Service ID</Text>
                  <Input
                    name='serviceId'
                    id='serviceId'
                    placeholder='Service ID'
                    value={formData.serviceId}
                    onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                  />
                </label>
                <Alert status='error' className='my-3 border border-indigo-pink'>
                  <AlertIcon />
                  <AlertDescription className='text-sm'>
                    Allow "Send email on your behalf" permission during connection. Both Gmail and Google Apps accounts are supported.
                  </AlertDescription>
                </Alert>
                <div className='flex items-center gap-2 '>
                  <Button bg='#152840' colorScheme='blue' onClick={() => setshowContent('Connected as kseth0808@gmail.com')}>
                    Connect Account
                  </Button>
                  <p>{showContent}</p>
                </div>
                <Checkbox>Set as default</Checkbox>
              </div>
            )}
          </ModalBody>
          {showModal === 'Form' && <hr />}
          <ModalFooter>
            <Button bg='#152840' colorScheme='blue' mr={3} onClick={() => setshowModal(false)}>
              Close
            </Button>
            {showModal === 'Form' && (
              <Button onClick={handleCreateService}>
                Create Service
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Services;
