import axios from 'axios'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import Input from '../../components/Input'

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
let data = new FormData();
data.append('name', name);
data.append('email', email);
data.append('password', password);
data.append('password_confirmation',passwordConfirmation);

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://frontendreq.pondokprogrammer.com/api/register',
  headers: {},
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
  navigate('/')
})
.catch((error) => {
  console.log(error);
});

  }
  return (
    <div className='w-full h-screen flex justify-center items-center'>
    <div className="card w-[350px] h-[550px] flex flex-col justify-center items-center shadow-[4px_4px_12px_rgba(0,0,0,0.25)] rounded-[12px]">
        <div className="top flex-1 border-teal-300 w-full flex justify-center items-center">
            <h1 className='text-[40px] font-[700] text-[#6889FF]'>Register</h1>
        </div>
        <div className="center flex-1 flex flex-col gap-2 w-full">
        <form className=" flex flex-col gap-5 items-center  border-orange-300 w-full " onSubmit={handleSubmit}>
            <Input  type="text" placeholder='Masukkan Nama' onChange={(e)=>setName(e.target.value)}/>
            <Input  type='email' placeholder='Masukkan Email' onChange={(e)=>setEmail(e.target.value)} />
            <Input  type="password" placeholder='Masukkan Password'  onChange={(e)=>setPassword(e.target.value)} />
            <Input   type="password" placeholder='Masukkan Konfirmasi Password' onChange={(e)=>setPasswordConfirmation(e.target.value)} />
            <Button/>
        </form>
        <div className=" border-indigo-500 w-full flex flex-col gap-10 pb-14 ">
        <p className='ml-[59px] text-[15px]'>Sudah memiliki akun,<NavLink to='/'><span className='text-[#0038FF]'>Login</span></NavLink></p>
        </div>
        </div>
    </div>
</div>
  )
}

export default Register