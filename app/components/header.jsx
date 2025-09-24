import { AlignJustify } from "lucide-react"
import Link from "next/link"

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
 return(
  <section className="flex items-center justify-between w-full px-[5%] pt-6 mb-[80px] md:mb-[120px] font-[Manrope] " >
   <img src="/attribute-logo.svg" />
   <div className="flex items-center gap-6" >
    <nav className="hidden md:flex items-center gap-4" >
      {navsData.map(nav => <Link key={nav.title} href={`/${nav.path}`} className="text-sm font-[500] text-zinc-900 ">{nav.title}</Link> )}
    </nav>
    <button className="bg-[#e35335] text-white text-sm font-semibold px-3 py-2 rounded-xl">Start tracking </button>
    <span className="flex md:hidden" ><AlignJustify size={24} /></span>
   </div>
  </section>
 )
}