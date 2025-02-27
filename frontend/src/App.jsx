import React from 'react';
import Home from '../src/Home/Home'; // Make sure this path is correct
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Course from './Components/Course';
import Courses from './Courses/Courses';
import Signup from './Components/Signup';
function App() {
  return (
    <>
    <div>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='Course' element={<Courses></Courses>}></Route>
        <Route path='Signup' element={<Signup></Signup>}></Route>
      </Routes>
    </Router>
    </div>
    </>
  );
}

export default App;
