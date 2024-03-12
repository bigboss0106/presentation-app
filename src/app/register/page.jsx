"use client"

import { useEffect } from 'react'
import Image from "next/image";
import Link from "next/link";
import MyLogo from '@/assets/img/logo.png';
import TopImg from '@/assets/img/signup-img1.png';
import BottomImg from '@/assets/img/signup-img2.png';

import AOS from 'aos';
import 'aos/dist/aos.css';
import RegisterForm from '@/components/register-form';

export default function Register() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='bg-black-0 w-[100%]'>
      <main className="custom3Xl:max-w-[1920px] px-[55px] mx-auto pt-[46px] pb-[64px] flex justify-between">
        <div className='relative'>
          <Link href="/">
            <Image src={MyLogo} alt="No Logo image" objectFit="cover" layout="fixed" className="w-[200px]" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500"/> 
          </Link>
          <p className='text-white-0 text-[20px] leading-[30.26px] font-[600] pt-[54px] pl-[50px]' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">Share your vision through pitch <br/> decks.</p>
          <Image src={TopImg} alt="No Sign-up Top image" objectFit="contain" layout="fixed" className="absolute top-[220px] left-[140px] z-[2] w-[300px] h-[300px]" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500"/> 
          <Image src={BottomImg} alt="No Sign-up Bottom image" objectFit="contain" layout="fixed" className="mt-[315px]" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500"/>       
        </div>
        <RegisterForm/>
      </main>
    </div>
  )
}
