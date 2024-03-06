import ActusSlide from "@/components/ActusSlide";

export default function Actualites() {
    return(
        <div className="w-[90%] flex flex-col justify-center items-center">
            <div className="w-full flex flex-row items-center justify-center py-12">
                <div className="w-[90%] flex flex-col justify-center items-start text-start">
                    <div className="text-6xl font-bold mb-10 w-full">
                        <h1 className="drop-shadow-[30px_25px_0px_rgba(255,255,255,0.25)]">NOS ACTUALITÉS</h1>
                        <div className="h-[2px] bg-[#DF0624] w-[300px] z-10"></div>
                    </div>
                    <p>Découvrez nos actualités dédiées aux tendances et nouveautés dans le domaine de l’architecture</p>
                    <div className="w-[95%] py-8">
                        <ActusSlide />
                    </div>
                </div>
            </div>
        </div>
    )
}