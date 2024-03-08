'use client'

import MiniaSlide from "@/components/MiniaSlide";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function Actus() {
    const {id} = useParams()
    let [isLoading, setIsLoading] = useState(false)
    let [postState, setPostState] = useState([])
    let [images, setImages] = useState([])

    useEffect(() => {
        setIsLoading(true); // Start loading
        fetch(`https://localhost:8000/api/actualites/${id}`)
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
        fetch(`https://localhost:8000/api/galeries`)
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
        `https://localhost:8000/build/images/${postState.photo}`,
        ...images.map(image => {
            // Trouver la galerie correspondante pour l'image actuelle
            const galerie = postState.gallery.find(galerie => galerie == '/api/galeries/' + image.id);
            // Si une galerie correspondante est trouvée, retourner l'URL de l'image
            return galerie ? `https://localhost:8000/build/images/${image.link}` : null;
        }).filter(url => url !== null) // Filtrer pour éliminer les valeurs null
    ] : [];

    return(
        <div className="w-[90%] flex flex-col justify-center items-center">
            {isLoading ? (
                <div>Chargement en cours</div>
            ) : (
                <div className="w-full flex flex-row items-center justify-center py-12">
                    <div className="w-[90%] flex flex-col justify-center items-start text-start space-y-12">
                        <div className="w-full flex flex-col items-end space-y-1">
                            <p className="text-[#BBBBBB] text-base">{new Date(postState.createdAt).toLocaleString('fr-FR', { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>
                            {image.length > 0 && <MiniaSlide images={image} />}
                        </div>
                        <div className="text-6xl font-bold mb-10 w-full">
                            <h1 className="drop-shadow-[30px_25px_0px_rgba(255,255,255,0.25)] uppercase">{postState.title}</h1>
                            <div className="h-[2px] bg-[#DF0624] w-[300px] z-10"></div>
                        </div >
                        <div dangerouslySetInnerHTML={{ __html: postState.description }} />
                        <div className="flex flex-col space-y-4">
                            <p>Notre actualité vous plait ? Partagez la !</p>
                            <div className="flex flex-row space-x-4">
                                <a href="" className="bg-[#0E76A8] p-2"><img src="/images/Footer/linkedin.png" alt="Linkedin" className="w-[25px]" /></a>
                                <a href="" className="bg-[#3B5998] p-2"><img src="/images/Footer/facebookb.png" alt="Facebook" className="w-[25px]" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}