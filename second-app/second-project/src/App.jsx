import { useState } from 'react'
import './App.css'
import Content from './Content'
import Practice_1 from './Practice_1'
import Laptop from './Laptop'
import Mobile from './Mobile'
import Weather from './Weather'
import Discount from './Discount'
import Notice from './Notice'
import Fruits from './Fruits'
import ColorBox from './ColorBox'
import Greeting from './Greeting'

function App() {

  return (
    <>
    <Greeting name="Azfar" isLoggedIn={true} /> 

      <Content />
      <Practice_1 user="Ali Boss"/>
        <Laptop brand="Dell" model="Inspiron" price={55000}/>
        <Mobile brand="Samsung" model="A52" price={30000} isNew={false} />
        <Weather temp={29}/>
        <Discount price={400} isSale={false}/>
    <Notice showNotice={true} message="message will see when short circuit Conditon is true " />
    <Fruits items={["Apple", "Mango", "Banana"]} />
<ColorBox bgColor="gray"  textColor="black" text="This is Orange Box!" />


    </>
  )
}

export default App
