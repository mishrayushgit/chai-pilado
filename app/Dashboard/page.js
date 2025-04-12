"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
const Dashboard = () => {
const router = useRouter()
const { data: session } = useSession()
    if(!session){
        router.push("/login")
      }
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard