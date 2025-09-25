import { ArrowRight, MoveRight } from "lucide-react"
import Link from "next/link"


const footerCompanyData = [
  { name: 'Our Story', href: '/our-story' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact Us', href: '/contact-us' },
  ]

const footerResourcesData = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms-of-service' },
  ]

const footerSocialData = [
  { name: 'X', href: '/x' },
  { name: 'Instagram', href: '/instagram' },
  { name: 'Linkedin', href: '/linkedin' },
  ]


export default function Footer( ) {
 return(
 <footer className="flex flex-col justify-between items-center bg-[#e35335] text-white px-[5%] py-18 font-[Manrope] gap-[80px] " >
   <section className="md:w-6/10 space-y-3 flex flex-col items-center gap-2 " >
      <p className="text-[48px] lg:text-[64px] text-center font-bold pb-3" >Take control of your offline Marketing.</p>
      <button className="flex items-center gap-2 border-2 border-white text-white text-sm font-semibold px-3 py-2 rounded-xl">Start tracking Now <MoveRight /></button>
   </section>
   <section className="flex flex-col items-center w-full gap-[64px]" >
    <div className="flex flex-col md:flex-row  gap-12" >
     <div className="text-center" >
       <h3 className="text-sm font-bold mb-4">Company</h3>
       <ul className="flex flex-col gap-2 text-white">
         {footerCompanyData.map(item => (
           <Link key={item.name} href={item.href} className="text-sm hover:underline"><li>{item.name}</li></Link>
         ))}
       </ul>
     </div>
     <div className="text-center" >
       <h3 className="text-sm font-bold mb-4">Resources</h3>
       <ul className="flex flex-col gap-2">
         {footerResourcesData.map(item => (
           <Link key={item.name} href={item.href} className="text-sm hover:underline"><li>{item.name}</li></Link>
         ))}
       </ul>
     </div>
     <div className="text-center" >
       <h3 className="text-sm font-bold mb-4">Social</h3>
       <ul className="flex flex-col gap-2">
         {footerSocialData.map(item => (
           <Link key={item.name} href={item.href} className="text-sm hover:underline"><li>{item.name}</li></Link>
         ))}
       </ul>
     </div>
     </div>
      <section className="flex w-full h-[300px] border-4" >-</section>
   </section>
 </footer>
 )
}
