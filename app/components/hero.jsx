"use client"

import {ChartSpline, Gauge, Zap, Handshake, Mail, Phone} from "lucide-react"
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { delay } from "motion";

const useCaseData = [
  {
    title: "Real Attribution for offline Campaigns",
    icon: ChartSpline,
    description: "Know exactly which medium -- TV, Radio, or Billboard campaign -- customers are buzzing about in the market"
  },
  {
    title: "Maximize Media Spend and Improve ROI",
    icon: Gauge,
    description: "Unlock the full potential of your marketing budget by identifying the most effective channels and strategies."
  },
  {
    title: "Realtime Insights",
    icon: Zap,
    description: "Get instant feedback on your campaigns, allowing you to pivot and optimize strategies on the fly."
  },
  {
    title: "Prove Offline Impact to Stakeholders",
    icon: Handshake,
    description: "Show your team or clients exactly how your offline marketing campaigns are contributing to business goals -- no guesswork."
  },
]


const useCaseVariants = {
  initial: { opacity: 0, y: 10},
  whileInView: { 
    opacity: 1, 
    y: 0,  
  }
  }

  const titleVariants = {
    initial: { opacity: 0, y: 10},
    whileInView: { opacity: 1, y: 0,
      transition: { delay: 0.4}
  }}

  const descriptioinVariants = {
    initial: { opacity: 0, y: 10},
    whileInView: { opacity: 1, y: 0,
      transition: { delay: 0.45}
  }}

  const iconVariants = {
    initial: { opacity: 0, y: 10},
    whileInView: { opacity: 1, y: 0,
      transition: { delay: 0.35}
  }}

export default function Hero( ) {
 return(
  <AnimatePresence >
    <section className="text-[64px] font-[Manrope] min-h-screen " >
      <main className="" >
        <div
        className="flex flex-col items-center justify-center h-full px-[5%] text-center" >
          <h1 className="text-[32px] md:text-[48px] lg:text-[56px] font-black pb-6 lg:w-2/3  max-w-[800px]" >Track Offline Marketing Campaigns Like it's Digital</h1>
          <p className="w-[90%] md:w-2/3 max-w-[500px] text-[16px] md:text-[18px] font-regular text-zinc-900 pb-6" >Make better and bolder decisions backed with real data from your customers or potential ones.</p>
          <button className="bg-[#e35335] text-white text-sm font-semibold px-3 py-2 rounded-xl">Start tracking </button>
        </div>
        <Image width={300} height={200} src="/hero-img.svg" alt="Hero" className="hidden md:flex mx-auto mt-12 rounded-xl shadow-xl " />
        <Image width={300} height={200} src="/hero-mobile-img.png" alt="Hero" className="flex md:hidden mx-auto mt-12 rounded-xl " />
      </main>
      <section className="flex flex-col items-center w-full bg-[#e35335] mt-28 pt-6 text-white " >
        <h2 className="text-[38px] md:text-[46px] font-bold mb-14" >Why You Need Us</h2>
        <span className="flex flex-col space-y-[120px] md:space-y-[160px] py-12 md:py-24 " >
          {useCaseData.map( item => (
            <motion.div 
            key={item.title}
            initial="initial"
            whileInView="whileInView"
            viewport={{amount: "all" }}
            variants={useCaseVariants}
          className="flex flex-col items-center justify-center w-full my-24  " >
            <motion.span
              initial="initial"
              whileInView="whileInView"
              variants={iconVariants}
            >
              <item.icon size={64} />
              </motion.span>
            <motion.h3
              initial="initial"
              whileInView="whileInView"
              variants={titleVariants}
            className="text-[32px] text-center lg:text-[40px] font-bold w-9/10 md:w-2/3 mt-8 mb-4 " >{item.title}</motion.h3>
            <motion.p
            initial="initial"
              whileInView="whileInView"
              variants={descriptioinVariants}
            className="text-[18px] text-center font-medium w-9/10 md:w-2/3 max-w-[600px] " >{item.description}</motion.p>
          </motion.div>
        ))}
        </span>
      </section>
      <section className="flex flex-col md:flex-row items-center md:justify-between w-9/10 md:w-1/2 mx-auto h-[50vh] md:h-[100vh] " >
        <h3 className="text-[28px] text-center   lg:text-[40px] font-bold w-1/2 max-w-[400px] mt-8 mb-8 " >Still need more Info or Clarity?</h3>
        <div className="flex flex-col gap-6" >
          <span className="flex flex-col gap-2" >
            <span className="flex items-center justify-center md:justify-start gap-1" >
              <Mail size={24} />
              <h4 className="text-[18px] md:text-[20px] font-semibold" >Send us a mail</h4>
            </span> 
            <h6 className="text-[16px] " >help@attribute.marketing</h6>
          </span>
          <span className="flex flex-col gap-2" >
            <span className="flex items-center justify-center md:justify-start gap-1" >
              <Phone size={24} />
              <h4 className="text-[18px] text-[20px] font-semibold" >Call us</h4>
            </span> 
            <h6 className="text-[16px] " >+233 - 543 - 938 - 002</h6>
          </span>
        </div>
      </section>
    </section>
  </AnimatePresence>
  )}