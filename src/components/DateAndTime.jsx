import React, { useState } from 'react'

const DateAndTime = () => {
    const [date_time,set_date_time]=useState("");
    setInterval(()=>{
        const date =new Date().toLocaleDateString();
        const time = new Date().toLocaleTimeString();
        set_date_time(`${date}-${time}`);
    },1000)
  return (
    <div className='text-white text-2xl'>{date_time}</div>
  )
}

export default DateAndTime