'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Logo from './image/header/logo.jpg';
import Logomobile from './image/header/logo_mobile.jpg';

export default function Navbar() {
  let Links = [
    { name: 'پوشاک', link: '/otherproduct' },
    { name: 'لوازم خانه', link: '/otherproduct' },
    { name: 'قاب موبایل', link: '/otherproduct' },
    { name: 'اکسسوری', link: '/otherproduct' },
    { name: 'مدرسه و اداره', link: '/otherproduct' },
    { name: 'کارت و پوستر', link: '/otherproduct' },
    { name: 'جشن و مهمانی', link: '/otherproduct' },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div>
      <div className='border-y h-24 max-md:h-16'>
        <div className='w-full flex justify-center bg-red-500 max-md:hidden'>
          با عضویت در کاستومی اولین سفارش خود را &quot;رایگان&quot; تحویل بگیرید
        </div>
        
        <div className='w-full h-16 flex place-items-center flex-row-reverse gap-4'>
          <div className='w-32 place-content-center max-md:hidden'>
            <Image src={Logo} alt="Logo" className='w-full p-2'/>
          </div>
          
          <div className='w-6/12 inset-0 ml-20 mr-8 border border-inherit rounded-full max-md:mr-20 max-md:w-56 py-0.5'>
            <form action='' className='h-full'>
              <div className='flex flex-row-reverse h-full'>
                <input 
                  type='search' 
                  id='search' 
                  placeholder='جستجو' 
                  className='w-11/12 text-red-600 focus:text-neutral-900 placeholder-red-300 text-right rounded-full' 
                />
                <div className='w-1/12 place-content-center'>
                  <ion-icon name='search-outline'></ion-icon>
                </div>
              </div>
            </form>
          </div>

          <div className='w-32 flex flex-row-reverse items-center justify-center mr-4 border rounded-lg max-md:hidden'>
            <div className='text-2xl'>
              <ion-icon name='log-in-outline'></ion-icon>
            </div>
            <Link href='/Auth' className='text-black text-center hover:text-slate-200'>ورود</Link>
            <span>|</span>
            <Link href='/Auth' className='text-black hover:text-slate-200'>ثبت نام</Link>
          </div>

          <Link href="/cart" className='w-28 flex flex-row-reverse items-center justify-center mr-4 border rounded-lg max-md:hidden'>
            <div className='text-2xl'>
              <ion-icon name='cart-outline'></ion-icon>
            </div>
            <span className='text-black text-center hover:text-slate-200'>سبد خرید</span>
          </Link>

          <div className='hidden ml-8 max-md:block'>
            <Image src={Logomobile} alt="Logo Mobile" className='w-full p-2'/>
          </div>
        </div>
      </div>

      <div className='w-full top-0 left-0'>
        <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
          <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-5 cursor-pointer md:hidden'>
            <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
          </div>

          <ul className={`md:w-full md:flex flex-row-reverse md:justify-center md:items-center md:pb-0 pb-12 absolute md:static bg-blue-50 md:z-auto z-[+1]
          left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-0`}>
            {
              Links.map((link) => (
                <li key={link.name} className='md:ml-8 text-sm md:my-0 my-7'>
                  <Link href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
};