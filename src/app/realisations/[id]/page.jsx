import Link from "next/link"

export default function Realisation() {
    
    return(
        <div className="w-[90%] flex flex-col justify-center items-center">
            <div className="w-full flex flex-row items-center justify-center py-12">
                <div className="w-[90%] flex flex-col justify-center items-start text-start space-y-4">
                    <div className="text-6xl font-bold mb-10 w-full">
                        <h1 className="drop-shadow-[30px_25px_0px_rgba(255,255,255,0.25)]">ENSEIGNEMENT</h1>
                        <div className="h-[2px] bg-[#DF0624] w-[300px] z-10"></div>
                    </div>
                    <div>
                        <p>Découvrez nos réalisations dans le secteurs de l’enseignement.</p>
                        <p>Explorer d’avantages nos projets.</p>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center pt-6 space-y-8">
                        <div className="w-[90%] grid grid-cols-2 gap-8">
                            <div className="bg-[#242424] p-10 flex flex-col items-end space-y-3 relative">
                                <div className="w-full flex flex-col items-end space-y-1">
                                    <div className="w-full flex flex-row justify-between items-center">
                                        <div className="flex flex-row justify-center items-center text-[#BBBBBB] text-base space-x-2">
                                            <img src="/images/Réalisation/utilisateur.png" alt="Utilisateur" className="w-[15px]" />
                                            <p>Nom du client</p>
                                        </div>
                                        <div className="flex flex-row justify-center items-center text-[#BBBBBB] text-base space-x-2">
                                        <p>Date de publication</p>
                                        </div>
                                    </div>
                                    <img src="/images/Accueil/bg.png" alt="Test" className="w-full h-[300px] object-cover" />
                                </div>
                                <div className="w-full flex flex-row justify-between items-center">
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] text-base space-x-2">
                                        <img src="/images/Réalisation/localisation.png" alt="Localisation" className="w-[15px]" />
                                        <p>lieu de la réalisation</p>
                                    </div>
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] text-base space-x-2">
                                        <img src="/images/Réalisation/surface.png" alt="Surface" className="w-[20px]" />
                                        <p>XX m2</p>
                                    </div>
                                </div>
                                <h3 className="w-full text-4xl font-semibold">TITRE DU PROJET</h3>
                                <div className="absolute flex flex-row bottom-0 right-0 text-black text-xs w-1/2">
                                    <div className="w-1/4 h-[30px] bg-black">
                                        <div className="w-full h-full bg-[#242424] rounded-br-3xl"></div>
                                    </div>
                                    <div className="w-1/2 h-[30px] bg-black text-white rounded-t-xl flex flex-row justify-center items-center">
                                        <div className="underline decoration-[#DF0624] underline-offset-4 decoration-2">
                                            <Link href="/realisations/enseignement/1">Voir le projet</Link>
                                        </div>
                                    </div>
                                    <div className="w-1/4 h-[30px] bg-black">
                                        <div className="w-full h-full bg-[#242424] rounded-bl-3xl"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#242424] p-10 flex flex-col items-end space-y-3 relative">
                                <div className="w-full flex flex-col items-end space-y-1">
                                    <div className="w-full flex flex-row justify-between items-center">
                                        <div className="flex flex-row justify-center items-center text-[#BBBBBB] text-base space-x-2">
                                            <img src="/images/Réalisation/utilisateur.png" alt="Utilisateur" className="w-[15px]" />
                                            <p>Nom du client</p>
                                        </div>
                                        <div className="flex flex-row justify-center items-center text-[#BBBBBB] text-base space-x-2">
                                        <p>Date de publication</p>
                                        </div>
                                    </div>
                                    <img src="/images/Accueil/bg.png" alt="Test" className="w-full h-[300px] object-cover" />
                                </div>
                                <div className="w-full flex flex-row justify-between items-center">
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] text-base space-x-2">
                                        <img src="/images/Réalisation/localisation.png" alt="Localisation" className="w-[15px]" />
                                        <p>lieu de la réalisation</p>
                                    </div>
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] text-base space-x-2">
                                        <img src="/images/Réalisation/surface.png" alt="Surface" className="w-[20px]" />
                                        <p>XX m2</p>
                                    </div>
                                </div>
                                <h3 className="w-full text-4xl font-semibold">TITRE DU PROJET</h3>
                                <div className="absolute flex flex-row bottom-0 right-0 text-black text-xs w-1/2">
                                    <div className="w-1/4 h-[30px] bg-black">
                                        <div className="w-full h-full bg-[#242424] rounded-br-3xl"></div>
                                    </div>
                                    <div className="w-1/2 h-[30px] bg-black text-white rounded-t-xl flex flex-row justify-center items-center">
                                        <div className="underline decoration-[#DF0624] underline-offset-4 decoration-2">
                                            <Link href="/actualites/1">Voir le projet</Link>
                                        </div>
                                    </div>
                                    <div className="w-1/4 h-[30px] bg-black">
                                        <div className="w-full h-full bg-[#242424] rounded-bl-3xl"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#242424] p-10 flex flex-col items-end space-y-3 relative">
                                <div className="w-full flex flex-col items-end space-y-1">
                                    <div className="w-full flex flex-row justify-between items-center">
                                        <div className="flex flex-row justify-center items-center text-[#BBBBBB] text-base space-x-2">
                                            <img src="/images/Réalisation/utilisateur.png" alt="Utilisateur" className="w-[15px]" />
                                            <p>Nom du client</p>
                                        </div>
                                        <div className="flex flex-row justify-center items-center text-[#BBBBBB] text-base space-x-2">
                                        <p>Date de publication</p>
                                        </div>
                                    </div>
                                    <img src="/images/Accueil/bg.png" alt="Test" className="w-full h-[300px] object-cover" />
                                </div>
                                <div className="w-full flex flex-row justify-between items-center">
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] text-base space-x-2">
                                        <img src="/images/Réalisation/localisation.png" alt="Localisation" className="w-[15px]" />
                                        <p>lieu de la réalisation</p>
                                    </div>
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] text-base space-x-2">
                                        <img src="/images/Réalisation/surface.png" alt="Surface" className="w-[20px]" />
                                        <p>XX m2</p>
                                    </div>
                                </div>
                                <h3 className="w-full text-4xl font-semibold">TITRE DU PROJET</h3>
                                <div className="absolute flex flex-row bottom-0 right-0 text-black text-xs w-1/2">
                                    <div className="w-1/4 h-[30px] bg-black">
                                        <div className="w-full h-full bg-[#242424] rounded-br-3xl"></div>
                                    </div>
                                    <div className="w-1/2 h-[30px] bg-black text-white rounded-t-xl flex flex-row justify-center items-center">
                                        <div className="underline decoration-[#DF0624] underline-offset-4 decoration-2">
                                            <Link href="/actualites/1">Voir le projet</Link>
                                        </div>
                                    </div>
                                    <div className="w-1/4 h-[30px] bg-black">
                                        <div className="w-full h-full bg-[#242424] rounded-bl-3xl"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#242424] p-10 flex flex-col items-end space-y-3 relative">
                                <div className="w-full flex flex-col items-end space-y-1">
                                    <div className="w-full flex flex-row justify-between items-center">
                                        <div className="flex flex-row justify-center items-center text-[#BBBBBB] text-base space-x-2">
                                            <img src="/images/Réalisation/utilisateur.png" alt="Utilisateur" className="w-[15px]" />
                                            <p>Nom du client</p>
                                        </div>
                                        <div className="flex flex-row justify-center items-center text-[#BBBBBB] text-base space-x-2">
                                        <p>Date de publication</p>
                                        </div>
                                    </div>
                                    <img src="/images/Accueil/bg.png" alt="Test" className="w-full h-[300px] object-cover" />
                                </div>
                                <div className="w-full flex flex-row justify-between items-center">
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] text-base space-x-2">
                                        <img src="/images/Réalisation/localisation.png" alt="Localisation" className="w-[15px]" />
                                        <p>lieu de la réalisation</p>
                                    </div>
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] text-base space-x-2">
                                        <img src="/images/Réalisation/surface.png" alt="Surface" className="w-[20px]" />
                                        <p>XX m2</p>
                                    </div>
                                </div>
                                <h3 className="w-full text-4xl font-semibold">TITRE DU PROJET</h3>
                                <div className="absolute flex flex-row bottom-0 right-0 text-black text-xs w-1/2">
                                    <div className="w-1/4 h-[30px] bg-black">
                                        <div className="w-full h-full bg-[#242424] rounded-br-3xl"></div>
                                    </div>
                                    <div className="w-1/2 h-[30px] bg-black text-white rounded-t-xl flex flex-row justify-center items-center">
                                        <div className="underline decoration-[#DF0624] underline-offset-4 decoration-2">
                                            <Link href="/actualites/1">Voir le projet</Link>
                                        </div>
                                    </div>
                                    <div className="w-1/4 h-[30px] bg-black">
                                        <div className="w-full h-full bg-[#242424] rounded-bl-3xl"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[90%] grid grid-cols-2 gap-8">
                            <div className="bg-[#242424] px-10 pt-5 pb-10 flex flex-col items-end space-y-3 relative">
                                <h3 className="w-full text-4xl font-semibold">TITRE DU PROJET</h3>
                                <div className="w-full flex flex-row justify-between items-center">
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] text-base space-x-2">
                                        <img src="/images/Réalisation/localisation.png" alt="Localisation" className="w-[15px]" />
                                        <p>lieu de la réalisation</p>
                                    </div>
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] text-base space-x-2">
                                        <img src="/images/Réalisation/surface.png" alt="Surface" className="w-[20px]" />
                                        <p>XX m2</p>
                                    </div>
                                </div>
                                <div className="w-full flex flex-row justify-between items-center">
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] text-base space-x-2">
                                        <img src="/images/Réalisation/utilisateur.png" alt="Utilisateur" className="w-[15px]" />
                                        <p>Nom du client</p>
                                    </div>
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] text-base space-x-2">
                                        <p>Date de publication</p>
                                    </div>
                                </div>
                                <div className="absolute flex flex-row bottom-0 right-0 text-black text-xs w-1/2">
                                    <div className="w-1/4 h-[30px] bg-black">
                                        <div className="w-full h-full bg-[#242424] rounded-br-3xl"></div>
                                    </div>
                                    <div className="w-1/2 h-[30px] bg-black text-white rounded-t-xl flex flex-row justify-center items-center">
                                        <div className="underline decoration-[#DF0624] underline-offset-4 decoration-2">
                                            <Link href="/actualites/1">Voir le projet</Link>
                                        </div>
                                    </div>
                                    <div className="w-1/4 h-[30px] bg-black">
                                        <div className="w-full h-full bg-[#242424] rounded-bl-3xl"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#242424] px-10 pt-5 pb-10 flex flex-col items-end space-y-3 relative">
                                <h3 className="w-full text-4xl font-semibold">TITRE DU PROJET</h3>
                                <div className="w-full flex flex-row justify-between items-center">
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] text-base space-x-2">
                                        <img src="/images/Réalisation/localisation.png" alt="Localisation" className="w-[15px]" />
                                        <p>lieu de la réalisation</p>
                                    </div>
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] text-base space-x-2">
                                        <img src="/images/Réalisation/surface.png" alt="Surface" className="w-[20px]" />
                                        <p>XX m2</p>
                                    </div>
                                </div>
                                <div className="w-full flex flex-row justify-between items-center">
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] text-base space-x-2">
                                        <img src="/images/Réalisation/utilisateur.png" alt="Utilisateur" className="w-[15px]" />
                                        <p>Nom du client</p>
                                    </div>
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] text-base space-x-2">
                                        <p>Date de publication</p>
                                    </div>
                                </div>
                                <div className="absolute flex flex-row bottom-0 right-0 text-black text-xs w-1/2">
                                    <div className="w-1/4 h-[30px] bg-black">
                                        <div className="w-full h-full bg-[#242424] rounded-br-3xl"></div>
                                    </div>
                                    <div className="w-1/2 h-[30px] bg-black text-white rounded-t-xl flex flex-row justify-center items-center">
                                        <div className="underline decoration-[#DF0624] underline-offset-4 decoration-2">
                                            <Link href="/actualites/1">Voir le projet</Link>
                                        </div>
                                    </div>
                                    <div className="w-1/4 h-[30px] bg-black">
                                        <div className="w-full h-full bg-[#242424] rounded-bl-3xl"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#242424] px-10 pt-5 pb-10 flex flex-col items-end space-y-3 relative">
                                <h3 className="w-full text-4xl font-semibold">TITRE DU PROJET</h3>
                                <div className="w-full flex flex-row justify-between items-center">
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] text-base space-x-2">
                                        <img src="/images/Réalisation/localisation.png" alt="Localisation" className="w-[15px]" />
                                        <p>lieu de la réalisation</p>
                                    </div>
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] text-base space-x-2">
                                        <img src="/images/Réalisation/surface.png" alt="Surface" className="w-[20px]" />
                                        <p>XX m2</p>
                                    </div>
                                </div>
                                <div className="w-full flex flex-row justify-between items-center">
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] text-base space-x-2">
                                        <img src="/images/Réalisation/utilisateur.png" alt="Utilisateur" className="w-[15px]" />
                                        <p>Nom du client</p>
                                    </div>
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] text-base space-x-2">
                                        <p>Date de publication</p>
                                    </div>
                                </div>
                                <div className="absolute flex flex-row bottom-0 right-0 text-black text-xs w-1/2">
                                    <div className="w-1/4 h-[30px] bg-black">
                                        <div className="w-full h-full bg-[#242424] rounded-br-3xl"></div>
                                    </div>
                                    <div className="w-1/2 h-[30px] bg-black text-white rounded-t-xl flex flex-row justify-center items-center">
                                        <div className="underline decoration-[#DF0624] underline-offset-4 decoration-2">
                                            <Link href="/actualites/1">Voir le projet</Link>
                                        </div>
                                    </div>
                                    <div className="w-1/4 h-[30px] bg-black">
                                        <div className="w-full h-full bg-[#242424] rounded-bl-3xl"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#242424] px-10 pt-5 pb-10 flex flex-col items-end space-y-3 relative">
                                <h3 className="w-full text-4xl font-semibold">TITRE DU PROJET</h3>
                                <div className="w-full flex flex-row justify-between items-center">
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] text-base space-x-2">
                                        <img src="/images/Réalisation/localisation.png" alt="Localisation" className="w-[15px]" />
                                        <p>lieu de la réalisation</p>
                                    </div>
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] text-base space-x-2">
                                        <img src="/images/Réalisation/surface.png" alt="Surface" className="w-[20px]" />
                                        <p>XX m2</p>
                                    </div>
                                </div>
                                <div className="w-full flex flex-row justify-between items-center">
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] text-base space-x-2">
                                        <img src="/images/Réalisation/utilisateur.png" alt="Utilisateur" className="w-[15px]" />
                                        <p>Nom du client</p>
                                    </div>
                                    <div className="flex flex-row justify-center items-center text-[#BBBBBB] text-base space-x-2">
                                        <p>Date de publication</p>
                                    </div>
                                </div>
                                <div className="absolute flex flex-row bottom-0 right-0 text-black text-xs w-1/2">
                                    <div className="w-1/4 h-[30px] bg-black">
                                        <div className="w-full h-full bg-[#242424] rounded-br-3xl"></div>
                                    </div>
                                    <div className="w-1/2 h-[30px] bg-black text-white rounded-t-xl flex flex-row justify-center items-center">
                                        <div className="underline decoration-[#DF0624] underline-offset-4 decoration-2">
                                            <Link href="/actualites/1">Voir le projet</Link>
                                        </div>
                                    </div>
                                    <div className="w-1/4 h-[30px] bg-black">
                                        <div className="w-full h-full bg-[#242424] rounded-bl-3xl"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}