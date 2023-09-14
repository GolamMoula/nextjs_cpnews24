'use client'
import React from 'react';
import Image from 'next/image';
import Banner_ads from './Banner_ads';
import Recent_news_section from './Recent_news_section';
import Special_events from './Special_events';
import Politics from './Politics';
import { useState, useEffect } from 'react';
import axiosInstance from '@axiosConfig';

import BannerAds2 from './Banner_ads2';
import SaraDesh from './SaraDesh';
import International_economics from './International_economics';
import Entertainment_lifestyle from './Entertainment_lifestyle';
import Sport from './Sport';
import LastThree from './LastThree';




function Hero() {
  const bannerData = { value: "ulatestsec1", name: "Under Latest section:1" };
  const bannerData2 = { value: "ulatestsec2", name: "Under Latest section:2" };

  const Ads = new Map([
    ["ulatestsec1", "ulatestsec1"],
    ["ulatestsec2", "ulatestsec2"],
    ["u_cat_one1", "u_cat_one1"],
    ["u_cat_one2", "u_cat_one2"],
    ["u_cat_two1", "u_cat_two1"],
    ["u_cat_two2", "u_cat_two2"],
    ["u_cat_three1", "u_cat_three1"],
    ["u_cat_three2", "u_cat_three2"],
    ["u_cat_four1", "u_cat_four1"],
    ["u_cat_four2", "u_cat_four2"],
    ["u_cat_five1", "u_cat_five1"],
    ["u_cat_five2", "u_cat_five2"],
    ["u_cat_six1", "u_cat_six1"],
    ["u_cat_six2", "u_cat_six2"],


  ]);

  const [CategoryData, seCategoryData] = useState(null);
  useEffect(() => {
    axiosInstance.get(`news/category`)
      .then(res => seCategoryData(res.data.category.category))
  }, []);


  return (
    <div className='hero'>

      <div className="flex-1 pt-6 padding-x">
        <Banner_ads data={bannerData} />
        <hr />
        <Recent_news_section />
        <hr />
        <Banner_ads data={bannerData2} />
        <hr />
        <Special_events />

        <hr />
        <BannerAds2 data1={Ads.get("u_cat_one1")} data2={Ads.get("u_cat_one2")} />
        <hr />
        {CategoryData ? (
          <SaraDesh data={CategoryData[0]} />
        ) : (
          <p>Loading data...</p>
        )}
        <hr />
        <BannerAds2 data1={Ads.get("u_cat_one1")} data2={Ads.get("u_cat_one2")} />
        <hr />

        {CategoryData ? (
          <Politics data={CategoryData[1]} />
        ) : (
          <p>Loading data...</p>
        )}
        <hr />
        <BannerAds2 data1={Ads.get("u_cat_two1")} data2={Ads.get("u_cat_two2")} />
        {CategoryData ? (
          <International_economics data1={CategoryData[3]} data2={CategoryData[4]} />
        ) : (
          <p>Loading data...</p>
        )}
        <hr />
        <BannerAds2 data1={Ads.get("u_cat_three1")} data2={Ads.get("u_cat_three2")} />

        {CategoryData ? (
          <Entertainment_lifestyle data1={CategoryData[5]} data2={CategoryData[7]} />
        ) : (
          <p>Loading data...</p>
        )}
        <hr />
        <BannerAds2 data1={Ads.get("u_cat_four1")} data2={Ads.get("u_cat_four2")} />
        
        {CategoryData ? (
          <Sport data1={CategoryData[6]} />
        ) : (
          <p>Loading data...</p>
        )}
        <hr />
        <BannerAds2 data1={Ads.get("u_cat_five1")} data2={Ads.get("u_cat_five2")} />
        {CategoryData ? (
        <LastThree  data1={CategoryData[8]} data2={CategoryData[9] } data3={CategoryData[10] }/>
        ) : (
          <p>Loading data...</p>
        )}
      </div>

    </div>
  )
}

export default Hero