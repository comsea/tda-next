'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Header() {
    const [isLoading, setIsLoading] = useState(true);
    const [realisations, setRealisations] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
      fetch(`https://api.tda-archi.com/api/realisations`)
      .then((response) => response.json())
      .then((result) => {
          const fetchedRealisations = result['hydra:member'];
          const firstSlide = {
            title: "Bienvenue sur le site de l'Agence TDA",
            photo: "/images/Accueil/bg.png",
            id: "id"
          }
          setRealisations([firstSlide,...fetchedRealisations]);
          setIsLoading(false);
      })
      .catch((error) => {
          console.error(error);
      });
  }, []);

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % 5); // +1 pour inclure le nouvel élément
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + 5) % 5); // +1 pour inclure le nouvel élément
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 7000); // Change de slide toutes les 2 secondes

        // Nettoyer le timer pour éviter les fuites de mémoire
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <div className="flex items-center justify-center h-full w-full bg-gray-200">
            <div className="relative w-full h-full">
                <div className="absolute inset-0 flex items-center justify-center">
                    {isLoading ? "Chargement en cours" : (
                        <div className="relative w-full h-full overflow-hidden">
                            {realisations.slice(0,5).map((realisation, index) => (
                            <div key={index} className={`absolute w-full h-full opacity-0 transition-opacity ${index === activeIndex? '!opacity-100' : ''}`}>
                                <img src={`${realisation.id === "id"? realisation.photo : "https://api.tda-archi.com/build/images/"+realisation.photo}`} alt="" className='w-full h-full object-cover' />
                                <div className="absolute inset-0 bg-black opacity-50"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-[90%] top-10 z-40 absolute">
                                        <img src="/images/Footer/Logo-TDA.png" alt="Logo TDA blanc" className="lg:w-[100px] w-[50px]" />
                                    </div>
                                    <div className="w-[90%] h-full flex items-center justify-start">
                                        <div className="text-white text-start flex flex-col justify-start items-start space-y-3">
                                            <h2 className="lg:text-6xl text-4xl font-medium uppercase">{realisation.title}</h2>
                                            <Link href={`/realisations/categories/${realisation.id}`} className='bg-white text-[#DF0624] rounded-full lg:py-2 py-1 lg:px-6 px-4'>En savoir plus</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="absolute lg:right-[50px] right-[10px] lg:-bottom-[90px] bottom-[10px] flex items-center justify-center w-auto h-auto">
                    <button className="bg-white rounded-full p-2 mx-2" onClick={prevSlide}>
                        <svg className="lg:w-6 w-3 lg:h-6 h-3 text-[#DF0624]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                        </svg>
                    </button>
                    <button className="bg-white rounded-full p-2 mx-2" onClick={nextSlide}>
                        <svg className="lg:w-6 w-3 lg:h-6 h-3 text-[#DF0624]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
