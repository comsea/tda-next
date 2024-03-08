'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import Link from 'next/link';

export default function ActusSlide() {
    const [isLoading, setIsLoading] = useState(true)
    const [actualites, setActualites] = useState([])

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + ' text-sm font-bold">' + (index + 1) + '</span>';
        },
      };

      useEffect(() => {
        fetch(`https://localhost:8000/api/actualites`)
        .then((response) => response.json())
        .then((result) => {
            const fetchedActualites = result['hydra:member'];
            const sortedActualites = fetchedActualites.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            // Suppression du tri par date
            setActualites(sortedActualites);
            setIsLoading(false);
        })
        .catch((error) => {
            console.error(error);
        });
    }, []);
    

      return (
        <Swiper pagination={pagination} modules={[Pagination]} slidesPerView={2} className="mySwiper">
            {isLoading ? 'Chargement en cours' : actualites.map(actualite => (
                <SwiperSlide className='!flex justify-center items-center w-full'>
                    <div className='w-[90%] bg-[#242424] p-12 flex flex-col justify-start items-start space-y-2 relative'>
                        <img src={`https://localhost:8000/build/images/${actualite.photo}`} alt="Article" className="w-full h-[250px] object-cover" />
                        <p className="text-base text-[#BBBBBB]">{new Date(actualite.createdAt).toLocaleString('fr-FR', { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>
                        <h4 className="text-3xl font-semibold uppercase">{actualite.title}</h4>
                        <p className="line-clamp-3 text-xl" dangerouslySetInnerHTML={{ __html: actualite.description }} />
                        <div className="absolute flex flex-row bottom-0 left-0 text-black text-xs w-1/2">
                            <div className="w-1/4 h-[30px] bg-black">
                                <div className="w-full h-full bg-[#242424] rounded-br-3xl"></div>
                            </div>
                            <div className="w-1/2 h-[30px] bg-black text-white rounded-t-xl flex flex-row justify-center items-center">
                                <div className="underline decoration-[#DF0624] underline-offset-4 decoration-2">
                                    <Link href={`/actualites/${actualite.id}`}>Voir l'article</Link>
                                </div>
                            </div>
                            <div className="w-1/4 h-[30px] bg-black">
                                <div className="w-full h-full bg-[#242424] rounded-bl-3xl"></div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
      )
}