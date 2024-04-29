'use client'

import React, { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';

export default function Header() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [realisations, setRealisations] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`https://api.tda-archi.com/api/categoriess`)
        .then((response) => response.json())
        .then((result) => {
            const fetchedCategories = result['hydra:member'];
            setCategories(fetchedCategories);
            setIsLoading(false);
        })
        .catch((error) => {
            console.error(error);
        });
    }, []);

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

  useEffect(() => {
    if (!isLoading) {
        // Grouper les réalisations par catégorie
        const groupedRealisations = realisations.reduce((acc, realisation) => {
            const categoryId = extractCategoryIdFromUrl(realisation.category);
            if (!acc[categoryId]) {
                acc[categoryId] = [];
            }
            acc[categoryId].push(realisation);
            return acc;
        }, {});

        // Sélectionner la dernière réalisation de chaque groupe
        const lastRealisations = Object.values(groupedRealisations).map(realisations => realisations[realisations.length - 1]);

        setRealisations(lastRealisations);
    }
 }, [isLoading, categories]);

  function extractCategoryIdFromUrl(url) {
      const parts = url.split('/');
      return parts[parts.length - 1]; // This should be the ID
  }


  const processedRealisations = useMemo(() => {
    if (!isLoading) {
        // Grouper les réalisations par catégorie
        const groupedRealisations = realisations.reduce((acc, realisation) => {
            const categoryId = extractCategoryIdFromUrl(realisation.category);
            if (!acc[categoryId]) {
                acc[categoryId] = [];
            }
            acc[categoryId].push(realisation);
            return acc;
        }, {});

        // Sélectionner la dernière réalisation de chaque groupe
        const lastRealisations = Object.values(groupedRealisations).map(realisations => realisations[realisations.length - 1]);

        return lastRealisations;
    }
    return []; // Retourner un tableau vide si les données ne sont pas encore chargées
}, [isLoading, realisations]); // Dépendances

// Utilisez processedRealisations au lieu de realisations pour les opérations suivantes
// Par exemple, pour générer les slides :
const slides = processedRealisations.map(realisation => realisation.title);
const slideImages = processedRealisations.map(realisation => realisation.photo);
const slideUrl = processedRealisations.map(realisation => extractCategoryIdFromUrl(realisation.category));
const test = processedRealisations.map(realisation => realisation.id);

    console.log(categories)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((currentSlide + 1) % categories.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [currentSlide, categories.length]);

    return (
        <div className="flex items-center justify-center h-full w-full bg-gray-200">
            <div className="relative w-full h-full">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full flex justify-center items-center">
                        <img src={`https://api.tda-archi.com/build/images/${slideImages[currentSlide]}`} alt="" className='w-full h-full object-cover' />
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[90%] top-10 z-40 absolute">
                                <img src="/images/Footer/Logo-TDA.png" alt="Logo TDA blanc" className="lg:w-[100px] w-[50px]" />
                            </div>
                            <div className="w-[90%] h-full flex items-center justify-start">
                                <div className="text-white text-start flex flex-col justify-start items-start space-y-3">
                                    <h2 className="lg:text-6xl text-4xl font-medium uppercase">{slides[currentSlide]}</h2>
                                    <Link href={`/realisations/categories/${test[currentSlide]}`} className='bg-white text-[#DF0624] rounded-full lg:py-2 py-1 lg:px-6 px-4'>En savoir plus</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute lg:right-[50px] right-[10px] lg:-bottom-[90px] bottom-[10px] flex items-center justify-center w-auto h-auto">
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
                </div>
            </div>
        </div>
    );
}
