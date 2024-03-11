import Footer from "@/components/Footer";

export default function Contact() {
    return(
        <div className="lg:w-[90%] w-full flex flex-col justify-center items-center">
            <div className="w-full flex flex-col items-center justify-center lg:py-12 pt-24">
                <div className="w-[90%] flex flex-col justify-start items-start text-start">
                    <div className="lg:text-6xl text-4xl font-bold mb-10 w-full">
                        <h1 className="drop-shadow-[30px_25px_0px_rgba(255,255,255,0.25)]">CONTACTEZ-NOUS</h1>
                        <div className="h-[2px] bg-[#DF0624] lg:w-[300px] w-[200px] z-10"></div>
                    </div>
                    <p>Découvrez avec nous l'art de concevoir des espaces uniques et fonctionnels. </p>
                    <p>Contactez-nous aujourd'hui pour transformer vos concepts en réalité.</p>
                </div>
                <div className="w-full flex lg:flex-row flex-col justify-start items-start mt-12 relative">
                    <div className="absolute w-full h-full bg-[#242424] -z-20"></div>
                    <div className="lg:w-[30%] w-full lg:p-16 p-8 relative">
                        <div className="w-full flex flex-col justify-start items-start space-y-10 text-xl">
                            <h4 className="lg:text-3xl text-2xl font-semibold">Nos informations</h4>
                            <div className="flex flex-col justify-start items-start">
                                <p className="text-xs">Adresse mail</p>
                                <p>info@tda-archi.com</p>
                            </div>
                            <div className="flex flex-col justify-start items-start">
                                <p className="text-xs">Téléphone</p>
                                <p>Charleville-Mézières : 03 24 57 42 19</p>
                                <p>Épernay : 03 51 25 50 03</p>
                                <p>Reims : 03 26 05 28 80</p>
                            </div>
                            <div className="flex flex-col justify-start items-start">
                                <p className="text-xs">Horraires</p>
                                <p>Du lundi au vendredi</p>
                                <p>de 8h30 à 12h et de 14h00 à 17h30</p>
                            </div>
                        </div>
                        <img src="images/contact.png" alt="Contact" className="absolute top-0 left-0 w-full h-full object-cover -z-10" />
                    </div>
                    <div className="lg:w-[70%] w-full lg:p-16 p-8">
                        <div className="w-full flex flex-col justify-start items-start space-y-10">
                            <h4 className="lg:text-3xl text-2xl font-semibold">Notre formulaire de contact</h4>
                            <form action="" className="w-full text-base space-y-3">
                                <div className="w-full grid lg:grid-cols-2 col-span-1 gap-x-10 gap-y-4">
                                    <div className="flex flex-col w-full justify-start items-start space-y-2">
                                        <label htmlFor="name">Nom Prénom <span className="text-[#DF0624]">*</span></label>
                                        <input type="text" name="name" id="name" placeholder="Votre nom et prénom" className="bg-[#242424] border-2 border-white w-full px-4 py-2" />
                                    </div>
                                    <div className="flex flex-col w-full justify-start items-start space-y-2">
                                        <label htmlFor="mail">Adresse Mail <span className="text-[#DF0624]">*</span></label>
                                        <input type="text" name="mail" id="mail" placeholder="Votre adresse mail" className="bg-[#242424] border-2 border-white w-full px-4 py-2" />
                                    </div>
                                    <div className="flex flex-col w-full justify-start items-start space-y-2 lg:col-span-2">
                                        <label htmlFor="name">Décrivez votre projet <span className="text-[#DF0624]">*</span></label>
                                        <textarea name="message" id="message" placeholder="Votre message" className="bg-[#242424] border-2 border-white w-full px-4 py-2"></textarea>
                                    </div>
                                </div>
                                <div className="w-full text-xs flex lg:flex-row flex-col justify-between lg:items-center items-start lg:space-y-0 space-y-4">
                                    <div className="flex flex-row justify-center items-center space-x-2">
                                        <input type="checkbox" name="validate" id="validate" />
                                        <label htmlFor="validate">j’accepte les conditions d’utilisations selon les conditions générales <span className="text-[#DF0624]">*</span></label>
                                    </div>
                                    <p><span className="text-[#DF0624]">*</span> Champs obligatoires</p>
                                </div>
                                <div className="w-full flex flex-row justify-end items-end">
                                    <input type="submit" value="Envoyer" className="bg-white text-[#DF0624] py-2 px-12 text-lg font-semibold" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="w-full py-8 flex justify-center items-center">
                    <div className="w-[90%] flex lg:flex-row flex-col justify-between items-center lg:space-y-0 space-y-8">
                        <div className="lg:w-[30%] w-full flex flex-col lg:justify-center justify-start lg:items-center items-start space-y-4">
                            <h3 className="lg:text-3xl text-2xl font-medium">TDA <span className="text-[#DF0624]">-</span> Charleville-Mézières</h3>
                            <div className="lg:text-lg text-base">
                                <p>9 Rue de l'Abattoir,</p>
                                <p>08000 Charleville-Mézières</p>
                            </div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2576.8766682102723!2d4.726848977126972!3d49.769576871470285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ea0de2db8dc411%3A0xfd472611b4511607!2sZ.I%20des%20Forges%20Saint-Charles%2C%209%20Rue%20de%20l&#39;Abattoir%2C%2008000%20Charleville-M%C3%A9zi%C3%A8res!5e0!3m2!1sfr!2sfr!4v1709134373362!5m2!1sfr!2sfr" title="Map" className="w-full min-h-[250px]"></iframe>
                        </div>
                        <div className="lg:w-[30%] w-full flex flex-col lg:justify-center justify-start lg:items-center items-start space-y-4">
                            <h3 className="lg:text-3xl text-2xl font-medium">TDA <span className="text-[#DF0624]">-</span> Reims</h3>
                            <div className="lg:text-lg text-base">
                                <p>29 Rue Chanzy,</p>
                                <p>51100 Reims</p>
                            </div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2472.549476975452!2d4.029473166958547!3d49.25238191860049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e974530f5dbebd%3A0xc2a31e73fec3acbf!2s29%20Rue%20Chanzy%2C%2051100%20Reims!5e0!3m2!1sfr!2sfr!4v1709134543302!5m2!1sfr!2sfr" title="Map" className="w-full min-h-[250px]"></iframe>
                        </div>
                        <div className="lg:w-[30%] w-full flex flex-col lg:justify-center justify-start lg:items-center items-start space-y-4">
                            <h3 className="lg:text-3xl text-2xl font-medium">TDA <span className="text-[#DF0624]">-</span> Épernay</h3>
                            <div className="lg:text-lg text-base">
                                <p>2 Place Victor Hugo,</p>
                                <p>51200 Épernay</p>
                            </div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1542.937867548606!2d3.9517859340667485!3d49.045214078966026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e96b521a7b6af3%3A0xd53c1f4de1d439f4!2s2%20Pl.%20Victor%20Hugo%2C%2051200%20%C3%89pernay!5e0!3m2!1sfr!2sfr!4v1709134611943!5m2!1sfr!2sfr" title="Map" className="w-full min-h-[250px]"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}