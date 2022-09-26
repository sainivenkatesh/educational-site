// Home.js module

 
import React from 'react'

import Homepic from './../../assets/images/home-img.svg'

import {Link} from 'react-router-dom'
function Home() {

   
    return(<>
       
  
         <section className="home">
    <div  className="content">
        <h3>E-learning is a better way of learning</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui ducimus repellendus
         quam repudiandae molestias adipisci, autem voluptates </p>
            <Link to="/#" className="btn"> get started </Link>
    </div>
    <div  className="image">
        <img src={Homepic} alt=''/>
    </div>
</section>
            
         </>
       
        )
}
export default Home;