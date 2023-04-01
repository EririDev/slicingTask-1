import React, { useEffect, useState } from 'react'
import Back from '../../assets/bekbek.svg'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Gambar from '../../assets/gallery-export.svg'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import instance from '../../API/api'

const Ubah = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const [buttonStatus, setButtonStatus] = useState("Update")
  const [image, setImage] = useState(null)
  

  //untuk dikirim melalui form
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [city, setCity] = useState("")
  const [address, setAddress] = useState('')
  const [photo, setPhoto] = useState('')
  useEffect(()=>{
    const checkUserToken = ()=>{
      const userToken = localStorage.getItem('token')
      if(!userToken || userToken==='undefined'){
        return navigate('/')
      }
    }
    checkUserToken()
  },[])
 
  const fileChangeHandler = (e)=>{
    //Mengambil value bukan (e.target.value) tetapi (e.target.files[0])
    setPhoto(e.target.files[0])
    //Membuat Object URL agar bisa ditampilkan gambar yang dipilih
    setImage(URL.createObjectURL(e.target.files[0]))
    
  }

  useEffect (() => {
    const getData = () => {
      setLoading(true)
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
          setName(response.data.data[0].name)
          setEmail(response.data.data[0].email)
          setPhone(response.data.data[0].phone)
          setCity(response.data.data[0].city)
          setAddress(response.data.data[0].address)
          setImage(response.data.data[0].photo)
          fetch(response.data.data[0].photo)
          .then(res => res.blob())
          .then(blob =>{
            console.log(blob);
            const nameFile = response.data.data[0].name
            const file = new File([blob], nameFile,{type: blob.type})
            setPhoto(file)
          })
          setLoading(false)
        })
        .catch((error) => {
          console.log(error);
          setLoading(false)
        });
    };
    getData();
  },
  [id]);
  
  const handleSubmmit = (e)=>{
    e.preventDefault()
    //merubah status button ketika proses mengirim data
    setButtonStatus("Waiting Update...")

    let data = new FormData()
    data.append("name",name)
    data.append("email",email)
    data.append("phone",phone)
    data.append("address",address)
    data.append("city",city)
    data.append("photo",photo)

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `/UP/${id}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: data,
    };
       // Jangan lupa mengimport instance dari file api.js
       instance
       .request(config)
       .then((response) => {
         console.log(JSON.stringify(response.data));
 
         // Merubah status button ketika proses mengirim selesai/berhasil
         setButtonStatus("Create");
 
         // Menavigasi ke halaman Home
         navigate("/dashboard/home");
       })
       .catch((error) => {
         console.log(error);
 
         // Merubah status button ketika proses mengirim gagal
         setButtonStatus("Update");
       });
  }
  const userName = localStorage.getItem("user");
  const nama = userName.replace(/[0-9]/gi, "");
  if(loading){
    return(
      <div className='w-full h-screen lg:p-20 p-0 flex md:justify-center lg:items-center animate-pulse'>
      <main className='lg:w-[60%] md:w-[80%] w-full flex flex-col lg:gap-5 '>
      <nav className="lg:justify-start lg:items-center  w-full flex flex-col lg:flex-row items-start lg:w-[80%] gap-5 lg:gap-0 ">
            <div className="flex justify-between  lg:shadow-none w-full lg:w-auto shadow-[0px_4px_4px_rgba(0,0,0,0.25)] p-5 items-center md:hidden fixed bg-white">
            <NavLink to='/dashboard/table'> <img src={Back} className='w-[15px]' alt="" /></NavLink>
              <h1 className="font-[700] lg:text-[25px] text-[20px] lg:hidden">Hi,{nama.toUpperCase()}!</h1>
            </div>
          <h1 className='text-[#6889FF] font-[700] text-[30px] pl-3 lg:pl-0 lg:mt-0 mt-[80px]'>Ubah Wisata</h1>
          </nav>
        <form action="" className='flex flex-col lg:flex-row lg:justify-between lg:items-start items-center gap-3 w-full p-3 lg:p-0' onSubmit={handleSubmmit}>
          <article className='flex md:items-start items-center flex-col lg:gap-10 gap-3 w-full'>
            <input  type='text' className='w-full h-[50px] lg:w-[300px] lg:h-[50px] text-[#515151] placeholder:text-[#515151] outline-none  rounded-[12px] pl-[25px] text-[15px] bg-[#F6F6F6]'required  onChange={(e)=>setName(e.target.value)} />
            <input  className='w-full h-[50px] lg:w-[300px] lg:h-[50px] text-[#515151] placeholder:text-[#515151] outline-none  rounded-[12px] pl-[25px] text-[15px] bg-[#F6F6F6]'required  type='email' onChange={(e)=>setEmail(e.target.value)}/>
            <input  className='w-full h-[50px] lg:w-[300px] lg:h-[50px] text-[#515151] placeholder:text-[#515151] outline-none  rounded-[12px] pl-[25px] text-[15px] bg-[#F6F6F6]'required  type='tel' onChange={(e)=>setPhone(e.target.value)}/>
            <input  className='w-full h-[50px] lg:w-[300px] lg:h-[50px] text-[#515151] placeholder:text-[#515151] outline-none  rounded-[12px] pl-[25px] text-[15px] bg-[#F6F6F6]'required  type='text ' onChange={(e)=>setCity(e.target.value)}/>
          </article>
          <article className='flex flex-col gap-3 items-center w-full '>
            <input className='w-full h-[50px] lg:w-[370px] lg:h-[65px] text-[#515151] placeholder:text-[#515151] outline-none  rounded-[12px] pl-[25px] text-[15px] bg-[#F6F6F6]'required  type='text'  onChange={(e)=>setAddress(e.target.value)} />
            <div className="input-gambar bg-[#F6F6F6] relative h-[230px] md:h-[300px] lg:h-[230px] rounded-[12px] overflow-hidden flex flex-col gap-10 justify-center items-center  z-10 w-full lg:w-[370px]">
              <h1>Memuat Gambar</h1>
              <div class="loader3">
  <div class="circle1"></div>
  <div class="circle1"></div>
  <div class="circle1"></div>
  <div class="circle1"></div>
  <div class="circle1"></div>
</div>

            </div>
            <button className='w-[300px] h-[50px] outline-none flex justify-center items-center rounded-[12px] text-[15px] font-[700] text-white bg-[#6889FF] '>{buttonStatus}</button>
            </article>
        </form>
      </main>
    </div>
    )
    
  }else{
    }
  return (
    <div className='w-full h-screen lg:p-20 p-0 flex md:justify-center lg:items-center'>
    <main className='lg:w-[60%] md:w-[80%] w-full flex flex-col lg:gap-5 '>
    <nav className="lg:justify-start lg:items-center  w-full flex flex-col lg:flex-row items-start lg:w-[80%] gap-5 lg:gap-0 ">
          <div className="flex justify-between  lg:shadow-none w-full lg:w-auto shadow-[0px_4px_4px_rgba(0,0,0,0.25)] p-5 items-center md:hidden fixed bg-white">
          <NavLink to='/dashboard/table'> <img src={Back} className='w-[15px]' alt="" /></NavLink>
            <h1 className="font-[700] lg:text-[25px] text-[20px] lg:hidden">Hi,{nama.toUpperCase()}!</h1>
          </div>
        <h1 className='text-[#6889FF] font-[700] text-[30px] pl-3 lg:pl-0 lg:mt-0 mt-[80px]'>Ubah Wisata</h1>
        </nav>
      <form action="" className='flex flex-col lg:flex-row lg:justify-between lg:items-start items-center gap-3 w-full p-3 lg:p-0' onSubmit={handleSubmmit}>
        <article className='flex md:items-start items-center flex-col lg:gap-10 gap-3 w-full'>
          <input value={name} type='text' className='w-full h-[50px] lg:w-[300px] lg:h-[50px] text-[#515151] placeholder:text-[#515151] outline-none  rounded-[12px] pl-[25px] text-[15px] bg-[#F6F6F6]'required  onChange={(e)=>setName(e.target.value)} />
          <input value={email} className='w-full h-[50px] lg:w-[300px] lg:h-[50px] text-[#515151] placeholder:text-[#515151] outline-none  rounded-[12px] pl-[25px] text-[15px] bg-[#F6F6F6]'required  type='email' onChange={(e)=>setEmail(e.target.value)}/>
          <input value={phone} className='w-full h-[50px] lg:w-[300px] lg:h-[50px] text-[#515151] placeholder:text-[#515151] outline-none  rounded-[12px] pl-[25px] text-[15px] bg-[#F6F6F6]'required  type='tel' onChange={(e)=>setPhone(e.target.value)}/>
          <input value={city} className='w-full h-[50px] lg:w-[300px] lg:h-[50px] text-[#515151] placeholder:text-[#515151] outline-none  rounded-[12px] pl-[25px] text-[15px] bg-[#F6F6F6]'required  type='text ' onChange={(e)=>setCity(e.target.value)}/>
        </article>
        <article className='flex flex-col gap-3 items-center w-full '>
          <input className='w-full h-[50px] lg:w-[370px] lg:h-[65px] text-[#515151] placeholder:text-[#515151] outline-none  rounded-[12px] pl-[25px] text-[15px] bg-[#F6F6F6]'required  type='text' value={address} onChange={(e)=>setAddress(e.target.value)} />
          <div className="input-gambar bg-[#F6F6F6] relative h-[230px] md:h-[300px] lg:h-[230px] rounded-[12px] overflow-hidden flex justify-center items-center  z-10 w-full lg:w-[370px]">
            {
              image?(
                <>
                <input type="file" id='input' className=' w-full h-full absolute opacity-0 cursor-pointer' onChange={fileChangeHandler}  />
                <img src={image} className='w-full h-full object-cover' alt="" />
                </>
              ):(
                <>
                <input type="file" id='input' className=' w-full h-full absolute opacity-0 cursor-pointer' onChange={fileChangeHandler} />
            <div className="order flex flex-col items-center justify-center gap-5">
              <img src={Gambar} className='w-[60px]' alt="" />
              <p className='font-[200]'>Tambahkan Gambar</p>
            </div>
                </>
              )
            }
          </div>
          <button className='w-[300px] h-[50px] outline-none flex justify-center items-center rounded-[12px] text-[15px] font-[700] text-white bg-[#6889FF] '>{buttonStatus}</button>
          </article>
      </form>
    </main>
  </div>
  )}


export default Ubah