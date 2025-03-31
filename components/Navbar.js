import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-gray-900 text-white flex h-14 items-center justify-between px-4'>
        <div className='font-bold text-lg text-white'>Chai Pilado!</div>
        <ul className='flex justify-between gap-5'>
            <li>Home</li>
            <li>About</li>
            <li>Project</li>
            <li>Sign Up</li>
            <li>Log in</li>
        </ul>
    </nav>
  )
}

export default Navbar