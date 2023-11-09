import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const todoTitle = "call family";
const todoDesc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti illo alias praesentium commodi quas veniam. Nisi ipsa laudantium hic at nihil dolores repudiandae eaque cupiditate. Eveniet alias odio aspernatur quam!";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const year = date.getFullYear();

// const headingStyle = {
//   color : "red" , 
//   fontSize : "3rem",
//   textAlign : "center",
//   padding : "15px"
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1 className='head'>{todoTitle}</h1>
    <div className='card'>
    <h3 className='cardtitle'>Call family</h3>
    <p className='cardDesc'>{todoDesc}</p>
    <p className='cardFooter'>{dateName + ":" + monthName + ":" + year}</p>
    </div>
    <App />
  </React.StrictMode>,
)
