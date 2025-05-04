import React from 'react'
import PaymentPage from '@/components/PaymentPage'
export default async ({params}) => {
  const p = {params}
  return (<>
    <PaymentPage username = {params.username}/>
    </>
  )
}

