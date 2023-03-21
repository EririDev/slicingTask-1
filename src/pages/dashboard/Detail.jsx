import React from 'react'
import { NavLink } from 'react-router-dom'
import Back from '../../assets/bekbek.svg'
import Gambar from '../../assets/card/Air-terjun.png'
import Location from '../../assets/detail/location.svg'
import Email from '../../assets/detail/email.svg'
import Phone from '../../assets/detail/phone.svg'
const Detail = () => {
  return (
    <div className='w-full p-5  flex justify-center items-center'>
      <main className='w-[60%] '>
      <header className='flex items-center gap-5 mb-3'>  
      <NavLink to='/dashboard/home'> <img src={Back} className='w-[15px]' alt="" /></NavLink>
        <h1 className='text-[25px] font-[700]'>Wisata Air Terjun</h1>
      </header>
      <article className='flex flex-col gap-5'>
        <div className="img-container w-full rounded-[8px] h-[440px] ">
          <img src={Gambar} className='w-[90%]' alt="" />
        </div>
        <div className="description flex flex-col gap-2 pl-1 ">
          <div className="location flex  items-center gap-3">
            <img className='w-[25px]' src={Location} alt="" />
            <p className='text-[15px] font-[ 400]'>Jl.Manggis VII Bantul,Yogyakarta</p>
          </div>
          <div className="email flex   items-center gap-3">
          <img className='w-[25px]' src={Email} alt="" />
          <p className='text-[15px] font-[ 400]'>airterjun.mail.com</p>
          </div>
          <div className="phone flex   items-center gap-3">
          <img className='w-[25px]' src={Phone} alt="" />
          <p className='text-[15px] font-[ 400]'>082313452351</p>
          </div>
        </div>
      </article>
      </main>

    </div>
  )
}

export default Detail