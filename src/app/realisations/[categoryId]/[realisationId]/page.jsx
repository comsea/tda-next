'use client'

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import MiniaSlideRea from "@/components/MiniaSlideRea";
import Link from "next/link";

export default function Rea() {
    const {realisationId} = useParams()
    let [isLoading, setIsLoading] = useState(false)
    let [realisation, setRealisation] = useState([])
    let [images, setImages] = useState([])
    let [realisations, setRealisations] = useState([])

    useEffect(() => {
        setIsLoading(true); // Start loadinging
        fetch(`https://apitda.comsea.fr/api/realisations/${realisationId}`)
        .then((response) => response.json())
        .then((result) => {
            setRealisation(result);
            setIsLoading(false); // End loading
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            setIsLoading(false); // End loading in case of error
        });
    }, [realisationId]);

    useEffect(() => {
        fetch(`https://apitda.comsea.fr/api/galeries`)
        .then((response) => response.json())
        .then((result) => {
            const fetchedRealisations = result['hydra:member'];
            setImages(fetchedRealisations);
            setIsLoading(false);
        })
        .catch((error) => {
            console.error(error);
        });
    }, []);

    useEffect(() => {
        fetch(`https://apitda.comsea.fr/api/realisations`)
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

    const image = realisation.photo ? [
        `https://apitda.comsea.fr/build/images/${realisation.photo}`,
        ...images.map(image => {
            // Trouver la galerie correspondante pour l'image actuelle
            const galerie = realisation.galery.find(galerie => galerie == '/api/galeries/' + image.id);
            // Si une galerie correspondante est trouvée, retourner l'URL de l'image
            return galerie ? `https://apitda.comsea.fr/build/images/${image.link}` : null;
        }).filter(url => url !== null) // Filtrer pour éliminer les valeurs null
    ] : [];

    // Avant de retourner le JSX, mélangez le tableau des réalisations
    const shuffledRealisations = realisations.sort(() => 0.5 - Math.random());

    // Sélectionnez un sous-ensemble aléatoire de 5 réalisations
    const randomRealisations = shuffledRealisations.slice(0, 5);

    return(
        <div className="lg:w-[90%] w-full flex flex-col justify-center items-center">
            <div className="w-full flex flex-col items-center justify-center lg:py-12 pt-24">
                <div className="w-[90%] flex flex-col justify-center items-start text-start space-y-4">
                    <div className="lg:text-6xl text-3xl font-bold mb-10 w-full">
                        <h1 className="drop-shadow-[30px_25px_0px_rgba(255,255,255,0.25)] uppercase">{realisation.title}</h1>
                        <div className="h-[2px] bg-[#DF0624] lg:w-[300px] w-[200px] z-10"></div>
                    </div>
                    <div className="w-full flex lg:flex-row flex-col items-start justify-between pb-6 lg:space-y-0 space-y-4">
                        <div className="lg:w-[50%] w-full flex flex-col justify-start items-start space-y-2">
                            <div className="flex flex-row justify-center items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                <img src="/images/Réalisation/utilisateur.png" alt="Utilisateur" className="lg:w-[15px] w-[10px]" />
                                <p>{realisation.client}</p>
                            </div>
                            <div className="flex flex-row justify-center items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                <img src="/images/Réalisation/localisation.png" alt="Localisation" className="lg:w-[15px] w-[10px]" />
                                <p>{realisation.lieu}</p>
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: realisation.description }} />
                        </div>
                        <div className="lg:w-[45%] w-full flex flex-col justify-end items-end space-y-2">
                            <div className="flex flex-row justify-center items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                <p>{new Date(realisation.createdAt).toLocaleString('fr-FR', { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>
                            </div>
                            {image.length > 0 && <MiniaSlideRea images={image} />}
                        </div> 
                    </div>
                    <div className="w-full flex lg:flex-row flex-col justify-between items-start pb-6 lg:space-y-0 space-y-4">
                        <div className="lg:w-[65%] w-full flex flex-col space-y-3">
                            <p>Caractéristiques :</p>
                            <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-4">
                                <div className="flex flex-col text-lg text-[#BBBBBB] space-y-1">
                                    <div className="flex flex-row justify-start items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                        <img src="/images/Réalisation/objectifs.png" alt="Objectifs" className="lg:w-[20px] w-[15px]" />
                                        <p>Objectifs :</p>
                                    </div>
                                    <p className="ml-4">{realisation.objectifs}</p>
                                </div>
                                <div className="flex flex-col text-lg text-[#BBBBBB] space-y-1">
                                    <div className="flex flex-row justify-start items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                        <img src="/images/Réalisation/surface.png" alt="Surface" className="lg:w-[20px] w-[15px]" />
                                        <p>Surface :</p>
                                    </div>
                                    <p className="ml-4">{realisation.surface} m2</p>
                                </div>
                                <div className="flex flex-col text-lg text-[#BBBBBB] space-y-1">
                                    <div className="flex flex-row justify-start items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                        <img src="/images/Réalisation/maitre.png" alt="Maitre" className="lg:w-[20px] w-[15px]" />
                                        <p>Maitre d'ouvrage :</p>
                                    </div>
                                    <p className="ml-4">{realisation.maitre}</p>
                                </div>
                                <div className="flex flex-col text-lg text-[#BBBBBB] space-y-1">
                                    <div className="flex flex-row justify-start items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                        <img src="/images/Réalisation/livraison.png" alt="Livraison" className="lg:w-[20px] w-[15px]" />
                                        <p>Livraison :</p>
                                    </div>
                                    <p className="ml-4">{realisation.livraison}</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[30%] w-full flex flex-col lg:justify-end justify-start lg:items-end items-start space-y-2">
                            <p>Ce projet vous plait ? Partagez-le !</p>
                            <div className="flex flex-row space-x-4">
                                <a href="" className="bg-[#0E76A8] p-2"><img src="/images/Footer/linkedin.png" alt="Linkedin" className="w-[25px]" /></a>
                                <a href="" className="bg-[#3B5998] p-2"><img src="/images/Footer/facebookb.png" alt="Facebook" className="w-[25px]" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center items-center pb-6">
                        <p>Un projet, une envie ? <Link href="/contact" className="font-semibold hover:underline">Contactez-nous</Link> dès maintenant.</p>
                    </div>
                </div>
                <div className="w-full bg-[#4C4A4A] py-10 flex justify-center items-center">
                    <div className="flex flex-col justify-start items-start w-[90%] space-y-6">
                        <p>Explorez davantage de nos projets :</p>
                        <div className="w-full grid lg:grid-cols-5 grid-cols-2 gap-8">
                            {isLoading ? "Chargement en cours" : randomRealisations.map(rea => (
                                <div className="w-full flex flex-col justify-start items-center text-center space-y-2">
                                    <img src={`https://apitda.comsea.fr/build/images/${rea.photo}`} alt={rea.title} className="w-full object-cover lg:h-[150px] h-[100px]" />
                                    <p>{rea.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}