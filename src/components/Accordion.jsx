'use client'

import { useState } from "react";
import Link from "next/link";

export default function Accordion() {
    const [activePaneIndex, setActivePaneIndex] = useState(0);

    const handlePaneClick = (index) => {
      setActivePaneIndex(index);
    };

    return(
        <div className="antialiased w-full flex flex-col font-sans items-stretch justify-center mt-12 sm:flex-row sm:items-center h-[60vh]">
            <div className="flex flex-col flex-grow items-stretch w-full sm:flex-row h-full">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                    <div key={index}
                     className={`h-full relative cursor-pointer duration-700 ease-in-out flex flex-grow justify-center items-center min-h-14 min-w-14 overflow-hidden pane transition-all ${activePaneIndex === index ? 'active' : ''}`}
                     onClick={() => handlePaneClick(index)}>
                        <div class="absolute background bg-center bg-cover h-full bg-purple-500 bg-[url('http://localhost:3000/images/Accueil/bg.png')] bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10"></div>
                        {activePaneIndex !== index && (
                            <div class="absolute inset-0 bg-black opacity-50 w-full h-full z-20"></div>
                        )}
                        <div class="absolute top-0 duration-700 ease-in-out inset-x-0 opacity-0 shadow transform transition-all z-20 h-1/2 translate-y-1/2"></div>
                        <div class="absolute top-0 duration-700 ease-in-out flex label left-0 mt-2 ml-3 transition-all z-30 sm:mb-3 sm:ml-2">
                            {activePaneIndex == index ? 
                                <div class="flex h-10 icon items-center justify-center mr-3 rounded-full text-[#DF0624] w-10"><p>{index}</p></div>
                            :
                                <div class="flex h-10 icon items-center justify-center mr-3 rounded-full text-[#BBBBBB] w-10"><p>{index}</p></div>
                            }
                            <div class="content flex flex-col justify-center leading-tight text-white whitespace-pre">
                                <div class="ease-in-out font-bold duration-700 opacity-0 relative transform transition-all translate-x-8">ENSEIGNEMENT ET LOISIR</div>
                            </div>
                        </div>
                        <div class="absolute duration-700 ease-in-out flex label transition-all z-30 sm:mb-3 sm:ml-2">
                            <div class="content flex flex-col justify-center leading-tight text-white whitespace-pre">
                                <div class="ease-in-out font-bold duration-700 opacity-0 relative transform transition-all translate-x-8 rounded-full bg-[#717171]/50 py-6 px-6 hover:scale-150">
                                    <div href="/realisations/enseignement" className="rounded-full bg-[#717171]/50 py-6 px-6 hover:scale-125 ease-in-out duration-500">
                                        <Link href="/realisations/enseignement"><img src="images/Accueil/search.png" alt="Recherche" className="w-[30px]" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}