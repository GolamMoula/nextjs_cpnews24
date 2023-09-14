'use client'
import React from 'react'
import "./Sport.css";
import { useState, useEffect } from 'react';
import axiosInstance from './../axiosConfig';
import Banner_ads from './Banner_ads';
import Link from "next/link";
import Image from "next/image";



interface Props {
	id: number;
	category: string;
	serial: number;
	created_at: string;
	updated_at: string;
}

const Sport: React.FC<Props> = (props) => {
	// const bannerData2 = { value: "ulatestsec2", name: "Under Latest section:2" };
	let { category, id } = props.data1;
	const [NewsData, setNewsData] = useState(null);
	// console.error('fetching data:', props.id);

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



	// const [NewsData_7, setNewsData_7] = useState(null);
	// // console.log('fetching id:', props.data2.id);

	// useEffect(() => {
	// 	async function fetchData() {
	// 		try {
	// 			const response1 = await axiosInstance.get(`/news/categopry_wise_show_news/${props.data2.id}`);
	// 			setNewsData_7(response1.data.News);
	// 		} catch (error) {
	// 			console.error('Error fetching data:', error);
	// 		}
	// 	}
	// 	fetchData();
	// }, []);



	const sanitizeHtml = (html) => {
		const tempDiv = document.createElement('div');
		tempDiv.innerHTML = html;
		return tempDiv.textContent || tempDiv.innerText || '';
	};
	var news_Data = "";
	var sanitizedNews = "";


	return (

		<div>

			<div className="mx-auto grid lg:grid-cols-2 gap-3 pt-6 mt-10 ">

				<div className="py-5 text-center">
					<div className="grid lg:grid-cols-2 gap-5 pt-6">
						<div className=" grid lg:grid-cols-4 gap-5 pt-6">
							<div className="py-3 text-left container_politics">
								<h1 className="title_politics">{category ? category : ''}</h1>
							</div>
						</div>

						<div className="grid lg:grid-cols-4 gap-2 pt-12">
							<div className="py-3 text-left awami_league">
								<h4 className="awami_league_title_politics">ঢাকা</h4>
							</div>

							<div className="py-3 text-left awami_league">
								<h4 className="awami_league_title_politics">চট্টগ্রাম</h4>
							</div>

							<div className="py-3 text-left awami_league">
								<h4 className="awami_league_title_politics">সিলেট</h4>
							</div>
							<div className="py-3 text-left awami_league">
								<h4 className="awami_league_title_politics">বরিশাল</h4>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 lg:grid-cols-12 md:grid-cols-2 gap-4 mx-auto pt-2">

				{NewsData ? (
					<div className="grid col-start-1 col-end-5">

						<div className="cat_six_image-container">
							<Link href={`/News/${NewsData.category_news[0].id}/${NewsData.category_news[0].headline}`}>
								<img loading="lazy" className="news_sports_img" src={`https://capitalnews24.net/storage/uploads/news/${NewsData.category_news[0].pic}`} alt=""/>
								<div className="sport_title">{NewsData.category_news[0].headline}</div>
							</Link>
						</div>
						<div className="cat_six_image-container">
							<Link href={`/News/${NewsData.category_news[1].id}/${NewsData.category_news[1].headline}`}>
								<img loading="lazy" className="news_sports_img" src={`https://capitalnews24.net/storage/uploads/news/${NewsData.category_news[1].pic}`} alt=""/>
								<div className="sport_title">{NewsData.category_news[1].headline}</div>
							</Link>
						</div>
					</div>
				) : (
					<p>Loading data...</p>
				)}

				{NewsData ? (
					<div className="grid lg:grid-cols-1   col-start-5 col-end-7">
						<div className="cat_six_image-container">
							<Link href={`/News/${NewsData.category_news[2].id}/${NewsData.category_news[2].headline}`}>
								<Image loading="lazy" className="sport_short_img" src={`https://capitalnews24.net/storage/uploads/news/${NewsData.category_news[2].pic}`} alt="" width={200} height={150} />
								<div className="imagetitle">{NewsData.category_news[2].headline}</div>
							</Link>
						</div>
						<div className="cat_six_image-container">
							<Link href={`/News/${NewsData.category_news[3].id}/${NewsData.category_news[3].headline}`} >
								<Image loading="lazy" className="sport_short_img" src={`https://capitalnews24.net/storage/uploads/news/${NewsData.category_news[3].pic}`} alt="" width={200} height={150} />
								<div className="imagetitle">{NewsData.category_news[3].headline}</div>
							</Link>
						</div>
						<div className="cat_six_image-container">
							<Link href={`/News/${NewsData.category_news[4].id}/${NewsData.category_news[4].headline}`}>
								<Image loading="lazy" className="sport_short_img" src={`https://capitalnews24.net/storage/uploads/news/${NewsData.category_news[4].pic}`} alt="" width={200} height={150} />
								<div className="imagetitle">{NewsData.category_news[4].headline}</div>
							</Link>
						</div>
					</div>
				) : (
					<p>Loading data...</p>
				)}

				{NewsData ? (
					<div className="grid lg:grid-cols-1 pt-6 col-start-7 col-end-10">
						<Link href={`/News/${NewsData.category_news[5].id}/${NewsData.category_news[5].headline}`}>
							<div>
								<h1 className='text-xl font-bold text_news_sport_1'>{NewsData.category_news[5].headline}</h1>
								<hr />
							</div>
						</Link>
						<Link href={`/News/${NewsData.category_news[6].id}/${NewsData.category_news[6].headline}`}>
							<div>
								<h1 className='text-xl font-bold text_news_sport_1'>{NewsData.category_news[6].headline}</h1>
								<hr />
							</div>
						</Link>
						<Link href={`/News/${NewsData.category_news[7].id}/${NewsData.category_news[7].headline}`}>
							<div>
								<h1 className='text-xl font-bold text_news_sport_1'>{NewsData.category_news[7].headline}</h1>
								<hr />
							</div>
						</Link>
						<Link href={`/News/${NewsData.category_news[8].id}/${NewsData.category_news[8].headline}`}>
							<div>
								<h1 className='text-xl font-bold text_news_sport_1'>{NewsData.category_news[8].headline}</h1>
								<hr />
							</div>
						</Link>
						<Link href={`/News/${NewsData.category_news[9].id}/${NewsData.category_news[9].headline}`}>
							<div>
								<h1 className='text-xl font-bold text_news_sport_1'>{NewsData.category_news[9].headline}</h1>
								<hr />
							</div>
						</Link>
						<Link href={`/News/${NewsData.category_news[10].id}/${NewsData.category_news[10].headline}`}>
							<div>
								<h1 className='text-xl font-bold text_news_sport_1'>{NewsData.category_news[10].headline}</h1>
								<hr />
							</div>
						</Link>
						<Link href={`/News/${NewsData.category_news[11].id}/${NewsData.category_news[11].headline}`} >
							<div>
								<h1 className='text-xl font-bold text_news_sport_1'>{NewsData.category_news[11].headline}</h1>
								<hr />
							</div>
						</Link>
					</div>
				) : (
					<p>Loading data...</p>
				)}

				{/* {NewsData ? ( */}


				<div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-1  col-start-10 col-end-13 tv_section">
					<div className="tv_sport_div lg:col-span-12">
						<img className='tv_header_image' width="40" height="30" src="https://img.icons8.com/dusk/64/tv.png" alt="tv" />
						<h2 className='tv_header_title'>আজকের খেলা</h2>
					</div>


					<div className="lg:grid-cols-1 lg:col-span-12 sport_headline">
						<div className='tv_sport_header_0'>
							<p>এশিয়া কাপে ভারত–পাকিস্তান ম্যাচের বাকি অংশ আজ রিজার্ভ ডেতে হবে। এ ছাড়া ইউরোর বাছাই পর্বে রয়েছে একাধিক ম্যাচ।</p>
						</div>
						<hr />
						<div>
							<h1 className='tv_sport_body_1'>এশিয়া কাপ</h1>
							<hr />
							<h1 className='tv_sport_body_2'>ভারত–পাকিস্তান</h1><br />
							<p className='tv_sport_body_3'>বিকেল ৩–৩০ মিনিট, গাজী টিভি, টি স্পোর্টস ও স্টার স্পোর্টস ১</p>
						</div>

						<hr />
						<div>
							<h1 className='tv_sport_body_1'>ইউরো বাছাই</h1>
							<hr />
							<h1 className='tv_sport_body_2'>আর্মেনিয়া–ক্রোয়েশিয়া</h1><br />
							<p className='tv_sport_body_3'>রাত ১০টা, সনি স্পোর্টস টেন ৫</p>
							<hr />
							<h1 className='tv_sport_body_2'>পর্তুগাল–লুক্সেমবার্গ</h1><br />
							<p className='tv_sport_body_3'>রাত ১২–৪৫ মিনিট, সনি স্পোর্টস টেন ২</p>
							<hr />
							<h1 className='tv_sport_body_2'>লাটভিয়া–ওয়েলস</h1><br />
							<p className='tv_sport_body_3'>রাত ১২–৪৫ মিনিট, সনি স্পোর্টস টেন ১</p>
						</div>

						<hr />
						<div>
							<h1 className='tv_sport_body_1'>আর্চারি বিশ্বকাপ</h1>
							<hr />
							<h1 className='tv_sport_body_2'>ফাইনাল</h1><br />
							<p className='tv_sport_body_3'>সকাল ৯টা, সনি স্পোর্টস টেন ৫</p>
						</div>
					</div>
				</div>


				{/* ) : (
					<p>Loading data...</p>
				)} */}
			</div>

		</div>
	)
}

export default Sport;