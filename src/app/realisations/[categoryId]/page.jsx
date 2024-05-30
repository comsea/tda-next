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
        fetch(`https://api.tda-archi.com/api/categoriess/${categoryId}`)
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
        fetch(`https://api.tda-archi.com/api/realisations`)
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
    const hasNonFavoriRealisations = filteredReas.some(realisation => !realisation.favori);

    return(
        <div className="lg:w-[90%] w-full flex flex-col justify-center items-center">
            <div className="w-full flex flex-row items-center justify-center lg:py-12 pt-24">
                <div className="w-[90%] flex flex-col justify-center items-start text-start space-y-4">
                    <div className="lg:text-6xl text-4xl font-bold mb-10 w-full relative">
                        <h1 className="underline decoration-[#DF0624] lg:underline-offset-8 underline-offset-4 lg:decoration-2 decoration-1 uppercase">{cat.name}</h1>
                        <p className="absolute text-[#494949] -z-40 lg:ml-12 ml-4 lg:top-8 top-6 uppercase">{cat.name}</p>
                    </div>
                    <div>
                        <p>Explorez davantage nos projets, découvrez nos réalisations dans le secteur : {cat.name}.</p>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center pt-6 space-y-8">
                        <div className="lg:w-[95%] w-full grid lg:grid-cols-2 grid-cols-1 gap-8">
                            {isLoading ? 'Chargement en cours' : filteredReas.map(realisation => (
                                    realisation.favori &&
                                    <div className="bg-[#242424] lg:p-10 p-6 pb-8 flex flex-col items-end space-y-3 relative">
                                        <div className="w-full flex flex-col items-end space-y-1">
                                            <div className="w-full flex flex-row justify-between items-center">
                                                <div className="flex flex-row justify-center items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                                    <img src="/images/Réalisation/utilisateur.png" alt="Utilisateur" className="lg:w-[15px] w-[10px]" />
                                                    <p>{realisation.maitre}</p>
                                                </div>
                                            </div>
                                            <img src={`https://api.tda-archi.com/build/images/${realisation.photo}`} alt="Test" className="w-full lg:h-[300px] h-[200px] object-cover" />
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
                                                    <Link href={`/realisations/categories/${realisation.id}`}>Voir le projet</Link>
                                                </div>
                                            </div>
                                            <div className="w-1/4 h-[30px] bg-black">
                                                <div className="w-full h-full bg-[#242424] rounded-bl-3xl"></div>
                                            </div>
                                        </div>
                                    </div>
                            ))}
                        </div>
                        
                        <div className="lg:w-[95%] w-full pb-8 flex flex-col">
                            {hasNonFavoriRealisations && (
                            <div className="w-full py-2 px-4 bg-[#7a7a7a] border-collapse flex flex-row justify-between items-center font-bold text-xl border-b-[1px] border-[#DFDFDF] space-x-1">
                                <div className="w-[40%] border-r-[1px] border-[#DFDFDF]">Titre</div>
                                <div className="w-[18%] border-r-[1px] border-[#DFDFDF]">Lieu</div>
                                <div className="w-[32%] border-r-[1px] border-[#DFDFDF]">Maître d'ouvrage</div>
                                <div className="w-[6%]">Surface</div>
                            </div>
                            )}
                            {isLoading ? '' : filteredReas.map(realisation => (
                                !realisation.favori &&
                                <div className="w-full py-2 px-4 bg-[#242424] border-collapse flex flex-row justify-between items-center font-normal text-sm border-b-[1px] border-[#868686] space-x-1">
                                    <Link href={`/realisations/categories/${realisation.id}`} className="w-[40%] border-r-[1px] border-[#DFDFDF] hover:underline">{realisation.title}</Link>
                                    <div className="w-[18%] border-r-[1px] border-[#DFDFDF]">{realisation.lieu}</div>
                                    <div className="w-[32%] border-r-[1px] border-[#DFDFDF]">{realisation.client}</div>
                                    <div className="w-[6%]">{realisation.surface} m2</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}