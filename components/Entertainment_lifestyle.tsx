'use client'
import React from 'react'
import "./Entertainment_lifestyle.css";
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

const Entertainment_lifestyle: React.FC<Props> = (props) => {
	// const bannerData2 = { value: "ulatestsec2", name: "Under Latest section:2" };
	let { category, id } = props.data1;
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



	const [NewsData_7, setNewsData_7] = useState(null);
	// console.log('fetching id:', props.data2.id);

	useEffect(() => {
		async function fetchData() {
			try {
				const response1 = await axiosInstance.get(`/news/categopry_wise_show_news/${props.data2.id}`);
				setNewsData_7(response1.data.News);
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
			<div className="w-[1200px] mx-auto grid lg:grid-cols-2 gap-3 pt-6 mt-10 ">

				<div className="py-5 text-center">
					<div className="w-[580px] grid lg:grid-cols-2 gap-5 pt-6">
						<div className="w-[290px] grid lg:grid-cols-4 gap-5 pt-6">
							<div className="py-3 text-left container_politics">
								<h1 className="title_politics">{category ? category : ''}</h1>
								{/* <h1>{category  ? category : ''}</h1> */}
							</div>
						</div>

						<div className="w-[290px] grid lg:grid-cols-4 gap-2 pt-12">
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

					<div className="w-[580px] grid lg:grid-cols-2 gap-5 pt-6 ">
						<div className="py-1 text-left">
							{NewsData ? (
								<div className="w-[600px] grid lg:grid-cols-3 gap-5">
									<div className="w-[200px] grid lg:grid-cols-1">
										<div className="cat_six_image-container">
											<Link href={`/News/${NewsData.category_news[0].id}/${NewsData.category_news[0].headline}`} >
												<img loading="lazy" className="cat_six_img-container" src={`https://capitalnews24.net/storage/uploads/news/${NewsData.category_news[0].pic}`} alt="" />
												<div className="imagetitle_E_L">{NewsData.category_news[0].headline}</div>
											</Link>
										</div>
										<div className="cat_six_image-container">
											<Link href={`/News/${NewsData.category_news[1].id}/${NewsData.category_news[1].headline}`} >
												<img loading="lazy" className="cat_six_img-container" src={`https://capitalnews24.net/storage/uploads/news/${NewsData.category_news[1].pic}`} alt="" />
												<div className="imagetitle_E_L">{NewsData.category_news[1].headline}</div>
											</Link>
										</div>
										<div className="cat_six_image-container">
											<Link href={`/News/${NewsData.category_news[2].id}/${NewsData.category_news[2].headline}`}>
												<img loading="lazy" className="cat_six_img-container" src={`https://capitalnews24.net/storage/uploads/news/${NewsData.category_news[2].pic}`} alt="" />
												<div className="imagetitle_E_L">{NewsData.category_news[2].headline}</div>
											</Link>
										</div>
										<div className="cat_six_image-container">
											<Link href={`/News/${NewsData.category_news[3].id}/${NewsData.category_news[3].headline}`}>
												<img loading="lazy" className="cat_six_img-container" src={`https://capitalnews24.net/storage/uploads/news/${NewsData.category_news[3].pic}`} alt="" />
												<div className="imagetitle_E_L">{NewsData.category_news[3].headline}</div>
											</Link>
										</div>
									</div>
									<div className="w-[200px] grid lg:grid-cols-1">
										<div className="cat_six_image-container">
											<Link  href={`/News/${NewsData.category_news[4].id}/${NewsData.category_news[4].headline}`}>
												<img loading="lazy" className="cat_six_img-container" src={`https://capitalnews24.net/storage/uploads/news/${NewsData.category_news[4].pic}`} alt="" />
												<div className="imagetitle_E_L">{NewsData.category_news[4].headline}</div>
											</Link>
										</div>
										<div className="cat_six_image-container">
											<Link href={`/News/${NewsData.category_news[5].id}/${NewsData.category_news[5].headline}`}>
												<img loading="lazy" className="cat_six_img-container" src={`https://capitalnews24.net/storage/uploads/news/${NewsData.category_news[5].pic}`} alt="" />
												<div className="imagetitle_E_L">{NewsData.category_news[5].headline}</div>
											</Link>
										</div>
										<div className="cat_six_image-container">
											<Link href={`/News/${NewsData.category_news[6].id}/${NewsData.category_news[6].headline}`}>
												<img loading="lazy" className="cat_six_img-container" src={`https://capitalnews24.net/storage/uploads/news/${NewsData.category_news[6].pic}`} alt="" />
												<div className="imagetitle_E_L">{NewsData.category_news[6].headline}</div>
											</Link>
										</div>
										<div className="cat_six_image-container">
											<Link  href={`/News/${NewsData.category_news[7].id}/${NewsData.category_news[7].headline}`}>
												<img loading="lazy" className="cat_six_img-container" src={`https://capitalnews24.net/storage/uploads/news/${NewsData.category_news[7].pic}`} alt="" />
												<div className="imagetitle_E_L">{NewsData.category_news[7].headline}</div>
											</Link>
										</div>
									</div>
									<div className="w-[200px] grid lg:grid-cols-1 gap-5 pt-6">
										<Link href={`/News/${NewsData.category_news[8].id}/${NewsData.category_news[8].headline}`}>
											<div>
												<h1 className='text-xl font-bold'>{NewsData.category_news[8].headline}</h1>
												<hr />
											</div>
										</Link>
										<Link href={`/News/${NewsData.category_news[9].id}/${NewsData.category_news[9].headline}`}>
											<div>
												<h1 className='text-xl font-bold'>{NewsData.category_news[9].headline}</h1>
												<hr />
											</div>
										</Link>
										<Link href={`/News/${NewsData.category_news[10].id}/${NewsData.category_news[10].headline}`}>
											<div>
												<h1 className='text-xl font-bold'>{NewsData.category_news[10].headline}</h1>
												<hr />
											</div>
										</Link>
										<Link href={`/News/${NewsData.category_news[11].id}/${NewsData.category_news[11].headline}`}>
											<div>
												<h1 className='text-xl font-bold'>{NewsData.category_news[11].headline}</h1>
												<hr />
											</div>
										</Link>
										<Link href={`/News/${NewsData.category_news[12].id}/${NewsData.category_news[12].headline}`}>
											<div>
												<h1 className='text-xl font-bold'>{NewsData.category_news[12].headline}</h1>
												<hr />
											</div>
										</Link>
									</div>
								</div>
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
								<h1 className="title_politics">{props.data2.category ? props.data2.category : ''}</h1>
							</div>
						</div>

						<div className="w-[290px] grid lg:grid-cols-3 gap-3 pt-12">
							<div className="py-3 text-left awami_league">
								<h4 className="awami_league_title_politics">ভর্তি</h4>
							</div>

							<div className="py-3 text-left awami_league">
								<h4 className="awami_league_title_politics">পরীক্ষা</h4>
							</div>

							<div className="py-3 text-left awami_league">
								<h4 className="awami_league_title_politics">উচ্চশিক্ষা</h4>
							</div>
						</div>
					</div>

					<div className="w-[580px] grid lg:grid-cols-1 gap-5 pt-6 ">

						<div className="w-[580px] py-1 text-left">
							{NewsData_7 ? (
								news_Data = NewsData_7.category_news[0].news,
								sanitizedNews = sanitizeHtml(news_Data).substring(0, 200),
								<Link  href={`/News/${NewsData_7.category_news[0].id}/${NewsData_7.category_news[0].headline}`} className="flex justify-start">
									<div className="w-[145px] grid lg:grid-cols-1 gap-1 pt-1">
										<Image
											className="object-contain"
											src={`https://capitalnews24.net/storage/uploads/news/${NewsData_7.category_news[0].pic}`}
											alt="{NewsData_7.category_news[0].pic}"
											width={150}
											height={100}
										/>
									</div>

									<div className="w-[435px] grid lg:grid-cols-1 gap-1 pt-1 ml-5">
										<h1 className="w-[435px] text-2xl font-bold">{NewsData_7.category_news[0].headline}</h1>
										<div className='w-[435px]'>{sanitizedNews}</div>
									</div>
								</Link>
							) : (
								<p>Loading data...</p>
							)}
						</div>

						<div className="w-[580px] py-1 text-left flex">
							{NewsData_7 ? (
								news_Data = NewsData_7.category_news[1].news,
								sanitizedNews = sanitizeHtml(news_Data).substring(0, 200),
								<Link href={`/News/${NewsData_7.category_news[1].id}/${NewsData_7.category_news[1].headline}`} className="flex justify-start">
									<div className="w-[145px] grid lg:grid-cols-1 gap-1 pt-1">
										<Image
											className="object-contain"
											src={`https://capitalnews24.net/storage/uploads/news/${NewsData_7.category_news[1].pic}`}
											alt="{NewsData_7.category_news[1].pic}"
											width={150}
											height={100}
										/>
									</div>

									<div className="w-[435px] grid lg:grid-cols-1 gap-1 pt-1 ml-5">
										<h1 className="w-[435px] text-2xl font-bold">{NewsData_7.category_news[1].headline}</h1>
										<div className='w-[435px]'>{sanitizedNews}</div>
									</div>
								</Link>
							) : (
								<p>Loading data...</p>
							)}
						</div>

						<div className="w-[580px] py-1 text-left flex">
							{NewsData_7 ? (
								news_Data = NewsData_7.category_news[2].news,
								sanitizedNews = sanitizeHtml(news_Data).substring(0, 200),
								<Link href={`/News/${NewsData_7.category_news[2].id}/${NewsData_7.category_news[2].headline}`} className="flex justify-start">
									<div className="w-[145px] grid lg:grid-cols-1 gap-1 pt-1">
										<Image
											className="object-contain"
											src={`https://capitalnews24.net/storage/uploads/news/${NewsData_7.category_news[2].pic}`}
											alt="{NewsData_7.category_news[2].pic}"
											width={150}
											height={100}
										/>
									</div>

									<div className="w-[435px] grid lg:grid-cols-1 gap-1 pt-1 ml-5">
										<h1 className="w-[435px] text-2xl font-bold">{NewsData_7.category_news[2].headline}</h1>
										<div className='w-[435px]'>{sanitizedNews}</div>
									</div>
								</Link>
							) : (
								<p>Loading data...</p>
							)}
						</div>

						<div className="w-[580px] py-1 text-left flex">
							{NewsData_7 ? (
								news_Data = NewsData_7.category_news[3].news,
								sanitizedNews = sanitizeHtml(news_Data).substring(0, 200),
								<Link href={`/News/${NewsData_7.category_news[3].id}/${NewsData_7.category_news[3].headline}`} className="flex justify-start">
									<div className="w-[145px] grid lg:grid-cols-1 gap-1 pt-1">
										<Image
											className="object-contain"
											src={`https://capitalnews24.net/storage/uploads/news/${NewsData_7.category_news[3].pic}`}
											alt="{NewsData_7.category_news[3].pic}"
											width={150}
											height={100}
										/>
									</div>

									<div className="w-[435px] grid lg:grid-cols-1 gap-1 pt-1 ml-5">
										<h1 className="w-[435px] text-2xl font-bold">{NewsData_7.category_news[3].headline}</h1>
										<div className='w-[435px]'>{sanitizedNews}</div>
									</div>
								</Link>
							) : (
								<p>Loading data...</p>
							)}
						</div>


						<div className="w-[580px] py-1 text-left flex">
							{NewsData_7 ? (

								news_Data = NewsData_7.category_news[4] == null ? "" : NewsData_7.category_news[4].news,
								(() => {
									
									if (news_Data!="") {
										return (
											sanitizedNews = sanitizeHtml(news_Data).substring(0, 200),

											<Link href={`/News/${NewsData_7.category_news[4].id}/${NewsData_7.category_news[4].headline}`} className="flex justify-start">
												<div className="w-[145px] grid lg:grid-cols-1 gap-1 pt-1">
													<Image
														className="object-contain"
														src={`https://capitalnews24.net/storage/uploads/news/${NewsData_7.category_news[4] == null ? "" : NewsData_7.category_news[4].pic}`}
														alt=""
														width={150}
														height={100}
													/>
												</div>
			
												<div className="w-[435px] grid lg:grid-cols-1 gap-1 pt-1 ml-5">
													<h1 className="w-[435px] text-2xl font-bold">{NewsData_7.category_news[4] == null ? "" : NewsData_7.category_news[4].headline}</h1>
													<div className='w-[435px]'>{sanitizedNews}</div>
												</div>
											</Link>
										);
									} else {
										return (<p></p>);
									}
								})()
								
							) : (
								<p>Loading data...</p>
							)}
						</div>


					{/* Component ar function ar vetore function */}

						{/* {(() => {
							const test_1 = 10;
							const test_2 = 50;
							if (test_1 > test_2) {
								return test_1 + test_2;
							} else {
								return test_1 - test_2;
							}
						})()} */}

					</div>
				</div>
			</div>
		</div>


	)
}

export default Entertainment_lifestyle;