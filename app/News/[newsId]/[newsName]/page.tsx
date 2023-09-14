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
  const newsId = segments[2];

  const [NewsData, setNewsData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axiosInstance.get(`news/show/${newsId}`);
        setNewsData(response.data.News);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);




  function TagLink({ tag }) {
    const tagParts = tag.split(',');

    return (
      <div>
        {tagParts.map((part, index) => {
          const trimmedPart = part.trim();
          const encodedPart = encodeURIComponent(trimmedPart);
          return (
            <span key={index} className="border rounded px-4 py-4 hover:bg-gray-200 text-2xl">
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
    <div className="xl:w-[1200px] mx-auto grid xl:grid-cols-1 gap-5 pt-6">
      <div className="xl:w-[1200px] mx-auto grid xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5 pt-6 ">
        <div className='text-3xl'>
          {NewsData ? (
            <h1><a href="/">Home</a> / <a href={`/Category/${NewsData.category.id}/${NewsData.category.category}/`}>{NewsData.category.category}</a>
              {(() => {
                if (NewsData.sub_category == null) {
                  return <p></p>;
                } else {
                  return <a href={`/SubCategory/${NewsData.sub_category.id}/${NewsData.sub_category.sub_category}/`}> / {NewsData.sub_category.sub_category}</a>;
                }
              })()}

            </h1>
          ) : (
            <p>Loading data...</p>
          )}
        </div>
        <div>{NewsData ? (
          <h1 className='font-bold text-xl'> {NewsData.bn_news_date} || {NewsData.bn_news_time}</h1>
        ) : (
          <p>Loading data...</p>
        )}
        </div>
      </div>
      <br />
      <div>
        {NewsData ? (
          <h1 className='text-6xl font-bold'>{NewsData.news_view.headline}</h1>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
      <div className="xl:w-[1200px] mx-auto grid xl:grid-cols-12 gap-5 pt-6 ">

        <div className='w-fit xl:col-start-1 xl:col-end-8 md:col-start-1 md:col-end-12 sm:col-start-1 sm:col-end-12'>
          {NewsData ? (
            <div>
              <img
                className="object-cover w-full rounded-t-lg md:rounded-none md:rounded-l-lg"
                src={`https://capitalnews24.net/storage/uploads/news/${NewsData.news_view.pic}`}
                alt=""
              />
              <p className='text-center'>{NewsData.news_view.image_footer_title}</p>
              <hr />
              <br />
              <div className='text-3xl tracking-widest ' dangerouslySetInnerHTML={{ __html: NewsData.news_view.news }} />
              <br />
              <br />
              <p className='font-bold text-xl'>{NewsData.news_view.reporter}</p>
              <br />
              <br />
              <p className='font-bold text-2xl'>{formatTimeAgo(NewsData.news_view.date)}</p>
              <br />
              <br />
              <TagLink tag={NewsData.news_view.tag} />
              <br />
              <br />
              <h1 className='font-bold text-2xl'>পাঠকের মতামত:</h1>
              <br />
              <br />
              <form action="" method="post" className="max-w-full mx-auto p-6 bg-white rounded-lg shadow-lg">
                <h1 className="font-bold text-xl mb-3">নাম:</h1>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                <h1 className="font-bold text-xl mt-4 mb-3">মেইল:</h1>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                <h1 className="font-bold text-xl mt-4 mb-3">মতামত:</h1>
                <textarea
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                ></textarea>

                <button
                  type="submit"
                  className="mt-6 py-2 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Submit
                </button>
              </form>

            </div>

          ) : (
            <p>Loading data...</p>
          )}
        </div>

        <div className='w-fit xl:col-start-8 xl:col-end-12 md:col-start-1 md:col-end-12 sm:col-start-1 sm:col-end-12'>
          <div>
            {NewsData ? (
              <Link href={NewsData.adbcs.link} className="flex justify-center items-center">
                <Image
                  className="object-contain"
                  src={`https://capitalnews24.net/storage/uploads/abcds_image/${NewsData.adbcs.pic}`}
                  alt="NVC"
                  width={400}
                  height={400}
                />
              </Link>
            ) : (
              <p>Loading data...</p>
            )}
          </div>
          <br />
          <br />
          <hr />
          <br />
          <div>
            <h1 className='font-bold text-3xl'>আরও খবরঃ</h1>
          </div>
          <br />
          <hr />
          {NewsData ? (
            <div className=''>
              {NewsData.other_news.map((newsItem: any, index: number) => (
                <div className="w-full mx-auto grid xl:grid-cols-2 gap-5 pt-6" key={index}>
                  <div>
                    <img
                      className="object-cover w-full rounded-t-lg md:rounded-none md:rounded-l-lg"
                      src={`https://capitalnews24.net/storage/uploads/news/${newsItem.pic}`}
                      alt=""
                    />
                  </div>
                  <div className='my-auto'>
                    <a href={`/News/${newsItem.id}/${newsItem.headline}`} className='font-bold text-2xl'>{newsItem.headline}</a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>Loading data...</p>
          )}

        </div>

      </div>
    </div>
  )
}
export default page