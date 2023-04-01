import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import SearchBar from "../../components/SearchBar";
import instance from "../../API/api";
import {FaHamburger} from 'react-icons/fa'
import { useStateContext } from '../../context/StateContext';

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const {setSidebar,showUser,setUser,checkUserToken} =useStateContext()
  const [filteredData, setFilteredData] = useState([])
  useEffect 
    (() => {
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
            setFilteredData(response.data.data)
            setLoading(false)
          })
          .catch((error) => {
            console.log(error);
            setLoading(false)
          });
      };
      getData();
    },[]);
  
    const handleSearch= (valueInput)=>{
    const filterData = data.filter((item)=>{
    const value = valueInput.toLowerCase()
    const itemData = item.name.toLowerCase()
    return itemData.includes(value)
  }
  )
  if(valueInput.length > 0 && filterData.length === 0 ){
    setFilteredData([])
  }else{
    setFilteredData(filterData)
  }
  
}
  if(loading){
    return (
      <div>
      <main className="w-full flex flex-col items-center ">
        <nav className="md:flex md:justify-between w-full flex flex-col md:flex-row items-center md:w-[80%] md:mt-10  ">
          <div className="flex justify-between md:shadow-none w-full md:w-auto shadow-[0px_4px_4px_rgba(0,0,0,0.25)] md:p-0 p-5 fixed   md:static bg-white z-10">
            <h1 className="md:hidden" onClick={()=>{
              setSidebar(true)
              setUser(false)
              }}><FaHamburger/></h1>
            <h1 className="font-[700] md:text-[25px]">{showUser()}</h1>
          </div>
          <SearchBar onChange={handleSearch}/>
        </nav>
        <div className="content md:w-[80%] flex flex-wrap lg:gap-x-[50px] lg:gap-y-[30px] gap-x-[50px] gap-y-[30px] md:gap-x-[30px] md:gap-y-[10px]   justify-center md:justify-center lg:mr-0 ">
              <div  className='lg:w-[320px] animate-pulse md:w-[280px] md:h-[230px] w-[350px] h-[280px] lg:h-[250px] rounded-[8px]  overflow-hidden  shadow-[4px_4px_12px_rgba(0,0,0,0.25)]  '>
              <div className="img-container w-full bg-slate-300 lg:h-[180px] md:h-[150px] h-[200px]  ">
                  <img className='w-full h-full object-cover ' />
                  </div>
              <div className="desc p-[15px] pt-[10px] flex flex-col gap-2">
              <h3 className='w-60 h-5 bg-slate-300 rounded-md'></h3>
              <p  className='w-32 h-5 bg-slate-300 rounded-md'></p>
              </div>
              </div>
              <div  className='lg:w-[320px] animate-pulse md:w-[280px] md:h-[230px] w-[350px] h-[280px] lg:h-[250px] rounded-[8px]  overflow-hidden  shadow-[4px_4px_12px_rgba(0,0,0,0.25)]  '>
            <div className="img-container w-full bg-slate-300 lg:h-[180px] md:h-[150px] h-[200px]  ">
                <img className='w-full h-full object-cover ' />
                </div>
            <div className="desc p-[15px] pt-[10px] flex flex-col gap-2">
            <h3 className='w-60 h-5 bg-slate-300 rounded-md'></h3>
            <p  className='w-32 h-5 bg-slate-300 rounded-md'></p>
            </div>
              </div>
              <div  className='lg:w-[320px] animate-pulse md:w-[280px] md:h-[230px] w-[350px] h-[280px] lg:h-[250px] rounded-[8px]  overflow-hidden  shadow-[4px_4px_12px_rgba(0,0,0,0.25)]  '>
              <div className="img-container w-full bg-slate-300 lg:h-[180px] md:h-[150px] h-[200px]  ">
                  <img className='w-full h-full object-cover ' />
                  </div>
              <div className="desc p-[15px] pt-[10px] flex flex-col gap-2">
              <h3 className='w-60 h-5 bg-slate-300 rounded-md'></h3>
              <p  className='w-32 h-5 bg-slate-300 rounded-md'></p>
              </div>
              </div>
              <div  className='lg:w-[320px] animate-pulse md:w-[280px] md:h-[230px] w-[350px] h-[280px] lg:h-[250px] rounded-[8px]  overflow-hidden  shadow-[4px_4px_12px_rgba(0,0,0,0.25)]  '>
            <div className="img-container w-full bg-slate-300 lg:h-[180px] md:h-[150px] h-[200px]  ">
                <img className='w-full h-full object-cover ' />
                </div>
            <div className="desc p-[15px] pt-[10px] flex flex-col gap-2">
            <h3 className='w-60 h-5 bg-slate-300 rounded-md'></h3>
            <p  className='w-32 h-5 bg-slate-300 rounded-md'></p>
            </div>
              </div>
              <div  className='lg:w-[320px] animate-pulse md:w-[280px] md:h-[230px] w-[350px] h-[280px] lg:h-[250px] rounded-[8px]  overflow-hidden  shadow-[4px_4px_12px_rgba(0,0,0,0.25)]  '>
              <div className="img-container w-full bg-slate-300 lg:h-[180px] md:h-[150px] h-[200px]  ">
                  <img className='w-full h-full object-cover ' />
                  </div>
              <div className="desc p-[15px] pt-[10px] flex flex-col gap-2">
              <h3 className='w-60 h-5 bg-slate-300 rounded-md'></h3>
              <p  className='w-32 h-5 bg-slate-300 rounded-md'></p>
              </div>
              </div>
              <div  className='lg:w-[320px] animate-pulse md:w-[280px] md:h-[230px] w-[350px] h-[280px] lg:h-[250px] rounded-[8px]  overflow-hidden  shadow-[4px_4px_12px_rgba(0,0,0,0.25)]  '>
            <div className="img-container w-full bg-slate-300 lg:h-[180px] md:h-[150px] h-[200px]  ">
                <img className='w-full h-full object-cover ' />
                </div>
            <div className="desc p-[15px] pt-[10px] flex flex-col gap-2">
            <h3 className='w-60 h-5 bg-slate-300 rounded-md'></h3>
            <p  className='w-32 h-5 bg-slate-300 rounded-md'></p>
            </div>
              </div>
              <div  className='lg:w-[320px] animate-pulse md:w-[280px] md:h-[230px] w-[350px] h-[280px] lg:h-[250px] rounded-[8px]  overflow-hidden  shadow-[4px_4px_12px_rgba(0,0,0,0.25)]  '>
              <div className="img-container w-full bg-slate-300 lg:h-[180px] md:h-[150px] h-[200px]  ">
                  <img className='w-full h-full object-cover ' />
                  </div>
              <div className="desc p-[15px] pt-[10px] flex flex-col gap-2">
              <h3 className='w-60 h-5 bg-slate-300 rounded-md'></h3>
              <p  className='w-32 h-5 bg-slate-300 rounded-md'></p>
              </div>
              </div>
              <div  className='lg:w-[320px] animate-pulse md:w-[280px] md:h-[230px] w-[350px] h-[280px] lg:h-[250px] rounded-[8px]  overflow-hidden  shadow-[4px_4px_12px_rgba(0,0,0,0.25)]  '>
            <div className="img-container w-full bg-slate-300 lg:h-[180px] md:h-[150px] h-[200px]  ">
                <img className='w-full h-full object-cover ' />
                </div>
            <div className="desc p-[15px] pt-[10px] flex flex-col gap-2">
            <h3 className='w-60 h-5 bg-slate-300 rounded-md'></h3>
            <p  className='w-32 h-5 bg-slate-300 rounded-md'></p>
            </div>
              </div>
       
</div>
</main>
<footer className="w-full h-[90px] mt-[80px] bg-[#6889FF] flex flex-col justify-center">
  <p className="text-center font-[200] text-white text-[15px]">
    Footer Component
  </p>
  <p className="text-center font-[200] text-white text-[15px]">
    Copyright 2023 All Right Reserved
  </p>
</footer>
</div>
    )
  }else{
    return (
    <div>
      <main className="w-full flex flex-col items-center ">
        <nav className="md:flex md:justify-between w-full flex flex-col md:flex-row items-center md:w-[80%] md:mt-10  ">
          <div className="flex justify-between md:shadow-none w-full md:w-auto shadow-[0px_4px_4px_rgba(0,0,0,0.25)] md:p-0 p-5 fixed   md:static bg-white z-10">
            <h1 className="md:hidden" onClick={()=>{
              setSidebar(true)
              setUser(false)
              }}><FaHamburger/></h1>
            <h1 className="font-[700] md:text-[25px]">{showUser()}</h1>
          </div>
          <SearchBar onChange={handleSearch}/>
        </nav>
        <div className="content md:w-[80%] flex flex-wrap lg:gap-x-[50px] lg:gap-y-[30px] gap-x-[50px] gap-y-[30px] md:gap-x-[30px] md:gap-y-[10px]   justify-center md:justify-center lg:mr-0 ">
        {filteredData.length > 0 ? (
filteredData.map((item) => (
<Card
               key={item.id}
               id={item.id}
               src={item.photo}
               alt={item.name}
               name={item.name}
               address={item.address}
               city={item.city}
               phone={item.phone}
             />
))
) : (
<div className="w-full h-[350px] flex justify-center items-center">
<h1>Hasil Tidak Ditemukan</h1>
</div>
)}
        </div>
      </main>
      <footer className="w-full h-[90px] mt-[80px] bg-[#6889FF] flex flex-col justify-center">
        <p className="text-center font-[200] text-white text-[15px]">
          Footer Component
        </p>
        <p className="text-center font-[200] text-white text-[15px]">
          Copyright 2023 All Right Reserved
        </p>
      </footer>
    </div>
  );
}
};

export default Home;
