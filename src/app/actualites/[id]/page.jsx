'use client'

import MiniaSlide from "@/components/MiniaSlide";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export async function generatMetadata(req, res) {
    const id = req.params.id
    const response = await fetch(`https://testtda.comsea.fr/api/openGraph/${id}`)

    const imageUrl = await response.text();
    return {
        openGraph: {
            images : imageUrl
        }
    }
}

export default function Actus() {
    const {id} = useParams()
    let [isLoading, setIsLoading] = useState(false)
    let [postState, setPostState] = useState([])
    let [images, setImages] = useState([])

    useEffect(() => {
        setIsLoading(true); // Start loading
        fetch(`https://apitda.comsea.fr/api/actualites/${id}`)
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

    const image = postState.photo ? [
        `https://apitda.comsea.fr/build/images/${postState.photo}`,
        ...images.map(image => {
            // Trouver la galerie correspondante pour l'image actuelle
            const galerie = postState.gallery.find(galerie => galerie == '/api/galeries/' + image.id);
            // Si une galerie correspondante est trouvée, retourner l'URL de l'image
            return galerie ? `https://apitda.comsea.fr/build/images/${image.link}` : null;
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