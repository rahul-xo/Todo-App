import React from 'react'
import { MdDelete } from "react-icons/md";


const DeleteButton = () => {
  return (
    <MdDelete className='cursor-pointer text-red-600 text-xl hover:text-red-800'/>
  )
}

export default DeleteButton