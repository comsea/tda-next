'use client'

import Link from "next/link"
import { useState, useEffect } from 'react';

export default function Realisations() {
    const [isLoading, setIsLoading] = useState(true)
    const [realisations, setRealisations] = useState([])

    useEffect(() => {
        fetch(`https://localhost:8000/api/categoriess`)
        .then((response) => response.json())
        .then((result) => {
            const fetchedRealisations = result['hydra:member'];
            setRealisations(fetchedRealisations);
            setIsLoading(false);
        })
        .catch((error) => {
            console.error(error);
        });
    }, []);

    return(
        <div className="lg:w-[90%] w-full flex flex-col justify-center items-center">
            <div className="w-full flex flex-row items-center justify-center lg:py-12 py-24">
                <div className="w-[90%] flex flex-col justify-center items-center text-start space-y-6">
                    <div className="lg:text-6xl text-4xl font-bold mb-10 w-full">
                        <h1 className="drop-shadow-[30px_25px_0px_rgba(255,255,255,0.25)]">NOS RÉALISATIONS</h1>
                        <div className="h-[2px] bg-[#DF0624] lg:w-[300px] w-[200px] z-10"></div>
                    </div>
                    <p>Découvrez en images nos réalisations, allant de la construction à la réhabilitation, en passant par l'extension ou l'aménagement de bâtiments résidentiels, industriels, médicaux, commerciaux, institutionnels, voire publics.</p>
                    <div className="w-[90%] grid lg:grid-cols-3 grid-cols-1 gap-10 py-10">
                        {isLoading ? 'Chargement en cours' : realisations.map(realisation => (
                            <div className="flex justify-center items-center lg:py-28 py-20 relative text-center">
                                <img src={`https://localhost:8000/build/images/${realisation.photo}`} alt="" className="absolute w-full h-full object-cover -z-30" />
                                {/*<Link href={`/realisations/${realisation.name.toLowerCase().replace(/\s+/g, '-')}`} className="absolute w-full h-full z-10 bg-black/50 flex justify-center items-center transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 px-6 hover:bg-black/10">
                                    {realisation.name}
                                </Link>*/}
                                <Link href={`/realisations/${realisation.id}`} className="absolute w-full h-full z-10 bg-black/50 flex justify-center items-center transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 px-6 hover:bg-black/10">
                                    {realisation.name}
                                </Link>
                            </div>
                        ))}
                    </div>
                    <p>Un projet, une envie ? <Link href="/contact" className="font-semibold hover:underline">Contactez-nous</Link> dès maintenant.</p>
                </div>
            </div>
        </div>
    )
}