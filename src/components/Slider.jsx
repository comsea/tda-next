'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

export default function Slider() {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + ' text-sm font-bold">' + (index + 1) + '</span>';
        },
      };

      return (
        <Swiper navigation={true} pagination={pagination} modules={[Navigation, Pagination]} className="mySwiper">
            <SwiperSlide className='!flex justify-center items-center w-full h-full'>
                <div className='w-[90%] flex lg:flex-row flex-col justify-between items-center lg:space-y-0 space-y-6'>
                    <div className='lg:w-[45%] w-[85%] flex flex-col justify-start items-start lg:space-y-8 space-y-4'>
                        <div className='flex flex-row w-full justify-between items-center'>
                            <h3 className='lg:text-5xl text-4xl font-bold'>Technicité</h3>
                            <p className='font-bold text-[#DF0624]'>01</p>
                        </div>
                        <p className='text-start w-[90%] text-[#BBBBBB]'>Chez nous, l'expertise est notre force. Architectes, conducteurs de travaux, et équipes administratives, sont tous riches d'une solide expérience. En prime, notre réseau de bureaux d'études techniques partenaires élargit notre champ de compétences. Cette synergie entre experts passionnés crée des collaborations fructueuses, fusionnant savoirs et savoir-faire pour des résultats exceptionnels.</p>
                    </div>
                    <div className='lg:w-1/2 w-[85%] flex flex-col justify-center items-center'>
                        <img src="images/Presentation/technicite.png" alt="Technicité" className='lg:w-[60%] w-[80%]' />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='!flex justify-center items-center w-full'>
                <div className='w-[90%] flex lg:flex-row flex-col justify-between items-center lg:space-y-0 space-y-6'>
                    <div className='lg:w-1/2 w-[85%] flex flex-col justify-center items-center'>
                        <img src="images/Presentation/proximite.png" alt="Proximité" className='lg:w-[60%] w-[80%]' />
                    </div>
                    <div className='lg:w-[45%] w-[85%] flex flex-col justify-start items-start lg:space-y-8 space-y-4'>
                        <div className='flex flex-row w-full justify-between items-center'>
                            <h3 className='lg:text-5xl text-4xl font-bold'>Proximité</h3>
                            <p className='font-bold text-[#DF0624]'>02</p>
                        </div>
                        <p className='text-start w-[90%] text-[#BBBBBB]'>Chez nous, la proximité et l'écoute sont au cœur de chaque projet. En tant que partenaire, nous collaborons étroitement avec vous sur toutes les phases de votre projet. Votre vision et vos besoins sont notre priorité, assurant une expérience transparente et personnalisée. Choisissez une approche où la proximité client est la clé de chaque succès architectural.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='!flex justify-center items-center w-full'>
                <div className='w-[90%] flex lg:flex-row flex-col justify-between items-center lg:space-y-0 space-y-6'>
                    <div className='lg:w-[45%] w-[85%] flex flex-col justify-start items-start lg:space-y-8 space-y-4'>
                        <div className='flex flex-row w-full justify-between items-center'>
                            <h3 className='lg:text-5xl text-4xl font-bold'>Délais</h3>
                            <p className='font-bold text-[#DF0624]'>03</p>
                        </div>
                        <p className='text-start w-[90%] text-[#BBBBBB]'>Votre calendrier est essentiel, et nous en sommes conscients. Notre engagement envers le respect des délais dans la construction garantit une exécution rapide et efficace. Avec une gestion minutieuse du temps, nous livrons des projets de haute qualité dans les délais convenus. Choisissez l'assurance d'une construction rapide et fiable avec nous.</p>
                    </div>
                    <div className='lg:w-1/2 w-[85%] flex flex-col justify-center items-center'>
                        <img src="images/Presentation/delais.png" alt="Délais" className='lg:w-[60%] w-[80%]' />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='!flex justify-center items-center w-full'>
                <div className='w-[90%] flex lg:flex-row flex-col justify-between items-center lg:space-y-0 space-y-6'>
                    <div className='lg:w-1/2 w-[85%] flex flex-col justify-center items-center'>
                        <img src="images/Presentation/prix.png" alt="Prix" className='lg:w-[60%] w-[80%]' />
                    </div>
                    <div className='lg:w-[45%] w-[85%] flex flex-col justify-start items-start lg:space-y-8 space-y-4'>
                        <div className='flex flex-row w-full justify-between items-center'>
                            <h3 className='lg:text-5xl text-4xl font-bold'>Prix</h3>
                            <p className='font-bold text-[#DF0624]'>04</p>
                        </div>
                        <p className='text-start w-[90%] text-[#BBBBBB]'>Optez pour une construction sans surprises financières. Chez nous, le respect du coût est notre engagement. Avec transparence et efficacité, nous veillons à maximiser la valeur de votre investissement, garantissant des résultats de qualité qui respectent votre budget.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='!flex justify-center items-center w-full'>
                <div className='w-[90%] flex lg:flex-row flex-col justify-between items-center lg:space-y-0 space-y-6'>
                    <div className='lg:w-[45%] w-[85%] flex flex-col justify-start items-start lg:space-y-8 space-y-4'>
                        <div className='flex flex-row w-full justify-between items-center'>
                            <h3 className='lg:text-5xl text-4xl font-bold'>Programme</h3>
                            <p className='font-bold text-[#DF0624]'>05</p>
                        </div>
                        <p className='text-start w-[90%] text-[#BBBBBB]'>Chez nous, chaque bâtiment raconte une histoire unique, celle de nos clients. Notre approche allie la rigueur du respect du programme à une sensibilité humaine. Nous nous engageons à comprendre vos besoins pour créer des espaces qui dépassent vos attentes.</p>
                    </div>
                    <div className='lg:w-1/2 w-[85%] flex flex-col justify-center items-center'>
                        <img src="images/Presentation/programme.png" alt="Programme" className='lg:w-[60%] w-[80%]' />
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
      )
}