import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import BaristaForm from './components/BaristaForm';
function App() {

  return (
    <div>
      <div className='title-container'>
        <img className="omg-logo" src="https://quiet-macaron-ca013a.netlify.app/assets/omg-logo.79cdfddd.png"/>
        <h1 className='title'>On My Grind</h1>
        <p>So you think you can barista? Let's put that to the test...</p>
      </div>
      <BaristaForm/>
    </div>

  );
}

export default App
