// Routings module
import React from 'react'

// component Nesting into Routings
import Header from './mainmenu/Header.js'
import Footer from './mainmenu/Footer.js'
import Home from './mainmenu/Home.js'
import Course from './mainmenu/Course.js'
 import Contact from './mainmenu/Contact.js'
 import Price from './mainmenu/Price.js'
 import Review from './mainmenu/Review.js'
 import Teacher from './mainmenu/Teacher.js'

// Routings package
import { BrowserRouter,Routes,Route } from 'react-router-dom'
// Routings setup
function Routings() {
    return(
    <BrowserRouter>
        
        {/* Navbar links */}
        <Header />

  
        
        <Routes>
    {/* <Home/> */}
    <Route path="/*" element={<Home/>}/>
     {/* <Contact/> */}
     <Route path="/contact" element={<Contact/>}/>
      {/* <price/> */}
    <Route path="/price" element={<Price/>}/>
     {/* <course/> */}
     <Route path="/course" element={<Course/>}/>
      {/* <Review/> */}
    <Route path="/review" element={<Review/>}/>
     {/* <Teacher/> */}
     <Route path="/teacher" element={<Teacher/>}/>
    </Routes>

      {/* Footer links */}
      <Footer />
    </BrowserRouter>
 )
}
export default Routings;