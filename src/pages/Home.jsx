import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from "../assets/svgs/inboxcleanup.svg"
import Faqs from '../components/Faqs';

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSwitchChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`w-100 h-[110vh] ${isDarkMode ? 'bg-[#0B1623] text-white' : 'bg-white text-black'}`}>
      <Navbar isDarkMode={isDarkMode} onSwitchChange={handleSwitchChange} />
      <div className='w-100 h-100 flex-col items-center justify-between  px-[50px] py-[100px]'>
      <h1 className='text-center text-6xl font-bold'>Make <span className='text-cyan-500 mail'>@mails</span> our problem. Not yours.</h1>
      <p className={`text-center text-2xl text-gray-600 max-w-2xl mx-auto font-normal py-[40px] ${isDarkMode ? ' text-slate-400' : ' text-gray-600'}`}>Effortless Email Integration: Seamlessly Send and Receive mails with MailMagnet. Elevate your messaging experience for unparalleled communication efficiency.</p>
      <img className='w-[300px] mx-auto my-7' src={Hero} alt="Hero Image" />
      </div>
      <Faqs isDarkMode={isDarkMode}/>
    </div>


  );
}

export default Home;
