import React from 'react'
import search from '../assets/search-bar/search-normal.svg'

const SearchBar = () => {
  return (
    <div className='w-[450px] h-[50px] rounded-[25px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex items-center justify-between mb-[50px] mt-[30px]'>
        <img className='w-[25px] h-[25px] ml-[22.5px] mr-[22.5px]' src={search} alt="" />
        <input className='w-full h-full placeholder:text-[15px] text-[15px] outline-none' type='text' placeholder='Cari wisata...' />
        <button className='min-w-[100px] h-[50px] bg-[#6889FF] rounded-[25px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-[#ffffff] font-[700] text-[15px]'>Cari</button>
    </div>
  )
}

export default SearchBar