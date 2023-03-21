import React from 'react'
import airTerjun from '../assets/card/Air-terjun.png'

const Card = () => {
  return (
    <div className='w-[320px] h-[250px] rounded-[8px]  overflow-hidden  shadow-[4px_4px_12px_rgba(0,0,0,0.25)] hover:scale-105 '>
        <div className="img-container w-full h-[180px] overflow-hidden">
            <img className='w-full h-full object-cover' src={airTerjun} alt="" />
        </div>
        <div className="desc p-[15px] pt-[10px] flex flex-col">
        <h3 className='text-[10px] font-[700] mb-1'>Wisata Air Terjun</h3>
        <p className='text-[10px] font-[400]'>Jl.Manggis VII Bantul,Yogyakarta</p>
        <p  className='text-[10px] font-[400]'>082313452351</p>
        </div>
    </div>
  )
}

export default Card