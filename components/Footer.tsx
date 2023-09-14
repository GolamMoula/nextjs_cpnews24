import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100  mt-8 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between lg:grid-cols-4 gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col items-center">
          <Image
            className="object-contain"
            src="/capitalHeadLogo.png"
            alt="capital_head_Logo"
            width={200}
            height={100}
          />

          <p className="text-base text-gray-700 text-center">
            THE WORLD IN ONE CLICK
            <br />
            <br />
            <br />
            Here all software, apps, themes, plugins,
            <br />
            are our own property. Therefore copying
            <br />
            or reselling is strictly prohibited. &copy;
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl ">News Section</h1>
          <br />
          <br />

          <div className="flex flex-col items-center">
            <div className="grid grid-cols-2 gap-4">
              <h1>জাতীয়</h1>
              <h1>রাজনীতি</h1>
              <h1>বাংলাদেশ</h1>
              <h1>আন্তর্জাতিক</h1>
              <h1>বাণিজ্য</h1>
              <h1>বিনোদন</h1>
              <h1>খেলা</h1>
              <h1>চাকরি</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl ">Useful Link</h1>
          <br />
          <br />
          <div className="flex flex-col items-baseline">
            <div className="grid grid-cols-1 gap-4">
              <h1>Service</h1>
              <h1>Product</h1>
              <h1>Teams</h1>
              <h1>Trams & Condition</h1>
              <h1>Privacy Policy</h1>
              <h1>Contact us</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl ">Have Questions?</h1>
          <br />
          <br />
          <p className="text-base text-gray-700 text-center">
            We are Always here for you! Knock us on
            <br />
            Messenger anytime or Call our Hotline
            <br />
            (10AM - 10PM).
            <br />
          </p>

          <p className="text-base text-gray-700 text-center">
            Dedicated Customer Support
            <br />
            Sat-Thurs: 10AM- 7PM
            <br />
            Friday/Govt. Holidays: 11AM- 5PM
            <br />
          </p>
        </div>
      </div>
      <hr />
      <div className="flex flex-col items-center">
        <h1>@2023 All Right Reserved IT Sheba 24 Dot Com</h1>
      </div>
    </footer>
  );
};

export default Footer;
