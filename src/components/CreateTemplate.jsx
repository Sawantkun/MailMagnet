import React, { useState } from 'react';
import {
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Input,
  Card,
  CardBody,
  Button,
} from '@chakra-ui/react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Form from "../assets/svgs/form.svg"

const CreateTemplate = () => {
  const [subject, setSubject] = useState('');
  const [toName, setToName] = useState('John Doe');
  const [messageContent, setMessageContent] = useState('This is a sample message.');

  const [richText, setRichText] = useState(`
    Hello {{to_name}},
    <br />
    You got a new message from {{from_name}}
    <br />
    {{message}}
    <br />
    Best wishes,
    <br />
    MailMagnet team
  `);

  const [previewHtml, setPreviewHtml] = useState(`
    Hello ${toName},
    You got a new message from {{from_name}}
    ${messageContent}
    Best wishes,<br>MailMagnet team
  `);

  const handleContentChange = (value) => {
    // Update the rich text editor content
    setRichText(value);

    // Replace dynamic variables in the preview
    const replacedPreview = value.replace('{{to_name}}', toName).replace('{{from_name}}', 'Sawant').replace('{{message}}', messageContent);
    setPreviewHtml(replacedPreview);
  };

  return (
    <div className='w-full py-4'>
      <Tabs position="relative" variant="enclosed">
        <TabList>
          <Tab>Content</Tab>
          <Tab>Settings</Tab>
        </TabList>
        <TabPanels>
          <TabPanel className='flex-column'>
            <div className='flex border-b-2 pb-5'>
            <div>
              <label htmlFor="subject"> Subject</label>
              <Input
                className='my-2'
                name='subject'
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Enter subject"
              />
              <div>
                <label htmlFor="content"> Content</label>
                <ReactQuill
                  className='my-2'
                  name='content'
                  theme="snow"
                  value={richText}
                  onChange={handleContentChange}
                  modules={{
                    toolbar: [
                      [{ 'header': [1, 2, false] }],
                      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
                      ['link', 'image', 'video'],
                      ['clean']
                    ],
                  }}
                  formats={[
                    'header',
                    'bold', 'italic', 'underline', 'strike', 'blockquote',
                    'list', 'bullet', 'indent',
                    'link', 'image', 'video'
                  ]}
                  style={{ height: '350px', width:'600px' }}
                />
              </div>
            </div>
            <div className='flex-column items-center justify-center w-full mx-4 '>
              <p className='mb-2 text-lg'>Live Preview</p>
              <Card width="full" height="470px" maxWidth="xl" > 
                <CardBody className='border' p="4">
                  <div dangerouslySetInnerHTML={{ __html: previewHtml }}></div>
                </CardBody>
              </Card>
            </div>
            </div>
            <div className='mt-[50px]  flex items-center justify-center'>
              <div className='w-[600px]'>
              <label htmlFor="subject">To Email</label>
              <Input
                className='my-3'
                name='subject'
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Enter Reciever's Email"
              />
              <label htmlFor="subject"> From Name</label>
              <Input
                className='my-3'
                name='subject'
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Enter Your Name"
              />
              <label htmlFor="subject"> From Email</label>
              <Input
                className='my-3'
                name='subject'
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Enter Sender's Email"
              />
              <label htmlFor="subject"> Bcc</label>
              <Input
                className='my-3'
                name='subject'
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <label htmlFor="subject"> Cc</label>
              <Input
                className='my-3'
                name='subject'
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />

            <Button bg='#152840' colorScheme='blue' className='my-2'>
               Send Test Email
            </Button>
              </div>
              <img className='w-[400px] mx-auto' src={Form} alt="" />
            </div>
          </TabPanel>
          <TabPanel>
            <p>Settings content goes here</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default CreateTemplate;
