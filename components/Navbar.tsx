'use client'
import Link from "next/link";
import Image from "next/image";
import Button from "./CustomButton";
import { useState, useEffect } from 'react';
import axios from "axios";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
  const [dateData, setDateData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://capitalnews24.net/api/navigationbar/view'); // Replace with your API endpoint
        setDateData(response.data.dateData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const adbcs = dateData == null ? "" : dateData.adbcs;
  return (

    <header className="flex flex-col text-black-100 border-t border-gray-100">
      <nav className="main-nav">
            <div className="logo">
              <Link href="/" className="flex flex-col items-center">
                <Image
                  className="object-contain"
                  src="/capitalHeadLogo.png"
                  alt="capital_head_Logo"
                  width={200}
                  height={100}
                />
                <p className="mt-2 text-center">THE WORLD IN ONE CLICK</p>
              </Link>
            </div>
            <div className="hamburger-menu">
              <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                <GiHamburgerMenu />
              </a>
            </div>    
            <div
              className={
                showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
              }>
              <ul>
                <li>
                  {dateData ? (
                    <Link href={adbcs.link} className="flex justify-center items-center">
                      <Image
                        className="object-contain"
                        src={`https://capitalnews24.net/storage/uploads/abcds_image/${adbcs.pic}`}
                        alt="NVC"
                        width={800}
                        height={100}
                      />
                    </Link>
                  ) : (
                    <p>Loading data...</p>
                  )}
                </li>
                <li>
                  {dateData ? (
                    <div>
                      <p className="text-center text-3xl">
                        ঢাকা,&nbsp; {dateData.dname} <br />
                        {dateData.date}
                        <br /> {dateData.edate}
                      </p>
                    </div>
                  ) : (
                    <p>Loading data...</p>
                  )}
                </li>
                <li>
                {/* <Link href="/Login" className="flex justify-center items-center">
                  <Button
                    title="Login"
                    btnType="button"
                    containerStyles="text-primary-blue rounded-none bg-white min-w-[130px] border border-indigo-600 text-2xl"
                  />
                  </Link> */}
                </li>
              </ul>
            </div>
              
            <div className={
                showMediaIcons ? "nav-main-category mobile-nav-main-category" : "nav-main-category"
              }>
              {/* <ul className="flex space-x-1"> 
               className="border rounded px-2 py-2 hover:bg-gray-200 text-2xl"
              */}
              <ul className="flex space-x-4">
                {dateData ? dateData.category.map(element => (
                  <li className="border rounded px-4 py-4 hover:bg-gray-200 text-2xl" key={element.id}>
                    
                    <Link href={`/Category/${element.id}/${element.category}/`}>
                    {element.category}
                    </Link>
                   
                    </li>
                )) : <p>Loading data...</p>}
              </ul>
            </div>
           
      </nav>

      {/* <div className='main-category'>
        <ul>
        { dateData ? dateData.category.map(element => (
    <li key={element.id}>{element.category}</li>
  )):<p>Loading data...</p>}
        </ul>
      </div> */}
    </header>
  );
};

export default Navbar;
