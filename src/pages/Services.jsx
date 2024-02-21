import React, { useState } from 'react';
import {
  Button,
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
} from '@chakra-ui/react';
import { Tooltip } from '@chakra-ui/react'
import { CopyIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';

const Services = () => {

  const [copiedServiceId, setCopiedServiceId] = useState(null);
  const [services, setServices] = useState([]);
  const [editedIndex, setEditedIndex] = useState(null);
  const [showModal, setshowModal] = useState(false);
  const [showContent, setshowContent] = useState(false);
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
    setshowModal(false);
    setFormData({
      name: '',
      serviceId: '',
    });
  };

  const handleDeleteClick = (index) => {
    setServices((prevServices) => prevServices.filter((_, i) => i !== index));
  };

  const handleEditClick = (index) => {
    setEditedIndex(index);
    const editedService = services[index];
    setFormData({
      name: editedService.name,
      serviceId: editedService.serviceId,
    });
    setshowModal('Form');
  };
  const handleCopyClick = (index) => {
    navigator.clipboard.writeText(services[index].serviceId);
    setCopiedServiceId(services[index].serviceId);
  };
  
  return (
    <div className='m-5 w-full'>
      <div className='my-5'>
        <h2 className='text-2xl mb-2'>
          <b>Email Services</b>
        </h2>
        <Button colorScheme='blue' onClick={() => setshowModal('Modal')}>
          Add New Service
        </Button>
      </div>
      <div className='flex flex-col gap-4'>
      {services.map((data,index) => (
      <Card>
        <CardBody className='flex flex-col gap-5'>
            
            <div key={data.serviceId} className='flex justify-between'>
              <div className='flex items-center gap-4'>
                <Button colorScheme='blue'>Email</Button>
                <div>
                  <h5>{data.name}</h5>
                  <p>Service ID: {data.serviceId}</p>
                </div>
              </div>
              <div>
                <Badge>Default</Badge>
              </div>
              <div className='grid grid-cols-3 gap-4'>
                <DeleteIcon  onClick={() => handleDeleteClick(index)}/>
                <EditIcon  onClick={() => handleEditClick(index)}/>
                
<Tooltip label={`Copy Service ID: ${copiedServiceId}`} isOpen={copiedServiceId} fontSize='md' >

<CopyIcon onClick={() => handleCopyClick(index)} />
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
            <ModalHeader className='bg-blue-500 text-white'>Config Service</ModalHeader>
            <ModalCloseButton className='text-white' />
            <ModalBody>
              {showModal === 'Modal' && (
                <Button colorScheme="blue" onClick={() => setshowModal('Form')}> Email</Button>
              )}
              {showModal === 'Form' && (
                <div className='flex flex-col gap-2'>
                  <div className='flex items-center gap-2'>
                    <Button>Email</Button>
                    <div>
                      <h5>Email</h5>
                      <div className='flex items-center gap-3'>
                        <p>Personal Service</p>
                        <p>500 emails per day</p>
                      </div>
                    </div>
                  </div>
                  <label>
                    Name
                    <Input
                      name='name'
                      id='name'
                      placeholder='Email'
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </label>
                  <label>
                    Service ID
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
                      Allow "Send email on your behalf" permission during connection.
                      Both Gmail and Google Apps accounts are supported.
                    </AlertDescription>
                  </Alert>
                  <div className='flex items-center gap-2 '>
                    <Button colorScheme='blue' onClick={() => setshowContent('Connected as kseth0808@gmail.com')}>
                      Connect Account
                    </Button>
                    <p>{showContent}</p>
                  </div>
                  <Checkbox>Send test email to verify configuration</Checkbox>
                </div>
              )}
            </ModalBody>
            {showModal === 'Form' && <hr />}
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={() => setshowModal(false)}>
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
