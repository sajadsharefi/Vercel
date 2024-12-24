import React from 'react';
import Image from 'next/image';
import Navbar from '../Navbar';
import Infintey from '../Slider/Infintey';
import Carousel from '../Slider/Carousel';

// داده‌ها برای Carousel
const courses = [
  {
    imageUrl: "/image/slider/banner1.jpg", // مسیر را تصحیح کنید
    altText: "بنر ۱"
  },
  {
    imageUrl: "/image/slider/banner2.jpg", // مسیر را تصحیح کنید
    altText: "بنر ۲"
  },
  {
    imageUrl: "/image/slider/banner5.webp",
    altText: "بنر ۵"
  },
  {
    imageUrl: "/image/slider/banner6.webp",
    altText: "بنر ۶"
  }
];

function Index() {
  return (
    <div>
      <Navbar />
      <Carousel>
        {courses.map((course, index) => (
          <Image 
            key={index} 
            src={course.imageUrl} 
            alt={course.altText} 
            width={1280} // عرض تصویر
            height={500} // ارتفاع تصویر
          />
        ))}
      </Carousel>
      <Infintey />
    </div>
  );
}

export default Index;