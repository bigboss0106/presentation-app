"use client"

import Link from "next/link";
import Image from "next/image";
import { useEffect } from 'react'
import { BiSortDown } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import ProfileImg from '@/assets/img/profile-img.png';
import Layouts from '@/components/layouts'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Design() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layouts theme="light">
      <main className="custom3Xl:max-w-[1920px] pb-[20px] mx-auto flex justify-between">
        <div className="" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="500">
          <aside className='w-[475px] pb-[300px] pl-[25px] pr-[10px] mt-[44px] mb-[10px] border-r-[2px] border-black-0'>
            <div className='flex justify-between'>
              <div className='text-black-0'>
                <h1 className='text-[36px] leading-[43.57px] font-bold'>Mateus Figu</h1>
                <select name="position" id="position" className='text-[25px] w-[155px]'>
                  <option value="writer">Writer</option>
                  <option value="actor">Actor</option>
                  <option value="producer">Producer</option>
                  <option value="creator">Creator</option>
                  <option value="artist">Artist</option>
                  <option value="executive">Executive</option>
                  <option value="other">Other</option>
                </select>
                <p className='text-[18px] leading-[24.2px] mt-[10px]'>Go Qreate</p>
                <Link href="#" className="block text-[18px] leading-[24.2px] my-[30px] hover:text-blue-1 transition-all duration-[1000ms]"> 
                  mateusmelo.workspace@gmail.com
                </Link>
              </div>
              <div className="" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">
              <Image src={ProfileImg} alt="No Profile image" objectFit="contain" layout="fixed" className="rounded-sm w-[144px] h-[126px]"/>
            </div>
            </div>
            <ul className="pt-[20px] pb-[66px] w-[98%] list-none text-black-0 border-t-[2px] border-b-[2px] border-black-0">
              <li className="mb-[20px] w-[95%] cursor-pointer"><p className="text-[18px] leading-[24.2px]">All Deck<span className="float-right">#</span></p></li>
              <li className="mb-[20px] w-[95%] cursor-pointer"><p className="text-[16px] text-[rgba(0,0,0,0.5)] hover:text-black-0 transition-all duration-[1000ms] ease-out leading-[24.2px]">Genre 1<span className="float-right">#</span></p></li>
              <li className="mb-[20px] w-[95%] cursor-pointer"><p className="text-[16px] text-[rgba(0,0,0,0.5)] hover:text-black-0 transition-all duration-[1000ms] ease-out leading-[24.2px]">Genre 2<span className="float-right">#</span></p></li>
              <li className="w-[95%] cursor-pointer"><p className="text-[16px] text-[rgba(0,0,0,0.5)] hover:text-black-0 transition-all duration-[1000ms] ease-out leading-[24.2px]">Genre 3<span className="float-right">#</span></p></li>
            </ul>
            <div className="pt-[20px] w-[95%]"><p className="text-[18px] leading-[24.2px]">All Deck<span className="float-right">#</span></p></div>
          </aside>
          <ul className="ml-[20px] flex items-center text-black-0 text-[14px] font-bold list-disc overflow-hidden">
            <li className="mr-[34px] cursor-pointer">TERMS</li>
            <li className="mr-[34px] cursor-pointer">TEAMS</li>
            <li className="mr-[34px] cursor-pointer">PRIVACY</li>
            <li className="">© 2023 Go Qreate</li>
          </ul>
        </div>
        <div className="px-[45px] pt-[35px] w-[100%] text-black-0">
          <div className="flex justify-between items-center mb-[35px]" data-aos="fade" data-aos-duration="1500" data-aos-delay="1000">
            <ul className="flex items-center">
              <li className="flex items-center mr-[40px] cursor-pointer text-[rgba(0,0,0,0.3)] hover:text-black-0 transition-all duration-[1000ms] ease-out">
                <BiSortDown className="text-[15px] mr-[10px] text-[rgba(0,0,0,0.3)] hover:text-black-0 transition-all duration-[1000ms] ease-out"/>
                Newest First
              </li>
              <li className="flex items-center cursor-pointer text-[rgba(0,0,0,0.3)] hover:text-black-0 transition-all duration-[1000ms] ease-out">
                <BiSearch className="text-[15px] mr-[10px] text-[rgba(0,0,0,0.3)] hover:text-black-0 transition-all duration-[1000ms] ease-out"/>
                Filter
              </li>
            </ul>
            <p className="text-[15px] leading-[18.15px]">Layout: Grid</p>
          </div>
          <div className="flex">
            <div className="w-[228px] mr-[50px] cursor-pointer" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="1000">
              <div className="h-[332px] bg-black-3 rounded-sm shadow-md hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] transition-all duration-[1000ms] ease-out">
              </div>
              <p className="text-center text-[18px] leading-[24.2px] mt-[10px]">Project 1</p>
            </div>
            <div className="w-[228px] mr-[50px] cursor-pointer" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="2000">
              <div className="h-[332px] bg-black-3 rounded-sm shadow-md hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] transition-all duration-[1000ms] ease-out">
              </div>
              <p className="text-center text-[18px] leading-[24.2px] mt-[10px]">Project 2</p>
            </div>
            <div className="w-[228px] mr-[50px] cursor-pointer" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="3000">
              <div className="h-[332px] bg-black-3 rounded-sm shadow-md hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] transition-all duration-[1000ms] ease-out">
              </div>
              <p className="text-center text-[18px] leading-[24.2px] mt-[10px]">Project 3</p>
            </div>
          </div>
        </div>
      </main>
    </Layouts>
  )
}
