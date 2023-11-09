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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h3>{todoTitle}</h3>
    <p>{todoDesc}</p>
    <h3>Call family</h3>
    <p>{dateName + ":" + monthName + ":" + year}</p>
    <App />
  </React.StrictMode>,
)
