import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"


function App() {
  // fetch 1
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => {
      console.log('fetch 1:', data);
    })
  // fetch 2
  async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const data = await response.json();
      console.log('fetch 2:', data);
    } catch (error) {
    }
  }
  fetchData();
  // fetch 3
  // axios
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => console.log('fetch 3 : axios' , response.data));
}, []);

  // fetch 4
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => console.log('fetch 4:', data));
}, []);


  return (
    <>
    <h3>fetch 1 by fetch()</h3>
    <h3>fetch 2 by async/await</h3>
    <h3>fetch 3 by axios</h3>
    <h3>fetch 4 by fetch() with useEffect</h3>
    <p> vist src/app.jsx to show code</p>
    </>
  )
}

export default App
