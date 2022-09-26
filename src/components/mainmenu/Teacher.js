// Teacher.js module
import React from 'react'

import teacher1 from './../../assets/images/teacher-1.png'
import teacher2 from './../../assets/images/teacher-2.png'
import teacher3 from './../../assets/images/teacher-3.png'
import teacher4 from './../../assets/images/teacher-4.png'

import {Link} from 'react-router-dom'
function   Teacher() {
 return(<>
{/*---Teacher section---- */}
<section className="teacher">
    <div className="box">
       <img src= {teacher1} alt=''/>
        <h3>Jhon deo</h3>
        <span>Teacher</span>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quae.</p>
        <div className="share">
            <Link to="/#" className="bi bi-facebook"></Link>
            <Link to="/#" className="bi bi-twitter"></Link>
            <Link to="/#" className="bi bi-instagram"></Link>
            <Link to="/#" className="bi bi-linkedin"></Link>
        </div>
    </div>
    <div className="box">
    <img src= {teacher2} alt=''/>
        <h3>Jhon deo</h3>
        <span>Teacher</span>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quae.</p>
        <div className="share">
            <Link to="/#" className="bi bi-facebook"></Link>
            <Link to="/#" className="bi bi-twitter"></Link>
            <Link to="/#" className="bi bi-instagram"></Link>
            <Link to="/#" className="bi bi-linkedin"></Link>
        </div>
    </div>
    <div className="box">
    <img src= {teacher3} alt=''/>
        <h3>Jhon deo</h3>
        <span>Teacher</span>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quae.</p>
        <div className="share">
            <Link to="/#" className="bi bi-facebook"></Link>
            <Link to="/#" className="bi bi-twitter"></Link>
            <Link to="/#" className="bi bi-instagram"></Link>
            <Link to="/#" className="bi bi-linkedin"></Link>
        </div>
    </div>
    <div className="box">
    <img src= {teacher4} alt=''/>
        <h3>Jhon deo</h3>
        <span>Teacher</span>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quae.</p>
        <div className="share">
            <Link to="/#" className="bi bi-facebook"></Link>
            <Link to="/#" className="bi bi-twitter"></Link>
            <Link to="/#" className="bi bi-instagram"></Link>
            <Link to="/#" className="bi bi-linkedin"></Link>
        </div>
    </div>
</section>

             
    </>)
}
export default  Teacher;