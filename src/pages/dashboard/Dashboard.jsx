import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'
import NotFound from '../notfound'
import Detail from './Detail'
import Home from './Home'
import Table from './Table'
import Tambah from './Tambah'
import Ubah from './Ubah'
import {StateContext, useStateContext } from '../../context/StateContext';

const Dashboard = () => {
  return (
    <div>     
          <StateContext>
      <div className='relative'>  
        <Sidebar />
      </div> 
        <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/table' element={<Table/>} />
            <Route path='/add' element={<Tambah/>} />
            <Route path='/edit/:id' element={<Ubah/>} />
            <Route path='/*' element={<NotFound/>}/>
        </Routes>
          </StateContext>
    </div>
    
  )
}

export default Dashboard