'use client'
import React from 'react'
import "./Politics.css";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from 'react';
import axios from "axios";
import axiosInstance from './../axiosConfig';

interface Props {
    id: number;
    category: string;
    serial: number;
    created_at: string;
    updated_at: string;
  }

  const Politics: React.FC<Props> = (props) => {

    let {category,id} = props.data;
    const [NewsData, setNewsData] = useState(null);
    console.error('fetching data:', props.id);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axiosInstance.get(`/news/categopry_wise_show_news/${id}`);
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


    const [NewsData_specialsec, setNewsData_specialsec] = useState(null);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axiosInstance.get(`news/view/specialsec`);
                setNewsData_specialsec(response.data.News);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <div className="w-[1200px] mx-auto grid lg:grid-cols-2 gap-3 pt-6 mt-10 ">
                
                <div className="py-5 text-center">
                    <div className="w-[580px] grid lg:grid-cols-2 gap-5 pt-6">
                        <div className="w-[290px] grid lg:grid-cols-4 gap-5 pt-6">
                            <div className="py-3 text-left container_politics">
                                <h1 className="title_politics">{category  ? category : ''}</h1>
                                {/* <h1>{category  ? category : ''}</h1> */}
                            </div>
                        </div>

                        <div className="w-[290px] grid lg:grid-cols-3 gap-3 pt-12">
                            <div className="py-3 text-left awami_league">
                                <h4 className="awami_league_title_politics">আওয়ামী লীগ</h4>
                            </div>

                            <div className="py-3 text-left awami_league">
                                <h4 className="awami_league_title_politics">বিএনপি</h4>
                            </div>

                            <div className="py-3 text-left awami_league">
                                <h4 className="awami_league_title_politics">জাসদ</h4>
                            </div>
                        </div>
                    </div>
                    
                    <div className="w-[580px] grid lg:grid-cols-2 gap-5 pt-6 ">
                    <div className="py-1 text-left">
                            {NewsData ? (
                                news_Data = NewsData.category_news[0].news,
                                sanitizedNews = sanitizeHtml(news_Data).substring(0, 200),
                                <Link href={`/News/${NewsData.category_news[0].id}/${NewsData.category_news[0].headline}`} className="flex justify-start items-center">
                                    <div className="w-[250px] grid lg:grid-cols-1 gap-1 pt-1">
                                        <Image
                                            className="object-contain"
                                            src={`https://capitalnews24.net/storage/uploads/news/${NewsData.category_news[0].pic}`}
                                            alt="{NewsData.category_news[0].pic}"
                                            width={250}
                                            height={100}
                                        />
                                        <h1 className="text-2xl font-bold">{NewsData.category_news[0].headline}</h1>
                                        <div>{sanitizedNews}</div>
                                    </div>
                                </Link>
                            ) : (
                                <p>Loading data...</p>
                            )}
                        </div>
                        <div className="py-1 text-left">
                            {NewsData ? (
                                news_Data = NewsData.category_news[1].news,
                                sanitizedNews = sanitizeHtml(news_Data).substring(0, 200),
                                <Link href={`/News/${NewsData.category_news[1].id}/${NewsData.category_news[1].headline}`} className="flex justify-start items-center">
                                    <div className="w-[250px] grid lg:grid-cols-1 gap-1 pt-1">
                                        <Image
                                            className="object-contain"
                                            src={`https://capitalnews24.net/storage/uploads/news/${NewsData.category_news[1].pic}`}
                                            alt="{NewsData.category_news[0].pic}"
                                            width={250}
                                            height={100}
                                        />
                                        <h1 className="text-2xl font-bold">{NewsData.category_news[1].headline}</h1>
                                        <div>{sanitizedNews}</div>
                                    </div>
                                </Link>
                            ) : (
                                <p>Loading data...</p>
                            )}
                        </div>
                        <div className="py-1 text-left">
                            {NewsData ? (
                                news_Data = NewsData.category_news[2].news,
                                sanitizedNews = sanitizeHtml(news_Data).substring(0, 200),
                                <Link href={`/News/${NewsData.category_news[2].id}/${NewsData.category_news[2].headline}`} className="flex justify-start items-center">
                                    <div className="w-[250px] grid lg:grid-cols-1 gap-1 pt-1">
                                        <Image
                                            className="object-contain"
                                            src={`https://capitalnews24.net/storage/uploads/news/${NewsData.category_news[2].pic}`}
                                            alt="{NewsData.category_news[2].pic}"
                                            width={250}
                                            height={100}
                                        />
                                        <h1 className="text-2xl font-bold">{NewsData.category_news[2].headline}</h1>
                                        <div>{sanitizedNews}</div>
                                    </div>
                                </Link>
                            ) : (
                                <p>Loading data...</p>
                            )}
                        </div>
                        <div className="py-1 text-left">
                            {NewsData ? (
                                news_Data = NewsData.category_news[3].news,
                                sanitizedNews = sanitizeHtml(news_Data).substring(0, 200),
                                <Link href={`/News/${NewsData.category_news[3].id}/${NewsData.category_news[3].headline}`} className="flex justify-start items-center">
                                    <div className="w-[250px] grid lg:grid-cols-1 gap-1 pt-1">
                                        <Image
                                            className="object-contain"
                                            src={`https://capitalnews24.net/storage/uploads/news/${NewsData.category_news[3].pic}`}
                                            alt="{NewsData.category_news[0].pic}"
                                            width={250}
                                            height={100}
                                        />
                                        <h1 className="text-2xl font-bold">{NewsData.category_news[3].headline}</h1>
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

                    <div className="w-[580px] grid lg:grid-cols-2 gap-5 pt-6">
                        <div className="w-[290px] grid lg:grid-cols-4 gap-5 pt-6">
                            <div className="py-3 text-left container_politics">                            
                                <h1 className="title_politics">শিক্ষা</h1>
                            </div>
                        </div>

                        <div className="w-[290px] grid lg:grid-cols-3 gap-3 pt-12">
                            <div className="py-3 text-left awami_league">
                            <a href={`/Tags/ভর্তি`}  className="awami_league_title_politics">ভর্তি</a>
                               
                            </div>

                            <div className="py-3 text-left awami_league">
                                
                                <a href={`/Tags/পরীক্ষা`}  className="awami_league_title_politics">পরীক্ষা</a>
                            </div>

                            <div className="py-3 text-left awami_league">
                               
                                <a href={`/Tags/উচ্চশিক্ষা`}  className="awami_league_title_politics">উচ্চশিক্ষা</a>
                            </div>
                        </div>
                    </div>

                    <div className="w-[580px] grid lg:grid-cols-1 gap-5 pt-6 ">

                        <div className="w-[580px] py-1 text-left">
                            {NewsData_specialsec ? (
                                news_Data = NewsData_specialsec.breaking_news[0].news,
                                sanitizedNews = sanitizeHtml(news_Data).substring(0, 200),
                                <Link href={`/News/${NewsData_specialsec.breaking_news[0].id}/${NewsData_specialsec.breaking_news[0].headline}`} className="flex justify-start">
                                    <div className="w-[145px] grid lg:grid-cols-1 gap-1 pt-1">
                                        <Image
                                            className="object-contain"
                                            src={`https://capitalnews24.net/storage/uploads/news/${NewsData_specialsec.breaking_news[0].pic}`}
                                            alt="{NewsData_specialsec.breaking_news[0].pic}"
                                            width={150}
                                            height={100}
                                        />
                                    </div>

                                    <div className="w-[435px] grid lg:grid-cols-1 gap-1 pt-1 ml-5">
                                        <h1 className="w-[435px] text-2xl font-bold">{NewsData_specialsec.breaking_news[0].headline}</h1>
                                        <div className='w-[435px]'>{sanitizedNews}</div>
                                    </div>
                                </Link>
                            ) : (
                                <p>Loading data...</p>
                            )}
                        </div>

                        <div className="w-[580px] py-1 text-left flex">
                            {NewsData_specialsec ? (
                                news_Data = NewsData_specialsec.breaking_news[1].news,
                                sanitizedNews = sanitizeHtml(news_Data).substring(0, 200),
                                <Link href={`/News/${NewsData_specialsec.breaking_news[1].id}/${NewsData_specialsec.breaking_news[1].headline}`} className="flex justify-start">
                                    <div className="w-[145px] grid lg:grid-cols-1 gap-1 pt-1">
                                        <Image
                                            className="object-contain"
                                            src={`https://capitalnews24.net/storage/uploads/news/${NewsData_specialsec.breaking_news[1].pic}`}
                                            alt="{NewsData_specialsec.breaking_news[1].pic}"
                                            width={150}
                                            height={100}
                                        />
                                    </div>

                                    <div className="w-[435px] grid lg:grid-cols-1 gap-1 pt-1 ml-5">
                                        <h1 className="w-[435px] text-2xl font-bold">{NewsData_specialsec.breaking_news[1].headline}</h1>
                                        <div className='w-[435px]'>{sanitizedNews}</div>
                                    </div>
                                </Link>
                            ) : (
                                <p>Loading data...</p>
                            )}
                        </div>

                        <div className="w-[580px] py-1 text-left flex">
                            {NewsData_specialsec ? (
                                news_Data = NewsData_specialsec.breaking_news[2].news,
                                sanitizedNews = sanitizeHtml(news_Data).substring(0, 200),
                                <Link href={`/News/${NewsData_specialsec.breaking_news[2].id}/${NewsData_specialsec.breaking_news[2].headline}`} className="flex justify-start">
                                    <div className="w-[145px] grid lg:grid-cols-1 gap-1 pt-1">
                                        <Image
                                            className="object-contain"
                                            src={`https://capitalnews24.net/storage/uploads/news/${NewsData_specialsec.breaking_news[2].pic}`}
                                            alt="{NewsData_specialsec.breaking_news[2].pic}"
                                            width={150}
                                            height={100}
                                        />
                                    </div>

                                    <div className="w-[435px] grid lg:grid-cols-1 gap-1 pt-1 ml-5">
                                        <h1 className="w-[435px] text-2xl font-bold">{NewsData_specialsec.breaking_news[2].headline}</h1>
                                        <div className='w-[435px]'>{sanitizedNews}</div>
                                    </div>
                                </Link>
                            ) : (
                                <p>Loading data...</p>
                            )}
                        </div>

                        <div className="w-[580px] py-1 text-left flex">
                            {NewsData_specialsec ? (
                                news_Data = NewsData_specialsec.breaking_news[3].news,
                                sanitizedNews = sanitizeHtml(news_Data).substring(0, 200),
                                <Link href={`/News/${NewsData_specialsec.breaking_news[3].id}/${NewsData_specialsec.breaking_news[3].headline}`} className="flex justify-start">
                                    <div className="w-[145px] grid lg:grid-cols-1 gap-1 pt-1">
                                        <Image
                                            className="object-contain"
                                            src={`https://capitalnews24.net/storage/uploads/news/${NewsData_specialsec.breaking_news[3].pic}`}
                                            alt="{NewsData_specialsec.breaking_news[3].pic}"
                                            width={150}
                                            height={100}
                                        />
                                    </div>

                                    <div className="w-[435px] grid lg:grid-cols-1 gap-1 pt-1 ml-5">
                                        <h1 className="w-[435px] text-2xl font-bold">{NewsData_specialsec.breaking_news[3].headline}</h1>
                                        <div className='w-[435px]'>{sanitizedNews}</div>
                                    </div>
                                </Link>
                            ) : (
                                <p>Loading data...</p>
                            )}
                        </div>

                        <div className="w-[580px] py-1 text-left flex">
                            {NewsData_specialsec ? (
                                news_Data = NewsData_specialsec.breaking_news[4].news,
                                sanitizedNews = sanitizeHtml(news_Data).substring(0, 200),
                                <Link href={`/News/${NewsData_specialsec.breaking_news[4].id}/${NewsData_specialsec.breaking_news[4].headline}`} className="flex justify-start">
                                    <div className="w-[145px] grid lg:grid-cols-1 gap-1 pt-1">
                                        <Image
                                            className="object-contain"
                                            src={`https://capitalnews24.net/storage/uploads/news/${NewsData_specialsec.breaking_news[4].pic}`}
                                            alt="{NewsData_specialsec.breaking_news[4].pic}"
                                            width={150}
                                            height={100}
                                        />
                                    </div>

                                    <div className="w-[435px] grid lg:grid-cols-1 gap-1 pt-1 ml-5">
                                        <h1 className="w-[435px] text-2xl font-bold">{NewsData_specialsec.breaking_news[4].headline}</h1>
                                        <div className='w-[435px]'>{sanitizedNews}</div>
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

export default Politics;