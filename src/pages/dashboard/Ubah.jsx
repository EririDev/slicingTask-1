import React from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Gambar from '../../assets/card/Air-terjun.png'

const Ubah = () => {
  return (
    <div className='w-full h-screen p-20 flex justify-center items-center'>
    <main className='w-[60%] flex flex-col gap-5'>
      <header>
        <h1 className='text-[#6889FF] font-[700] text-[30px]'>Ubah Wisata</h1>
      </header>
      <form action="" className='flex justify-between'>
        <article className='flex flex-col gap-10'>
          <Input value='Wisata Air Terjun' type='text'/>
          <Input value='airterjun@mail.com' type='text'/>
          <Input value='082313452351' type='text'/>
          <Input value='Yogyakarta' type='text'/>
        </article>
        <article className='flex flex-col gap-7 items-center '>
        <input className='w-[370px] h-[65px] text-[#515151] value:text-[#515151] outline-none  rounded-[12px] pl-[25px] text-[15px] bg-[#F6F6F6]'required  type='text' value='Jalan Manggis VII Bantul ' />
        <div className="input-gambar bg-[#F6F6F6] h-[230px] rounded-[12px] flex relative justify-center items-center w-[370px] overflow-hidden ">
          <input type="file" className=' w-full h-full absolute opacity-0  cursor-pointer' />
          <div className="order items-center justify-center gap-5  w-full h-full">
            <img src={Gambar} className='w-full h-full object-cover' alt="" />
          </div>
        </div>
        <Button/>
        </article>
      </form>
    </main>
  </div>
  )
}

export default Ubah