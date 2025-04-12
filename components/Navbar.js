"use client"
import {React,useState} from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import Link from 'next/link'
const Navbar = () => {
  const { data: session } = useSession()
  const [showDropdown, setshowDropdown] = useState(false)
  return (
    <nav className='bg-gray-900 text-white flex h-14 items-center justify-between px-4'>
        <div>
          <Link href='./' className='font-bold text-lg flex justify-center items-center gap-3 text-white'>
          <img width={44} src="./chai.gif" alt="" />
          <span>Chai Pilado!</span>
          </Link>
          </div>
        <div className="relative">
          {session && <>
          <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-3" type="button" onClick={()=>setshowDropdown(!showDropdown)} onBlur={()=>setshowDropdown(false)} >Welcome {session.user.email} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
</svg>
</button>
<div id="dropdown" className={`z-10 ${showDropdown ? "": "hidden" } z-50 absolute left-28 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`}>
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <Link href="/Dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
      </li>
      <li>
        <Link href="./" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
      </li>
    </ul>
</div>
</>  }
          {session &&
          <button className="text-white m-2 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={()=>signOut()}>
           Sign Out
          </button>}
          {!session && 
          <Link href={"/login"}>
          <button className="text-white m-2 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Login
          </button>
          </Link>
          }
        </div>
    </nav>
  )
}

export default Navbar