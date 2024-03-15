'use client'

import ActusSlide from "@/components/ActusSlide";
import { motion } from "framer-motion"
import { fadeIn } from "@/app/utils/motion";

export default function Actualites() {
    return(
        <div className="lg:w-[90%] w-full flex flex-col justify-center items-center">
            <div className="w-full flex flex-row items-center justify-center lg:py-12 pt-24">
                <div className="w-[90%] flex flex-col justify-center items-start text-start">
                    <motion.div initial="hidden" whileInView="show" variants={fadeIn("right", "spring", 0.2, 0.8)} className="lg:text-6xl text-4xl font-bold mb-10 w-full relative">
                        <h1 className="underline decoration-[#DF0624] lg:underline-offset-8 underline-offset-4 lg:decoration-2 decoration-1">NOS ACTUALITÉS</h1>
                        <p className="absolute text-[#494949] -z-40 lg:ml-12 ml-4 lg:top-8 top-6">NOS ACTUALITÉS</p>
                    </motion.div>
                    <motion.p initial="hidden" whileInView="show" variants={fadeIn("right", "spring", 0.2, 0.8)}>Découvrez nos actualités dédiées aux tendances et nouveautés dans le domaine de l’architecture</motion.p>
                    <motion.div initial="hidden" whileInView="show" variants={fadeIn("center", "spring", 0.2, 0.8)} className="w-[95%] py-8">
                        <ActusSlide />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}