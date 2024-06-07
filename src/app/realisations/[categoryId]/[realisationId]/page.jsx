'use client'

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import MiniaSlideRea from "@/components/MiniaSlideRea";
import Link from "next/link";
import Linkedin from "@/components/Linkedin";
import Facebook from "@/components/Facebook";

export default function Rea() {
    const {realisationId} = useParams()
    let [isLoading, setIsLoading] = useState(false)
    let [realisation, setRealisation] = useState([])
    let [images, setImages] = useState([])
    let [realisations, setRealisations] = useState([])
    let [categorys, setCategorys] = useState([])

    useEffect(() => {
        setIsLoading(true); // Start loadinging
        fetch(`https://api.tda-archi.com/api/realisations/${realisationId}`)
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
        fetch(`https://api.tda-archi.com/api/galeries`)
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
        fetch(`https://api.tda-archi.com/api/realisations`)
        .then((response) => response.json())
        .then((result) => {
            const fetchedRealisations = result['hydra:member'];
            const sortedRealisation = fetchedRealisations.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            setRealisations(sortedRealisation);
            setIsLoading(false);
        })
        .catch((error) => {
            console.error(error);
        });
    }, []);

    useEffect(() => {
        fetch(`https://api.tda-archi.com/api/categoriess`)
        .then((response) => response.json())
        .then((result) => {
            const fetchedCategorys = result['hydra:member'];
            setCategorys(fetchedCategorys);
            setIsLoading(false);
        })
        .catch((error) => {
            console.error(error);
        });
    }, []);

    const cate = categorys.map(category => (realisation.category == '/api/categoriess/'+category.id ? category.id : null))
    console.log(cate)

    const image = realisation.photo ? [
        `https://api.tda-archi.com/build/images/${realisation.photo}`,
        ...images.map(image => {
            // Trouver la galerie correspondante pour l'image actuelle
            const galerie = realisation.galery.find(galerie => galerie == '/api/galeries/' + image.id);
            // Si une galerie correspondante est trouvée, retourner l'URL de l'image
            return galerie ? `https://api.tda-archi.com/build/images/${image.link}` : null;
        }).filter(url => url !== null) // Filtrer pour éliminer les valeurs null
    ] : [];

    // Sélectionnez un sous-ensemble aléatoire de 5 réalisations
    const randomRealisations = realisations.slice(0, 5);

    return(
        <div className="lg:w-[90%] w-full flex flex-col justify-center items-center">
            <div className="w-full flex flex-col items-center justify-center lg:py-12 pt-24">
                <div className="w-[90%] flex flex-col justify-center items-start text-start space-y-4">
                    <div className="lg:text-6xl text-3xl font-bold mb-10 w-full relative">
                        <h1 className="underline decoration-[#DF0624] lg:underline-offset-8 underline-offset-4 lg:decoration-2 decoration-1 uppercase">{realisation.title}</h1>
                        <p className="absolute text-[#494949] -z-40 lg:ml-12 ml-4 lg:top-8 top-6 uppercase">{realisation.title}</p>
                    </div>
                    <div className="w-full flex flex-col items-start justify-between pb-6 lg:space-y-2 space-y-4">
                        <div className="w-full flex flex-row justify-between items-start">
                            <div className="w-full flex flex-col justify-start items-start">
                                <div className="flex flex-row justify-center items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                    <img src="/images/Réalisation/localisation.png" alt="Localisation" className="lg:w-[15px] w-[10px]" />
                                    <p>{realisation.lieu}</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="w-full">
                                {image.length > 0 && <MiniaSlideRea images={image} />}
                            </div>
                        </div> 
                    </div>
                    <div className="w-full flex lg:flex-row flex-col justify-between items-start pb-6 lg:space-y-0 space-y-4">
                        <div className="lg:w-[65%] w-full flex flex-col space-y-3">
                            <p>Caractéristiques :</p>
                            <div className="w-full flex flex-col space-y-2">
                                <div className="flex flex-row text-lg text-[#BBBBBB] space-x-2">
                                    <div className="flex flex-row justify-start items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                        <img src="/images/Réalisation/maitre.png" alt="Maitre" className="lg:w-[20px] w-[15px]" />
                                        <p><span className="underline">Maitre d'ouvrage</span> :</p>
                                    </div>
                                    <p className="ml-4">{realisation.maitre}</p>
                                </div>
                                <div className="flex flex-row text-lg text-[#BBBBBB] space-x-2">
                                    <div className="flex flex-row justify-start items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                        <img src="/images/Réalisation/objectifs.png" alt="Objectifs" className="lg:w-[20px] w-[15px]" />
                                        <p><span className="underline">Objectifs</span> :</p>
                                    </div>
                                    <p className="ml-4">{realisation.objectifs}</p>
                                </div>
                                <div className="flex flex-row text-lg text-[#BBBBBB] space-x-2">
                                    <div className="flex flex-row justify-start items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                        <img src="/images/Réalisation/prestations.png" alt="Surface" className="lg:w-[20px] w-[15px]" />
                                        <p><span className="underline">Prestation</span> :</p>
                                    </div>
                                    <p className="ml-4">{realisation.prestation}</p>
                                </div>
                                <div className="flex flex-row text-lg text-[#BBBBBB] space-x-2">
                                    <div className="flex flex-row justify-start items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                        <img src="/images/Réalisation/surface.png" alt="Surface" className="lg:w-[20px] w-[15px]" />
                                        <p><span className="underline">Surface</span> :</p>
                                    </div>
                                    <p className="ml-4">{realisation.surface} m2</p>
                                </div>
                                <div className="flex flex-row text-lg text-[#BBBBBB] space-x-2">
                                    <div className="flex flex-row justify-start items-center text-[#BBBBBB] lg:text-base text-sm space-x-2">
                                        <img src="/images/Réalisation/livraison.png" alt="Livraison" className="lg:w-[20px] w-[15px]" />
                                        <p><span className="underline">Livraison</span> :</p>
                                    </div>
                                    <p className="ml-4">{realisation.livraison}</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[30%] w-full flex flex-col lg:justify-end justify-start lg:items-end items-start space-y-2">
                            <p>Ce projet vous plait ? Partagez-le !</p>
                            <div className="flex flex-row space-x-4">
                                <Linkedin shareUrl={`https://www.tda-archi.com/realisations/${cate}/${realisationId}`} />
                                <Facebook shareUrl={`https://www.tda-archi.com/realisations/${cate}/${realisationId}`} />
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center items-center pb-6">
                        <p>Un projet, une envie ? <Link href="/contact" className="font-semibold hover:underline">Contactez-nous</Link> dès maintenant.</p>
                    </div>
                </div>
                <div className="w-full bg-[#4C4A4A] py-10 flex justify-center items-center">
                    <div className="flex flex-col justify-start items-start w-[90%] space-y-6">
                        <p>Découvrez nos derniers projets :</p>
                        <div className="w-full grid lg:grid-cols-5 grid-cols-2 gap-8">
                            {isLoading ? "Chargement en cours" : randomRealisations.map(rea => (
                                <Link href={`https://www.tda-archi.com/realisations/categories/${rea.id}`} className="w-full flex flex-col justify-start items-center text-center space-y-2">
                                    <img src={`https://api.tda-archi.com/build/images/${rea.photo}`} alt={rea.title} className="w-full object-cover lg:h-[150px] h-[100px]" />
                                    <p>{rea.title}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}