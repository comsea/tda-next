'use client'

import Link from "next/link"
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function Realisation() {
    const {categoryId} = useParams()
    let [isLoading, setIsLoading] = useState(false)
    let [cat, setCategory] = useState([])
    let [reas, setReas] = useState([])

    useEffect(() => {
        setIsLoading(true); // Start loading
        fetch(`https://apitda.comsea.fr/api/categoriess/${categoryId}`)
        .then((response) => response.json())
        .then((result) => {
            setCategory(result);
            setIsLoading(false); // End loading
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            setIsLoading(false); // End loading in case of error
        });
    }, [categoryId]);

    useEffect(() => {
        fetch(`https://apitda.comsea.fr/api/realisations`)
        .then((response) => response.json())
        .then((result) => {
            const fetchedRealisations = result['hydra:member'];
            const sortedRealisation = fetchedRealisations.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            setReas(sortedRealisation);
            setIsLoading(false);
        })
        .catch((error) => {
            console.error(error);
        });
    }, []);

    // Filtrer les réalisations pour la catégorie spécifiée
    const filteredReas = reas.filter(realisation => realisation.category === "/api/categoriess/"+cat.id);

    // Filtrer les 4 dernières réalisations pour le premier map
    const lastFourReas = filteredReas.slice(-4);
    // Filtrer le reste des réalisations pour le deuxième map
    const otherReas = filteredReas.slice(0, -4);

    return(
        <div className="lg:w-[90%] w-full flex flex-col justify-center items-center">
            <div className="w-full flex flex-row items-center justify-center lg:py-12 pt-24">
                <div className="w-[90%] flex flex-col justify-center items-start text-start space-y-4">
                    <div className="lg:text-6xl text-4xl font-bold mb-10 w-full">
                        <h1 className="drop-shadow-[30px_25px_0px_rgba(255,255,255,0.25)] uppercase">{cat.name}</h1>
                        <div className="h-[2px] bg-[#DF0624] lg:w-[300px] w-[200px] z-10"></div>
                    </div>
                    <div>
                        <p>Découvrez nos réalisations dans le secteurs de : {cat.name}.</p>
                        <p>Explorer d’avantages nos projets.</p>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center pt-6 space-y-8">
                        <div className="lg:w-[90%] w-full grid lg:grid-cols-2 grid-cols-1 gap-8">
                            {isLoading ? 'Chargement en cours' : lastFourReas.map(realisation => (
                                    <div className="bg-[#242424] lg:p-10 p-6 pb-8 flex flex-col items-end space-y-3 relative">
                                        <div className="w-full flex flex-col items-end space-y-1">
                                            <div className="w-full flex flex-row justify-between items-center">
                                                <div className="flex flex-row justify-center items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                                    <img src="/images/Réalisation/utilisateur.png" alt="Utilisateur" className="lg:w-[15px] w-[10px]" />
                                                    <p>{realisation.client}</p>
                                                </div>
                                                <div className="flex flex-row justify-center items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                                    <p>{new Date(realisation.createdAt).toLocaleString('fr-FR', { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>
                                                </div>
                                            </div>
                                            <img src={`https://apitda.comsea.fr/build/images/${realisation.photo}`} alt="Test" className="w-full lg:h-[300px] h-[200px] object-cover" />
                                        </div>
                                        <div className="w-full flex flex-row justify-between items-center">
                                            <div className="flex flex-row justify-center items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                                <img src="/images/Réalisation/localisation.png" alt="Localisation" className="lg:w-[15px] w-[10px]" />
                                                <p>{realisation.lieu}</p>
                                            </div>
                                            <div className="flex flex-row justify-center items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                                <img src="/images/Réalisation/surface.png" alt="Surface" className="lg:w-[20px] w-[15px]" />
                                                <p>{realisation.surface} m2</p>
                                            </div>
                                        </div>
                                        <h3 className="w-full lg:text-4xl text-2xl font-semibold">{realisation.title}</h3>
                                        <div className="absolute flex flex-row bottom-0 right-0 text-black text-xs w-1/2">
                                            <div className="w-1/4 h-[30px] bg-black">
                                                <div className="w-full h-full bg-[#242424] rounded-br-3xl"></div>
                                            </div>
                                            <div className="w-1/2 h-[30px] bg-black text-white rounded-t-xl flex flex-row justify-center items-center">
                                                <div className="underline decoration-[#DF0624] underline-offset-4 decoration-2">
                                                    <Link href={`/realisations/${categoryId}/${realisation.id}`}>Voir le projet</Link>
                                                </div>
                                            </div>
                                            <div className="w-1/4 h-[30px] bg-black">
                                                <div className="w-full h-full bg-[#242424] rounded-bl-3xl"></div>
                                            </div>
                                        </div>
                                    </div>
                            ))}
                        </div>
                        <div className="lg:w-[90%] w-full grid lg:grid-cols-2 grid-cols-1 gap-8 pb-8">
                            {isLoading ? 'Chargement en cours' : otherReas.map(realisation => (
                                    <div className="bg-[#242424] lg:px-10 px-6 pt-5 lg:pb-10 pb-8 flex flex-col items-end space-y-3 relative">
                                        <h3 className="w-full lg:text-4xl text-2xl font-semibold">{realisation.title}</h3>
                                        <div className="w-full flex flex-row justify-between items-center">
                                            <div className="flex flex-row justify-center items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                                <img src="/images/Réalisation/localisation.png" alt="Localisation" className="lg:w-[15px] w-[10px]" />
                                                <p>{realisation.lieu}</p>
                                            </div>
                                            <div className="flex flex-row justify-center items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                                <img src="/images/Réalisation/surface.png" alt="Surface" className="lg:w-[20px] w-[15px]" />
                                                <p>{realisation.surface} m2</p>
                                            </div>
                                        </div>
                                        <div className="w-full flex flex-row justify-between items-center">
                                            <div className="flex flex-row justify-center items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                                <img src="/images/Réalisation/utilisateur.png" alt="Utilisateur" className="lg:w-[15px] w-[10px]" />
                                                <p>{realisation.client}</p>
                                            </div>
                                            <div className="flex flex-row justify-center items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                                <p>{new Date(realisation.createdAt).toLocaleString('fr-FR', { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>
                                            </div>
                                        </div>
                                        <div className="absolute flex flex-row bottom-0 right-0 text-black text-xs w-1/2">
                                            <div className="w-1/4 h-[30px] bg-black">
                                                <div className="w-full h-full bg-[#242424] rounded-br-3xl"></div>
                                            </div>
                                            <div className="w-1/2 h-[30px] bg-black text-white rounded-t-xl flex flex-row justify-center items-center">
                                                <div className="underline decoration-[#DF0624] underline-offset-4 decoration-2">
                                                    <Link href="/actualites/1">Voir le projet</Link>
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
        </div>
    )
}