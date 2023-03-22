import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import SearchBar from "../../components/SearchBar";
import instance from "../../API/api";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const checkUserToken = () => {
      const userToken = localStorage.getItem("token");
      if (!userToken || userToken === "undefined") {
        return navigate("/");
      }
    };
    checkUserToken();
  }, []);
  useEffect 
    (() => {
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
          });
      };
      getData();
    },
    []);
  const userName = localStorage.getItem("user");
  const nama = userName.replace(/[0-9]/gi, "");
  if(loading){
    return (
      <div className="loading w-full h-screen flex justify-center items-center">
        <h1>Loading ...</h1>
      </div>
    )
  }else{

    return (
    <div>
      <main className="w-full flex flex-col items-center  ">
        <nav className="flex justify-between items-center w-[80%] ">
          <h1 className="font-[700] text-[25px]">Hi,{nama.toUpperCase()}!</h1>
          <SearchBar />
        </nav>
        <div className="content w-[80%] flex flex-wrap gap-x-[50px] gap-y-[30px] justify-start">
          {
            data?.map((item)=>{
              return(

                <Card key={item.id} src={item.photo} alt={item.name} name={item.name} address={item.address} city={item.city} phone={item.phone} />
              )
            })
          }
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
