// Header.js module
import React from 'react'

import {Link} from 'react-router-dom'
function Header() {
    return(<>

{/* <!-- --------navbar section----- */}
<header> 
    <div className="container">
        <div className="logo"> Smart<span>Study</span></div>
        <nav>
            <Link to="/home">Home</Link>
            <Link to="/course">Course</Link>
            <Link to="/teacher">Teacher</Link>
            <Link to="/price">Price</Link>
            <Link to="/review">Review</Link>
            <Link to="/contact">Contact</Link>
        </nav>
   </div>
</header> 

    </>
)
}
export default Header;