import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = ({key,src,alt,name,address,city,phone,id}) => {
  return (
    <div key={key} className='lg:w-[320px] md:w-[280px] md:h-[230px] w-[350px] h-[280px] lg:h-[250px] rounded-[8px]  overflow-hidden  shadow-[4px_4px_12px_rgba(0,0,0,0.25)]  '>
        <div className="img-container w-full lg:h-[180px] md:h-[150px] h-[200px] overflow-hidden">
            <NavLink to={`/detail/${id}`}>
            <img className='w-full h-full object-cover hover:scale-110 hover:brightness-50' src={src} alt={alt} />
            </NavLink>
        </div>
        <div className="desc p-[15px] pt-[10px] flex flex-col">
        <h3 className='text-[10px] font-[700] mb-1'>{name}</h3>
        <p className='text-[10px] font-[400]'>{address},{city}</p>
        <p  className='text-[10px] font-[400]'>{phone}</p>
        </div>
    </div>
  )
}

export default Card