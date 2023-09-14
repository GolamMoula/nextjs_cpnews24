'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import axiosInstance from './../axiosConfig';
import Banner_ads from './Banner_ads';
import Link from "next/link";
import Image from "next/image";
import "./LastThree.css";

interface Props {
    id: number;
    category: string;
    serial: number;
    created_at: string;
    updated_at: string;
}

const LastThree: React.FC<Props> = (props) => {
    // const bannerData2 = { value: "ulatestsec2", name: "Under Latest section:2" };
    let { category, id } = props.data1;
    const [NewsData, setNewsData] = useState(null);
    const [NewsData2, setNewsData2] = useState(null);
    const [NewsData3, setNewsData3] = useState(null);
    console.error('fetching data:', props.id);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axiosInstance.get(`/news/categopry_wise_show_news/${id}`);
                setNewsData(response.data.News);
                const response2 = await axiosInstance.get(`/news/categopry_wise_show_news/${props.data2.id}`);
                setNewsData2(response2.data.News);
                const response3 = await axiosInstance.get(`/news/categopry_wise_show_news/${props.data3.id}`);
                setNewsData3(response3.data.News);
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

        <div className='mx-auto grid lg:grid-cols-3 gap-5 pt-6'>
            <div className='mx-auto grid lg:grid-cols-1 gap-5 pt-6'>
                <div className="py-3 text-left container_last_three">
                    <h1 className="title_last_three">{category ? category : ''}</h1>
                </div>
                {NewsData ? (
					<div className="grid col-start-1 col-end-5">
						<div className="last_three_image-container">
							<Link href={`/News/${NewsData.category_news[0].id}/${NewsData.category_news[0].headline}`}>
								<img loading="lazy" className="news_sports_img" src={`https://capitalnews24.net/storage/uploads/news/${NewsData.category_news[0].pic}`} alt=""/>
								<div className="last_title text-3xl">{NewsData.category_news[0].headline}</div>
							</Link>
						</div>
                        <br />
						<div className='mx-auto grid lg:grid-cols-2 gap-5 pt-6'>
                        <div><img loading="lazy" className="" src={`https://capitalnews24.net/storage/uploads/news/${NewsData.category_news[1].pic}`} alt=""/></div>                                              
                        <div className="font-bold text-3xl my-auto"><a href={`/News/${NewsData.category_news[1].id}/${NewsData.category_news[1].headline}`} > {NewsData.category_news[1].headline} </a></div>
                        </div>
                        <div className='mx-auto grid lg:grid-cols-2 gap-5 pt-6'>
                        <div><img loading="lazy" className="" src={`https://capitalnews24.net/storage/uploads/news/${NewsData.category_news[2].pic}`} alt=""/></div>                                              
                        <div className="font-bold text-3xl my-auto"><a  href={`/News/${NewsData.category_news[2].id}/${NewsData.category_news[2].headline}`} >{NewsData.category_news[2].headline}</a></div>
                        </div>
					</div>
				) : (
					<p>Loading data...</p>
				)}
            </div>

            <div className='mx-auto grid lg:grid-cols-1 gap-5 pt-6'>
                <div className="py-3 text-left container_last_three">
                    <h1 className="title_last_three">{props.data2.category}</h1>
                </div>
                {NewsData2 ? (
					<div className="grid col-start-1 col-end-5">
						<div className="last_three_image-container">
							<Link href={`/News/${NewsData2.category_news[0].id}/${NewsData2.category_news[0].headline}`}>
								<img loading="lazy" className="news_sports_img" src={`https://capitalnews24.net/storage/uploads/news/${NewsData2.category_news[0].pic}`} alt=""/>
								<div className="last_title text-3xl">{NewsData2.category_news[0].headline}</div>
							</Link>
						</div>
                        <br />
						<div className='mx-auto grid lg:grid-cols-2 gap-5 pt-6'>
                        <div><img loading="lazy" className="" src={`https://capitalnews24.net/storage/uploads/news/${NewsData2.category_news[1].pic}`} alt=""/></div>                                              
                        <div className="font-bold text-3xl my-auto"><a href={`/News/${NewsData2.category_news[1].id}/${NewsData2.category_news[1].headline}`} > {NewsData2.category_news[1].headline} </a></div>
                        </div>
                        <div className='mx-auto grid lg:grid-cols-2 gap-5 pt-6'>
                        <div><img loading="lazy" className="" src={`https://capitalnews24.net/storage/uploads/news/${NewsData2.category_news[2].pic}`} alt=""/></div>                                              
                        <div className="font-bold text-3xl my-auto"><a  href={`/News/${NewsData2.category_news[2].id}/${NewsData2.category_news[2].headline}`} >{NewsData2.category_news[2].headline}</a></div>
                        </div>
					</div>
				) : (
					<p>Loading data...</p>
				)}
            </div>

            <div className='mx-auto grid lg:grid-cols-1 gap-5 pt-6'>
                <div className="py-3 text-left container_last_three">
                    <h1 className="title_last_three">{props.data3.category}</h1>
                </div>
                {NewsData3 ? (
					<div className="grid col-start-1 col-end-5">
						<div className="last_three_image-container">
							<Link href={`/News/${NewsData3.category_news[0].id}/${NewsData3.category_news[0].headline}`}>
								<img loading="lazy" className="news_sports_img" src={`https://capitalnews24.net/storage/uploads/news/${NewsData3.category_news[0].pic}`} alt=""/>
								<div className="last_title text-3xl">{NewsData3.category_news[0].headline}</div>
							</Link>
						</div>
                        <br />
						<div className='mx-auto grid lg:grid-cols-2 gap-5 pt-6'>
                        <div><img loading="lazy" className="" src={`https://capitalnews24.net/storage/uploads/news/${NewsData3.category_news[1].pic}`} alt=""/></div>                                              
                        <div className="font-bold text-3xl my-auto"><a href={`/News/${NewsData3.category_news[1].id}/${NewsData3.category_news[1].headline}`} > {NewsData3.category_news[1].headline} </a></div>
                        </div>
                        <div className='mx-auto grid lg:grid-cols-2 gap-5 pt-6'>
                        <div><img loading="lazy" className="" src={`https://capitalnews24.net/storage/uploads/news/${NewsData3.category_news[2].pic}`} alt=""/></div>                                              
                        <div className="font-bold text-3xl my-auto"><a  href={`/News/${NewsData3.category_news[2].id}/${NewsData3.category_news[2].headline}`} >{NewsData3.category_news[2].headline}</a></div>
                        </div>
					</div>
				) : (
					<p>Loading data...</p>
				)}
            </div>
        </div>

    )
}

export default LastThree;