export default function Prestations() {
    return (
        <div className="w-full flex flex-row items-center justify-center py-12">
                <div className="w-[90%] flex flex-col justify-center items-end">
                    <div className="lg:text-6xl text-4xl font-bold mb-10 relative w-full flex justify-start lg:items-end items-start">
                        <h2 className="underline decoration-[#DF0624] lg:underline-offset-8 underline-offset-4 lg:decoration-2 decoration-1">NOS PRESTATIONS</h2>
                        <p className="absolute text-[#494949] -z-40 lg:ml-12 ml-4 lg:top-8 top-6">NOS PRESTATIONS</p>
                    </div>
                    <div className="flex lg:flex-row flex-col w-full items-start justify-center lg:space-x-20 lg:space-y-0 space-y-4 text-start">
                        <div className="lg:text-2xl text-xl flex flex-col space-y-4 lg:w-[40%] w-full">
                            <div className="font-semibold flex flex-row items-center space-x-4">
                                <img src="images/Accueil/regle.png" alt="Check" className="w-[20px] h-[20px]" />
                                <p>CONCEPTION ARCHITECTURALE</p>
                            </div>
                            <div className="font-semibold flex flex-row items-center space-x-4">
                                <img src="images/Accueil/regle.png" alt="Check" className="w-[20px] h-[20px]" />
                                <p>MAÎTRISE D'OEUVRE D'EXÉCUTION</p>
                            </div>
                            <div className="font-semibold flex flex-row items-center space-x-4">
                                <img src="images/Accueil/regle.png" alt="Check" className="w-[20px] h-[20px]" />
                                <p>MISSION PERMIS DE CONSTRUIRE</p>
                            </div>
                            <div className="font-semibold flex flex-row items-center space-x-4">
                                <img src="images/Accueil/regle.png" alt="Check" className="w-[20px] h-[20px]" />
                                <p>EXPERTISE</p>
                            </div>
                        </div>
                        <div className="lg:text-2xl text-xl flex flex-col space-y-4 lg:w-[40%] w-full">
                            <div className="font-semibold flex flex-row items-center space-x-4">
                                <img src="images/Accueil/regle.png" alt="Check" className="w-[20px] h-[20px]" />
                                <p>ETUDE DE FAISABILITÉ</p>
                            </div>
                            <div className="font-semibold flex flex-row items-center space-x-4">
                                <img src="images/Accueil/regle.png" alt="Check" className="w-[20px] h-[20px]" />
                                <p>DIAGNOSTICS</p>
                            </div>
                            <div className="font-semibold flex flex-row items-center space-x-4">
                                <img src="images/Accueil/regle.png" alt="Check" className="w-[20px] h-[20px]" />
                                <p>ORDONNANCEMENT PILOTAGE ET COORDINATION</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}