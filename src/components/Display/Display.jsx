import React from 'react'
import './Display.css'
import { useState } from 'react'

// const handleInput = 0;

const Display = (props) => {
  const [value,setValue]=useState("0")

  function handleChange(event) {
    // gives the value of the targetted element
    let value = event.target.value;
    setValue(value);
 }

  return (
    <div className='display'>
        <input value={props.displayValue} id={'inputbox1'+props.id} placeholder='0' type="text" onChange={handleChange}  className='inputbox'/>
        <input value={props.resultValue}  id={'inputbox2'+props.id} placeholder='0' type="text"  onChange={handleChange}  className='inputbox'/>
    </div>
  )
}

export default Display