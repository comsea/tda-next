'use client'

import Link from "next/link"
import { useState, useEffect } from "react"

export default function Footer() {
    const [isLoadingf, setIsLoadingf] = useState(true)
    const [realisations, setRealisations] = useState([])

    useEffect(() => {
        fetch(`https://api.tda-archi.com/api/categoriess`)
        .then((response) => response.json())
        .then((result) => {
            const fetchedRealisations = result['hydra:member'];
            setRealisations(fetchedRealisations);
            setIsLoadingf(false);
        })
        .catch((error) => {
            console.error(error);
        });
    }, []);

    return(
        <div className="w-full flex flex-col justify-center items-center relative">
            <div className="w-full h-full relative py-10 flex flex-row justify-center items-center">
                <img src="/images/Footer/footer.png" alt="Background Footer" className="lg:w-[50%] w-full h-full absolute top-0 left-0 object-cover -z-10" />
                <div className="w-[90%] h-full flex lg:flex-row flex-col lg:items-start items-center justify-center lg:justify-between lg:space-x-24 space-y-8 lg:space-y-0">
                    <div className="flex flex-col justify-center items-center space-y-10 text-center">
                        <img src="/images/Footer/Logo-TDA.png" alt="Logo TDA blanc" className="lg:w-[350px] w-[60%]" />
                        <p>CHARLEVILLE-MÉZIÈRES <span className="text-[#DF0624]">|</span> EPERNAY <span className="text-[#DF0624]">|</span> REIMS</p>
                    </div>
                    <div className="flex flex-col items-start space-y-1 lg:text-lg text-base w-full lg:w-auto lg:px-0 px-10">
                        <Link href="/realisations" className="hover:underline">Réalisations</Link>
                        {isLoadingf ? 'Chargement en cours' : realisations.map(realisation => (
                            <Link href={`/realisations/${realisation.id}`} className="text-[#BBBBBB] hover:underline lg:text-sm text-xs">{realisation.name}</Link>
                        ))}
                    </div>
                    <div className="flex lg:flex-row items-start justify-start flex-col lg:space-x-6 relative lg:text-lg text-base w-full h-full lg:w-auto lg:space-y-0 space-y-8 lg:px-0 px-10">
                        <div className="lg:h-[200px] h-[4px] lg:w-[2px] w-[70%] bg-[#DF0624]"></div>
                        <div className="flex flex-col items-start space-y-1 w-full">
                            <Link href="/presentation" className="hover:underline">Présentation</Link>
                            <Link href="/actualites" className="hover:underline">Actualités</Link>
                            <Link href="/contact" className="hover:underline">Contact</Link>
                            <Link href="/mentions-legales" className="hover:underline">Mentions légales</Link>
                            <Link href="/politique-de-confidentialite" className="hover:underline">Politique de confidentialité</Link>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-1 lg:text-lg text-base lg:pb-0 pb-4 items-center">
                        <p>SUIVEZ-NOUS</p>
                        <div className="flex flex-row space-x-2">
                            <a href="https://www.facebook.com/techniques.design.architectures?locale=fr_FR" target="_blank" rel="noreferrer"><img src="/images/Footer/facebookb.png" alt="Facebook" className="lg:w-auto w-[30px]" /></a>
                            <a href="https://www.linkedin.com/company/techniques-design-architectures/" target="_blank" rel="noreferrer"><img src="/images/Footer/linkedin.png" alt="Linkedin" className="lg:w-auto w-[30px]" /></a>
                        </div>
                    </div>
                </div>
                <div className="absolute flex lg:flex-col flex-row lg:h-full lg:right-0 bottom-0 text-black text-xs w-full lg:w-auto">
                    <div className="lg:w-[30px] w-[20%] lg:h-[20%] h-[30px] bg-white">
                        <div className="lg:w-[30px] w-full h-full bg-black rounded-br-3xl"></div>
                    </div>
                    <div className="lg:w-[30px] w-[60%] lg:h-[60%] h-[30px] bg-white lg:rounded-l-xl rounded-t-xl lg:rounded-t-none lg:rounded-tl-xl flex flex-row justify-center items-center">
                        <div className="lg:-rotate-90 underline decoration-[#DF0624] underline-offset-4 decoration-2">
                            <Link href="/">Accueil</Link>
                        </div>
                    </div>
                    <div className="lg:w-[30px] w-[20%] lg:h-[20%] h-[30px] bg-white">
                        <div className="lg:w-[30px] w-full h-full bg-black lg:rounded-tr-3xl rounded-bl-3xl lg:rounded-bl-none"></div>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center text-center py-4 lg:text-base text-sm font-normal text-[#BBBBBB] space-y-4">
                <div className="flex flex-col justify-center items-center">
                    <p>Techniques Design Architectures</p>
                    <div className="flex lg:flex-row flex-col justify-center items-center lg:space-x-6 lg:space-y-0 px-4">
                        <div className="flex flex-row items-center lg:space-x-2">
                            <img src="/images/Footer/localisation.png" alt="Localisation" className="w-[15px]" />
                            <p>Siège social : 9 Rue de l'Abattoir, 08000 Charleville-Mézières</p>
                        </div>
                        <div className="flex flex-row items-center space-x-2">
                            <img src="/images/Footer/tel.png" alt="Localisation" className="w-[15px]" />
                            <p>03 24 57 42 19</p>
                        </div>
                    </div>
                </div>
                <p className="text-sm font-light">Tous droits réservés © 2024 Copyright : <a href="https://comsea.fr" target="_blank" rel="noreferrer" className="hover:underline">Comsea</a></p>
            </div>
        </div>
    )
}