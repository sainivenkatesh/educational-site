// Review.js module
import React from 'react'

import student1 from './../../assets/images/student-1.png'
import student2 from './../../assets/images/student-2.png'
import student3 from './../../assets/images/student-3.png'
import student4 from './../../assets/images/student-4.png'
import student5 from './../../assets/images/student-5.png'
import student6 from './../../assets/images/student-6.png'

function  Review() {
return(<>
        {/* -------review section------ */}
<section className="review">
<h1 className="title">Students Review</h1>
    <div className="box-container">
        <div className="box">
            <div className="student">
                <div className="student-info">
                    <img src= {student1} alt=''/>
                    <div className="info">
                        <h3>John deo</h3>
                        <span>student</span>
                    </div>
                </div>
            </div>
            <p className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque ea aut natus doloremque ipsam quod, ut quisquam eum nulla quaerat laboriosam deserunt officia? Vitae odio animi, aperiam vero reprehenderit itaque?</p>
        </div>
        <div className="box">
            <div className="student">
                <div className="student-info">
                <img src= {student2} alt=''/>
                    <div className="info">
                        <h3>John deo</h3>
                        <span>student</span>
                    </div>
                </div>
            </div>
            <p className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque ea aut natus doloremque ipsam quod, ut quisquam eum nulla quaerat laboriosam deserunt officia? Vitae odio animi, aperiam vero reprehenderit itaque?</p>
        </div>
        <div className="box">
            <div className="student">
                <div className="student-info">
                <img src= {student3} alt=''/>
                    <div className="info">
                        <h3>John deo</h3>
                        <span>student</span>
                    </div>
                </div>
            </div>
            <p className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque ea aut natus doloremque ipsam quod, ut quisquam eum nulla quaerat laboriosam deserunt officia? Vitae odio animi, aperiam vero reprehenderit itaque?</p>
        </div>
        <div className="box">
            <div className="student">
                <div className="student-info">
                <img src= {student4} alt=''/>
                    <div className="info">
                        <h3>John deo</h3>
                        <span>student</span>
                    </div>
                </div>
            </div>
            <p className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque ea aut natus doloremque ipsam quod, ut quisquam eum nulla quaerat laboriosam deserunt officia? Vitae odio animi, aperiam vero reprehenderit itaque?</p>
        </div>
        <div className="box">
            <div className="student">
                <div className="student-info">
                <img src= {student5} alt=''/>
                    <div className="info">
                        <h3>John deo</h3>
                        <span>student</span>
                    </div>
                </div>
            </div>
            <p className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque ea aut natus doloremque ipsam quod, ut quisquam eum nulla quaerat laboriosam deserunt officia? Vitae odio animi, aperiam vero reprehenderit itaque?</p>
        </div>
        <div className="box">
            <div className="student">
                <div className="student-info">
                <img src= {student6} alt=''/>
                    <div className="info">
                        <h3>John deo</h3>
                        <span>student</span>
                    </div>
                </div>
            </div>
            <p className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque ea aut natus doloremque ipsam quod, ut quisquam eum nulla quaerat laboriosam deserunt officia? Vitae odio animi, aperiam vero reprehenderit itaque?</p>
        </div>
    </div>
</section>

             
    </>)
}
export default  Review;