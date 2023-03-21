import React from 'react'

const Input = ({type,placeholder,value,onChange}) => {
  return (
    <input className='w-[300px] h-[50px] text-[#515151] placeholder:text-[#515151] outline-none  rounded-[12px] pl-[25px] text-[15px] bg-[#F6F6F6]'required  type={type} placeholder={placeholder} value={value} onChange={onChange}/>
  )
}

export default Input