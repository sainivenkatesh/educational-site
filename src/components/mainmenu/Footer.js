// Footer.js module
import React from 'react'

import {Link} from 'react-router-dom'

function Footer() {
    return(<>
    {/* -----Footer section------ */}
<footer>
    <div className="box-container">
        <div className="box">
            <h3>About Us</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias doloribus illo eum.</p>
        </div>
        <div className="box">
            <h3>Quick Links</h3>
            <Link to="/">Home</Link>
            <Link to="/">Course</Link>
            <Link to="/">Teacher</Link>
            <Link to="/">Price</Link>
            <Link to="/">Review</Link>
            <Link to="/">Contact</Link>
        </div>
        <div className="box">
            <h3>Follow Us</h3>
            <Link to="/"><i class="bi bi-facebook"></i>Facebook</Link>
            <Link to="/"><i class="bi bi-twitter"></i>Twitter</Link>
            <Link to="/"><i class="bi bi-instagram"></i>Instagram</Link>
            <Link to="/"><i class="bi bi-whatsapp"></i>Whatsapp</Link>
            <Link to="/"><i class="bi bi-linkedin"></i>Linkdin</Link>
            <Link to="/"><i class="bi bi-youtube"></i>Youtube</Link>
        </div>
        <div className="box">
            <h3>Contact Us</h3>
           <p><i className="bi bi-telephone-fill"></i> +91-7286040724</p> 
            <p><i className="bi bi-envelope-fill"></i> sainivenkat00@gamil.com</p>
            <p><i className="bi bi-geo-alt-fill"></i> India-123456</p>
       </div>
    </div>
    <div className="credit">created by <span>mr.saini venkat</span> |all rights reserved</div>
</footer>
    </>
)
}
export default Footer;