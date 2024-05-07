export default function Presentation() {
    return (
        <div className="w-full flex lg:flex-row flex-col items-center py-12 lg:space-y-0 space-y-6">
                <div className="lg:w-[50%] w-full flex flex-col justify-center items-center text-start">
                    <div className="lg:w-[80%] w-[90%]">
                        <div className="lg:text-6xl text-4xl font-bold mb-10 relative w-full">
                            <h1 className="underline decoration-[#DF0624] lg:underline-offset-8 underline-offset-4 lg:decoration-2 decoration-1">L'AGENCE TDA</h1>
                            <p className="absolute text-[#494949] -z-40 lg:ml-12 ml-4 lg:top-8 top-6">L'AGENCE TDA</p>
                        </div>
                        <p>Chez TDA, nous ne nous contentons pas de concevoir des bâtiments, mais nous donnons vie à des rêves et des aspirations. Spécialisés dans une multitude de domaines, nous façonnons des environnements où les gens peuvent vivre, apprendre, se divertir et guérir.</p><br/>
                        <p>Notre trésor le plus précieux réside dans notre équipe dévouée de professionnels du bâtiment. C'est cette équipe qui fait de chaque projet une histoire de succès, veillant à ce que chaque étape, de la conception à la réalisation, soit imprégnée de passion et de dévouement.</p><br/>
                        <p>Si vous cherchez une agence qui comprend la dimension humaine derrière chaque structure, une équipe engagée qui transforme des idées en expériences émotionnelles, TDA est là pour vous accompagner. Confiez-nous vos rêves architecturaux, et ensemble, nous créerons des espaces où les émotions s'épanouissent et où chaque détail compte.</p>
                    </div>
                </div>
                <div className="lg:w-[50%] w-full flex justify-center items-center">
                    <img src="images/Accueil/france.png" alt="Carte France" className="lg:w-[60%] w-[80%]" />
                </div>
            </div>
    )
}