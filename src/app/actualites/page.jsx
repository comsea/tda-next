import ActusSlide from "@/components/ActusSlide";

export default function Actualites() {
    return(
        <div className="lg:w-[90%] w-full flex flex-col justify-center items-center">
            <div className="w-full flex flex-row items-center justify-center lg:py-12 pt-24">
                <div className="w-[90%] flex flex-col justify-center items-start text-start">
                    <div className="lg:text-6xl text-4xl font-bold mb-10 w-full relative">
                        <h1 className="underline decoration-[#DF0624] lg:underline-offset-8 underline-offset-4 lg:decoration-2 decoration-1">NOS ACTUALITÉS</h1>
                        <p className="absolute text-[#494949] -z-40 lg:ml-12 ml-4 lg:top-8 top-6">NOS ACTUALITÉS</p>
                    </div>
                    <p>Découvrez nos actualités dédiées aux tendances et nouveautés dans le domaine de l'architecture</p>
                    <div className="w-[95%] py-8">
                        <ActusSlide />
                    </div>
                </div>
            </div>
        </div>
    )
}