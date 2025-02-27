import React from 'react'
import Navbar from '../Components/Navbar'
import Course from '../Components/Course'
import Footer from '../Components/Footer'

function Courses() {
  return (
    <div>
        <Navbar></Navbar>
        <div className="min-h-screen">
        <Course></Course>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Courses