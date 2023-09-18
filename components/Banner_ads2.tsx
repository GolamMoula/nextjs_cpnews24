'use client'
import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from 'react';
import axiosInstance from '@axiosConfig';

const BannerAds2 = (props) => { // Receive props as a parameter
  const { data1, data2} = props; // Destructure the data property from props
  const [AdsData1, setAdsData1] = useState(null);
  const [AdsData2, setAdsData2] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const response1 = await axiosInstance.get(`banneradbcs/view/${data1}`);
        setAdsData1(response1.data.AdsData);
        const response2 = await axiosInstance.get(`banneradbcs/view/${data2}`);
        setAdsData2(response2.data.AdsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);


  return (
    <div>
      {AdsData1 ? (
        <div className="mx-auto grid lg:grid-cols-2 gap-5 pt-6 ">
        <Link href={AdsData1.adbcs.link} className="flex justify-center items-center">
          <Image
            className="object-contain"
            src={`https://capitalnews24.net/storage/uploads/abcds_image/${AdsData1.adbcs.pic}`}
            alt="NVC"
            width={800}
            height={100}
          />
        </Link>
        {AdsData2 ? (
        <Link href={AdsData2.adbcs.link} className="flex justify-center items-center">
          <Image
            className="object-contain"
            src={`https://capitalnews24.net/storage/uploads/abcds_image/${AdsData2.adbcs.pic}`}
            alt="NVC"
            width={800}
            height={100}
          />
        </Link>  ) : (
        <p>Loading data...</p>
      )}
        </div>
      ) : (
        <p>Loading data...</p>
      )}

    </div>
  );
};

export default BannerAds2;
