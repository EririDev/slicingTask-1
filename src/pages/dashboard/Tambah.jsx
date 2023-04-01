import React, { useEffect, useState } from 'react'
import Back from '../../assets/bekbek.svg'
import {FaHamburger} from 'react-icons/fa'
import Gambar from '../../assets/gallery-export.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import instance from '../../API/api'
import { useStateContext } from '../../context/StateContext';

const Tambah = () => {
  const navigate = useNavigate()
    const {setSidebar,showUser,setUser,checkUserToken} =useStateContext()

  //state untuk mengubah status button 
  const [buttonStatus, setButtonStatus] = useState("Create")
  //state untuk menyimpan gambar preview sebelum dikirimkan
  const [image, setImage] = useState(null)
  //fungsi untuk event onChange pada input type file
  const fileChangeHandler = (e)=>{
    //Mengambil value bukan (e.target.value) tetapi (e.target.files[0])
    setPhoto(e.target.files[0])
    //Membuat Object URL agar bisa ditampilkan gambar yang dipilih
    setImage(URL.createObjectURL(e.target.files[0]))

  }
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [photo, setPhoto] = useState("")

  useEffect(() => {
    checkUserToken();
  }, []);

  const handleSubmmit = (e)=>{
    e.preventDefault()
    //merubah status button ketika proses mengirim data
    setButtonStatus("Tunggu Tott,baru dikirim")

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
      url: "/create",
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
         setButtonStatus("Create");
       });
  }
 
  return (
    <div className='w-full h-screen lg:p-20 p-0 flex md:justify-center  lg:items-center'>
    <main className='lg:w-[60%] md:w-[80%] w-full flex flex-col lg:gap-5 '>
    <nav className="lg:justify-start lg:items-center  w-full flex flex-col lg:flex-row items-start lg:w-[80%] gap-5 lg:gap-0 ">
          <div className="flex justify-between z-10 lg:shadow-none w-full lg:w-auto shadow-[0px_4px_4px_rgba(0,0,0,0.25)] p-5 items-center fixed bg-white md:hidden">
          <h1 onClick={()=>{
            setSidebar(true)
            setUser(false)
          }} className="lg:hidden"><FaHamburger/></h1>
            <h1 className="font-[700] lg:text-[25px] text-[20px] md:hidden">{showUser()}</h1>
          </div>
        <h1 className='text-[#6889FF] font-[700] text-[30px] pl-3 lg:pl-0 mt-[80px] lg:mt-0'>Tambah Wisata</h1>
        </nav>
      <form action="" className='flex flex-col lg:flex-row lg:justify-between lg:items-start items-center gap-3 w-full p-3 lg:p-0' onSubmit={handleSubmmit}>
        <article className='flex md:items-start  items-center flex-col lg:gap-10 gap-3 w-full '>
          <input value={name} placeholder='Masukkan Nama Wisata' type='text' className='w-full h-[50px] lg:w-[300px] lg:h-[50px] text-[#515151] placeholder:text-[#515151] outline-none  rounded-[12px] pl-[25px] text-[15px] bg-[#F6F6F6]'required  onChange={(e)=>setName(e.target.value)} />
          <input value={email} placeholder='Masukkan Email' className='w-full h-[50px] lg:w-[300px] lg:h-[50px] text-[#515151] placeholder:text-[#515151] outline-none  rounded-[12px] pl-[25px] text-[15px] bg-[#F6F6F6]'required  type='email' onChange={(e)=>setEmail(e.target.value)}/>
          <input value={phone} placeholder='Masukkan No. Telepon' className='w-full h-[50px] lg:w-[300px] lg:h-[50px] text-[#515151] placeholder:text-[#515151] outline-none  rounded-[12px] pl-[25px] text-[15px] bg-[#F6F6F6]'required  type='tel' onChange={(e)=>setPhone(e.target.value)}/>
          <input value={city} placeholder='Masukkan Nama Kota' className='w-full h-[50px] lg:w-[300px] lg:h-[50px] text-[#515151] placeholder:text-[#515151] outline-none  rounded-[12px] pl-[25px] text-[15px] bg-[#F6F6F6]'required  type='text ' onChange={(e)=>setCity(e.target.value)}/>
        </article>
        <article className='flex flex-col gap-3 lg:gap-7 items-center w-full '>
          <input className='w-full h-[50px] lg:w-[370px] lg:h-[65px] text-[#515151] placeholder:text-[#515151] outline-none  rounded-[12px] pl-[25px] text-[15px] bg-[#F6F6F6]'required  type='text' placeholder='Masukkan Alamat' value={address} onChange={(e)=>setAddress(e.target.value)} />
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
  )
}

export default Tambah