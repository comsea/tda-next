'use client'

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Accordion() {
    const [activePaneIndex, setActivePaneIndex] = useState(1);
    const [isLoading, setIsLoading] = useState(true)
    const [realisations, setRealisations] = useState([])

    const handlePaneClick = (realisation) => {
      setActivePaneIndex(realisation);
    };

    useEffect(() => {
        fetch(`https://api.tda-archi.com/api/categoriess`)
        .then((response) => response.json())
        .then((result) => {
            const fetchedRealisations = result['hydra:member'];
            setRealisations(fetchedRealisations);
            setIsLoading(false);
        })
        .catch((error) => {
            console.error(error);
        });
    }, []);

    return(
        <div className="antialiased w-full flex flex-col font-sans items-stretch justify-center mt-12 sm:flex-row sm:items-center lg:h-[60vh] h-[80vh]">
            <div className="flex flex-col flex-grow items-stretch w-full sm:flex-row h-full">
                {isLoading ? 'Chargement en cours' : realisations.map(realisation => (
                    <div key={realisation.id}
                     className={`h-full relative cursor-pointer duration-700 ease-in-out flex flex-grow justify-center items-center min-h-14 min-w-14 overflow-hidden pane transition-all ${activePaneIndex === realisation.id ? 'active' : ''}`}
                     onClick={() => handlePaneClick(realisation.id)}>
                        <div
                            style={{
                                position: 'absolute',
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                height: '100%',
                                backgroundRepeat: 'no-repeat',
                                transition: 'all 700ms ease-in-out',
                                zIndex: 10,
                                backgroundImage: `url('https://api.tda-archi.com/build/images/${realisation.photo}')`,
                                width: '100%',
                                filter: activePaneIndex === realisation.id ? 'grayscale(0)' : 'grayscale(1)',
                            }}
                        ></div>
                        {activePaneIndex !== realisation.id && (
                            <div class="absolute inset-0 bg-black opacity-50 w-full h-full z-20"></div>
                        )}
                        <div class="absolute top-0 duration-700 ease-in-out flex label left-0 mt-2 ml-3 transition-all z-30 sm:mb-3 sm:ml-2">
                            {activePaneIndex == realisation.id ? 
                                <div class="flex h-10 icon items-center justify-center mr-3 rounded-full text-[#DF0624] w-10"><p>{realisation.id}</p></div>
                            :
                                <div class="flex h-10 icon items-center justify-center mr-3 rounded-full text-[#BBBBBB] w-10"><p>{realisation.id}</p></div>
                            }
                            {activePaneIndex == realisation.id && (
                            <div class="content flex flex-col justify-center leading-tight text-white whitespace-pre">
                                <div class="ease-in-out font-bold duration-700 opacity-0 relative transform transition-all translate-x-8 uppercase">{realisation.name}</div>
                            </div>
                            )}
                        </div>
                        <div class="absolute duration-700 ease-in-out flex label transition-all z-30 sm:mb-3 sm:ml-2">
                            <div class="content flex flex-col justify-center leading-tight text-white whitespace-pre">
                                <div class="ease-in-out font-bold duration-700 opacity-0 relative transform transition-all translate-x-8 rounded-full bg-[#717171]/50 py-6 px-6 hover:scale-150">
                                    <div href={`/realisations/${realisation.id}`} className="rounded-full bg-[#717171]/50 py-6 px-6 hover:scale-125 ease-in-out duration-500">
                                        <Link href={`/realisations/${realisation.id}`}><img src="images/Accueil/search.webp" alt="Recherche" className="w-[30px]" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {activePaneIndex !== realisation.id && (
                            <div class="absolute bottom-[45%] left-0 w-full flex items-center justify-center -rotate-90 text-white z-50">
                                <p className="whitespace-nowrap">{realisation.name}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}