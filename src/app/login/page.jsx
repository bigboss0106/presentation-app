"use client"

import { useEffect } from 'react'
import Image from "next/image";
import Link from "next/link";
import MyLogo from '@/assets/img/logo.png';
import LoginBgImg from '@/assets/img/login-bg-img.png';
import LoginImg from '@/assets/img/login-img.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LoginForm from '@/components/login-form';

export default function Login() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='bg-black-0 w-[100%] h-[100%]'>
      <main className="custom3Xl:max-w-[1920px] mx-auto flex justify-between">
        <div className='min-w-[630px]'>
          <div className='mt-[50px] ml-[55px]'>
            <Link href="/" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
             <Image src={MyLogo} alt="No Logo image" objectFit="contain" layout="fixed" className="w-[200px]"/> 
            </Link>
          </div>
          <LoginForm/>
        </div>
        <div className='relative w-[-webkit-fill-available]'>
          <Image src={LoginBgImg} alt="No Login Bg image" objectFit="cover" layout="fixed" className="w-[100%] h-[100%]" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500"/>
          <div className='absolute left-[50%] top-[118px] translate-x-[-50%]'>
            <h1 className='text-[80px] font-bold leading-[80px] text-white-0' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">Welcome to <br/>Go Qreate! <span className='block text-[18px] px-[20px] text-white-0'>Share your vision</span></h1> 
          </div>
          <div className='w-[700px] absolute left-[50%] bottom-[100px] translate-x-[-50%]'>
            <Image src={LoginImg} alt="No Login image" objectFit="contain" layout="fixed" className="w-[100%]" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500"/> 
          </div>
        </div>
      </main>
    </div>
  )
}
