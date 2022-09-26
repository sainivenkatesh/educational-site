// Course.js module
import React from 'react'

import course1 from './../../assets/images/course-1.svg'
import course2 from './../../assets/images/course-2.svg'
import course3 from './../../assets/images/course-3.svg'
import course4 from './../../assets/images/course-4.svg'
import course5 from './../../assets/images/course-5.svg'
import course6 from './../../assets/images/course-6.svg'

import {Link} from 'react-router-dom'

function Course() {
    return(<>
    {/* --------Courses Section------- */}
<section className="course">
    <h2 className="title">POPULAR COURSES</h2>
    <div className="table">
    <div className="box">
        <span className="amount">$59.99</span>
        <img src={course1} alt=''/>
        <div className="stars">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star"></i>
        </div>
        <h3>Front End Development</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis soluta culpa, libero optio non maiores sequi rerum iure repudiandae expedita cup</p>
        <Link to="/#" className="btn">Learn more</Link>
        <div className="icons">
        <p><i className="bi bi-clock"></i> 2 hours</p>
            <p><i className="bi bi-calendar"></i> 6 months</p>
            <p><i className="bi bi-book"></i> 12 modules</p>
        </div> 
    </div>
    <div className="box">
        <span className="amount">$59.99</span>
        <img src={course2} alt=''/>
        <div className="stars">
        <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star"></i>
        </div>
        <h3>Front End Development</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis soluta culpa, libero optio non maiores sequi rerum iure repudiandae expedita cup</p>
        <Link to="/#" className="btn">Learn more</Link>
        <div className="icons"> 
           <p><i className="bi bi-clock"></i> 2 hours</p>
            <p><i className="bi bi-calendar"></i> 6 months</p>
            <p><i className="bi bi-book"></i> 12 modules</p>
        </div> 
    </div>
    <div className="box">
        <span className="amount">$59.99</span>
        <img src={course3} alt=''/>
        <div className="stars">
        <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star"></i>
        </div>
        <h3>Front End Development</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis soluta culpa, libero optio non maiores sequi rerum iure repudiandae expedita cup</p>
        <Link to="/#" className="btn">Learn more</Link>
        <div className="icons">
            <p><i className="bi bi-clock"></i> 2 hours</p>
            <p><i className="bi bi-calendar"></i> 6 months</p>
            <p><i className="bi bi-book"></i> 12 modules</p>
        </div> 
    </div>
    <div className="box">
        <span className="amount">$59.99</span>
        <img src={course4} alt=''/>
        <div className="stars">
        <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star"></i>
        </div>
        <h3>Front End Development</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis soluta culpa, libero optio non maiores sequi rerum iure repudiandae expedita cup</p>
        <Link to="/#" className="btn">Learn more</Link>
        <div className="icons">
            <p><i className="bi bi-clock"></i> 2 hours</p>
            <p><i className="bi bi-calendar"></i> 6 months</p>
            <p><i className="bi bi-book"></i> 12 modules</p>
        </div> 
    </div>
    <div className="box">
        <span className="amount">$59.99</span>
        <img src={course5} alt=''/>
        <div className="stars">
        <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star"></i>
        </div>
        <h3>Front End Development</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis soluta culpa, libero optio non maiores sequi rerum iure repudiandae expedita cup</p>
        <Link to="/#" className="btn">Learn more</Link>
        <div className="icons">
            <p><i className="bi bi-clock"></i> 2 hours</p>
            <p><i className="bi bi-calendar"></i> 6 months</p>
            <p><i className="bi bi-book"></i> 12 modules</p>
        </div> 
    </div>
    <div className="box">
        <span className="amount">$59.99</span>
        <img src={course6} alt=''/>
        <div className="stars">
        <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star"></i>
        </div>
        <h3>Front End Development</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis soluta culpa, libero optio non maiores sequi rerum iure repudiandae expedita cup</p>
        <Link to="/#" className="btn">Learn more</Link>
        <div className="icons">
            <p><i className="bi bi-clock"></i> 2 hours</p>
            <p><i className="bi bi-calendar"></i> 6 months</p>
            <p><i className="bi bi-book"></i> 12 modules</p>
        </div> 
</div>
</div>
</section>

          
    </>)
}
export default Course;