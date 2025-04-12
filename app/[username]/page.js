import React from 'react'

const page = ({params}) => {
  return (<>
    <div>{params.username}</div>
    <div className='cover object-cover w-full relative'>
    <img src="/banner hamister.gif" className='w-full h-[350px]'/>
    <div className='cover absolute -bottom-12 right-[47%] border border-white '>
    <img width={100} height={100} src="/hamister pfp.jpg"/>
    </div>
    </div>
    </>
  )
}

export default page