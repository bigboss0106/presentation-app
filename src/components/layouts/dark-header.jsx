"use client"

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../button";
import MyLogo from '@/assets/img/logo.png';
import { useRouter } from "next/navigation";


export default function Header() {
  const router = useRouter();

  useEffect(() => {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
    
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);

    return (
      <header className="custom3Xl:max-w-[1920px] py-[36px] px-[40px] mx-auto flex items-center justify-between">
        <Link href="#" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
          <Image src={MyLogo} alt="No Logo image" objectFit="contain" layout="fixed" className="w-[200px]"/>
        </Link>
        <div className="flex items-center" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">
          <ul className="flex align-center text-white-0 mr-[55px]">
            <li className="pr-[27px]">
              <Link href="/design" className="relative text-[18px] font-[700] hover:text-blue-1 before:content-[''] before:absolute before:border-b-[4px] before:border-blue-1 before:w-[0%] before:bottom-[-5px] hover:before:w-[100%] before:transition-all before:duration-[1000ms] transition-all duration-[1000ms]"> 
                 DESIGN
              </Link>
            </li>
            <li className="pr-[27px]">
              <Link href="#home" className="relative text-[18px] font-[700] hover:text-blue-1 before:content-[''] before:absolute before:border-b-[4px] before:border-blue-1 before:w-[0%] before:bottom-[-5px] hover:before:w-[100%] before:transition-all before:duration-[1000ms] transition-all duration-[1000ms]"> 
                 HOME
              </Link>
            </li>
            <li className="pr-[27px]">
              <Link href="#benefits" className="relative text-[18px] font-[700] hover:text-blue-1 before:content-[''] before:absolute before:border-b-[4px] before:border-blue-1 before:w-[0%] before:bottom-[-5px] hover:before:w-[100%] before:transition-all before:duration-[1000ms] transition-all duration-[1000ms]"> 
              BENEFITS
              </Link>
            </li>
            <li className="">
              <Link href="#features" className="relative text-[18px] font-[700] hover:text-blue-1 before:content-[''] before:absolute before:border-b-[4px] before:border-blue-1 before:w-[0%] before:bottom-[-5px] hover:before:w-[100%] before:transition-all before:duration-[1000ms] transition-all duration-[1000ms]"> 
              FEATURES
              </Link>
            </li>
          </ul>
          <ul className="flex items-center">
            <li className="pr-[30px]">
              <Button text="LOG IN" className="min-w-[120px] py-[10px] rounded-sm font-bold text-black-0 text-[18px] leading-[24.2px] bg-blue-1 border-[2px] border-blue-1 hover:bg-black-0 hover:text-white transition-all duration-[1000ms]" onClick={()=>router.push('/login')}/>
            </li>
            <li className="">
              <Button text="SIGN UP" className="min-w-[120px] py-[10px] rounded-sm font-bold text-black-0 text-[18px] leading-[24.2px] bg-blue-1 border-[2px] border-blue-1 hover:bg-black-0 hover:text-white transition-all duration-[1000ms]" onClick={()=>router.push('/register')}/>
            </li>
          </ul>
        </div>
      </header>
    )
  }
  