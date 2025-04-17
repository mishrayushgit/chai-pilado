"use client"
import {React, useEffect} from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
const Dashboard = () => {
const router = useRouter()
const { data: session } = useSession()
    useEffect(() => {
            if (!session) {
              router.push("/login");
            }
          }, [session]);
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard