'use client'

import Link from "next/link"
import { useState, useEffect } from 'react';
import { motion } from "framer-motion"
import { fadeIn } from "@/app/utils/motion";

export default function Realisations() {
    const [isLoading, setIsLoading] = useState(true)
    const [realisations, setRealisations] = useState([])

    useEffect(() => {
        fetch(`https://api.tda-archi.com/api/categoriess`)
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
                    <motion.div initial="hidden" whileInView="show" variants={fadeIn("right", "spring", 0.2, 0.8)} className="lg:text-6xl text-4xl font-bold mb-10 w-full relative">
                        <h1 className="underline decoration-[#DF0624] lg:underline-offset-8 underline-offset-4 lg:decoration-2 decoration-1">NOS RÉALISATIONS</h1>
                        <p className="absolute text-[#494949] -z-40 lg:ml-12 ml-4 lg:top-8 top-6">NOS RÉALISATIONS</p>
                    </motion.div>
                    <motion.p initial="hidden" whileInView="show" variants={fadeIn("right", "spring", 0.2, 0.8)}>Découvrez en images nos réalisations, allant de la construction à la réhabilitation, en passant par l'extension ou l'aménagement de bâtiments résidentiels, industriels, médicaux, commerciaux, institutionnels, voire publics.</motion.p>
                    <div className="w-[90%] grid lg:grid-cols-3 grid-cols-1 gap-10 py-10">
                        {isLoading ? 'Chargement en cours' : realisations.map(realisation => (
                            <motion.div initial="hidden" whileInView="show" variants={fadeIn("center", "spring", 0.2, 0.8)} className="flex justify-center items-center lg:py-28 py-20 relative text-center">
                                <img src={`https://api.tda-archi.com/build/images/${realisation.photo}`} alt="" className="absolute w-full h-full object-cover -z-30" />
                                <Link href={`/realisations/${realisation.id}`} className="absolute w-full h-full z-10 bg-black/50 flex justify-center items-center transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 px-6 hover:bg-black/10">
                                    {realisation.name}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                    <p>Un projet, une envie ? <Link href="/contact" className="font-semibold hover:underline">Contactez-nous</Link> dès maintenant.</p>
                </div>
            </div>
        </div>
    )
}