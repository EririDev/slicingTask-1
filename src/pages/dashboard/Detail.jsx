import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import Back from '../../assets/bekbek.svg'
import Gambar from '../../assets/card/Air-terjun.png'
import Location from '../../assets/detail/location.svg'
import Email from '../../assets/detail/email.svg'
import Phone from '../../assets/detail/phone.svg'
import instance from '../../API/api'
const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)
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
  useEffect 
  (() => {
    setLoading(true)
    const getData = () => {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `/show/${id}`,
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
        });
    };
    getData();
  },
  []);
  if(loading){
    return(
      <div className="loading w-full h-screen flex justify-center items-center">
        <h1>Loading...</h1>
      </div>)
  }else{
  return (
    <div className='w-full p-5  flex justify-center items-center'>
      {
        data.map((item)=>{
          return(
            <main className='w-[60%] '>
      <header className='flex items-center gap-5 mb-3'>  
      <NavLink to='/dashboard/table'> <img src={Back} className='w-[15px]' alt="" /></NavLink>
        <h1 className='text-[25px] font-[700]'>{item.name}</h1>
      </header>
      <article className='flex flex-col gap-5'>
        <div className="img-container w-full rounded-[8px] h-[440px] overflow-hidden ">
          <img src={item.photo} className='w-full h-full object-cover ' alt="" />
        </div>
        <div className="description flex flex-col gap-2 pl-1 ">
          <div className="location flex  items-center gap-3">
            <img className='w-[25px]' src={Location} alt="" />
            <p className='text-[15px] font-[ 400]'>{item.address},{item.city}</p>
          </div>
          <div className="email flex   items-center gap-3">
          <img className='w-[25px]' src={Email} alt="" />
          <p className='text-[15px] font-[ 400]'>{item.email}</p>
          </div>
          <div className="phone flex   items-center gap-3">
          <img className='w-[25px]' src={Phone} alt="" />
          <p className='text-[15px] font-[ 400]'>{item.phone}</p>
          </div>
        </div>
      </article>
      </main>
          )
        })
      }

    </div>
  )
}}

export default Detail