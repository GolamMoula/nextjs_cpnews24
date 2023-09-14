'use client'
import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from 'react';
import axiosInstance from '@axiosConfig';

const BannerAds = (props) => { // Receive props as a parameter
  const { data } = props; // Destructure the data property from props
  const [AdsData, setDateData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axiosInstance.get(`banneradbcs/view/${data.value}`);
        setDateData(response.data.AdsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);


  return (
    <div>
      {AdsData ? (
        <Link href={AdsData.adbcs.link} className="flex justify-center items-center">
          <Image
            className="object-contain"
            src={`https://capitalnews24.net/storage/uploads/abcds_image/${AdsData.adbcs.pic}`}
            alt="NVC"
            width={800}
            height={100}
          />
        </Link>
      ) : (
        <p>Loading data...</p>
      )}

    </div>
  );
};

export default BannerAds;
