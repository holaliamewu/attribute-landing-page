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
 <footer className="flex flex-col md:flex-row justify-between bg-gradient-to-r from-blue-600 to-white px-[5%] py-12 font-[Manrope] gap-[48px] " >
   <section className="md:max-w-1/3 space-y-3 " >
     <div className="" >
     <div className="flex items-center text-sm font-semibold gap-1 " ><span className="font-bold text-[12px] text-white bg-zinc-900 px-2 py-1 rounded-lg" >A</span>Attribute</div>
      <p className="text-[24px] lg:text-[32px] font-bold pt-6 pb-3" >Start making the best decisions on your offline campaigns today!</p>
      <button className="bg-zinc-900 text-white text-sm font-semibold px-3 py-2 rounded-xl">Start tracking </button>
     </div>
   </section>
   <section className="flex justify-between w-1/2 lg:w-1/3 gap-8" >
     <div className="" >
       <h3 className="text-sm font-semibold mb-4">Company</h3>
       <ul className="space-y-2">
         {footerCompanyData.map(item => (
           <Link key={item.name} href={item.href} className="text-sm text-zinc-900 hover:underline"><li>{item.name}</li></Link>
         ))}
       </ul>
     </div>
     <div className="" >
       <h3 className="text-sm font-semibold mb-4">Resources</h3>
       <ul className="space-y-2">
         {footerResourcesData.map(item => (
           <Link key={item.name} href={item.href} className="text-sm text-zinc-900 hover:underline"><li>{item.name}</li></Link>
         ))}
       </ul>
     </div>
     <div className="" >
       <h3 className="text-sm font-semibold mb-4">Social</h3>
       <ul className="space-y-2">
         {footerSocialData.map(item => (
           <Link key={item.name} href={item.href} className="text-sm text-zinc-900 hover:underline"><li>{item.name}</li></Link>
         ))}
       </ul>
     </div>
   </section>
 </footer>
 )
}
