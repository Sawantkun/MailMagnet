// App.js
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import MainNav from './components/MainNav';
import Services from './pages/Services';
import ForgotPassword from './pages/ForgotPassword';

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/MainNav' element={<MainNav />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/ForgotPassword' element={<ForgotPassword />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
