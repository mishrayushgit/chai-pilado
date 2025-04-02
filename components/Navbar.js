import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className='bg-gray-900 text-white flex h-14 items-center justify-between px-4'>
        <div className='font-bold text-lg flex justify-center items-center gap-3 text-white'>
          <img width={44} src="./chai.gif" alt="" />
          Chai Pilado!</div>
        <div className='flex items-center'>
          <Link href={"/login"}>
          <button className="text-white m-2 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Login
          </button>
          </Link> 
        </div>
    </nav>
  )
}

export default Navbar