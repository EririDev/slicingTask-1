import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import Input from '../../components/Input'
import axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate=useNavigate() //Menjalankan fungsi untuk menuju ke tujuan halaman
  const [loading, setLoading] = useState(false)
  const handleSubmit = (e)=>{
    setLoading(true)
    e.preventDefault()
let data = new FormData();
data.append('email', email);
data.append('password', password);

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://frontendreq.pondokprogrammer.com/api/login',
  headers: {},
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
  localStorage.setItem('token',response.data.token)
  localStorage.setItem('user',response.data.user.name)
  setLoading(false)
  navigate('/dashboard/home')
})
.catch((error) => {
  console.log(error);
  setLoading(false)
  alert(`Email/Password yang anda masukkan salah.
  tolong masukkan data dengan benar`)
});
  }
  if(loading){
    return(
      <div className='w-full h-screen flex justify-center items-center'>
        <div className="card w-[350px] h-[550px] overflow-hidden relative flex flex-col justify-center items-center shadow-[4px_4px_12px_rgba(0,0,0,0.25)] rounded-[12px]">
        <div className='w-full h-full absolute  bg-[rgba(255,255,255,0.5)] '>
          <div class="loader"></div>
        </div>
            <div className="top flex-1 border-teal-300 w-full flex justify-center items-center">
                <h1 className='text-[40px] font-[700] text-[#6889FF]'>Login</h1>
            </div>
            <div className="center flex-1 flex flex-col gap-2 w-full">
            <form className=" flex flex-col gap-5 items-center  border-orange-300 w-full" onSubmit={handleSubmit}>
                <Input type="email" placeholder='Masukkan Email' value={email} onChange={(e)=> setEmail(e.target.value)} />
                <Input type='password' placeholder='Masukkan Password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
                <Button/>
            </form>
            <div className=" border-indigo-500 w-full flex flex-col gap-3 pb-14 ">
            <span className='text-[15px] flex items-center gap-3' ><input className='ml-[43px] w-[15px] h-[15px] outline-none border-none' type="checkbox" id='remember' /> <label  htmlFor="remember">Ingat saya untuk login</label></span>
            <p className='ml-[59px] text-[15px]'>Belum memiliki akun,<NavLink to='/signup'><span className='text-[#0038FF]'>Register</span></NavLink></p>
            </div>
            </div>
        </div>
    </div>
    )
  }else{

    return (

    <div className='w-full h-screen flex justify-center items-center'>
        <div className="card w-[350px] h-[550px]  flex flex-col justify-center items-center shadow-[4px_4px_12px_rgba(0,0,0,0.25)] rounded-[12px]">
            <div className="top flex-1 border-teal-300 w-full flex justify-center items-center">
                <h1 className='text-[40px] font-[700] text-[#6889FF]'>Login</h1>
            </div>
            <div className="center flex-1 flex flex-col gap-2 w-full">
            <form className=" flex flex-col gap-5 items-center  border-orange-300 w-full" onSubmit={handleSubmit}>
                <Input type="email" placeholder='Masukkan Email' value={email} onChange={(e)=> setEmail(e.target.value)} />
                <Input type='password' placeholder='Masukkan Password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
                <Button/>
            </form>
            <div className=" border-indigo-500 w-full flex flex-col gap-3 pb-14 ">
            <span className='text-[15px] flex items-center gap-3' ><input className='ml-[43px] w-[15px] h-[15px] outline-none border-none' type="checkbox" id='remember' /> <label  htmlFor="remember">Ingat saya untuk login</label></span>
            <p className='ml-[59px] text-[15px]'>Belum memiliki akun,<NavLink to='/signup'><span className='text-[#0038FF]'>Register</span></NavLink></p>
            </div>
            </div>
        </div>
    </div>
  )
}
}

export default Login