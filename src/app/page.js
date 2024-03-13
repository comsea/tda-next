'use client'

import Accordion from "@/components/Accordion";
import Header from "@/components/Header";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true)
    const [actualites, setActualites] = useState([])
    const [realisations, setRealisations] = useState([])

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
      };

    useEffect(() => {
        fetch(`https://apitda.comsea.fr/api/actualites`)
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

  return (
    <div className="lg:w-[90%] w-full flex flex-col justify-start items-start">
            <div className="w-full lg:h-screen h-[60vh] flex flex-col justify-start items-start">
                <div className="w-full h-[85%] flex justify-center items-center relative">
                    <Header />
                </div>
                <div className="w-full h-[15%] bg-[#242424] flex flex-row justify-between items-center px-6 lg:text-xl text-base">
                    <p className="underline decoration-[#DF0624] lg:underline-offset-8 underline-offset-4 lg:decoration-2 decoration-1">TECHNIQUES DESIGN ARCHITECTURES | ARDENNES & MARNE</p>
                </div>
            </div>
            <div className="w-full flex lg:flex-row flex-col items-center py-12 lg:space-y-0 space-y-6">
                <div className="lg:w-[50%] w-full flex flex-col justify-center items-center text-start">
                    <div className="lg:w-[80%] w-[90%]">
                        <div className="lg:text-6xl text-4xl font-bold mb-10 relative">
                            <h1 className="underline decoration-[#DF0624] lg:underline-offset-8 underline-offset-4 lg:decoration-2 decoration-1">L'AGENCE TDA</h1>
                            <p className="absolute text-[#494949] -z-40">L'AGENCE TDA</p>
                        </div>
                        <p>Chez TDA, nous ne nous contentons pas de concevoir des bâtiments, mais nous donnons vie à des rêves et des aspirations. Spécialisés dans une multitude de domaines, nous façonnons des environnements où les gens peuvent vivre, apprendre, se divertir et guérir.</p><br/>
                        <p>Notre trésor le plus précieux réside dans notre équipe dévouée de professionnels du bâtiment. C'est cette équipe qui fait de chaque projet une histoire de succès, veillant à ce que chaque étape, de la conception à la réalisation, soit imprégnée de passion et de dévouement.</p><br/>
                        <p>Si vous cherchez une agence qui comprend la dimension humaine derrière chaque structure, une équipe engagée qui transforme des idées en expériences émotionnelles, TDA est là pour vous accompagner. Confiez-nous vos rêves architecturaux, et ensemble, nous créerons des espaces où les émotions s'épanouissent et où chaque détail compte.</p>
                    </div>
                </div>
                <div className="lg:w-[50%] w-full flex justify-center items-center">
                    <img src="images/Accueil/france.png" alt="Carte France" className="lg:w-[60%] w-[80%]" />
                </div>
            </div>
            <div className="w-full flex lg:flex-row flex-col py-6 px-6 justify-around lg:items-center items-start lg:text-4xl text-3xl lg:space-y-0 space-y-6">
                <div className="flex flex-row space-x-4 items-center">
                    <p className="lg:text-6xl text-5xl">25</p>
                    <p>ANNÉES D'EXPÉRIENCE</p>
                </div>
                <div className="flex flex-row space-x-4 items-center">
                    <p className="lg:text-6xl text-5xl">3</p>
                    <p>AGENCES</p>
                </div>
                <div className="flex flex-row space-x-4 items-center">
                    <p className="lg:text-6xl text-5xl">17</p>
                    <div>
                        <p>COLLABORATEURS</p>
                        <p className="text-xl">À VOTRE ÉCOUTE</p>
                    </div>
                </div>
            </div>
            <div className="w-full flex lg:flex-row flex-col justify-center items-center py-12 relative mb-12">
                <div className="w-[90%] flex flex-col justify-start items-start text-start">
                    <div className="lg:text-6xl text-4xl font-bold mb-10">
                        <h2 className="drop-shadow-[30px_25px_0px_rgba(255,255,255,0.25)]">INNOVER AVEC TDA</h2>
                        <div className="h-[2px] bg-[#DF0624] lg:w-[300px] w-[200px] z-10"></div>
                    </div>
                    <div className="lg:w-[60%] w-full">
                        <p>Comment pouvons-nous collaborer afin de concrétiser votre projet ensemble ?</p><br/>
                        <p className="lg:text-4xl text-2xl font-light"><span className="font-bold">Vous</span> avez <span className="font-bold">l'<span className="text-[#DF0624]">envie</span></span>, <span className="font-bold">nous</span> avons la <span className="font-bold text-[#DF0624]">technique</span></p><br/>
                        <p>Chez nous, la créativité et l'innovation ne sont pas simplement des compétences, mais une façon de donner vie à vos aspirations. Que votre vision soit déjà clairement définie ou que vous souhaitiez explorer de nouvelles perspectives, nous sommes là pour donner forme à vos idées avec une précision sans pareille. Au-delà de l'aspect architectural et technique, nous comprenons l'importance de matérialiser votre projet de manière authentique.</p><br/>
                        <p>Ce nouveau concept nous permet de nous imprégner de votre histoire et de vos rêves. Nous croyons fermement en l'harmonie entre l'esthétique et la fonctionnalité, travaillant sans relâche pour concevoir des édifices qui captivent visuellement tout en demeurant économiquement viables. Votre projet est plus qu'une simple construction ; c'est une expression de votre identité, et nous nous engageons à le façonner avec le même soin et la même passion que si c'était le nôtre.</p>
                    </div>
                </div>
                <img src="images/Accueil/structure.png" alt="Structures" className="absolute right-0 lg:top-10 -bottom-24 lg:w-[45%] w-[60%]" />
            </div>
            <div className="w-full flex flex-row items-center justify-center py-12">
                <div className="w-[90%] flex flex-col justify-center items-end">
                    <div className="lg:text-6xl text-4xl font-bold mb-10">
                        <h2 className="drop-shadow-[30px_25px_0px_rgba(255,255,255,0.25)]">NOS PRESTATIONS</h2>
                        <div className="h-[2px] bg-[#DF0624] lg:w-[300px] w-[200px] z-10"></div>
                    </div>
                    <div className="flex lg:flex-row flex-col w-full items-start justify-center lg:space-x-20 lg:space-y-0 space-y-4 text-start">
                        <div className="lg:text-3xl text-2xl flex flex-col space-y-4 lg:w-[40%] w-full">
                            <div className="font-semibold flex flex-row items-center space-x-4">
                                <img src="images/Accueil/regle.png" alt="Check" className="w-[20px] h-[20px]" />
                                <p>CONCEPTION ARCHITECTURALE</p>
                            </div>
                            <div className="font-semibold flex flex-row items-center space-x-4">
                                <img src="images/Accueil/regle.png" alt="Check" className="w-[20px] h-[20px]" />
                                <p>MAÎTRISE D'OEUVRE D'EXÉCUTION</p>
                            </div>
                            <div className="font-semibold flex flex-row items-center space-x-4">
                                <img src="images/Accueil/regle.png" alt="Check" className="w-[20px] h-[20px]" />
                                <p>MISSION PERMIS DE CONSTRUIRE</p>
                            </div>
                            <div className="font-semibold flex flex-row items-center space-x-4">
                                <img src="images/Accueil/regle.png" alt="Check" className="w-[20px] h-[20px]" />
                                <p>EXPERTISE</p>
                            </div>
                        </div>
                        <div className="lg:text-3xl text-2xl flex flex-col space-y-4 lg:w-[40%] w-full">
                            <div className="font-semibold flex flex-row items-center space-x-4">
                                <img src="images/Accueil/regle.png" alt="Check" className="w-[20px] h-[20px]" />
                                <p>ETUDE DE FAISABILITÉ</p>
                            </div>
                            <div className="font-semibold flex flex-row items-center space-x-4">
                                <img src="images/Accueil/regle.png" alt="Check" className="w-[20px] h-[20px]" />
                                <p>ORDONNANCEMENT PILOTAGE ET COORDINATION</p>
                            </div>
                            <div className="font-semibold flex flex-row items-center space-x-4">
                                <img src="images/Accueil/regle.png" alt="Check" className="w-[20px] h-[20px]" />
                                <p>DIAGNOSTICS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center py-12">
                <div className="w-[90%] flex flex-col justify-center items-center">
                    <div className="lg:text-6xl text-4xl font-bold mb-10">
                        <h2 className="drop-shadow-[30px_25px_0px_rgba(255,255,255,0.25)]">NOS RÉALISATIONS</h2>
                        <div className="h-[2px] bg-[#DF0624] lg:w-[300px] w-[200px] z-10"></div>
                    </div>
                    <p>Découvrez en images nos réalisations, allant de la construction à la réhabilitation, en passant par l'extension ou l'aménagement de bâtiments résidentiels, industriels, médicaux, commerciaux, institutionnels, voire publics.</p>
                </div>
                <div className="w-full lg:block hidden">
                    <Accordion />
                </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center py-12">
                <div className="w-[90%] flex lg:flex-row flex-col justify-between items-start text-start">
                    <div className="lg:w-[48%] w-full flex flex-col justify-start items-start space-y-6">
                        <div className="lg:text-6xl text-4xl font-bold mb-4">
                            <h2 className="drop-shadow-[30px_25px_0px_rgba(255,255,255,0.25)]">LES ACTUALITÉS</h2>
                            <div className="h-[2px] bg-[#DF0624] lg:w-[300px] w-[200px] z-10"></div>
                        </div>
                        {isLoading ? 'Chargement en cours' : actualites.slice(1,2).map(actualite => (
                            <div className="w-full lg:p-12 px-4 py-8 bg-[#242424] flex flex-col justify-start items-start space-y-2 relative">
                                <img src={`https://apitda.comsea.fr/build/images/${actualite.photo}`} alt="Article" className="w-full h-[250px] object-cover" />
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
                            </div>
                        ))}
                        {isLoading ? 'Chargement en cours' : actualites.slice(3,4).map(actualite => (
                        <div className="w-full lg:p-12 px-4 py-8 bg-[#242424] flex flex-col justify-start items-start space-y-2 relative">
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
                            <img src={`https://apitda.comsea.fr/build/images/${actualite.photo}`} alt="Article" className="w-full h-[250px] object-cover" />
                            <p className="lg:text-base text-sm text-[#BBBBBB]">{new Date(actualite.createdAt).toLocaleString('fr-FR', { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>
                            <h4 className="lg:text-3xl text-2xl font-semibold uppercase">{actualite.title}</h4>
                        </div>
                        ))}
                    </div>
                    <div className="lg:w-[48%] w-full flex flex-col justify-start items-start space-y-6 mt-3">
                        {isLoading ? 'Chargement en cours' : actualites.slice(0,1).map(actualite => (
                            <div className="w-full lg:p-12 px-4 py-8 bg-[#242424] flex flex-col justify-start items-start space-y-2 relative">
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
                                <img src={`https://apitda.comsea.fr/build/images/${actualite.photo}`} alt="Article" className="w-full h-[250px] object-cover" />
                                <p className="lg:text-base text-sm text-[#BBBBBB]">{new Date(actualite.createdAt).toLocaleString('fr-FR', { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>
                                <h4 className="lg:text-3xl text-2xl font-semibold uppercase">{actualite.title}</h4>
                                <p className="line-clamp-2 lg:text-xl text-lg" dangerouslySetInnerHTML={{ __html: actualite.description }} />
                            </div>
                        ))}
                        {isLoading ? 'Chargement en cours' : actualites.slice(2,3).map(actualite => (
                            <div className="w-full lg:p-12 px-4 py-8 bg-[#242424] flex flex-col justify-start items-start space-y-2 relative">
                                <img src={`https://apitda.comsea.fr/build/images/${actualite.photo}`} alt="Article" className="w-full h-[250px] object-cover" />
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
                            </div>
                        ))}
                    </div>
                </div>
            </div>
          </div>
  );
}
