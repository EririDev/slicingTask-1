import React, { useEffect, useState } from 'react'
import {FiInfo} from 'react-icons/fi'
import {MdOutlineModeEdit} from 'react-icons/md'
import {BsTrash3} from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import instance from '../../API/api'

const Table = () => {
  const [data, setData] = useState([])
  const [loading,setLoading]=useState(false)
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
  useEffect(()=>{
    setLoading(true)
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
  },[])
  if(loading){
    return(
    <div className="loading w-full h-screen flex justify-center items-center">
      <h1>Loading...</h1>
    </div>)
  }else{
    return (
      <main className='w-full flex justify-center items-center p-20'>
          <table className='rounded-[20px] overflow-hidden shadow-lg' >
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
                <tr key={item} className='border-[1px] border-[#E7EAF0] font-[400] text-[14px] text-[#465170]'>
                  <td className='p-[20px] text-center'>{index+1}</td>
                  <td className='p-[20px]'>{item.name}</td>
                  <td className='p-[20px] w-[246px]'>{item.address}</td>
                  <td className='p-[20px]'>{item.phone}</td>
                  <td className='p-[20px]'>{item.email}</td>
                  <td className='p-[20px] flex gap-3'>
                  <Link to={`/detail/${item.id}`}>

                    <button className='min-w-[45px] min-h-[45px] border-[1px] flex justify-center items-center border-[#E8EBF0] text-[25px] rounded-[6px] text-[#465170] hover:scale-110'><i><FiInfo/></i></button>
                  </Link>

                    <Link to={`/dashboard/edit/${item.id}`}>
                    <button className='min-w-[45px] min-h-[45px] hover:scale-110 border-[1px] flex justify-center items-center border-[#E8EBF0] text-[25px] rounded-[6px] text-[#465170]'><i><MdOutlineModeEdit/></i></button>
                    </Link>
                    <button className='min-w-[45px] min-h-[45px] border-[1px] hover:scale-110 flex justify-center items-center border-[#E8EBF0] text-[25px] rounded-[6px] text-[#465170]' ><i><BsTrash3/></i></button>
                  </td>
                </tr>
              ))
            }
            </tbody>
          </table>
      </main>
    )
  }
}

export default Table