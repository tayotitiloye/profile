import React, { ReactNode } from 'react'

function Modal({children,open, setOpen}:any) {
    return (
      <>
     {open && (<div  className='fixed top-0 right-0 bottom-0 h-screen w-screen bg-black/50 text-white grid place-content-center'>
          <button onClick={() => setOpen(false)}>X</button>
          {children}
    </div>)}
      </>
  )
}

export default Modal
