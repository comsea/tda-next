'use client'

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoadingn, setIsLoadingn] = useState(true)
    const [realisations, setRealisations] = useState([])

    useEffect(() => {
        fetch(`https://api.tda-archi.com/api/categoriess`)
        .then((response) => response.json())
        .then((result) => {
            const fetchedRealisations = result['hydra:member'];
            setRealisations(fetchedRealisations);
            setIsLoadingn(false);
        })
        .catch((error) => {
            console.error(error);
        });
    }, []);

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    return(
        <>
            <div className="bg-[#242424] top-0 left-0 fixed lg:h-screen h-[8vh] lg:w-[10%] w-full flex lg:flex-col flex-row text-xl font-semibold justify-center items-center lg:py-[3.5rem] py-4 z-50">
                <div className="w-full flex lg:flex-col flex-row justify-between lg:items-start items-center h-full lg:pl-10 px-10 lg:pr-0">
                    <div>
                        <button onClick={toggleSidebar}><img src="/images/Navbar/menu.png" alt="Menu" className="lg:w-[30px] w-[20px]" /></button>
                    </div>
                    <div className="flex flex-row justify-center items-center space-x-2">
                        <Link href="https://www.facebook.com/techniques.design.architectures?locale=fr_FR" target="_blank"><img src="/images/Navbar/facebookb.png" alt="Facebook" className="lg:w-[30px] w-[20px]" /></Link>
                        <Link href="https://www.linkedin.com/company/techniques-design-architectures/" target="_blank"><img src="/images/Navbar/linkedin.png" alt="Linkedin" className="lg:w-[30px] w-[20px]" /></Link>
                    </div>
                </div>
            </div>
            <div className={` top-0 left-0 w-full bg-black/75 h-screen z-[60] ${isOpen ? 'fixed' : 'hidden'}`}>
                <div className="bg-[#242424] top-0 left-0 h-screen lg:w-[18%] w-full flex flex-col text-xl font-semibold justify-center items-center z-[60] lg:py-[3.5rem] py-4">
                    <div className="w-full flex flex-col justify-between items-start h-full pl-10">
                        <div>
                        <button onClick={toggleSidebar}><img src="/images/Navbar/croix.png" alt="Croix" className="lg:w-[30px] w-[20px]" /></button>
                        </div>
                        <div className="w-full flex flex-col items-start justify-start space-y-4">
                            <Link href="/" onClick={toggleSidebar}>Accueil</Link>
                            <Link href="/presentation" onClick={toggleSidebar}>L'agence TDA</Link>
                            <div className="w-full flex flex-col justify-start items-start space-y-1">
                                <Link href="/realisations" onClick={toggleSidebar}>Nos réalisations</Link>
                                <div className="w-full flex flex-col ml-6 justify-start items-start text-sm font-normal text-[#BBBBBB] space-y-2 pr-4">
                                    {isLoadingn ? 'Chargement en cours' : realisations.map(realisation => (
                                        <Link href={`/realisations/${realisation.id}`} onClick={toggleSidebar}>{realisation.name}</Link>
                                    ))}
                                </div>
                            </div>
                            <Link href="/actualites" onClick={toggleSidebar}>Nos actualités</Link>
                            <Link href="/contact" onClick={toggleSidebar}>Contactez-nous</Link>
                        </div>
                        <div className="flex flex-row justify-center items-center space-x-2">
                            <Link href="https://www.facebook.com/techniques.design.architectures?locale=fr_FR" target="_blank"><img src="/images/Navbar/facebookb.png" alt="Facebook" className="lg:w-[30px] w-[20px]" /></Link>
                            <Link href="https://www.linkedin.com/company/techniques-design-architectures/" target="_blank"><img src="/images/Navbar/linkedin.png" alt="Linkedin" className="lg:w-[30px] w-[20px]" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}