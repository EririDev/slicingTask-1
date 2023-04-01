import React, { useEffect, useState } from 'react'
import {FiInfo} from 'react-icons/fi'
import {FaHamburger} from 'react-icons/fa'
import {MdOutlineModeEdit} from 'react-icons/md'
import {BsTrash3} from 'react-icons/bs'
import { Link, NavLink, useNavigate, } from 'react-router-dom'
import instance from '../../API/api'
import { useStateContext } from '../../context/StateContext';
const Table = () => {
  const {setSidebar,showUser,setUser,checkUserToken} =useStateContext()
  const [data, setData] = useState([])
  const [loading,setLoading]=useState(false)
  const navigate = useNavigate()
  const [isDeleted, setIsDeleted] = useState(false); // state baru untuk menandai bahwa data telah dihapus
  useEffect(()=>{
    checkUserToken()
    setLoading(true)
    setSidebar(false)
    setUser(true)
    const getData = () => {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "/index",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        data: data,
      };

      instance
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          setData(response.data.data)
          setLoading(false)
        })
        .catch((error) => {
          console.log(error);
          setLoading(false)
        })
    }
    getData()
  },[isDeleted])

const handleDelete =(id)=>{

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `/delete/${id}`,
    headers :{Authorization: `Bearer ${localStorage.getItem("token")}`},
    data: data,
  };
  instance
  .request(config)
  .then((ress)=>{
    console.log(`ini delete`);
    console.log(JSON.stringify(ress.data));
    setIsDeleted(!isDeleted)
  })
}

  if(loading){
    return(
      <main className='w- flex flex-col justify-center md:items-center'>
      <nav className="md:justify-start items-start md:items-center w-full flex flex-col md:flex-row md:w-[80%] gap-5 bg-indigo-300 ">
    <div className="flex justify-between  md:shadow-none w-full md:hidden md:w-auto shadow-[0px_4px_4px_rgba(0,0,0,0.25)] p-5 items-center fixed bg-white md:static z-10">
    <span onClick={()=>{
      setSidebar(true)
      setUser(false)
    }} className="md:hidden"><FaHamburger/></span>
      <h1 className="font-[700] md:text-[25px] text-[20px] md:hidden">{showUser()}</h1>
    </div>
  </nav>
    <div className="table-container w-full flex-col md:pl-24 md:pr-24  overflow-x-auto flex lg:justify-center">
  <h1 className='text-[25px] font-[700] lg:mb-5 mb-5 pl-5 lg:mt-14 mt-[100px] md:mt-14  text-[#6889FF]'>Tabel Wisata</h1>
    <table className='rounded-[20px] overflow-hidden shadow-lg ml-5 mr-5 lg:ml-0 lg:mr-0' >
      <thead >
        <tr className='bg-[#E7EAF0] text-[#212529] text-[14px] border-[1px] border-[#E7EAF0]'>
          <th className='p-[20px] text-center font-[500] '>No</th>
          <th className='p-[20px] text-left font-[500]'>Nama</th>
          <th className='p-[20px] text-left font-[500]'>Alamat</th>
          <th className='p-[20px] text-left font-[500]'>No.Telepon</th>
          <th className='p-[20px] text-left font-[500]'>Email</th>
          <th className='p-[20px] text-center font-[500]'>Aksi</th>
        </tr>
      </thead>
      <tbody>
     
          <tr className='border-[1px] border-[#E7EAF0] font-[400] text-[14px] animate-pulse '>
            <td className='p-[20px] text-center '><h1 className='w-10 h-5 rounded-md bg-slate-300'></h1></td>
            <td className='p-[20px]'><h1 className='w-20 h-5 rounded-md bg-slate-300'></h1></td>
            <td className='p-[20px] w-[246px]'><h1 className='w-48 h-5 rounded-md bg-slate-300'></h1></td>
            <td className='p-[20px]'><h1 className='w-10 h-5 rounded-md bg-slate-300'></h1></td>
            <td className='p-[20px]'><h1 className='w-10 h-5 rounded-md bg-slate-300'></h1></td>
            <td className='p-[20px] flex gap-3 justify-center'><h1 className='w-10 h-5 rounded-md bg-slate-300'></h1> </td>
          </tr>
          <tr className='border-[1px] border-[#E7EAF0] font-[400] text-[14px] animate-pulse '>
            <td className='p-[20px] text-center '><h1 className='w-10 h-5 rounded-md bg-slate-300'></h1></td>
            <td className='p-[20px]'><h1 className='w-20 h-5 rounded-md bg-slate-300'></h1></td>
            <td className='p-[20px] w-[246px]'><h1 className='w-48 h-5 rounded-md bg-slate-300'></h1></td>
            <td className='p-[20px]'><h1 className='w-10 h-5 rounded-md bg-slate-300'></h1></td>
            <td className='p-[20px]'><h1 className='w-10 h-5 rounded-md bg-slate-300'></h1></td>
            <td className='p-[20px] flex gap-3 justify-center'><h1 className='w-10 h-5 rounded-md bg-slate-300'></h1> </td>
          </tr>
          <tr className='border-[1px] border-[#E7EAF0] font-[400] text-[14px] animate-pulse '>
            <td className='p-[20px] text-center '><h1 className='w-10 h-5 rounded-md bg-slate-300'></h1></td>
            <td className='p-[20px]'><h1 className='w-20 h-5 rounded-md bg-slate-300'></h1></td>
            <td className='p-[20px] w-[246px]'><h1 className='w-48 h-5 rounded-md bg-slate-300'></h1></td>
            <td className='p-[20px]'><h1 className='w-10 h-5 rounded-md bg-slate-300'></h1></td>
            <td className='p-[20px]'><h1 className='w-10 h-5 rounded-md bg-slate-300'></h1></td>
            <td className='p-[20px] flex gap-3 justify-center'><h1 className='w-10 h-5 rounded-md bg-slate-300'></h1> </td>
          </tr>
           <tr className='border-[1px] border-[#E7EAF0] font-[400] text-[14px] animate-pulse '>
            <td className='p-[20px] text-center '><h1 className='w-10 h-5 rounded-md bg-slate-300'></h1></td>
            <td className='p-[20px]'><h1 className='w-20 h-5 rounded-md bg-slate-300'></h1></td>
            <td className='p-[20px] w-[246px]'><h1 className='w-48 h-5 rounded-md bg-slate-300'></h1></td>
            <td className='p-[20px]'><h1 className='w-10 h-5 rounded-md bg-slate-300'></h1></td>
            <td className='p-[20px]'><h1 className='w-10 h-5 rounded-md bg-slate-300'></h1></td>
            <td className='p-[20px] flex gap-3 justify-center'><h1 className='w-10 h-5 rounded-md bg-slate-300'></h1> </td>
          </tr>
           <tr className='border-[1px] border-[#E7EAF0] font-[400] text-[14px] animate-pulse '>
            <td className='p-[20px] text-center '><h1 className='w-10 h-5 rounded-md bg-slate-300'></h1></td>
            <td className='p-[20px]'><h1 className='w-20 h-5 rounded-md bg-slate-300'></h1></td>
            <td className='p-[20px] w-[246px]'><h1 className='w-48 h-5 rounded-md bg-slate-300'></h1></td>
            <td className='p-[20px]'><h1 className='w-10 h-5 rounded-md bg-slate-300'></h1></td>
            <td className='p-[20px]'><h1 className='w-10 h-5 rounded-md bg-slate-300'></h1></td>
            <td className='p-[20px] flex gap-3 justify-center'><h1 className='w-10 h-5 rounded-md bg-slate-300'></h1> </td>
          </tr>
           <tr className='border-[1px] border-[#E7EAF0] font-[400] text-[14px] animate-pulse '>
            <td className='p-[20px] text-center '><h1 className='w-10 h-5 rounded-md bg-slate-300'></h1></td>
            <td className='p-[20px]'><h1 className='w-20 h-5 rounded-md bg-slate-300'></h1></td>
            <td className='p-[20px] w-[246px]'><h1 className='w-48 h-5 rounded-md bg-slate-300'></h1></td>
            <td className='p-[20px]'><h1 className='w-10 h-5 rounded-md bg-slate-300'></h1></td>
            <td className='p-[20px]'><h1 className='w-10 h-5 rounded-md bg-slate-300'></h1></td>
            <td className='p-[20px] flex gap-3 justify-center'><h1 className='w-10 h-5 rounded-md bg-slate-300'></h1> </td>
          </tr>
           <tr className='border-[1px] border-[#E7EAF0] font-[400] text-[14px] animate-pulse '>
            <td className='p-[20px] text-center '><h1 className='w-10 h-5 rounded-md bg-slate-300'></h1></td>
            <td className='p-[20px]'><h1 className='w-20 h-5 rounded-md bg-slate-300'></h1></td>
            <td className='p-[20px] w-[246px]'><h1 className='w-48 h-5 rounded-md bg-slate-300'></h1></td>
            <td className='p-[20px]'><h1 className='w-10 h-5 rounded-md bg-slate-300'></h1></td>
            <td className='p-[20px]'><h1 className='w-10 h-5 rounded-md bg-slate-300'></h1></td>
            <td className='p-[20px] flex gap-3 justify-center'><h1 className='w-10 h-5 rounded-md bg-slate-300'></h1> </td>
          </tr>
           <tr className='border-[1px] border-[#E7EAF0] font-[400] text-[14px] animate-pulse '>
            <td className='p-[20px] text-center '><h1 className='w-10 h-5 rounded-md bg-slate-300'></h1></td>
            <td className='p-[20px]'><h1 className='w-20 h-5 rounded-md bg-slate-300'></h1></td>
            <td className='p-[20px] w-[246px]'><h1 className='w-48 h-5 rounded-md bg-slate-300'></h1></td>
            <td className='p-[20px]'><h1 className='w-10 h-5 rounded-md bg-slate-300'></h1></td>
            <td className='p-[20px]'><h1 className='w-10 h-5 rounded-md bg-slate-300'></h1></td>
            <td className='p-[20px] flex gap-3 justify-center'><h1 className='w-10 h-5 rounded-md bg-slate-300'></h1> </td>
          </tr>
      </tbody>
    </table>
    </div>
</main>
  )}else{
    return (
      <main className='w- flex flex-col justify-center md:items-center'>
            <nav className="md:justify-start items-start md:items-center w-full flex flex-col md:flex-row md:w-[80%] gap-5 bg-indigo-300 ">
          <div className="flex justify-between  md:shadow-none w-full md:hidden md:w-auto shadow-[0px_4px_4px_rgba(0,0,0,0.25)] p-5 items-center fixed bg-white md:static z-10">
          <span onClick={()=>{
            setSidebar(true)
            setUser(false)
          }} className="md:hidden"><FaHamburger/></span>
            <h1 className="font-[700] md:text-[25px] text-[20px] md:hidden">{showUser()}</h1>
          </div>
        </nav>
          <div className="table-container w-full flex-col md:pl-24 md:pr-24  overflow-x-auto flex lg:justify-center">
        <h1 className='text-[25px] font-[700] lg:mb-5 mb-5 pl-5 lg:mt-14 mt-[100px] md:mt-14  text-[#6889FF]'>Tabel Wisata</h1>
          <table className='rounded-[20px] overflow-hidden shadow-lg ml-5 mr-5 lg:ml-0 lg:mr-0' >
            <thead >
              <tr className='bg-[#E7EAF0] text-[#212529] text-[14px] border-[1px] border-[#E7EAF0]'>
                <th className='p-[20px] text-center font-[500] '>No</th>
                <th className='p-[20px] text-left font-[500]'>Nama</th>
                <th className='p-[20px] text-left font-[500]'>Alamat</th>
                <th className='p-[20px] text-left font-[500]'>No.Telepon</th>
                <th className='p-[20px] text-left font-[500]'>Email</th>
                <th className='p-[20px] text-center font-[500]'>Aksi</th>
              </tr>
            </thead>
            <tbody>
            {
              data.map((item,index)=>(
                <tr key={item.id} className='border-[1px] border-[#E7EAF0] font-[400] text-[14px] text-[#465170]'>
                  <td className='p-[20px] text-center'>{index+1}</td>
                  <td className='p-[20px]'>{item.name}</td>
                  <td className='p-[20px] w-[246px]'>{item.address}</td>
                  <td className='p-[20px]'>{item.phone}</td>
                  <td className='p-[20px]'>{item.email}</td>
                  <td className='p-[20px] flex gap-3 justify-center'>
                  <Link to={`/detail/${item.id}`}>

                    <button className='min-w-[45px] min-h-[45px] border-[1px] flex justify-center items-center border-[#E8EBF0] text-[25px] rounded-[6px] text-[#465170] hover:scale-110'><i><FiInfo/></i></button>
                  </Link>

                    <Link to={`/dashboard/edit/${item.id}`}>
                    <button className='min-w-[45px] min-h-[45px] hover:scale-110 border-[1px] flex justify-center items-center border-[#E8EBF0] text-[25px] rounded-[6px] text-[#465170]'><i><MdOutlineModeEdit/></i></button>
                    </Link>
                    <button className='min-w-[45px] min-h-[45px] border-[1px] hover:scale-110 flex justify-center items-center border-[#E8EBF0] text-[25px] rounded-[6px] text-[#465170]' onClick={()=> handleDelete(item.id) } ><i><BsTrash3/></i></button>
                  </td>
                </tr>
              ))
            }
            </tbody>
          </table>
          </div>
      </main>
    )
  }
}
export default Table