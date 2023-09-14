'use client'

import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { FC } from 'react'

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from 'react';
import axios from "axios";
import axiosInstance from '@axiosConfig';

interface pageProps { }
const page: FC<pageProps> = ({ }) => {
  const pathname = decodeURIComponent(usePathname());
  const segments = pathname.split('/');
  const districtId = segments[2];
  const districtName = segments[3];
  const [upazilaData, setupazilaData] = useState(null);

  const [NewsData, setNewsData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        // const response = await axiosInstance.get(`news/view/breaking`);
        const response = await axiosInstance.get(`news/district/${districtId}`);
        const response_two = await axiosInstance.get(`all/upazila/${districtId}`);

        setNewsData(response.data.News);
        setupazilaData(response_two.data.upazila);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  var news_Data = "";
  var sanitizedNews = "";
  const sanitizeHtml = (html) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || '';
  };

  function TagLink({ tag }) {
    const tagParts = tag.split(',');
    
    return (
      <div>
        {tagParts.map((part, index) => {
          const trimmedPart = part.trim();
          const encodedPart = encodeURIComponent(trimmedPart);
          return (
            <span key={index}>
              <a href={`/Tags/${encodedPart}`} className='font-xs text-xl'>{trimmedPart}</a>
              {index !== tagParts.length - 1 && ', '}
            </span>
          );
        })}
      </div>
    );
  }

  function formatTimeAgo(timestamp: string): string {
    const currentTime = new Date();
    const pastTime = new Date(timestamp);
    const timeDifference = Math.floor((currentTime.getTime() - pastTime.getTime()) / 1000);

    if (timeDifference < 60) {
        return `${timeDifference} সেকেন্ড আগে`;
    } else if (timeDifference < 3600) {
        const minutes = Math.floor(timeDifference / 60);
        return `${minutes} মিনিট আগে`;
    } else if (timeDifference < 86400) {
        const hours = Math.floor(timeDifference / 3600);
        return `${hours} ঘন্টা আগে`;
    } else {
        const days = Math.floor(timeDifference / 86400);
        return `${days} দিন আগে`;
    }
}
  return (

   <div className="w-[1200px] mx-auto grid lg:grid-cols-1 gap-5 pt-6 ">
      <div className='text-3xl'>
      {NewsData ? ( 
      <h1><a href="/">Home</a> / <a href={`/Division/${NewsData.division.id}/${NewsData.division.name}/`}>{NewsData.division.name}</a> / {districtName}</h1>     
      ) : (
        <p>Loading data...</p>
      )}
      </div>
      <div>
        <ul className="flex space-x-4">
        {upazilaData ? upazilaData.upazila.map(element => (
                  <li className="border rounded px-4 py-4 hover:bg-gray-200 text-2xl" key={element.id}>
                    
                    <Link href={`/Upazila/${element.id}/${element.bn_name}/`}>
                    {element.bn_name}
                    </Link>
                   
                    </li>
                )) : <p>Loading data...</p>}
        </ul>
      </div>
    <div className="w-[1200px] mx-auto grid lg:grid-cols-4 gap-5 pt-6 ">
  {NewsData ? (
    NewsData.District_News.map((newsItem: any, index: number) => {
      const news_Data = newsItem.news;
      const sanitizedNews = sanitizeHtml(news_Data).substring(0, 200);
      return (
        <a
          key={index}
          href={`/News/${newsItem.id}/${newsItem.headline}`}                
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >

          <div className="flex flex-col justify-between p-4 leading-normal">
          <img
            className="object-cover w-full rounded-t-lg h-96 md:w-100 md:rounded-none md:rounded-l-lg"
            src={`https://capitalnews24.net/storage/uploads/news/${newsItem.pic}`}
            alt=""
          />
          <br />
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {newsItem.headline}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {sanitizedNews}
            </p>
            <div className="w-100 grid lg:grid-cols-2 gap-5 pt-6 ">
                  <div><TagLink tag={newsItem.tag} />
                  </div>
                  <div className="text-base font-bold text-end">{formatTimeAgo(newsItem.date)}</div>
            </div>   
          </div>
        </a>
      );
    })
  ) : (
    <p>Loading data...</p>
  )}
</div>
</div>
  )
}
export default page