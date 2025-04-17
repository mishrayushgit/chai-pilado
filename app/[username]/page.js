import React from 'react'

const page = ({params}) => {
  return (<>
    <div className='cover object-cover w-full relative'>
    <img src="/banner-hamister.gif" className='w-full h-[350px]'/>
    <div className='cover absolute -bottom-12 right-[47%] '>
    <img className=" border-2 border-white rounded-lg "width={100} height={100} src="/hamister pfp.jpg"/>
    </div>
    </div>
    <div className='flex items-center justify-center mt-14 flex-col'>
      <div className='font-bold'>@{params.username}</div>
      <div className='text-slate-400'>
        Likes chai, but a bit sweet
      </div>
      <div className='text-slate-400'>
      17,493 members . 97 posts . $17,840/release
      </div>
      <div className='flex w-[80%] gap-3 m-2 py-8'>
    <div className='Supporters w-1/2 bg-slate-900 p-5 text-white rounded-lg'>
    <h2 className='text-xl font-bold mb-2'>Supporters</h2>
      <ul>
        <li>Ayush Donated $34 with the message ""</li>
        <li>Ayush Donated $34 with the message ""</li>
        <li>Ayush Donated $34 with the message ""</li>
        <li>Ayush Donated $34 with the message ""</li>
        <li>Ayush Donated $34 with the message ""</li>
        <li>Ayush Donated $34 with the message ""</li>
        <li>Ayush Donated $34 with the message ""</li>
        <li>Ayush Donated $34 with the message ""</li>
      </ul>
    </div>
    <div className='makePayment w-1/2 text-white p-5 bg-slate-900 rounded-lg'>
      <h2 className='text-xl font-bold mb-2'> Make a Payment</h2>
      <div className='flex gap-2 mt-8'>
        <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter a amount'/>
        <button className='cursor-pointer p-3 rounded-lg bg-slate-800'>Pay</button>
      </div>
      <div className='mt-4 flex gap-5'>
      <button className='cursor-pointer p-3 rounded-lg bg-slate-800'>Pay $20</button>
      <button className='cursor-pointer p-3 rounded-lg bg-slate-800'>Pay $30</button>
      <button className='cursor-pointer p-3 rounded-lg bg-slate-800'>Pay $40</button>
      </div>
    </div>
      </div>
    </div>
    </>
  )
}

export default page