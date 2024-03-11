'use client'

import Link from "next/link"
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function Realisation() {
    const {id} = useParams()
    let [isLoading, setIsLoading] = useState(false)
    let [realisation, setRealisation] = useState([])

    useEffect(() => {
        setIsLoading(true); // Start loading
        fetch(`https://localhost:8000/api/categoriess/${id}`)
        .then((response) => response.json())
        .then((result) => {
            setRealisation(result);
            setIsLoading(false); // End loading
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            setIsLoading(false); // End loading in case of error
        });
    }, [id]);

    return(
        <div className="lg:w-[90%] w-full flex flex-col justify-center items-center">
            <div className="w-full flex flex-row items-center justify-center lg:py-12 pt-24">
                <div className="w-[90%] flex flex-col justify-center items-start text-start space-y-4">
                    <div className="lg:text-6xl text-4xl font-bold mb-10 w-full">
                        <h1 className="drop-shadow-[30px_25px_0px_rgba(255,255,255,0.25)] uppercase">{realisation.name}</h1>
                        <div className="h-[2px] bg-[#DF0624] lg:w-[300px] w-[200px] z-10"></div>
                    </div>
                    <div>
                        <p>Découvrez nos réalisations dans le secteurs de : {realisation.name}.</p>
                        <p>Explorer d’avantages nos projets.</p>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center pt-6 space-y-8">
                        <div className="lg:w-[90%] w-full grid lg:grid-cols-2 grid-cols-1 gap-8">
                            <div className="bg-[#242424] lg:p-10 p-6 pb-8 flex flex-col items-end space-y-3 relative">
                                <div className="w-full flex flex-col items-end space-y-1">
                                    <div className="w-full flex flex-row justify-between items-center">
                                        <div className="flex flex-row justify-center items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                            <img src="/images/Réalisation/utilisateur.png" alt="Utilisateur" className="lg:w-[15px] w-[10px]" />
                                            <p>Nom du client</p>
                                        </div>
                                        <div className="flex flex-row justify-center items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                            <p>Date de publication</p>
                                        </div>
                                    </div>
                                    <img src="/images/Accueil/bg.png" alt="Test" className="w-full lg:h-[300px] h-[200px] object-cover" />
                                </div>
                                <div className="w-full flex flex-row justify-between items-center">
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                        <img src="/images/Réalisation/localisation.png" alt="Localisation" className="lg:w-[15px] w-[10px]" />
                                        <p>lieu de la réalisation</p>
                                    </div>
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                        <img src="/images/Réalisation/surface.png" alt="Surface" className="lg:w-[20px] w-[15px]" />
                                        <p>XX m2</p>
                                    </div>
                                </div>
                                <h3 className="w-full lg:text-4xl text-2xl font-semibold">TITRE DU PROJET</h3>
                                <div className="absolute flex flex-row bottom-0 right-0 text-black text-xs w-1/2">
                                    <div className="w-1/4 h-[30px] bg-black">
                                        <div className="w-full h-full bg-[#242424] rounded-br-3xl"></div>
                                    </div>
                                    <div className="w-1/2 h-[30px] bg-black text-white rounded-t-xl flex flex-row justify-center items-center">
                                        <div className="underline decoration-[#DF0624] underline-offset-4 decoration-2">
                                            <Link href="/realisations/enseignement/1">Voir le projet</Link>
                                        </div>
                                    </div>
                                    <div className="w-1/4 h-[30px] bg-black">
                                        <div className="w-full h-full bg-[#242424] rounded-bl-3xl"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#242424] lg:p-10 p-6 pb-8 flex flex-col items-end space-y-3 relative">
                                <div className="w-full flex flex-col items-end space-y-1">
                                    <div className="w-full flex flex-row justify-between items-center">
                                        <div className="flex flex-row justify-center items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                            <img src="/images/Réalisation/utilisateur.png" alt="Utilisateur" className="lg:w-[15px] w-[10px]" />
                                            <p>Nom du client</p>
                                        </div>
                                        <div className="flex flex-row justify-center items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                            <p>Date de publication</p>
                                        </div>
                                    </div>
                                    <img src="/images/Accueil/bg.png" alt="Test" className="w-full lg:h-[300px] h-[200px] object-cover" />
                                </div>
                                <div className="w-full flex flex-row justify-between items-center">
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                        <img src="/images/Réalisation/localisation.png" alt="Localisation" className="lg:w-[15px] w-[10px]" />
                                        <p>lieu de la réalisation</p>
                                    </div>
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                        <img src="/images/Réalisation/surface.png" alt="Surface" className="lg:w-[20px] w-[15px]" />
                                        <p>XX m2</p>
                                    </div>
                                </div>
                                <h3 className="w-full lg:text-4xl text-2xl font-semibold">TITRE DU PROJET</h3>
                                <div className="absolute flex flex-row bottom-0 right-0 text-black text-xs w-1/2">
                                    <div className="w-1/4 h-[30px] bg-black">
                                        <div className="w-full h-full bg-[#242424] rounded-br-3xl"></div>
                                    </div>
                                    <div className="w-1/2 h-[30px] bg-black text-white rounded-t-xl flex flex-row justify-center items-center">
                                        <div className="underline decoration-[#DF0624] underline-offset-4 decoration-2">
                                            <Link href="/realisations/enseignement/1">Voir le projet</Link>
                                        </div>
                                    </div>
                                    <div className="w-1/4 h-[30px] bg-black">
                                        <div className="w-full h-full bg-[#242424] rounded-bl-3xl"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#242424] lg:p-10 p-6 pb-8 flex flex-col items-end space-y-3 relative">
                                <div className="w-full flex flex-col items-end space-y-1">
                                    <div className="w-full flex flex-row justify-between items-center">
                                        <div className="flex flex-row justify-center items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                            <img src="/images/Réalisation/utilisateur.png" alt="Utilisateur" className="lg:w-[15px] w-[10px]" />
                                            <p>Nom du client</p>
                                        </div>
                                        <div className="flex flex-row justify-center items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                            <p>Date de publication</p>
                                        </div>
                                    </div>
                                    <img src="/images/Accueil/bg.png" alt="Test" className="w-full lg:h-[300px] h-[200px] object-cover" />
                                </div>
                                <div className="w-full flex flex-row justify-between items-center">
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                        <img src="/images/Réalisation/localisation.png" alt="Localisation" className="lg:w-[15px] w-[10px]" />
                                        <p>lieu de la réalisation</p>
                                    </div>
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                        <img src="/images/Réalisation/surface.png" alt="Surface" className="lg:w-[20px] w-[15px]" />
                                        <p>XX m2</p>
                                    </div>
                                </div>
                                <h3 className="w-full lg:text-4xl text-2xl font-semibold">TITRE DU PROJET</h3>
                                <div className="absolute flex flex-row bottom-0 right-0 text-black text-xs w-1/2">
                                    <div className="w-1/4 h-[30px] bg-black">
                                        <div className="w-full h-full bg-[#242424] rounded-br-3xl"></div>
                                    </div>
                                    <div className="w-1/2 h-[30px] bg-black text-white rounded-t-xl flex flex-row justify-center items-center">
                                        <div className="underline decoration-[#DF0624] underline-offset-4 decoration-2">
                                            <Link href="/realisations/enseignement/1">Voir le projet</Link>
                                        </div>
                                    </div>
                                    <div className="w-1/4 h-[30px] bg-black">
                                        <div className="w-full h-full bg-[#242424] rounded-bl-3xl"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#242424] lg:p-10 p-6 pb-8 flex flex-col items-end space-y-3 relative">
                                <div className="w-full flex flex-col items-end space-y-1">
                                    <div className="w-full flex flex-row justify-between items-center">
                                        <div className="flex flex-row justify-center items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                            <img src="/images/Réalisation/utilisateur.png" alt="Utilisateur" className="lg:w-[15px] w-[10px]" />
                                            <p>Nom du client</p>
                                        </div>
                                        <div className="flex flex-row justify-center items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                            <p>Date de publication</p>
                                        </div>
                                    </div>
                                    <img src="/images/Accueil/bg.png" alt="Test" className="w-full lg:h-[300px] h-[200px] object-cover" />
                                </div>
                                <div className="w-full flex flex-row justify-between items-center">
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                        <img src="/images/Réalisation/localisation.png" alt="Localisation" className="lg:w-[15px] w-[10px]" />
                                        <p>lieu de la réalisation</p>
                                    </div>
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                        <img src="/images/Réalisation/surface.png" alt="Surface" className="lg:w-[20px] w-[15px]" />
                                        <p>XX m2</p>
                                    </div>
                                </div>
                                <h3 className="w-full lg:text-4xl text-2xl font-semibold">TITRE DU PROJET</h3>
                                <div className="absolute flex flex-row bottom-0 right-0 text-black text-xs w-1/2">
                                    <div className="w-1/4 h-[30px] bg-black">
                                        <div className="w-full h-full bg-[#242424] rounded-br-3xl"></div>
                                    </div>
                                    <div className="w-1/2 h-[30px] bg-black text-white rounded-t-xl flex flex-row justify-center items-center">
                                        <div className="underline decoration-[#DF0624] underline-offset-4 decoration-2">
                                            <Link href="/realisations/enseignement/1">Voir le projet</Link>
                                        </div>
                                    </div>
                                    <div className="w-1/4 h-[30px] bg-black">
                                        <div className="w-full h-full bg-[#242424] rounded-bl-3xl"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[90%] w-full grid lg:grid-cols-2 grid-cols-1 gap-8 pb-8">
                            <div className="bg-[#242424] lg:px-10 px-6 pt-5 lg:pb-10 pb-8 flex flex-col items-end space-y-3 relative">
                                <h3 className="w-full lg:text-4xl text-2xl font-semibold">TITRE DU PROJET</h3>
                                <div className="w-full flex flex-row justify-between items-center">
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                        <img src="/images/Réalisation/localisation.png" alt="Localisation" className="lg:w-[15px] w-[10px]" />
                                        <p>lieu de la réalisation</p>
                                    </div>
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                        <img src="/images/Réalisation/surface.png" alt="Surface" className="lg:w-[20px] w-[15px]" />
                                        <p>XX m2</p>
                                    </div>
                                </div>
                                <div className="w-full flex flex-row justify-between items-center">
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                        <img src="/images/Réalisation/utilisateur.png" alt="Utilisateur" className="lg:w-[15px] w-[10px]" />
                                        <p>Nom du client</p>
                                    </div>
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                        <p>Date de publication</p>
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
                            <div className="bg-[#242424] lg:px-10 px-6 pt-5 lg:pb-10 pb-8 flex flex-col items-end space-y-3 relative">
                                <h3 className="w-full lg:text-4xl text-2xl font-semibold">TITRE DU PROJET</h3>
                                <div className="w-full flex flex-row justify-between items-center">
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                        <img src="/images/Réalisation/localisation.png" alt="Localisation" className="lg:w-[15px] w-[10px]" />
                                        <p>lieu de la réalisation</p>
                                    </div>
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                        <img src="/images/Réalisation/surface.png" alt="Surface" className="lg:w-[20px] w-[15px]" />
                                        <p>XX m2</p>
                                    </div>
                                </div>
                                <div className="w-full flex flex-row justify-between items-center">
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                        <img src="/images/Réalisation/utilisateur.png" alt="Utilisateur" className="lg:w-[15px] w-[10px]" />
                                        <p>Nom du client</p>
                                    </div>
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                        <p>Date de publication</p>
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
                            <div className="bg-[#242424] lg:px-10 px-6 pt-5 lg:pb-10 pb-8 flex flex-col items-end space-y-3 relative">
                                <h3 className="w-full lg:text-4xl text-2xl font-semibold">TITRE DU PROJET</h3>
                                <div className="w-full flex flex-row justify-between items-center">
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                        <img src="/images/Réalisation/localisation.png" alt="Localisation" className="lg:w-[15px] w-[10px]" />
                                        <p>lieu de la réalisation</p>
                                    </div>
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                        <img src="/images/Réalisation/surface.png" alt="Surface" className="lg:w-[20px] w-[15px]" />
                                        <p>XX m2</p>
                                    </div>
                                </div>
                                <div className="w-full flex flex-row justify-between items-center">
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                        <img src="/images/Réalisation/utilisateur.png" alt="Utilisateur" className="lg:w-[15px] w-[10px]" />
                                        <p>Nom du client</p>
                                    </div>
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                        <p>Date de publication</p>
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
                            <div className="bg-[#242424] lg:px-10 px-6 pt-5 lg:pb-10 pb-8 flex flex-col items-end space-y-3 relative">
                                <h3 className="w-full lg:text-4xl text-2xl font-semibold">TITRE DU PROJET</h3>
                                <div className="w-full flex flex-row justify-between items-center">
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                        <img src="/images/Réalisation/localisation.png" alt="Localisation" className="lg:w-[15px] w-[10px]" />
                                        <p>lieu de la réalisation</p>
                                    </div>
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                        <img src="/images/Réalisation/surface.png" alt="Surface" className="lg:w-[20px] w-[15px]" />
                                        <p>XX m2</p>
                                    </div>
                                </div>
                                <div className="w-full flex flex-row justify-between items-center">
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                        <img src="/images/Réalisation/utilisateur.png" alt="Utilisateur" className="lg:w-[15px] w-[10px]" />
                                        <p>Nom du client</p>
                                    </div>
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                        <p>Date de publication</p>
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
                            <div className="bg-[#242424] lg:px-10 px-6 pt-5 lg:pb-10 pb-8 flex flex-col items-end space-y-3 relative">
                                <h3 className="w-full lg:text-4xl text-2xl font-semibold">TITRE DU PROJET</h3>
                                <div className="w-full flex flex-row justify-between items-center">
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                        <img src="/images/Réalisation/localisation.png" alt="Localisation" className="lg:w-[15px] w-[10px]" />
                                        <p>lieu de la réalisation</p>
                                    </div>
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                        <img src="/images/Réalisation/surface.png" alt="Surface" className="lg:w-[20px] w-[15px]" />
                                        <p>XX m2</p>
                                    </div>
                                </div>
                                <div className="w-full flex flex-row justify-between items-center">
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                        <img src="/images/Réalisation/utilisateur.png" alt="Utilisateur" className="lg:w-[15px] w-[10px]" />
                                        <p>Nom du client</p>
                                    </div>
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                        <p>Date de publication</p>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}