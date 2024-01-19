
interface Props{
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  open: boolean
 
}

function ToggleBtn({setOpen, open}:Props) {
  return (
    <button className='fixed z-50 top-6 left-6 h-14 w-14 rounded-full bg-white text-black cursor-pointer grid place-items-center' onClick={() => setOpen((prev)=>!prev)}>
      {open ?
        (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
          

      )
        
        :(
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>

      ) }
    </button>
  )
}

export default ToggleBtn