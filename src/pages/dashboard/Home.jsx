import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Card from '../../components/Card'
import SearchBar from '../../components/SearchBar'

const Home = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    const checkUserToken = ()=>{
      const userToken = localStorage.getItem('token')
      if(!userToken || userToken==='undefined'){
        return navigate('/')
      }
    }
    checkUserToken()
  },[])
  return (
    <div >
         <nav className='flex justify-end mr-[150px]'>
        <SearchBar/>
        </nav >
        <main className='w-full flex justify-center '>
            <div className="content w-[80%] flex flex-wrap gap-x-[50px] gap-y-[30px] justify-center">
                <NavLink to='/detail'><Card/></NavLink>
                <NavLink to='/detail'><Card/></NavLink>
                <NavLink to='/detail'><Card/></NavLink>
                <NavLink to='/detail'><Card/></NavLink>
                <NavLink to='/detail'><Card/></NavLink>
                <NavLink to='/detail'><Card/></NavLink>
                <NavLink to='/detail'><Card/></NavLink>
                <NavLink to='/detail'><Card/></NavLink>
                <NavLink to='/detail'><Card/></NavLink>
                <NavLink to='/detail'><Card/></NavLink>
                <NavLink to='/detail'><Card/></NavLink>
                <NavLink to='/detail'><Card/></NavLink>
            </div>
        </main>
        <footer className='w-full h-[90px] mt-[80px] bg-[#6889FF] flex flex-col justify-center'>
            <p className='text-center font-[200] text-white text-[15px]'>Footer Component</p>
            <p className='text-center font-[200] text-white text-[15px]'>Copyright 2023 All Right Reserved</p>
         </footer>
        </div>
  )
}

export default Home