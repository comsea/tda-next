'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Header() {
    const [isLoading, setIsLoading] = useState(true);
    const [realisations, setRealisations] = useState([]);

    useEffect(() => {
      fetch(`https://api.tda-archi.com/api/realisations`)
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

    return (
        <div className="flex items-center justify-center h-full w-full bg-gray-200">
            <div className="relative w-full h-full">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full flex justify-center items-center">
                        <img src="images/Accueil/bg.png" alt="" className='w-full h-full object-cover' />
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[90%] top-10 z-40 absolute">
                                <img src="/images/Footer/Logo-TDA.png" alt="Logo TDA blanc" className="lg:w-[100px] w-[50px]" />
                            </div>
                            <div className="w-[90%] h-full flex items-center justify-start">
                                <div className="text-white text-start flex flex-col justify-start items-start space-y-3">
                                    <h2 className="lg:text-6xl text-4xl font-medium uppercase">Bienvenue sur l'Agence TDA !!</h2>
                                    <Link href={`/presentation`} className='bg-white text-[#DF0624] rounded-full lg:py-2 py-1 lg:px-6 px-4'>En savoir plus</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<div className="absolute lg:right-[50px] right-[10px] lg:-bottom-[90px] bottom-[10px] flex items-center justify-center w-auto h-auto">
                    <button
                        className="bg-white rounded-full p-2 mx-2"
                        onClick={() => setCurrentSlide((currentSlide - 1 + categories.length) % categories.length)}
                    >
                        <svg
                            className="lg:w-6 w-3 lg:h-6 h-3 text-[#DF0624]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>
                    <button
                        className="bg-white rounded-full p-2 mx-2"
                        onClick={() => setCurrentSlide((currentSlide + 1) % categories.length)}
                    >
                        <svg
                            className="lg:w-6 w-3 lg:h-6 h-3 text-[#DF0624]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
    </div>*/}
            </div>
        </div>
    );
}
