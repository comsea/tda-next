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
        <div className="lg:w-[90%] w-full flex flex-col justify-center items-center">
            <div className="w-full flex flex-row items-center justify-center lg:py-12 py-24">
                <div className="w-[90%] flex flex-col justify-center items-center text-start">
                    <div className="lg:text-6xl text-4xl font-bold mb-10 w-full relative">
                        <h1 className="underline decoration-[#DF0624] lg:underline-offset-8 underline-offset-4 lg:decoration-2 decoration-1">L'AGENCE TDA</h1>
                        <p className="absolute text-[#494949] -z-40 lg:ml-12 ml-4 lg:top-8 top-6">L'AGENCE TDA</p>
                    </div>
                    <p>Implantée dans les villes de Charleville-Mézières, Reims et Épernay, TDA n'est pas simplement une agence de maîtrise d'œuvre.  C'est avant tout une histoire façonnée avec passion par Frédéric Bonnet en 2004.</p><br/>
                    <p>Depuis son lancement à Charleville-Mézières en 2004, l'Agence TDA n'a cessé de croître et d'évoluer. Elle a étendu son influence avec l'inauguration de nouveaux locaux à Reims en 2016, puis à Épernay en 2021. Notre expansion témoigne de notre engagement constant envers l'excellence et notre volonté de répondre aux besoins croissants de nos clients dans toute la région.</p>
                    <div className="lg:text-3xl text-2xl grid lg:grid-cols-2 grid-cols-1 gap-y-8 gap-x-44 lg:w-[60%] w-[90%] mt-12">
                    </div>
                </div>
            </div>
            <div className="w-[95%] py-8">
                <Slider />
            </div>
            <div className="w-full py-8 bg-[#242424] flex flex-col justify-center items-center text-center">
                <div className="w-[75%] flex flex-col justify-center items-center space-y-6">
                    <div className="lg:text-6xl text-4xl font-bold mb-10 w-full flex lg:justify-center justify-start lg:items-center items-start relative">
                        <h2 className="underline decoration-[#DF0624] lg:underline-offset-8 underline-offset-4 lg:decoration-2 decoration-1 z-10">NOS PRESTATIONS</h2>
                        <p className="absolute text-[#494949] lg:ml-24 ml-4 lg:top-8 top-6">NOS PRESTATIONS</p>
                    </div>
                    <div className="flex flex-col justify-center items-center w-full space-y-4 py-6">
                        <div className="flex lg:flex-row flex-col justify-center items-center w-full lg:space-x-4 lg:space-y-0 space-y-4">
                            <div className={`bg-[#383838] px-4 py-10 rounded-xl lg:w-[28%] w-[90%] lg:h-[300px] h-[250px] flex flex-col justify-between items-center space-y-2 ${isHovered1 ? 'hover:bg-[#DF0624] hover:justify-center' : ''}`} onMouseEnter={() => setIsHovered1(true)} onMouseLeave={() => setIsHovered1(false)}>
                                {!isHovered1 && <img src="images/Presentation/conception.png" alt="Conception" />}
                                <p className="font-bold">Conception architecturale</p>
                                {isHovered1 && <p className="lg:text-base text-sm transition ease-in-out duration-500">Nous élaborons les plans en tenant compte des besoins du client, des contraintes techniques et réglementaires, ainsi que des considérations esthétiques et fonctionnelles.</p>}
                            </div>
                            <div className={`bg-[#383838] px-4 py-10 rounded-xl lg:w-[28%] w-[90%] lg:h-[300px] h-[250px] flex flex-col justify-between items-center space-y-4 ${isHovered2 ? 'hover:bg-[#DF0624] hover:justify-center' : ''}`} onMouseEnter={() => setIsHovered2(true)} onMouseLeave={() => setIsHovered2(false)}>
                                {!isHovered2 && <img src="images/Presentation/étude.png" alt="Étude" />}
                                <p className="font-bold">Études de faisabilité</p>
                                {isHovered2 && <p className="text-base transition ease-in-out duration-500">Nous évaluons la viabilité des projets sur les plans technique, financier et organisationnel, ce qui nous permet de prendre des décisions éclairées quant à leur faisabilité.</p>}
                            </div>
                        </div>
                        <div className="flex lg:flex-row flex-col justify-center items-center w-full lg:space-x-4 lg:space-y-0 space-y-4">
                            <div className={`bg-[#383838] px-4 py-10 rounded-xl lg:w-[28%] w-[90%] lg:h-[300px] h-[250px] flex flex-col justify-between items-center space-y-2 ${isHovered3 ? 'hover:bg-[#DF0624] hover:justify-center' : ''}`} onMouseEnter={() => setIsHovered3(true)} onMouseLeave={() => setIsHovered3(false)}>
                                {!isHovered3 && <img src="images/Presentation/casque.png" alt="Casque" />}
                                <p className="font-bold">Mission Permis de construire</p>
                                {isHovered3 && <p className="lg:text-base text-sm transition ease-in-out duration-500">Nous préparons et soumettons les documents nécessaires aux autorités compétentes afin d'obtenir l'autorisation légale de construire un bâtiment ou d'effectuer des modifications sur une structure existante, conformément aux règlements d'urbanisme et de construction.</p>}
                            </div>
                            <div className={`bg-[#383838] px-4 py-10 rounded-xl lg:w-[28%] w-[90%] lg:h-[300px] h-[250px] flex flex-col justify-between items-center space-y-2 ${isHovered4 ? 'hover:bg-[#DF0624] hover:justify-center' : ''}`} onMouseEnter={() => setIsHovered4(true)} onMouseLeave={() => setIsHovered4(false)}>
                                {!isHovered4 && <img src="images/Presentation/maitre-doeuvre.png" alt="Maitre d'Oeuvre" />}
                                <p className="font-bold">Maîtrise d'oeuvre d'exécution</p>
                                {isHovered4 && <p className="lg:text-base text-sm transition ease-in-out duration-500">Nous supervisons la réalisation concrète d'un projet de construction, en veillant à la conformité des travaux par rapport aux plans, à la qualité des matériaux utilisés et au respect du budget alloué.</p>}
                            </div>
                            <div className={`bg-[#383838] px-4 py-10 rounded-xl lg:w-[28%] w-[90%] lg:h-[300px] h-[250px] flex flex-col justify-between items-center space-y-2 ${isHovered5 ? 'hover:bg-[#DF0624] hover:justify-center' : ''}`} onMouseEnter={() => setIsHovered5(true)} onMouseLeave={() => setIsHovered5(false)}>
                                {!isHovered5 && <img src="images/Presentation/ordonnancement.png" alt="Ordonnancement" />}
                                <p className="font-bold">Ordonnancement Pilotage Coordination</p>
                                {isHovered5 && <p className="lg:text-base text-sm transition ease-in-out duration-500">Nous assurons une gestion efficace du chantier en planifiant les tâches, en supervisant les intervenants et en assurant la coordination afin de garantir un projet de construction fluide tout en respectant les délais et les contraintes budgétaires.</p>}
                            </div>
                        </div>
                        <div className="flex lg:flex-row flex-col justify-center items-center w-full lg:space-x-4 lg:space-y-0 space-y-4">
                            <div className={`bg-[#383838] px-4 py-10 rounded-xl lg:w-[28%] w-[90%] lg:h-[300px] h-[250px] flex flex-col justify-between items-center space-y-2 ${isHovered6 ? 'hover:bg-[#DF0624] hover:justify-center' : ''}`} onMouseEnter={() => setIsHovered6(true)} onMouseLeave={() => setIsHovered6(false)}>
                                {!isHovered6 && <img src="images/Presentation/expertise.png" alt="Expertise" />}
                                <p className="font-bold">Expertise</p>
                                {isHovered6 && <p className="lg:text-base text-sm transition ease-in-out duration-500">Nous recherchons les pathologies sur un bâtiment afin d'évaluer les réparations et d'aider nos clients dans le cadre d'une expertise judiciaire, d'une contre expertise d'assuré ou d'une expertise amiable.</p>}
                            </div>
                            <div className={`bg-[#383838] px-4 py-10 rounded-xl lg:w-[28%] w-[90%] lg:h-[300px] h-[250px] flex flex-col justify-between items-center space-y-2 ${isHovered7 ? 'hover:bg-[#DF0624] hover:justify-center' : ''}`} onMouseEnter={() => setIsHovered7(true)} onMouseLeave={() => setIsHovered7(false)}>
                                {!isHovered7 && <img src="images/Presentation/diagnostics.png" alt="Diagnostics" />}
                                <p className="font-bold">Diagnostics</p>
                                {isHovered7 && <p className="lg:text-base text-sm transition ease-in-out duration-500">Nous évaluons l'état global d'un bâtiment afin de permettre aux maîtres d'ouvrages de prendre des décisions éclairées concernant les rénovations nécessaires, tout en assurant la valeur et la sécurité de leur investissement.</p>}
                            </div>
                        </div>
                    </div>
                    <p className="text-center">Vous envisagez de construire un nouvel édifice, de rénover un bâtiment existant, ou de développer un projet complexe ? <Link href="/contact" className="underline cursor-pointer">Cliquez ici dès maintenant !</Link></p>
                    <p className="text-center">Avec une approche centrée sur la polyvalence et la qualité, TDA vous accompagne à chaque étape, vous offrant une solution complète et sur mesure pour concrétiser vos projets.</p>
                </div>
            </div>
            <div className="w-full flex flex-row items-center justify-center py-12">
                <div className="w-[90%] flex flex-col justify-start items-start text-start space-y-8">
                    <div className="lg:text-6xl text-4xl font-bold mb-10 w-full relative">
                        <h2 className="underline decoration-[#DF0624] lg:underline-offset-8 underline-offset-4 lg:decoration-2 decoration-1 z-10">NOS CERTIFICATIONS</h2>
                        <p className="absolute text-[#494949] -z-40 lg:ml-12 ml-4 lg:top-8 top-6">NOS CERTIFICATIONS</p>
                    </div>
                    <p>Car nous cherchons à travailler avec l’excellence, découvrez toutes nos certifications.</p>
                    <div className="w-full flex lg:flex-row flex-col justify-between items-center lg:space-y-0 space-y-6">
                        <div className="lg:w-[30%] w-[70%]">
                            <img src="images/Presentation/certif.png" alt="Certification" className="w-full" />
                        </div>
                        <div className="lg:w-[65%] w-full lg:text-base text-sm flex flex-col space-y-6">
                            <div className="flex flex-row items-center space-x-6">
                                <img src="images/Presentation/macaron.png" alt="Check Certification" className="w-[55px]" />
                                <div className="lg:w-[90%] w-[80%]">
                                    <h4 className="lg:text-2xl text-xl font-bold mb-2">Planification et coordination Date d'effet</h4>
                                    <p>0301 Ordonnancement-Planification-Coordination (OPC) d’exécution courant</p>
                                    <p>0302 Ordonnancement-Planification-Coordination (OPC) d’Execution complexe</p>
                                    <p>0331 Direction de l’Exécution des Travaux </p>
                                </div>
                            </div>
                            <div className="flex flex-row items-center space-x-6">
                            <img src="images/Presentation/macaron.png" alt="Check Certification" className="w-[55px]" />
                                <div className="lg:w-[90%] w-[80%]">
                                    <h4 className="text-2xl font-bold mb-2">Maîtrise des coûts et coût global</h4>
                                    <p>2202 Maîtrise des coûts en phase de conception et de réalisation</p>
                                    <p>2203 Maîtrise des coûts d’exploitation et de maintenance</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex lg:flex-row flex-col justify-between items-start space-y-6 lg:space-y-0">
                        <div className="lg:w-[48%] w-full text-base flex flex-col space-y-6">
                            <div className="flex flex-row items-center space-x-6 w-full">
                                <img src="images/Presentation/macaron.png" alt="Check Certification" className="w-[55px]" />
                                <div className="lg:w-[90%] w-[80%]">
                                    <h4 className="text-2xl font-bold mb-2">Formation - SECILOG AIPR  Concepteur</h4>
                                    <p>Action de prévention (formation à la sécurité et à la prévention des risques)</p>
                                </div>
                            </div>
                            <div className="flex flex-row items-center space-x-6">
                                <img src="images/Presentation/macaron.png" alt="Check Certification" className="w-[55px]" />
                                <div className="lg:w-[90%] w-[80%]">
                                    <h4 className="text-2xl font-bold mb-2">Formation - CREPA</h4>
                                    <p>Conception de bâtiment à basse consommation</p>
                                </div>
                            </div>
                            <div className="flex flex-row items-center space-x-6">
                                <img src="images/Presentation/macaron.png" alt="Check Certification" className="w-[55px]" />
                                <div className="lg:w-[90%] w-[80%]">
                                    <h4 className="text-2xl font-bold mb-2">Certification Nationale Professionnelle</h4>
                                    <p>CCP1 - “ Relation avec le client/le donneur d’ordres ”</p>
                                </div>
                            </div>
                            <div className="flex flex-row items-center space-x-6">
                                <img src="images/Presentation/macaron.png" alt="Check Certification" className="w-[55px]" />
                                <div className="lg:w-[90%] w-[80%]">
                                    <h4 className="text-2xl font-bold mb-2">Stage - IFPP</h4>
                                    <p>“ Qualité environnementale des projets architecturaux et urbains “</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[48%] w-full text-base flex flex-col space-y-6">
                            <div className="flex flex-row items-center space-x-6">
                                <img src="images/Presentation/macaron.png" alt="Check Certification" className="w-[55px]" />
                                <div className="lg:w-[90%] w-[80%]">
                                    <h4 className="text-2xl font-bold mb-2">Formation - CFD</h4>
                                    <p>Action d’adaptation et de développement des compétences des salariés  </p>
                                </div>
                            </div>
                            <div className="flex flex-row items-center space-x-6">
                                <img src="images/Presentation/macaron.png" alt="Check Certification" className="w-[55px]" />
                                <div className="lg:w-[90%] w-[80%]">
                                    <h4 className="text-2xl font-bold mb-2">Formation QUADRATUS</h4>
                                    <p>Standard - Comptabilité</p>
                                </div>
                            </div>
                            <div className="flex flex-row items-center space-x-6">
                                <img src="images/Presentation/macaron.png" alt="Check Certification" className="w-[55px]" />
                                <div className="lg:w-[90%] w-[80%]">
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