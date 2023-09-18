'use client'
import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from 'react';
import axios from "axios";
import axiosInstance from './../axiosConfig';
import "./recent_news_section.css";

const Recent_news_section = () => {
  // Destructure the data property from props
  const [NewsData, setNewsData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axiosInstance.get(`news/view/breaking`);
        setNewsData(response.data.News);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  const sanitizeHtml = (html) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || '';
  };
  var news_Data = "";
  var sanitizedNews = "";

  function TagLink({ tag }) {
    const tagParts = tag.split(',');
    
    return (
      <div>
        {tagParts.map((part, index) => {
          const trimmedPart = part.trim();
          const encodedPart = encodeURIComponent(trimmedPart);
          return (
            <span key={index}>
              <a href={`https://capitalnews24.net/news/tag/${encodedPart}`} className='font-bold text-xl'>{trimmedPart}</a>
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
    <div className="w-[1200px] mx-auto grid lg:grid-cols-2 gap-5 pt-6 ">
      <div className=" py-5 text-center">
        <div className="w-[580px] grid lg:grid-cols-1 gap-5 pt-6 ">
          <div className="py-5 text-left">
            <p className='font-bold text-xl'>জনপ্রিয় টপিকঃ</p>
          </div>
          <div className="py-5 text-left container">
            <h1 className="title">সাম্প্রতিক সংবাদ</h1>
          </div>
          <div className="py-1 text-left">
          {NewsData ? (
                        news_Data = NewsData.breaking_news[0].news,
                        sanitizedNews = sanitizeHtml(news_Data).substring(0,400),
              <Link href={`/News/${NewsData.breaking_news[0].id}/${NewsData.breaking_news[0].headline}`} className="flex justify-start items-center">
                <div className="w-[650px] grid lg:grid-cols-1 gap-1 pt-1">
                  <Image
                    className="object-contain"
                    src={`https://capitalnews24.net/storage/uploads/news/${NewsData.breaking_news[0].pic}`}
                    alt="{NewsData.breaking_news[0].pic}"
                    width={650}
                    height={300}
                  />
                  <br/>
                  <h1 className="text-4xl font-bold">{NewsData.breaking_news[0].headline}</h1>
                  <div>{sanitizedNews}</div>
                  <div className="w-[580px] grid lg:grid-cols-2 gap-5 pt-6 ">
                  <div><TagLink tag={NewsData.breaking_news[0].tag} />
                  </div>
                  <div className="text-xl font-bold text-end">{formatTimeAgo(NewsData.breaking_news[0].date)}</div>
                  </div>                 
                </div>
              </Link>
               ) : (
                <p>Loading data...</p>
              )}
          </div> 
        </div>
      </div>
      <div className="py-5 text-center">
        <div className="w-[580px] grid lg:grid-cols-2 gap-5 pt-6 ">
        <div className="py-1 text-left">
          {NewsData ? (
                        news_Data = NewsData.breaking_news[1].news,
                        sanitizedNews = sanitizeHtml(news_Data).substring(0,200),
              <Link href={`/News/${NewsData.breaking_news[1].id}/${NewsData.breaking_news[1].headline}`} className="flex justify-start items-center">
                <div className="w-[250px] grid lg:grid-cols-1 gap-1 pt-1">
                  <Image
                    className="object-contain"
                    src={`https://capitalnews24.net/storage/uploads/news/${NewsData.breaking_news[1].pic}`}
                    alt="{NewsData.breaking_news[0].pic}"
                    width={250}
                    height={100}
                  />
                  <h1 className="text-xl font-bold">{NewsData.breaking_news[1].headline}</h1>
                  <div >{sanitizedNews}</div>
                  <div className="w-[250px] grid lg:grid-cols-2 gap-5 pt-6 ">
                  <div><TagLink tag={NewsData.breaking_news[1].tag} />
                  </div>
                  <div className="text-xl font-bold text-end">{formatTimeAgo(NewsData.breaking_news[1].date)}</div>
                </div>
                </div>
              </Link>
               ) : (
                <p>Loading data...</p>
              )}
          </div> 
          <div className="py-1 text-left">
          {NewsData ? (
                        news_Data = NewsData.breaking_news[2].news,
                        sanitizedNews = sanitizeHtml(news_Data).substring(0,200),
              <Link href={`/News/${NewsData.breaking_news[2].id}/${NewsData.breaking_news[2].headline}`} className="flex justify-start items-center">
                <div className="w-[250px] grid lg:grid-cols-1 gap-1 pt-1">
                  <Image
                    className="object-contain"
                    src={`https://capitalnews24.net/storage/uploads/news/${NewsData.breaking_news[2].pic}`}
                    alt="{NewsData.breaking_news[2].pic}"
                    width={250}
                    height={100}
                  />
                  <h1 className="text-2xl font-bold">{NewsData.breaking_news[2].headline}</h1>
                  <div>{sanitizedNews}</div>
                  <div className="w-[250px] grid lg:grid-cols-2 gap-5 pt-6 ">
                  <div><TagLink tag={NewsData.breaking_news[2].tag} />
                  </div>
                  <div className="text-xl font-bold text-end">{formatTimeAgo(NewsData.breaking_news[2].date)}</div>
                </div>
                </div>
              </Link>
               ) : (
                <p>Loading data...</p>
              )}
          </div>  
          <div className="py-1 text-left">
          {NewsData ? (
                        news_Data = NewsData.breaking_news[3].news,
                        sanitizedNews = sanitizeHtml(news_Data).substring(0,200),
              <Link  href={`/News/${NewsData.breaking_news[3].id}/${NewsData.breaking_news[3].headline}`} className="flex justify-start items-center">
                <div className="w-[250px] grid lg:grid-cols-1 gap-1 pt-1">
                  <Image
                    className="object-contain"
                    src={`https://capitalnews24.net/storage/uploads/news/${NewsData.breaking_news[3].pic}`}
                    alt="{NewsData.breaking_news[0].pic}"
                    width={250}
                    height={100}
                  />
                  <h1 className="text-2xl font-bold">{NewsData.breaking_news[3].headline}</h1>
                  <div>{sanitizedNews}</div>
                  <div className="w-[250px] grid lg:grid-cols-2 gap-5 pt-6 ">
                  <div><TagLink tag={NewsData.breaking_news[3].tag} />
                  </div>
                  <div className="text-xl font-bold text-end">{formatTimeAgo(NewsData.breaking_news[3].date)}</div>
                </div>
                </div>
              </Link>
               ) : (
                <p>Loading data...</p>
              )}
          </div> 
          <div className="py-1 text-left">
          {NewsData ? (
                        news_Data = NewsData.breaking_news[4].news,
                        sanitizedNews = sanitizeHtml(news_Data).substring(0,200),
              <Link href={`/News/${NewsData.breaking_news[4].id}/${NewsData.breaking_news[4].headline}`} className="flex justify-start items-center">
                <div className="w-[250px] grid lg:grid-cols-1 gap-1 pt-1">
                  <Image
                    className="object-contain"
                    src={`https://capitalnews24.net/storage/uploads/news/${NewsData.breaking_news[4].pic}`}
                    alt="{NewsData.breaking_news[0].pic}"
                    width={250}
                    height={100}
                  />
                  <h1 className="text-2xl font-bold">{NewsData.breaking_news[4].headline}</h1>
                  <div>{sanitizedNews}</div>
                  <div className="w-[250px] grid lg:grid-cols-2 gap-5 pt-6 ">
                  <div><TagLink tag={NewsData.breaking_news[4].tag} />
                  </div>
                  <div className="text-xl font-bold text-end">{formatTimeAgo(NewsData.breaking_news[4].date)}</div>
                </div>
                </div>
              </Link>
               ) : (
                <p>Loading data...</p>
              )}
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Recent_news_section