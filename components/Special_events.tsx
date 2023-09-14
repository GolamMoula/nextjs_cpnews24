'use client'
import React from 'react'
import "./Special_events.css";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from 'react';
import axios from "axios";
import axiosInstance from './../axiosConfig';

function Special_events() {

    const [NewsData, setNewsData] = useState(null);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axiosInstance.get(`news/view/specialsec`);
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

    return (
        <div>

            <div className="w-[1200px] mx-auto grid  gap-5 pt-6 mt-10">
                <div className='justify-center content-center flex'>
                    <h1 className='Special_events_head justify-center text-4xl font-bold'>স্পেশাল ইভেন্ট</h1>
                </div>
               
                <div className='Special_events_head_title text-2xl font-bold'>
                    {NewsData ? (
                        news_Data = NewsData.breaking_news[0].news,
                        sanitizedNews = sanitizeHtml(news_Data).substring(0, 400),
                        <p>{sanitizedNews}</p>
                    ) : ""}
                </div>
            </div>

            <div className="w-[1200px] mx-auto grid lg:grid-cols-2 gap-5 pt-6 mt-10 ">
                <div className="bg-[#ffffff] py-5 text-center">
                    <div className="w-[580px] grid lg:grid-cols-1 gap-5 pt-6 ">
                        {/* <div className="bg-[red] py-5 text-left"> <p>জনপ্রিয়:</p> </div> */}
                        <div className="py-1 text-left">
                            {NewsData ? (
                                // news_Data = NewsData.breaking_news[0].news,
                                sanitizedNews = sanitizeHtml(news_Data).substring(0, 400),
                                <Link href={`https://capitalnews24.net/newspost/${NewsData.breaking_news[0].id}`} className="flex justify-start items-center">
                                    <div className="w-[650px] grid lg:grid-cols-1 gap-1 pt-1">
                                        <Image
                                            className="object-contain"
                                            src={`https://capitalnews24.net/storage/uploads/news/${NewsData.breaking_news[0].pic}`}
                                            alt="{NewsData.breaking_news[0].pic}"
                                            width={650}
                                            height={300}
                                        />
                                        <br />
                                        <h1 className="text-4xl font-bold">{NewsData.breaking_news[0].headline}</h1>
                                        <div>{sanitizedNews}</div>
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
                                sanitizedNews = sanitizeHtml(news_Data).substring(0, 200),
                                <Link href={`https://capitalnews24.net/newspost/${NewsData.breaking_news[1].id}`} className="flex justify-start items-center">
                                    <div className="w-[250px] grid lg:grid-cols-1 gap-1 pt-1">
                                        <Image
                                            className="object-contain"
                                            src={`https://capitalnews24.net/storage/uploads/news/${NewsData.breaking_news[1].pic}`}
                                            alt="{NewsData.breaking_news[0].pic}"
                                            width={250}
                                            height={100}
                                        />
                                        <h1 className="text-2xl font-bold">{NewsData.breaking_news[1].headline}</h1>
                                        <div>{sanitizedNews}</div>
                                    </div>
                                </Link>
                            ) : (
                                <p>Loading data...</p>
                            )}
                        </div>
                        <div className="py-1 text-left">
                            {NewsData ? (
                                news_Data = NewsData.breaking_news[2].news,
                                sanitizedNews = sanitizeHtml(news_Data).substring(0, 200),
                                <Link href={`https://capitalnews24.net/newspost/${NewsData.breaking_news[2].id}`} className="flex justify-start items-center">
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
                                    </div>
                                </Link>
                            ) : (
                                <p>Loading data...</p>
                            )}
                        </div>
                        <div className="py-1 text-left">
                            {NewsData ? (
                                news_Data = NewsData.breaking_news[3].news,
                                sanitizedNews = sanitizeHtml(news_Data).substring(0, 200),
                                <Link href={`https://capitalnews24.net/newspost/${NewsData.breaking_news[3].id}`} className="flex justify-start items-center">
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
                                    </div>
                                </Link>
                            ) : (
                                <p>Loading data...</p>
                            )}
                        </div>
                        <div className="py-1 text-left">
                            {NewsData ? (
                                news_Data = NewsData.breaking_news[4].news,
                                sanitizedNews = sanitizeHtml(news_Data).substring(0, 200),
                                <Link href={`https://capitalnews24.net/newspost/${NewsData.breaking_news[4].id}`} className="flex justify-start items-center">
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
                                    </div>
                                </Link>
                            ) : (
                                <p>Loading data...</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Special_events;