'use client'

import Facebook from "@/components/Facebook";
import Linkedin from "@/components/Linkedin";
import MiniaSlide from "@/components/MiniaSlide";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion"
import { fadeIn } from "@/app/utils/motion";

export default function Actus() {
    const {id} = useParams()
    let [isLoading, setIsLoading] = useState(false)
    let [postState, setPostState] = useState([])
    let [images, setImages] = useState([])

    useEffect(() => {
        setIsLoading(true); // Start loading
        fetch(`https://api.tda-archi.com/api/actualites/${id}`)
        .then((response) => response.json())
        .then((result) => {
            setPostState(result);
            setIsLoading(false); // End loading
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            setIsLoading(false); // End loading in case of error
        });
    }, [id]);

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

    const image = postState.photo ? [
        `https://api.tda-archi.com/build/images/${postState.photo}`,
        ...images.map(image => {
            // Trouver la galerie correspondante pour l'image actuelle
            const galerie = postState.gallery.find(galerie => galerie == '/api/galeries/' + image.id);
            // Si une galerie correspondante est trouvée, retourner l'URL de l'image
            return galerie ? `https://api.tda-archi.com/build/images/${image.link}` : null;
        }).filter(url => url !== null) // Filtrer pour éliminer les valeurs null
    ] : [];

    return(
        <div className="lg:w-[90%] w-full flex flex-col justify-center items-center">
            {isLoading ? (
                <div>Chargement en cours</div>
            ) : (
                <div className="w-full flex flex-row items-center justify-center lg:py-12 pt-24 pb-8">
                    <div className="w-[90%] flex flex-col justify-center items-start text-start space-y-12">
                        <div className="w-full flex flex-col items-end space-y-1">
                            <p className="text-[#BBBBBB] lg:text-base text-sm">{new Date(postState.createdAt).toLocaleString('fr-FR', { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>
                            {image.length > 0 && <MiniaSlide images={image} />}
                        </div>
                        <div className="lg:text-6xl text-4xl font-bold mb-10 w-full relative">
                            <h1 className="underline decoration-[#DF0624] lg:underline-offset-8 underline-offset-4 lg:decoration-2 decoration-1 uppercase">{postState.title}</h1>
                            <p className="absolute text-[#494949] -z-40 lg:ml-12 ml-4 lg:top-8 top-6 uppercase">{postState.title}</p>
                        </div >
                        <div dangerouslySetInnerHTML={{ __html: postState.description }} />
                        <div className="flex flex-col space-y-4">
                            <p>Notre actualité vous plait ? Partagez la !</p>
                            <div className="flex flex-row space-x-4">
                                <Linkedin shareUrl={`https://www.tda-archi.com/actualites/${id}`} />
                                <Facebook shareUrl={`https://www.tda-archi.com/actualites/${id}`} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}