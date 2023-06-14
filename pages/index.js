import Image from "next/image";
import { useEffect } from "react";

import AOS from "aos";

import SectionFour from "@/components/home/SectionFour";
import SectionOne from "@/components/home/SectionOne";
import SectionThree from "@/components/home/SectionThree";
import SectionTwo from "@/components/home/SectionTwo";

import handleWhatsAppClick from "@/helpers/whatsapp";

import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {  
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
    <Image
        src="/images/for-sale.png"
        alt="for sale"
        width={200}
        priority
        loading="eager"
        height={200}
        onClick={handleWhatsAppClick} 
        className="h-auto w-auto fixed bottom-0 right-10 z-20 cursor-pointer"
      /> 
     <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </>
  );
}
