import React from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Gambar from '../../assets/gallery-export.svg'

const Tambah = () => {
  return (
    <div className='w-full p-20 flex justify-center items-center'>
      <main className='w-[60%] flex flex-col gap-5'>
        <header>
          <h1 className='text-[#6889FF] font-[700] text-[30px]'>Tambah Wisata</h1>
        </header>
        <form action="" className='flex justify-between'>
          <article className='flex flex-col gap-10'>
            <Input placeholder='Masukkan Nama Wisata' type='text'/>
            <Input placeholder='Masukkan Nama Email' type='text'/>
            <Input placeholder='Masukkan No. Telepon' type='text'/>
            <Input placeholder='Masukkan Kota' type='text'/>
          </article>
          <article className='flex flex-col gap-7 items-center '>
          <input className='w-[370px] h-[65px] text-[#515151] placeholder:text-[#515151] outline-none  rounded-[12px] pl-[25px] text-[15px] bg-[#F6F6F6]'required  type='text' placeholder='Masukkan Alamat' />
          <div className="input-gambar bg-[#F6F6F6] relative h-[230px] rounded-[12px] flex justify-center items-center w-full z-10">
            <input type="file" className=' w-full h-full absolute opacity-0 cursor-pointer' />
            <div className="order flex flex-col items-center justify-center gap-5">
              <img src={Gambar} className='w-[60px]' alt="" />
              <p className='font-[200]'>Tambahkan Gambar</p>
            </div>
          </div>
          <Button/>
          </article>
        </form>
      </main>
    </div>
  )
}

export default Tambah