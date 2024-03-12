
import Link from "next/link";
import Image from "next/image";
import FacebookImg from '@/assets/img/facebook.png';
import YoutubeImg from '@/assets/img/youtube.png';

export default function Footer() {
  return (
    <footer className="custom3Xl:max-w-[1920px] pl-[107px] pr-[87px] pt-[500px] pb-[65px] mx-auto text-white-0">
      <div className="flex py-[70px] border-t-[2px] border-b-[2px] border-blue-1" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
        <ul className="text-[20px] w-[min-width] mr-[194px]">
          <li className="font-bold mb-[30px] leading-[48px]">TOUR</li>
          <li className="">
            <Link href="#" className="text-[16px] font-[700] hover:text-blue-1 leading-[48px] transition-all duration-[1000ms]">Templates</Link>
          </li>
        </ul>
        <ul className="text-[20px] w-[min-width] mr-[194px]">
          <li className="font-bold mb-[30px] leading-[48px]">COMPANY</li>
          <li className="">
            <Link href="#" className="text-[16px] font-[700] hover:text-blue-1 leading-[48px] transition-all duration-[1000ms]">About Go Qreate</Link>
          </li>
          <li className="">
            <Link href="#" className="text-[16px] font-[700] hover:text-blue-1 leading-[48px] transition-all duration-[1000ms]">Partners</Link>
          </li>
          <li className="">
            <Link href="#" className="text-[16px] font-[700] hover:text-blue-1 leading-[48px] transition-all duration-[1000ms]">Blog</Link>
          </li>
        </ul>
        <ul className="text-[20px] w-[min-width] mr-[194px]">
          <li className="font-bold mb-[30px] leading-[48px]">HELP</li>
          <li className="">
            <Link href="#" className="text-[16px] font-[700] hover:text-blue-1 leading-[48px] transition-all duration-[1000ms]">Leave Feedback</Link>
          </li>
          <li className="">
            <Link href="#" className="text-[16px] font-[700] hover:text-blue-1 leading-[48px] transition-all duration-[1000ms]">Report an Issue</Link>
          </li>
          <li className="">
            <Link href="#" className="text-[16px] font-[700] hover:text-blue-1 leading-[48px] transition-all duration-[1000ms]">Advertise</Link>
          </li>
        </ul>
      </div>
      <div className="flex justify-between items-center mt-[34px]">
        <div className="flex items-center">
          <Image src={YoutubeImg} alt="No Youtube image" objectFit="contain" layout="fixed" className="w-[35px] h-[35px] mr-[20px]"/>
          <Image src={FacebookImg} alt="No Facebook image" objectFit="contain" layout="fixed" className="w-[35px] h-[35px]"/>
        </div>
        <ul className="flex items-center text-white-0 font-bold list-disc overflow-hidden">
          <li className="mr-[34px] cursor-pointer">TERMS</li>
          <li className="mr-[34px] cursor-pointer">PRIVACY POLICY</li>
          <li className="">© 2023 Go Qreate</li>
        </ul>
      </div>
    </footer>
  )
}
