import Accordion from "./Accordion";

export default function DivAccordeon() {
    return (
        <div className="w-full flex flex-col items-center justify-center py-12">
            <div className="w-[90%] flex flex-col justify-center items-center">
                <div className="lg:text-6xl text-4xl font-bold mb-10 relative w-full flex justify-start lg:items-center items-start">
                    <h2 className="underline decoration-[#DF0624] lg:underline-offset-8 underline-offset-4 lg:decoration-2 decoration-1">NOS RÉALISATIONS</h2>
                    <p className="absolute text-[#494949] -z-40 lg:ml-12 ml-4 lg:top-8 top-6">NOS RÉALISATIONS</p>
                </div>
                <p>Découvrez en images nos réalisations, allant de la construction à la réhabilitation, en passant par l'extension ou l'aménagement de bâtiments résidentiels, industriels, médicaux, commerciaux, institutionnels, voire publics.</p>
            </div>
            <div className="w-full lg:block hidden">
               <Accordion />
            </div>
        </div>
    )
}