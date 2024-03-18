'use client'

import { motion } from "framer-motion"
import { fadeIn } from "@/app/utils/motion";

export default function Chiffres() {
    return (
        <motion.div initial="hidden" whileInView="show" variants={fadeIn("center", "spring", 0.2, 0.8)}  className="w-full flex lg:flex-row flex-col py-6 px-6 justify-around lg:items-center items-start lg:text-4xl text-3xl lg:space-y-0 space-y-6">
                <div className="flex flex-row space-x-4 items-center">
                    <p className="lg:text-6xl text-5xl">25</p>
                    <p>ANNÉES D'EXPÉRIENCE</p>
                </div>
                <div className="flex flex-row space-x-4 items-center">
                    <p className="lg:text-6xl text-5xl">3</p>
                    <p>AGENCES</p>
                </div>
                <div className="flex flex-row space-x-4 items-center">
                    <p className="lg:text-6xl text-5xl">17</p>
                    <div>
                        <p>COLLABORATEURS</p>
                        <p className="text-xl">À VOTRE ÉCOUTE</p>
                    </div>
                </div>
            </motion.div>
    )
}