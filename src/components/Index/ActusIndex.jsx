'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useMediaQuery } from "framer-motion"
import { fadeIn } from "@/app/utils/motion";

export default function ActusIndex() {
    const [isLoading, setIsLoading] = useState(true)
    const [actualites, setActualites] = useState([])
    const [realisations, setRealisations] = useState([])
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        // Fonction pour détecter si l'écran est en mode mobile
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        // Appel initial pour définir l'état initial
        checkMobile();

        // Ajoutez l'écouteur d'événement
        window.addEventListener('resize', checkMobile);

        // Supprimez l'écouteur d'événement lors du nettoyage
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        fetch(`https://api.tda-archi.com/api/actualites`)
        .then((response) => response.json())
        .then((result) => {
            const fetchedActualites = result['hydra:member'];
            const sortedActualites = fetchedActualites.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            // Suppression du tri par date
            setActualites(sortedActualites);
            setIsLoading(false);
        })
        .catch((error) => {
            console.error(error);
        });
    }, []);

    const variants = isMobile ? fadeIn("right", "spring", 0.2, 0.8) : fadeIn("left", "spring", 0.2, 0.8);

    return (
            <div className="w-full flex flex-col items-center justify-center py-12">
                <div className="w-[90%] flex lg:flex-row flex-col justify-between items-start text-start">
                    <div className="lg:w-[48%] w-full flex flex-col justify-start items-start space-y-6">
                        <div initial="hidden" whileInView="show" variants={fadeIn("right", "spring", 0.2, 0.8)}  className="lg:text-6xl text-4xl font-bold mb-4 relative w-full">
                            <h2 className="underline decoration-[#DF0624] lg:underline-offset-8 underline-offset-4 lg:decoration-2 decoration-1">LES ACTUALITÉS</h2>
                            <p className="absolute text-[#494949] -z-40 lg:ml-12 ml-4 lg:top-8 top-6">LES ACTUALITÉS</p>
                        </div>
                        {isLoading ? 'Chargement en cours' : actualites.slice(1,2).map(actualite => (
                            <motion.div initial="hidden" whileInView="show" variants={fadeIn("right", "spring", 0.2, 0.8)} className="w-full lg:p-12 px-4 py-8 bg-[#242424] flex flex-col justify-start items-start space-y-2 relative">
                                <img src={`https://api.tda-archi.com/build/images/${actualite.photo}`} alt="Article" className="w-full h-[250px] object-cover" />
                                <p className="lg:text-base text-sm text-[#BBBBBB]">{new Date(actualite.createdAt).toLocaleString('fr-FR', { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>
                                <h4 className="lg:text-3xl text-2xl font-semibold uppercase">{actualite.title}</h4>
                                <p className="line-clamp-3 lg:text-xl text-lg" dangerouslySetInnerHTML={{ __html: actualite.description }} />
                                <div className="absolute flex flex-row bottom-0 left-0 text-black text-xs lg:w-1/2 w-[60%]">
                                    <div className="w-1/4 h-[30px] bg-black">
                                        <div className="w-full h-full bg-[#242424] rounded-br-3xl"></div>
                                    </div>
                                    <div className="w-1/2 h-[30px] bg-black text-white rounded-t-xl flex flex-row justify-center items-center">
                                        <div className="underline decoration-[#DF0624] underline-offset-4 decoration-2">
                                            <Link href={`/actualites/${actualite.id}`}>Voir l'article</Link>
                                        </div>
                                    </div>
                                    <div className="w-1/4 h-[30px] bg-black">
                                        <div className="w-full h-full bg-[#242424] rounded-bl-3xl"></div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                        {isLoading ? 'Chargement en cours' : actualites.slice(3,4).map(actualite => (
                        <motion.div initial="hidden" whileInView="show" variants={fadeIn("right", "spring", 0.2, 0.8)} className="w-full lg:p-12 px-4 py-8 bg-[#242424] flex flex-col justify-start items-start space-y-2 relative">
                            <div className="absolute flex flex-row top-0 right-0 text-black text-xs lg:w-1/2 w-[60%]">
                                <div className="w-1/4 h-[30px] bg-black">
                                    <div className="w-full h-full bg-[#242424] rounded-tr-3xl"></div>
                                </div>
                                <div className="w-1/2 h-[30px] bg-black text-white rounded-b-xl flex flex-row justify-center items-center">
                                    <div className="underline decoration-[#DF0624] underline-offset-4 decoration-2">
                                        <Link href={`/actualites/${actualite.id}`}>Voir l'article</Link>
                                    </div>
                                </div>
                                <div className="w-1/4 h-[30px] bg-black">
                                    <div className="w-full h-full bg-[#242424] rounded-tl-3xl"></div>
                                </div>
                            </div>
                            <img src={`https://api.tda-archi.com/build/images/${actualite.photo}`} alt="Article" className="w-full h-[250px] object-cover" />
                            <p className="lg:text-base text-sm text-[#BBBBBB]">{new Date(actualite.createdAt).toLocaleString('fr-FR', { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>
                            <h4 className="lg:text-3xl text-2xl font-semibold uppercase">{actualite.title}</h4>
                        </motion.div>
                        ))}
                    </div>
                    <div className="lg:w-[48%] w-full flex flex-col justify-start items-start space-y-6 mt-[8px]">
                        {isLoading ? 'Chargement en cours' : actualites.slice(0,1).map(actualite => (
                            <motion.div initial="hidden" whileInView="show" variants={variants} className="w-full lg:p-12 px-4 py-8 bg-[#242424] flex flex-col justify-start items-start space-y-2 relative">
                                <div className="absolute flex flex-row top-0 left-0 text-black text-xs  lg:w-1/2 w-[60%]">
                                    <div className="w-1/4 h-[30px] bg-black">
                                        <div className="w-full h-full bg-[#242424] rounded-tr-3xl"></div>
                                    </div>
                                    <div className="w-1/2 h-[30px] bg-black text-white rounded-b-xl flex flex-row justify-center items-center">
                                        <div className="underline decoration-[#DF0624] underline-offset-4 decoration-2">
                                            <Link href={`/actualites/${actualite.id}`}>Voir l'article</Link>
                                        </div>
                                    </div>
                                    <div className="w-1/4 h-[30px] bg-black">
                                        <div className="w-full h-full bg-[#242424] rounded-tl-3xl"></div>
                                    </div>
                                </div>
                                <img src={`https://api.tda-archi.com/build/images/${actualite.photo}`} alt="Article" className="w-full h-[250px] object-cover" />
                                <p className="lg:text-base text-sm text-[#BBBBBB]">{new Date(actualite.createdAt).toLocaleString('fr-FR', { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>
                                <h4 className="lg:text-3xl text-2xl font-semibold uppercase">{actualite.title}</h4>
                                <p className="line-clamp-2 lg:text-xl text-lg" dangerouslySetInnerHTML={{ __html: actualite.description }} />
                            </motion.div>
                        ))}
                        {isLoading ? 'Chargement en cours' : actualites.slice(2,3).map(actualite => (
                            <motion.div initial="hidden" whileInView="show" variants={variants} className="w-full lg:p-12 px-4 py-8 bg-[#242424] flex flex-col justify-start items-start space-y-2 relative">
                                <img src={`https://api.tda-archi.com/build/images/${actualite.photo}`} alt="Article" className="w-full h-[250px] object-cover" />
                                <p className="lg:text-base text-sm text-[#BBBBBB]">{new Date(actualite.createdAt).toLocaleString('fr-FR', { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>
                                <h4 className="lg:text-3xl text-2xl font-semibold uppercase">{actualite.title}</h4>
                                <p className="line-clamp-4 lg:text-xl text-lg" dangerouslySetInnerHTML={{ __html: actualite.description }} />
                                <div className="absolute flex flex-row bottom-0 right-0 text-black text-xs lg:w-1/2 w-[60%]">
                                    <div className="w-1/4 h-[30px] bg-black">
                                        <div className="w-full h-full bg-[#242424] rounded-br-3xl"></div>
                                    </div>
                                    <div className="w-1/2 h-[30px] bg-black text-white rounded-t-xl flex flex-row justify-center items-center">
                                        <div className="underline decoration-[#DF0624] underline-offset-4 decoration-2">
                                            <Link href={`/actualites/${actualite.id}`}>Voir l'article</Link>
                                        </div>
                                    </div>
                                    <div className="w-1/4 h-[30px] bg-black">
                                        <div className="w-full h-full bg-[#242424] rounded-bl-3xl"></div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
    )
}