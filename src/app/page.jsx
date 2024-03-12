"use client"

import { useEffect } from 'react'
import Layouts from '@/components/layouts'
import Home from '@/components/sections/home'
import Benefits from '@/components/sections/benefits'
import Features from '@/components/sections/features'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Dashboard() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='bg-black-0 w-[100%] h-[100%]'>
      <Layouts theme="dark">
        <main className="">
          <Home/>
          <Benefits/>
          <Features/>
        </main>
      </Layouts>
    </div>
  )
}
