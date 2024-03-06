'use client'

import Slider from "@/components/Slider"
import { useState } from "react"
import Link from "next/link"

export default function Presentation() {
    const [isHovered1, setIsHovered1] = useState(false)
    const [isHovered2, setIsHovered2] = useState(false)
    const [isHovered3, setIsHovered3] = useState(false)
    const [isHovered4, setIsHovered4] = useState(false)
    const [isHovered5, setIsHovered5] = useState(false)
    const [isHovered6, setIsHovered6] = useState(false)
    const [isHovered7, setIsHovered7] = useState(false)
    
    return(
        <div className="w-[90%] flex flex-col justify-center items-center">
            <div className="w-full flex flex-row items-center justify-center py-12">
                <div className="w-[90%] flex flex-col justify-center items-center text-start">
                    <div className="text-6xl font-bold mb-10 w-full">
                        <h1 className="drop-shadow-[30px_25px_0px_rgba(255,255,255,0.25)]">L'AGENCE TDA</h1>
                        <div className="h-[2px] bg-[#DF0624] w-[300px] z-10"></div>
                    </div>
                    <p>Implantée dans les villes de Charleville-Mézières, Reims et Épernay, TDA n'est pas simplement une agence de maîtrise d'œuvre.  C'est avant tout une histoire façonnée avec passion par Frédéric Bonnet en 2004.</p><br/>
                    <p>Depuis son lancement à Charleville en 2004, l'Agence TDA n'a cessé de croître et d'évoluer. Elle a étendu son influence avec l'inauguration de nouveaux locaux à Reims en 2016, puis à Épernay en 2021. Notre expansion témoigne de notre engagement constant envers l'excellence et notre volonté de répondre aux besoins croissants de nos clients dans toute la région.</p>
                    <div className="text-3xl grid grid-cols-2 gap-y-8 gap-x-44 w-[60%] mt-12">
                        <div className="font-semibold flex flex-row items-center justify-between space-x-4 w-full">
                            <img src="images/Presentation/regle.png" alt="Check" className="w-[20px] h-[20px]" />
                            <p>CONSTRUCTION</p>
                            <img src="images/Presentation/regle.png" alt="Check" className="w-[20px] h-[20px] origin-center -rotate-90" />
                        </div>
                        <div className="font-semibold flex flex-row items-center justify-between space-x-4 w-full">
                            <img src="images/Presentation/regle.png" alt="Check" className="w-[20px] h-[20px]" />
                            <p>RÉHABILITATION</p>
                            <img src="images/Presentation/regle.png" alt="Check" className="w-[20px] h-[20px] origin-center -rotate-90" />
                        </div>
                        <div className="font-semibold flex flex-row items-center justify-between space-x-4 w-full">
                            <img src="images/Presentation/regle.png" alt="Check" className="w-[20px] h-[20px]" />
                            <p>EXTENSION</p>
                            <img src="images/Presentation/regle.png" alt="Check" className="w-[20px] h-[20px] origin-center -rotate-90" />
                        </div>
                        <div className="font-semibold flex flex-row items-center justify-between space-x-4 w-full">
                            <img src="images/Presentation/regle.png" alt="Check" className="w-[20px] h-[20px]" />
                            <p>RÉNOVATION</p>
                            <img src="images/Presentation/regle.png" alt="Check" className="w-[20px] h-[20px] origin-center -rotate-90" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[95%] py-8">
                <Slider />
            </div>
            <div className="w-full py-8 bg-[#242424] flex flex-col justify-center items-center text-center">
                <div className="w-[75%] flex flex-col justify-center items-center space-y-6">
                    <div className="text-6xl font-bold mb-10">
                        <h2 className="drop-shadow-[30px_25px_0px_rgba(255,255,255,0.25)]">NOS PRESTATIONS</h2>
                        <div className="h-[2px] bg-[#DF0624] w-[300px] z-10"></div>
                    </div>
                    <p>Notre agence d'architectes propose une gamme complète de services pour répondre à  l’ensemble de vos besoins. Nous sommes également spécialisés dans les :</p>
                    <div className="flex flex-col justify-center items-center w-full space-y-4 py-6">
                        <div className="flex flex-row justify-center items-center w-full space-x-4">
                            <div className={`bg-[#383838] p-4 rounded-xl w-[28%] h-[250px] flex flex-col justify-center items-center space-y-2 ${isHovered1 ? 'hover:bg-[#DF0624]' : ''}`} onMouseEnter={() => setIsHovered1(true)} onMouseLeave={() => setIsHovered1(false)}>
                                {!isHovered1 && <img src="images/Presentation/conception.png" alt="Conception" />}
                                <p className="font-bold">Conception architecturale</p>
                                {isHovered1 && <p className="text-base transition ease-in-out duration-500">Notre entreprise d'architecture excelle dans la réalisation de diagnostics précis, offrant une expertise pointue pour éclairer et optimiser chaque projet.</p>}
                            </div>
                            <div className={`bg-[#383838] p-4 rounded-xl w-[28%] h-[250px] flex flex-col justify-center items-center space-y-4 ${isHovered2 ? 'hover:bg-[#DF0624]' : ''}`} onMouseEnter={() => setIsHovered2(true)} onMouseLeave={() => setIsHovered2(false)}>
                                {!isHovered2 && <img src="images/Presentation/étude.png" alt="Étude" />}
                                <p>Études de faisabilité</p>
                            </div>
                        </div>
                        <div className="flex flex-rox justify-center items-center w-full space-x-4">
                            <div className={`bg-[#383838] p-4 rounded-xl w-[28%] h-[250px] flex flex-col justify-center items-center space-y-2 ${isHovered3 ? 'hover:bg-[#DF0624]' : ''}`} onMouseEnter={() => setIsHovered3(true)} onMouseLeave={() => setIsHovered3(false)}>
                                {!isHovered3 && <img src="images/Presentation/casque.png" alt="Casque" />}
                                <p>Mission Permis de construire</p>
                            </div>
                            <div className={`bg-[#383838] p-4 rounded-xl w-[28%] h-[250px] flex flex-col justify-center items-center space-y-2 ${isHovered4 ? 'hover:bg-[#DF0624]' : ''}`} onMouseEnter={() => setIsHovered4(true)} onMouseLeave={() => setIsHovered4(false)}>
                                {!isHovered4 && <img src="images/Presentation/maitre-doeuvre.png" alt="Maitre d'Oeuvre" />}
                                <p>Maîtrise d'oeuvre d'exécution</p>
                            </div>
                            <div className={`bg-[#383838] p-4 rounded-xl w-[28%] h-[250px] flex flex-col justify-center items-center space-y-2 ${isHovered5 ? 'hover:bg-[#DF0624]' : ''}`} onMouseEnter={() => setIsHovered5(true)} onMouseLeave={() => setIsHovered5(false)}>
                                {!isHovered5 && <img src="images/Presentation/ordonnancement.png" alt="Ordonnancement" />}
                                <p>Ordonnancement Pilotage Coordination</p>
                            </div>
                        </div>
                        <div className="flex flex-rox justify-center items-center w-full space-x-4">
                            <div className={`bg-[#383838] p-4 rounded-xl w-[28%] h-[250px] flex flex-col justify-center items-center space-y-2 ${isHovered6 ? 'hover:bg-[#DF0624]' : ''}`} onMouseEnter={() => setIsHovered6(true)} onMouseLeave={() => setIsHovered6(false)}>
                                {!isHovered6 && <img src="images/Presentation/expertise.png" alt="Expertise" />}
                                <p>Expertise</p>
                            </div>
                            <div className={`bg-[#383838] p-4 rounded-xl w-[28%] h-[250px] flex flex-col justify-center items-center space-y-2 ${isHovered7 ? 'hover:bg-[#DF0624]' : ''}`} onMouseEnter={() => setIsHovered7(true)} onMouseLeave={() => setIsHovered7(false)}>
                                {!isHovered7 && <img src="images/Presentation/diagnostics.png" alt="Diagnostics" />}
                                <p>Diagnostics</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-center">Vous envisagez de construire un nouvel édifice ? de rénover un bâtiment existant ? ou de développer un projet complexe ? <Link href="/contact" className="underline cursor-pointer">Cliquez dès maintenant ici !</Link></p>
                    <p className="text-center">Avec une approche centrée sur la polyvalence et la qualité, TDA vous accompagne à chaque étape, vous offrant une solution complète et sur mesure pour concrétiser vos idées architecturales.</p>
                </div>
            </div>
            <div className="w-full flex flex-row items-center justify-center py-12">
                <div className="w-[90%] flex flex-col justify-start items-start text-start space-y-8">
                    <div className="text-6xl font-bold mb-10 w-full">
                        <h2 className="drop-shadow-[30px_25px_0px_rgba(255,255,255,0.25)]">NOS CERTIFICATIONS</h2>
                        <div className="h-[2px] bg-[#DF0624] w-[300px] z-10"></div>
                    </div>
                    <p>Car nous cherchons à travailler avec l’excellence, découvrez toutes nos certifications.</p>
                    <div className="w-full flex flex-row justify-between items-center">
                        <div className="w-[30%]">
                            <img src="images/Presentation/certif.png" alt="Certification" className="w-full" />
                        </div>
                        <div className="w-[65%] text-base flex flex-col space-y-6">
                            <div className="flex flex-row items-center space-x-6">
                                <div>
                                    <img src="images/Presentation/macaron.png" alt="Check Certification" />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold mb-2">Planification et coordination Date d'effet</h4>
                                    <p>0301 Ordonnancement-Planification-Coordination (OPC) d’exécution courant</p>
                                    <p>0302 Ordonnancement-Planification-Coordination (OPC) d’Execution complexe</p>
                                    <p>0331 Direction de l’Exécution des Travaux </p>
                                </div>
                            </div>
                            <div className="flex flex-row items-center space-x-6">
                                <div>
                                    <img src="images/Presentation/macaron.png" alt="Check Certification" />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold mb-2">Maîtrise des coûts et coût global</h4>
                                    <p>2202 Maîtrise des coûts en phase de conception et de réalisation</p>
                                    <p>2203 Maîtrise des coûts d’exploitation et de maintenance</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-row justify-between items-start">
                        <div className="w-[48%] text-base flex flex-col space-y-6">
                            <div className="flex flex-row items-center space-x-6">
                                <div>
                                    <img src="images/Presentation/macaron.png" alt="Check Certification" />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold mb-2">Formation - SECILOG AIPR  Concepteur</h4>
                                    <p>Action de prévention (formation à la sécurité et à la prévention des risques)</p>
                                </div>
                            </div>
                            <div className="flex flex-row items-center space-x-6">
                                <div>
                                    <img src="images/Presentation/macaron.png" alt="Check Certification" />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold mb-2">Formation - CREPA</h4>
                                    <p>Conception de bâtiment à basse consommation</p>
                                </div>
                            </div>
                            <div className="flex flex-row items-center space-x-6">
                                <div>
                                    <img src="images/Presentation/macaron.png" alt="Check Certification" />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold mb-2">Certification Nationale Professionnelle</h4>
                                    <p>CCP1 - “ Relation avec le client/le donneur d’ordres ”</p>
                                </div>
                            </div>
                            <div className="flex flex-row items-center space-x-6">
                                <div>
                                    <img src="images/Presentation/macaron.png" alt="Check Certification" />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold mb-2">Stage - IFPP</h4>
                                    <p>“ Qualité environnementale des projets architecturaux et urbains “</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-[48%] text-base flex flex-col space-y-6">
                            <div className="flex flex-row items-center space-x-6">
                                <div>
                                    <img src="images/Presentation/macaron.png" alt="Check Certification" />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold mb-2">Formation - CFD</h4>
                                    <p>Action d’adaptation et de développement des compétences des salariés  </p>
                                </div>
                            </div>
                            <div className="flex flex-row items-center space-x-6">
                                <div>
                                    <img src="images/Presentation/macaron.png" alt="Check Certification" />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold mb-2">Formation QUADRATUS</h4>
                                    <p>Standard - Comptailité</p>
                                </div>
                            </div>
                            <div className="flex flex-row items-center space-x-6">
                                <div>
                                    <img src="images/Presentation/macaron.png" alt="Check Certification" />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold mb-2">Certification - TOSA</h4>
                                    <p>Photoshop</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}