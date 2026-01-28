  import { useState } from 'react'
  import reactLogo from './assets/react.svg'
  import './App.css'
  import Text from './Text.jsx'
  import Test from './Test.jsx';
import Button from './Button.jsx';


  function App() {

    return (
      <>
      <h1>this is 1st component </h1>
      <h2>This is image using js expersion</h2>
      <img src={reactLogo} alt="React Logo" className='red' width={300} />

      <p>this is another component with which call in App.jsx</p>
      <Text />
      {/* 2nd component */}
      <Test />
      <Button />
      </> 
    )
  }

  export default App
