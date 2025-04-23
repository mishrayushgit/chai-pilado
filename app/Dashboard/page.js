"use client"
import {React, useEffect} from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import Dashboard from '@/components/Dashboard'
const DashboardPage = () => {
const router = useRouter()
const { data: session } = useSession()
    useEffect(() => {
            if (!session) {
              router.push("/login");
            }
          }, [session]);
  return (
    <>
    <Dashboard/>
    </>
  )
}

export default DashboardPage