'use client'

import { useState } from "react"
import Link from "next/link"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    return(
        <>
            <div className="bg-[#242424] top-0 left-0 fixed h-screen w-[10%] flex flex-col text-xl font-semibold justify-center items-center py-10">
                <div className="w-full flex flex-col justify-between items-start h-full pl-10">
                    <div>
                        <button onClick={toggleSidebar}><img src="/images/Navbar/menu.png" alt="Menu" className="w-[30px]" /></button>
                    </div>
                    <div className="flex flex-row justify-center items-center space-x-2">
                        <Link href="https://www.facebook.com/techniques.design.architectures?locale=fr_FR" target="_blank"><img src="/images/Navbar/facebookb.png" alt="Facebook" className="w-[30px]" /></Link>
                        <Link href="https://www.linkedin.com/company/techniques-design-architectures/" target="_blank"><img src="/images/Navbar/linkedin.png" alt="Linkedin" className="w-[30px]" /></Link>
                    </div>
                </div>
            </div>
            <div className={`bg-[#242424] top-0 left-0 h-screen w-[15%] flex flex-col text-xl font-semibold justify-center items-center z-[60] py-10 ${isOpen ? 'fixed' : 'hidden'}`}>
                <div className="w-full flex flex-col justify-between items-start h-full pl-10">
                    <div>
                    <button onClick={toggleSidebar}><img src="/images/Navbar/croix.png" alt="Croix" className="w-[30px]" /></button>
                    </div>
                    <div className="w-full flex flex-col items-start justify-start space-y-4">
                        <Link href="/" onClick={toggleSidebar}>Accueil</Link>
                        <Link href="/presentation" onClick={toggleSidebar}>L'agence TDA</Link>
                        <div className="w-full flex flex-col justify-start items-start space-y-1">
                            <Link href="/realisations" onClick={toggleSidebar}>Nos réalisations</Link>
                            <div className="w-full flex flex-col ml-6 justify-start items-start text-lg font-normal text-[#BBBBBB] space-y-1">
                                <Link href="/realisations" onClick={toggleSidebar}>Enseignement</Link>
                                <Link href="/realisations" onClick={toggleSidebar}>Loisir</Link>
                                <Link href="/realisations" onClick={toggleSidebar}>Logement</Link>
                                <Link href="/realisations" onClick={toggleSidebar}>Tertiaire</Link>
                                <Link href="/realisations" onClick={toggleSidebar}>Santé</Link>
                                <Link href="/realisations" onClick={toggleSidebar}>Public</Link>
                            </div>
                        </div>
                        <Link href="/actualites" onClick={toggleSidebar}>Nos actualités</Link>
                        <Link href="/contact" onClick={toggleSidebar}>Contactez-nous</Link>
                    </div>
                    <div className="flex flex-row justify-center items-center space-x-2">
                        <Link href="https://www.facebook.com/techniques.design.architectures?locale=fr_FR" target="_blank"><img src="/images/Navbar/facebookb.png" alt="Facebook" className="w-[30px]" /></Link>
                        <Link href="https://www.linkedin.com/company/techniques-design-architectures/" target="_blank"><img src="/images/Navbar/linkedin.png" alt="Linkedin" className="w-[30px]" /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}