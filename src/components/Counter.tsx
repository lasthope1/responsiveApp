import React, {useState} from 'react'

function Counter() {
    const [amount, setAmount] = useState<number>(0);

  return (
    <div className='flex flex-col py-10 px-3 justify-center items-center border-2 border-gray-300 shadow-sm
         shadow-sky-300 rounded-xl'>
        <h1 className='text-2xl text-gray-700'>Counter Component</h1>
        <div className='flex justify-center mt-4 gap-4'>
            <h4>Your amount : </h4>
            <div>{amount}</div>
        </div>
        <div className='flex mt-4 gap-4'>
            <button className='py-2 px-2 text-base text-white border-2 font-bold bg-blue-500 rounded-lg shadow-sm ' 
                onClick={() => setAmount(amount - 1)}>
                    Decrease
            </button>
            <button className='py-2 px-2 border-2 text-base text-white font-bold bg-blue-500 rounded-lg shadow-sm' 
                onClick={() => setAmount(amount + 1)}>
                    Increase
            </button>
        </div>
    </div>
  )
}

export default Counter