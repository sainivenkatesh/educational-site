// Index.js main module
import React from 'react'
import ReactDOM  from 'react-dom'

// import css into react
import './assets/css/custom.css'

// import Bootstrap 
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'

// import Routings.js
import Routings from './components/Routings.js'

ReactDOM.render(<Routings/>,document.getElementById('root'))