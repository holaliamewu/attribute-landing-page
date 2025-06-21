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
  <section className="flex items-center justify-between w-full px-[5%] mt-6 mb-[120px] font-[Manrope] " >
   <div className="flex items-center text-sm font-semibold gap-1 " >
     <span className="font-bold text-[12px] text-white bg-zinc-900 px-2 py-1 rounded-lg" >A</span>Attribute</div>
   <div className="flex items-center gap-6" >
    <nav className="flex items-center gap-4" >
      {navsData.map(nav => <Link key={nav.title} href={`/${nav.path}`} className="text-sm font-[500] text-zinc-900 ">{nav.title}</Link> )}
    </nav>
    <button className="bg-zinc-900 text-white text-sm font-semibold px-3 py-2 rounded-xl">Get Started</button>
   </div>
  </section>
 )
}