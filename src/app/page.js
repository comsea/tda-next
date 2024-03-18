'use client'

import Header from "@/components/Index/Header";
import ActusIndex from "@/components/Index/ActusIndex";
import Presentation from "@/components/Index/Presentation";
import Chiffres from "@/components/Index/Chiffres";
import Innovation from "@/components/Index/Innovation";
import Prestations from "@/components/Index/Prestations";
import DivAccordeon from "@/components/Index/DivAccordeon";


export default function Home() {
  return (
    <div className="lg:w-[90%] w-full flex flex-col justify-start items-start">
        <div className="w-full lg:h-screen h-[60vh] flex flex-col justify-start items-start lg:mt-0 mt-[4.5rem]">
            <div className="w-full h-[85%] flex justify-center items-center relative">
                <Header />
            </div>
            <div className="w-full h-[15%] bg-[#242424] flex flex-row justify-between items-center px-6 lg:text-xl text-base">
                <p className="underline decoration-[#DF0624] lg:underline-offset-8 underline-offset-4 lg:decoration-2 decoration-1">TECHNIQUES DESIGN ARCHITECTURES | ARDENNES & MARNE</p>
            </div>
        </div>
        <div className="w-full">
            <Presentation className="w-full" />
        </div>
        <div className="w-full">
            <Chiffres />
        </div>
        <div className="w-full">
            <Innovation />
        </div>
        <div className="w-full">
            <Prestations />
        </div>
        <div className="w-full">
            <DivAccordeon />
        </div>
        <div className="w-full">
            <ActusIndex />
        </div>
    </div>
  );
}
