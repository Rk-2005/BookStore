import {React,useState } from 'react';
import Home from '../src/Home/Home'; // Make sure this path is correct
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Course from './Components/Course';
import Courses from './Courses/Courses';
import Signup from './Components/Signup';
import { Navigate } from "react-router-dom";

import  { Toaster } from 'react-hot-toast';
import { useAuth } from './Context/Authprovider';
function App() {
    const [authUser, setAuthUser] = useAuth(); 
    
  return (
    <>
    <div>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='Course' element={(authUser?<Courses></Courses>:<Navigate to="/Signup"></Navigate>)}></Route>
        <Route path='Signup' element={<Signup></Signup>}></Route>
       
      </Routes>
      <Toaster></Toaster>
    </Router>
    </div>
    </>
  );
}

export default App;
