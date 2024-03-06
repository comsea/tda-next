import Link from "next/link"

export default function Footer(languetteProps) {
    return(
        <div className="w-full flex flex-col justify-center items-center relative">
            <div className="w-full relative py-10 flex items-center">
                <img src="/images/Footer/footer.png" alt="Background Footer" className="w-[50%] h-full absolute top-0 left-0 object-cover -z-10" />
                <div className="w-[90%] flex flex-row items-start justify-center space-x-24">
                    <div className="flex flex-col justify-center items-center space-y-10">
                        <img src="/images/Footer/Logo-TDA.png" alt="Logo TDA blanc" className="w-[350px]" />
                        <p>CHARLEVILLE-MÉZIÈRES <span className="text-[#DF0624]">|</span> EPERNAY <span className="text-[#DF0624]">|</span> REIMS</p>
                    </div>
                    <div className="flex flex-col items-start space-y-1 text-lg">
                        <Link href="/realisations" className="hover:underline">Réalisations</Link>
                        <Link href="/realisations" className="text-[#BBBBBB] hover:underline">Enseignement</Link>
                        <Link href="/realisations" className="text-[#BBBBBB] hover:underline">Loisir</Link>
                        <Link href="/realisations" className="text-[#BBBBBB] hover:underline">Logement</Link>
                        <Link href="/realisations" className="text-[#BBBBBB] hover:underline">Tertiaire</Link>
                        <Link href="/realisations" className="text-[#BBBBBB] hover:underline">Santé</Link>
                        <Link href="/realisations" className="text-[#BBBBBB] hover:underline">Sécurité</Link>
                    </div>
                    <div className="flex flex-row space-x-6 text-lg">
                        <div className="h-[155px] w-[1px] bg-[#DF0624]"></div>
                        <div className="flex flex-col items-start space-y-1">
                            <Link href="/presentation" className="hover:underline">Présentation</Link>
                            <Link href="/actualites" className="hover:underline">Actualités</Link>
                            <Link href="/contact" className="hover:underline">Contact</Link>
                            <Link href="/" className="hover:underline">Mentions légales</Link>
                            <Link href="/" className="hover:underline">Politique de confidentialité</Link>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <p>SUIVEZ-NOUS</p>
                        <div className="flex flex-row space-x-2">
                            <a href="https://www.facebook.com/techniques.design.architectures?locale=fr_FR" target="_blank" rel="noreferrer"><img src="/images/Footer/facebookb.png" alt="Facebook" /></a>
                            <a href="https://www.linkedin.com/company/techniques-design-architectures/" target="_blank" rel="noreferrer"><img src="/images/Footer/linkedin.png" alt="Linkedin" /></a>
                        </div>
                    </div>
                </div>
                <div className="absolute flex flex-col h-full -right-0 text-black text-xs">
                    <div className="w-[30px] h-[20%] bg-white">
                        <div className="w-[30px] h-full bg-black rounded-br-3xl"></div>
                    </div>
                    <div className="w-[30px] h-[60%] bg-white rounded-l-xl flex flex-row justify-center items-center">
                        <div className="-rotate-90 underline decoration-[#DF0624] underline-offset-4 decoration-2">
                            <Link href="/">Accueil</Link>
                        </div>
                    </div>
                    <div className="w-[30px] h-[20%] bg-white">
                        <div className="w-[30px] h-full bg-black rounded-tr-3xl"></div>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center text-cneter py-4 text-base font-normal text-[#BBBBBB] space-y-4">
                <div className="flex flex-col justify-center items-center">
                    <p>Techniques Design Architectures</p>
                    <div className="flex flex-row justify-center items-center space-x-6">
                        <div className="flex flex-row items-center space-x-2">
                            <img src="/images/Footer/localisation.png" alt="Localisation" className="w-[15px]" />
                            <p>Siège social : 9 Rue de l'Abattoir, 08000 Charleville-Mézières</p>
                        </div>
                        <div className="flex flex-row items-center space-x-2">
                            <img src="/images/Footer/tel.png" alt="Localisation" className="w-[15px]" />
                            <p>03 24 57 42 19</p>
                        </div>
                    </div>
                </div>
                <p className="text-sm font-light">Tout droits réservés © 2024 Copyright : <a href="https://comsea.fr" target="_blank" rel="noreferrer" className="hover:underline">Comsea</a></p>
            </div>
        </div>
    )
}