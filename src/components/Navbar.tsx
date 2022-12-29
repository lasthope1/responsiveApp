import React from 'react'

const styled_btn: string = 'py-1 px-2 text-white bg-transparent border-1 border-white rounded-sm hover:bg-white hover:text-black'

function Navbar() {
  return (
    <div className='w-full py-3 px-4 flex justify-between items-center bg-gray-700'>
        <h1 className='lg:text-3xl md:text-2xl text-xl text-white font-bold'>Logo</h1>
        <div className='inline-flex gap-2'>
            <button className={styled_btn}>Home</button>
            <button className={styled_btn}>Sign in</button>
            <button className={styled_btn}>Sign up</button>
        </div>
    </div>
  )
}

export default Navbar