import React, { useState } from 'react'
import {GoHome} from 'react-icons/go'
import {BsClipboardMinus} from 'react-icons/bs'
import {CgAddR} from 'react-icons/cg'
import {FiEdit} from 'react-icons/fi'
import {IoExitOutline} from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import {GrClose} from 'react-icons/gr'



const Sidebar = () => {
    const [show, setShow] = useState(false)
    // const handleLogout = ()=>{
    //    setShow(true)
    // 
        const activeLink = ({isActive})=>(isActive? 'text-[#0038FF] text-[25px] p-2 rounded-[50%] hover:bg-slate-200 ':'text-[#696a6c] text-[25px] p-2 rounded-[50%] hover:bg-slate-200')
    
  return (
    <>
    <div className='w-[70px] h-[500px] rounded-tr-[20px] rounded-br-[20px] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] flex flex-col justify-between fixed top-[50%] translate-x-0 translate-y-[-50%] bg-white '>
        <div className="top flex flex-col gap-[35px] mt-[50px] items-center">
            <NavLink className={activeLink}   to='home'   ><i><GoHome/></i></NavLink>
            <NavLink className={activeLink}  to='table'><i ><BsClipboardMinus/></i></NavLink>
            <NavLink className={activeLink} to='add' ><i ><CgAddR/></i></NavLink>
            <NavLink className={activeLink} to='edit' ><i ><FiEdit/></i></NavLink>
        </div>
        <div className="bot mb-[41px] flex justify-center">
        <i onClick={()=>setShow(true)} className='text-[25px] text-[#696a6c] hover:bg-slate-300 p-2 rounded-[50%] cursor-pointer '><IoExitOutline/></i>
        </div>     
    </div>
    {show?(<div className='w-full h-full bg-[rgba(0,0,0,0.5)] fixed z-20'>
        <div className="logout w-[700px] h-[350px] rounded-[20px] bg-white relative top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center gap-28 ">
        <button onClick={()=>setShow(false)} className=' text-[20px] text-[#515151] font-[100] absolute top-4 right-4'><GrClose/></button>
            <p className='text-[30px] font-[700] text-[#6889FF]'>Anda yakin Ingin Logout?</p>
            <div className="action flex  gap-10">
                <button onClick={()=>setShow(false)} className='w-[200px] h-[50px] text-[15px] font-[700] bg-[#F6F6F6] text-[#515151] rounded-[10px]'>Batal</button>
                <NavLink to='/'><button className='w-[200px] h-[50px] font-[700] text-[15px] text-white bg-[#6889FF] rounded-[10px]'>Lanjutkan</button></NavLink>
            </div>
        </div>
        </div>):null
    }
    </>
  )
}

export default Sidebar