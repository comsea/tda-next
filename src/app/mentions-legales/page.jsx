export default function Mentions() {
    return(
        <div className="lg:w-[90%] w-full flex flex-col justify-center items-center">
            <div className="w-full flex flex-row items-center justify-center lg:py-12 pt-24">
                <div className="w-[90%] flex flex-col justify-center items-center text-start space-y-4">
                    <div className="lg:text-6xl text-4xl font-bold mb-10 w-full relative">
                        <h1 className="underline decoration-[#DF0624] lg:underline-offset-8 underline-offset-4 lg:decoration-2 decoration-1">MENTIONS LÉGALES</h1>
                        <p className="absolute text-[#494949] -z-40 lg:ml-12 ml-4 lg:top-8 top-6">MENTIONS LÉGALES</p>
                    </div>
                    <div class="w-full flex flex-col font-normal lg:py-12 py-4">
                        <h2 class="lg:text-3xl text-2xl font-bold mb-2">Propriétaire</h2>
                        <p>
                            Techniques Design Architectures, Siège sociale situé au 9 Rue de l'Abattoir, 08000 Charleville-Mézières
                        </p>

                        <h2 class="lg:text-3xl text-2xl font-bold mt-6 mb-2">Conception et réalisation</h2>
                        <p>
                            Agence de Communication COMSEA - Site Internet : <a href="http://www.comsea.fr" class="text-[#DF0624]" target="_blank">www.comsea.fr</a> - Email : <a href="mailto:contact@comsea.fr" class="text-[#DF0624]">contact@comsea.fr</a>
                        </p>

                        <h2 class="lg:text-3xl text-2xl font-bold mt-6 mb-2">Responsable de publication</h2>
                        <p>
                            Maxime MARQUE - <a href="mailto:info@tda-archi.com" class="text-[#DF0624]">info@tda-archi.com</a>
                        </p>

                        <h2 class="lg:text-3xl text-2xl font-bold mt-6 mb-2">Hébergeur</h2>
                        <p>
                            Le site tda-archi.com est hébergé par la société :
                            OVH, 2 RUE KELLERMANN 59100 ROUBAIX
                        </p>

                        <h2 class="lg:text-3xl text-2xl font-bold mt-6 mb-2">Propriété Intellectuelle</h2>
                        <p>
                            Le présent site Internet pris dans sa globalité et chacun des éléments qui le composent pris indépendamment, notamment les programmes et développements spécifiques et les contenus incluant des données, textes, images fixes ou animées, logotypes, sons, graphiques, fichiers, sont la propriété exclusive du responsable de la publication, du créateur du site Internet ou de tiers qui lui ont concédé une licence. Toute représentation totale ou partielle du site ou de l’un des éléments qui le composent sans l’autorisation expresse du titulaire des droits de propriété intellectuelle est interdite et constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
                        </p>

                        <h2 class="lg:text-3xl text-2xl font-bold my-2">Nous contacter</h2>
                        <p>
                            Par email : <a href="mailto:info@tda-archi.com" class="text-[#DF0624]">info@tda-archi.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}