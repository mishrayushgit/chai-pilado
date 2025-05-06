"use client"
import React, { useState } from 'react'
import Script from 'next/script'
import Razorpay from 'razorpay'
import { initiate } from '@/actions/useractions'
import { useSession } from 'next-auth/react'
const PaymentPage = ({username}) => {
    const { data: session } = useSession()
    const [paymentform, setpaymentform] = useState({})
    const handleChange = (e) => { 
      setpaymentform({
      ...paymentform,
      [e.target.name] : [e.target.value]
      })
      console.log(paymentform)
     }
    const pay = async (amount) => { 
        //get the order id
        let a = await initiate(amount, session?.user.name,paymentform)
        let orderID = a.id
        var options = {
            "key": process.env.KEY_ID, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Dolly Bhai", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderID, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.URL}}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
            var rzp1 = new Razorpay(options);
            rzp1.open();
     }
  return (
<>
<Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>


<div className='cover object-cover w-full relative'>
    <img src="/banner-hamister.gif" className='w-full h-[350px]'/>
    <div className='cover absolute -bottom-12 right-[47%] '>
    <img className=" border-2 border-white rounded-lg "width={100} height={100} src="/hamister pfp.jpg"/>
    </div>
    </div>
    <div className='flex items-center justify-center mt-14 flex-col'>
      <div className='font-bold'>@{username}</div>
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
        <input onChange={handleChange} value ={paymentform.name} name = "name" type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name'/>
        <input onChange={handleChange} value ={paymentform.message} name = "message" type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message'/>
        <input onChange={handleChange} value ={paymentform.amount} name = "amount" type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter the Amount'/>
        <button type="button" className="w-full text-white bg-gradient-to-br cursor-pointer from-pink-600 to-orange-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-100 dark:focus:ring-pink-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay</button>
      </div>
      <div className='mt-4 flex gap-5'>
      <button className='cursor-pointer p-3 rounded-lg bg-slate-800' onClick={()=>pay(2000)}>Pay ₹20</button>
      <button className='cursor-pointer p-3 rounded-lg bg-slate-800' onClick={()=>pay(3000)}>Pay ₹30</button>
      <button className='cursor-pointer p-3 rounded-lg bg-slate-800' onClick={()=>pay(4000)}>Pay ₹40</button>
      </div>
    </div>
      </div>
    </div>
</>
  )}


export default PaymentPage