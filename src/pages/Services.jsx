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
  useToast,
} from '@chakra-ui/react';
import { Tooltip } from '@chakra-ui/react';
import { CopyIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import SiGmail from '../assets/svgs/gmail.svg';
import Empty from "../assets/svgs/Empty.svg";


const Services = () => {
  const [copiedServiceId, setCopiedServiceId] = useState(null);
  const [services, setServices] = useState([]);
  const [editedIndex, setEditedIndex] = useState(null);
  const [showModal, setshowModal] = useState(false);
  const [showContent, setshowContent] = useState(false);
  const [copyIndex, setCopyIndex] = useState(null);
  const [deleteClicked, setDeleteClicked] = useState(null);
  const [editClicked, setEditClicked] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    serviceId: '',
  });
  const [defaultServiceIndex, setDefaultServiceIndex] = useState(null);
  const [connectedAccount, setConnectedAccount] = useState(null);

  const handleSaveClick = () => {
    setServices((prevServices) => [...prevServices, formData]);
  };
 const toast=useToast();
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
    toast({
      title: 'Service created.',
      description: "We've created your Service for you.",
      status: 'success',
      duration: 2000,
      isClosable: true,
      variant:"left-accent",
      position:"top-right",
    })
  };

  const handleDeleteClick = (index) => {
    setServices((prevServices) => prevServices.filter((_, i) => i !== index));
    setDeleteClicked(index);
    setTimeout(() => {
      setDeleteClicked(null);
    }, 1000);
    toast({
      title: 'Service deleted.',
      description: "We've deleted your Service for you.",
      status: 'error',
      duration: 2000,
      isClosable: true,
      variant:"left-accent",
      position:"top-right",
    })
  };

  const handleEditClick = (index) => {
    setEditedIndex(index);
    const editedService = services[index];
    setFormData({
      name: editedService.name,
      serviceId: editedService.serviceId,
    });
    setshowModal('Form');
    setEditClicked(index);
    setTimeout(() => {
      setEditClicked(null);
    }, 1000);
  };

  const handleCopyClick = (index) => {
    navigator.clipboard.writeText(services[index].serviceId);
    setCopiedServiceId(services[index].serviceId);
    setCopyIndex(index);
    setTimeout(() => {
      setCopiedServiceId(null);
      setCopyIndex(null);
    }, 1000);
  };

  const handleSetAsDefault = (index) => {
    setDefaultServiceIndex(index);
  };

  const handleConnectAccount = () => {
    setConnectedAccount('Connected as Kumar.sawant37@gmail.com');
  };

  const handleDisconnectAccount = () => {
    setConnectedAccount(null);
  };

  return (
    <div className='m-5 w-full'>
      <div className='my-2 flex w-full justify-between items-center p-3 border-b-2'>
        <h2 className='text-2xl mb-2'>
          <b>Email Services</b>
        </h2>
        <Button bg='#152840' colorScheme='blue' onClick={() => setshowModal('Form')}>
          Add New Service
        </Button>
      </div>
      {services.length === 0 ? (
        <div className='w-full flex-column justify-center items-center mx-auto'>
          <img src={Empty} alt="Empty" className="w-[450px] mx-auto h-[500px]" />
          <p className='text-center font-medium'>No Services To Display Yet.</p>
        </div>
      ) : (
        <div className='flex flex-col gap-4'>
          {services.map((data, index) => (
            <Card key={index}>
              <CardBody className='flex flex-col gap-5'>
                <div className='flex justify-between items-center'>
                  <div className='flex items-center gap-4'>
                    <img src={SiGmail} alt="" className='w-[45px]' />
                    <div>
                      <h5 className='font-medium text-xl text-red'>{data.name}</h5>
                      <div className='flex items-center gap-2 '>
                        <p className='text-sm'>Service ID:</p>
                        <p className='font-medium text-sm'>{data.serviceId}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    {defaultServiceIndex === index && <Badge>Default</Badge>}
                  </div>
                  <div className='grid grid-cols-3 gap-4'>
                    <DeleteIcon
                      className='cursor-pointer'
                      onClick={() => handleDeleteClick(index)}
                    />
                    <EditIcon
                      className='cursor-pointer'
                      onClick={() => handleEditClick(index)}
                    />
                    <Tooltip label={`Copied Service ID: ${copiedServiceId}`} isOpen={copyIndex === index} fontSize='md'>
                      <CopyIcon
                        className='cursor-pointer'
                        onClick={() => handleCopyClick(index)}
                      />
                    </Tooltip>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      )}
      <Modal isOpen={showModal} size={'xl'} onClose={() => setshowModal(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className='bg-[#0B1623] text-white'>Config Service</ModalHeader>
          <ModalCloseButton className='text-white' />
          <ModalBody>
            {showModal === 'Form' && (
              <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-5 '>
                  <Box boxSize='7'>
                    <img src={SiGmail} alt="" />
                  </Box>
                  <div>
                    <h5>Email</h5>
                    <div className='flex items-center gap-3'>
                      <p>Personal Service</p>
                      <p>200 emails per day</p>
                    </div>
                  </div>
                </div>
                <label>
                  <Text>Name</Text>
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
                  {connectedAccount ? (
                    <Button bg='#E53E3E' colorScheme='red' onClick={handleDisconnectAccount}>
                      Disconnect Account
                    </Button>
                  ):(
                    <Button colorScheme='blue' onClick={handleConnectAccount}>
                      Connect Account
                    </Button>
                    
                  )}
                  {connectedAccount && <p>{connectedAccount}</p>}
                </div>
                <Checkbox
                  onChange={() => handleSetAsDefault(editedIndex)}
                  isChecked={editedIndex !== null && defaultServiceIndex === editedIndex}
                >
                  Set as default
                </Checkbox>
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
                Save
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Services;
