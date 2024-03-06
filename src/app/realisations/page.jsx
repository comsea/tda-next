import Link from "next/link"

export default function Realisations() {
    return(
        <div className="w-[90%] flex flex-col justify-center items-center">
            <div className="w-full flex flex-row items-center justify-center py-12">
                <div className="w-[90%] flex flex-col justify-center items-center text-start space-y-6">
                    <div className="text-6xl font-bold mb-10 w-full">
                        <h1 className="drop-shadow-[30px_25px_0px_rgba(255,255,255,0.25)]">NOS RÉALISATIONS</h1>
                        <div className="h-[2px] bg-[#DF0624] w-[300px] z-10"></div>
                    </div>
                    <p>Découvrez en images nos réalisations, allant de la construction à la réhabilitation, en passant par l'extension ou l'aménagement de bâtiments résidentiels, industriels, médicaux, commerciaux, institutionnels, voire publics.</p>
                    <div className="w-[90%] grid grid-cols-3 gap-10 py-10">
                        <div className="flex justify-center items-center py-24 relative">
                            <img src="images/test.png" alt="" className="absolute w-full h-full object-cover -z-30" />
                            <Link href={`/realisations/enseignement`} className="absolute w-full h-full z-10 bg-black/20 flex justify-center items-center transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
                                Enseignement et loisirs
                            </Link>
                        </div>
                        <div className="flex justify-center items-center py-24 relative">
                            <img src="images/test.png" alt="" className="absolute w-full h-full object-cover -z-30" />
                            <Link href="/" className="absolute w-full h-full z-10 bg-black/20 flex justify-center items-center transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
                                Enseignement et loisirs
                            </Link>
                        </div>
                        <div className="flex justify-center items-center py-24 relative">
                            <img src="images/test.png" alt="" className="absolute w-full h-full object-cover -z-30" />
                            <Link href="/" className="absolute w-full h-full z-10 bg-black/20 flex justify-center items-center transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
                                Enseignement et loisirs
                            </Link>
                        </div>
                        <div className="flex justify-center items-center py-24 relative">
                            <img src="images/test.png" alt="" className="absolute w-full h-full object-cover -z-30" />
                            <Link href="/" className="absolute w-full h-full z-10 bg-black/20 flex justify-center items-center transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
                                Enseignement et loisirs
                            </Link>
                        </div>
                        <div className="flex justify-center items-center py-24 relative">
                            <img src="images/test.png" alt="" className="absolute w-full h-full object-cover -z-30" />
                            <Link href="/" className="absolute w-full h-full z-10 bg-black/20 flex justify-center items-center transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
                                Enseignement et loisirs
                            </Link>
                        </div>
                        <div className="flex justify-center items-center py-24 relative">
                            <img src="images/test.png" alt="" className="absolute w-full h-full object-cover -z-30" />
                            <Link href="/" className="absolute w-full h-full z-10 bg-black/20 flex justify-center items-center transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
                                Enseignement et loisirs
                            </Link>
                        </div>
                    </div>
                    <p>Un projet, une envie ? <Link href="/contact" className="font-semibold hover:underline">Contactez-nous</Link> dès maintenant.</p>
                </div>
            </div>
        </div>
    )
}