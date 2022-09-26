// Price.js module
import React from 'react'

import {Link} from 'react-router-dom'

function  Price() {
return(<>
        {/* ----price section---- */}
<section className="price">
    <h1 className="title">Select the Plan</h1>
    <div className="box-container">
        <div className="box">
            <h3>Basic</h3>
            <div className="amount"><span>$</span><span>20</span><span>/mo</span></div>
            <ul>
                <li>certificates</li>
                <li>full courses</li>
                <li>full modules</li>
                <li>live projects</li>
                <li>24 X 7 support</li>
            </ul>
            <Link to="/#" className="btn">select plan</Link>
        </div>
        <div className="box">
            <h3>Standard</h3>
            <div className="amount"><span>$</span><span>50</span><span>/mo</span></div>
            <ul>
                <li>certificates</li>
                <li>full courses</li>
                <li>full modules</li>
                <li>live projects</li>
                <li>24 X 7 support</li>
            </ul>
            <Link to="/#" className="btn">select plan</Link>
        </div>
        <div className="box">
            <h3>Premium</h3>
            <div className="amount"><span>$</span><span>90</span><span>/mo</span></div>
            <ul>
                <li>certificates</li>
                <li>full courses</li>
                <li>full modules</li>
                <li>live projects</li>
                <li>24 X 7 support</li>
            </ul>
            <Link to="/#" className="btn">select plan</Link>
        </div>
    </div>
</section>

             
    </>)
}
export default  Price;