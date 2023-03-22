import React, { useEffect, useState } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Gambar from '../../assets/gallery-export.svg'
import { useNavigate } from 'react-router-dom'
import instance from '../../API/api'

const Tambah = () => {
  const navigate = useNavigate()
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

  const handleSubmmit = (e)=>{
    e.preventDefault()
    //merubah status button ketika proses mengirim data
    setButtonStatus("Tunggu Tott")

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
 
         // Menavigasi ke halaman Tabel
         navigate("/dashboard/home");
       })
       .catch((error) => {
         console.log(error);
 
         // Merubah status button ketika proses mengirim gagal
         setButtonStatus("Create");
       });
  }
  
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
    <div className='w-full h-screen p-20 flex justify-center items-center'>
      <main className='w-[60%] flex flex-col gap-5'>
        <header>
          <h1 className='text-[#6889FF] font-[700] text-[30px]'>Tambah Wisata</h1>
        </header>
        <form action="" className='flex justify-between' onSubmit={handleSubmmit}>
          <article className='flex flex-col gap-10'>
            <Input placeholder='Masukkan Nama Wisata' type='text' onChange={(e)=>setName(e.target.value)} />
            <Input placeholder='Masukkan Nama Email' type='text' onChange={(e)=>setEmail(e.target.value)}/ >
            <Input placeholder='Masukkan No. Telepon' type='text' onChange={(e)=>setPhone(e.target.value)}/>
            <Input placeholder='Masukkan Kota' type='text' onChange={(e)=>setCity(e.target.value)}/>
          </article>
          <article className='flex flex-col gap-7 items-center '>
          <input className='w-[370px] h-[65px] text-[#515151] placeholder:text-[#515151] outline-none  rounded-[12px] pl-[25px] text-[15px] bg-[#F6F6F6]'required  type='text' placeholder='Masukkan Alamat' onChange={(e)=>setAddress(e.target.value)} />
          <div className="input-gambar bg-[#F6F6F6] relative h-[230px] rounded-[12px] overflow-hidden flex justify-center items-center  z-10 w-[370px]">
            {
              image?(
                <>
                <input type="file" className=' w-full h-full absolute opacity-0 cursor-pointer' onChange={fileChangeHandler} />
                <img src={image} className='w-full h-full object-cover' alt="" />
                </>
              ):(
                <>
                <input type="file" className=' w-full h-full absolute opacity-0 cursor-pointer' onChange={fileChangeHandler} />
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