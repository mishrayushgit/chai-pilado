import React from 'react'

export default async ({params}) => {
  const p = {params}
  return (<>
    <div className='cover object-cover w-full relative'>
    <img src="/banner-hamister.gif" className='w-full h-[350px]'/>
    <div className='cover absolute -bottom-12 right-[47%] '>
    <img className=" border-2 border-white rounded-lg "width={100} height={100} src="/hamister pfp.jpg"/>
    </div>
    </div>
    <div className='flex items-center justify-center mt-14 flex-col'>
      <div className='font-bold'>@{p.username}</div>
      <div className='text-slate-400'>
        Likes chai, but a bit sweet
      </div>
      <div className='text-slate-400'>
      17,493 members . 97 posts . $17,840/release
      </div>
      <div className='flex w-[80%] gap-3 m-2 py-8'>
    <div className='Supporters w-1/2 bg-slate-900 p-5 text-white rounded-lg'>
    <h2 className='text-xl font-bold'>Supporters</h2>
      <ul className='mt-4'>
        <li className='flex my-2 gap-2 items-center'>
          <img width = {30} height={30} src="/user.gif" alt="" />
          Ayush Donated <span className='font-bold'>$34</span>with the message ""
        </li>
        <li className='flex my-2 gap-2 items-center'>
          <img width = {30} height={30} src="/user.gif" alt="" />
          Ayush Donated <span className='font-bold'>$34</span> with the message ""
        </li>
        <li className='flex my-2 gap-2 items-center'>
          <img width = {30} height={30} src="/user.gif" alt="" />
          Ayush Donated <span className='font-bold'>$34</span> with the message ""
        </li>
        <li className='flex my-2 gap-2 items-center'>
          <img width = {30} height={30} src="/user.gif" alt="" />
          Ayush Donated <span className='font-bold'>$34</span> with the message ""
        </li>
        
        
      </ul>
    </div>
    <div className='makePayment w-1/2 text-white p-5 bg-slate-900 rounded-lg'>
      <h2 className='text-xl font-bold mb-2'> Make a Payment</h2>
      <div className='flex gap-2 mt-8 flex-col justify-center'>
        <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name'/>
        <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message'/>
        <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter the Amount'/>
        <button type="button" className="w-full text-white bg-gradient-to-br cursor-pointer from-pink-600 to-orange-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-100 dark:focus:ring-pink-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay</button>
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

