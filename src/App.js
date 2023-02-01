import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
 const [color,setColor]=useState('pink')

 let colorhendler=(evt)=>{
  setColor(evt.target.value)
 }
  return (
    <div className="App">
      <div style={{background:(color)}} className='new'></div>
     <select value={color} onChange={colorhendler}>\
      <option value="red">red</option>
      <option value="green">green</option>
      <option value="pink">pink</option>
      <option value="purple">purple</option>
      <option value="plum">plum</option>
      <option value="yellow">yellow</option>
      <option value="skyblue">skyblue</option>
     </select>
    </div>
  );
}

export default App;
