import React from 'react'
import { FaCheck } from "react-icons/fa";
const CheckButton = ({handleCheckClick}) => {
  return (
    <FaCheck className='text-green-600 text-xl cursor-pointer hover:text-green-800' onClick={handleCheckClick}/>
  )
}

export default CheckButton