'use client';

import { AlignJustify, MoveRight, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const navsData = [
 {
  title: "Our Story",
  path: "our-story"
 },
  {
   title: "Pricing",
  path: "pricing"
 },
 {
  title: "Contact Us",
  path: "contact-us"
 },
]

export default function Header( ) {

  const [ showMobbileMenu, setShowMobileMenu ] = useState(false);
 return(
  <section className="flex items-center justify-between w-full px-[5%] pt-6 md:mb-[120px] font-[Manrope] " >
   <img src="/attribute-logo.svg" />
   <div className="flex items-center gap-6" >
    <nav className="hidden md:flex items-center gap-4" >
      {navsData.map(nav => <Link key={nav.title} href={`/${nav.path}`} className="text-sm font-[500] text-zinc-900 ">{nav.title}</Link> )}
    </nav>
    <button className="flex items-center bg-[#e35335] gap-2 border-2 border-white text-white text-sm font-semibold px-3 py-2 rounded-xl">Start tracking now <MoveRight strokeWidth={1.5} /></button>
    <span className="flex md:hidden relative" >
      { !showMobbileMenu && 
      <span >
        <AlignJustify
        onClick={ () => setShowMobileMenu(true)}
        size={18} />
       </span>
       }
      { showMobbileMenu && 
      <X
       onClick={ () => setShowMobileMenu(false)}
       size={18} />}
      { showMobbileMenu && (
        <div className="absolute flex flex-col items-center border border-stone-100 right-0 top-6 bg-[#e35335]/5 backdrop-blur rounded-xl p-1 text-sm text-center shadow-sm " >
        <Link href="/" className="w-full hover:bg-[#e35335] active:bg-[#e35355]/50 hover:text-white px-[16px] py-[4px] rounded-[8px] " >Pricing</Link>
        <Link href="/" className="w-full hover:bg-[#e35335] active:bg-[#e35355]/50 hover:text-white px-[16px] py-[4px] rounded-[8px] " >Contact</Link>
      </div>
      )}
      </span>
   </div>

  </section>
 )
}