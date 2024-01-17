import React, { Dispatch, ReactNode } from 'react'

interface Props{
 // setOpen:  (open:any)=> void;
 setOpen: React.Dispatch<React.SetStateAction<boolean>>
 
}

function ToggleBtn({setOpen}:Props) {
  return (
    <button className='fixed z-50 top-6 left-6 h-14 w-14 rounded-full bg-white text-black cursor-pointer' onClick={() => setOpen((prev)=>!prev)}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <path strokeWidth="3" stroke="black" strokeLinecap="round"/>
        <path strokeWidth='3' stroke='black' strokeLinecap='round'/>
        <path strokeWidth='3' stroke='black' strokeLinecap='round'/>

      </svg>
      toggle
    </button>
  )
}

export default ToggleBtn