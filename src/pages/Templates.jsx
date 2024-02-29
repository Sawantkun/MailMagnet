import React, { useState } from 'react';
import {
  Button,
  Box,
  Card,
  CardBody,
  Badge,
  useToast,
} from '@chakra-ui/react';
import { Tooltip } from '@chakra-ui/react';
import { CopyIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import SiGmail from '../assets/svgs/gmail.svg';
import Empty from "../assets/svgs/Empty.svg";
import CreateTemplate from '../components/CreateTemplate';


const Templates = () => {
  const [copiedTemplateId, setCopiedTemplateId] = useState(null);
  const [Templates, setTemplates] = useState([]);
  const [editedIndex, setEditedIndex] = useState(null);
  const [showModal, setshowModal] = useState(false);
  const [showContent, setshowContent] = useState(false);
  const [copyIndex, setCopyIndex] = useState(null);
  const [deleteClicked, setDeleteClicked] = useState(null);
  const [editClicked, setEditClicked] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    TemplateId: '',
  });
  const [defaultTemplateIndex, setDefaultTemplateIndex] = useState(null);
  const [connectedAccount, setConnectedAccount] = useState(null);

  const handleSaveClick = () => {
    setTemplates((prevTemplates) => [...prevTemplates, formData]);
  };
 const toast=useToast();
  const handleCreateTemplate = () => {
    if (editedIndex !== null) {
      setTemplates((prevTemplates) =>
        prevTemplates.map((Template, index) =>
          index === editedIndex ? formData : Template
        )
      );
      setEditedIndex(null);
    } else {
      handleSaveClick();
    }
    setFormData({
      name: '',
      TemplateId: '',
    });
    toast({
      title: 'Template created.',
      description: "We've created your Template for you.",
      status: 'success',
      duration: 2000,
      isClosable: true,
      variant:"left-accent",
      position:"top-right",
    })
  };

  const handleDeleteClick = (index) => {
    setTemplates((prevTemplates) => prevTemplates.filter((_, i) => i !== index));
    setDeleteClicked(index);
    setTimeout(() => {
      setDeleteClicked(null);
    }, 1000);
    toast({
      title: 'Template deleted.',
      description: "We've deleted your Template for you.",
      status: 'error',
      duration: 2000,
      isClosable: true,
      variant:"left-accent",
      position:"top-right",
    })
  };

  const handleEditClick = (index) => {
    setEditedIndex(index);
    const editedTemplate = Templates[index];
    setFormData({
      name: editedTemplate.name,
      TemplateId: editedTemplate.TemplateId,
    });
    setshowModal('Form');
    setEditClicked(index);
    setTimeout(() => {
      setEditClicked(null);
    }, 1000);
  };

  const handleCopyClick = (index) => {
    navigator.clipboard.writeText(Templates[index].TemplateId);
    setCopiedTemplateId(Templates[index].TemplateId);
    setCopyIndex(index);
    setTimeout(() => {
      setCopiedTemplateId(null);
      setCopyIndex(null);
    }, 1000);
  };

  return (
    <div className='m-5 w-full'>
      <div className='my-2 flex w-full justify-between items-center p-3 border-b-2'>
        <h2 className='text-2xl mb-2'>
        {Templates.length === 0 ? (
         <p>Email Templates</p>
         ) : (
           <div className='flex flex-col gap-4'>
         <p>My Default Template</p>
        </div>
      )}
        </h2>
        {Templates.length === 0 ? (
        <Button bg='#152840' colorScheme='blue' onClick={handleCreateTemplate}>
          Add New Template
        </Button>
         ) : (
           <div className='flex flex-col gap-4'>
        <Button bg='#152840' colorScheme='blue' onClick={handleCreateTemplate}>
           Save
        </Button>
        </div>
      )}
      </div>
      {Templates.length === 0 ? (
        <div className='w-full flex-column justify-center items-center mx-auto'>
          <img src={Empty} alt="Empty" className="w-[450px] mx-auto h-[500px]" />
          <p className='text-center font-medium'>No Templates To Display Yet.</p>
        </div>
      ) : (
        <div className='flex flex-col gap-4'>
          <CreateTemplate/>
        </div>
      )}
    </div>
  );
};

export default Templates;
