
import Image from "next/image";
import Link from "next/link";
import { FiMenu } from 'react-icons/fi';
import MyLogo from '@/assets/img/Logo-light.png';

export default function Header() {

    return (
      <div className="bg-blue-1" data-aos="fade" data-aos-duration="1500" data-aos-delay="1000">
        <header className="custom3Xl:max-w-[1920px] pl-[15px] py-[20px] mx-auto flex items-center justify-between">
          <Link href="/" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
            <Image src={MyLogo} alt="No Logo image" objectFit="contain" layout="fixed" className="m-auto w-[130px] "/>
          </Link>
          <div className="flex items-center" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
            <ul className="flex align-center items-center text-black-0">
              <li className="pr-[60px]">
                <Link href="/" className="relative text-[18px] leading-[24.2px] font-[700] hover:text-white-0 before:content-[''] before:absolute before:border-b-[4px] before:border-white-0 before:w-[0%] before:bottom-[-5px] hover:before:w-[100%] before:transition-all before:duration-[1000ms] transition-all duration-[1000ms]"> 
                  HOME
                </Link>
              </li>
              <li className="pr-[60px]">
                <Link href="#" className="relative text-[18px] leading-[24.2px] font-[700] hover:text-white-0 before:content-[''] before:absolute before:border-b-[4px] before:border-white-0 before:w-[0%] before:bottom-[-5px] hover:before:w-[100%] before:transition-all before:duration-[1000ms] transition-all duration-[1000ms]"> 
                  NEW DECK
                </Link>
              </li>
              <li className="pr-[30px]">
                <Link href="#" className="relative text-[18px] leading-[24.2px] font-[700] hover:text-white-0 before:content-[''] before:absolute before:border-b-[4px] before:border-white-0 before:w-[0%] before:bottom-[-5px] hover:before:w-[100%] before:transition-all before:duration-[1000ms] transition-all duration-[1000ms]"> 
                  FIRST NAME
                </Link>
              </li>
              <li className="pr-[43px] cursor-pointer">
                <FiMenu className="text-[30px]" color="black"/>                
              </li>
            </ul>
          </div>
        </header>
      </div>
    )
  }
  