'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Pagination } from 'swiper/modules';
import Link from 'next/link';

export default function ActusSlide() {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + ' text-sm font-bold">' + (index + 1) + '</span>';
        },
      };

      return (
        <Swiper pagination={pagination} modules={[Pagination]} slidesPerView={2} className="mySwiper">
            <SwiperSlide className='!flex justify-center items-center w-full'>
                <div className='w-[90%] bg-[#242424] p-12 flex flex-col justify-start items-start space-y-2 relative'>
                    <img src="images/Accueil/article.png" alt="Article" className="w-full h-[250px] object-cover" />
                    <p className="text-base text-[#BBBBBB]">date de publication</p>
                    <h4 className="text-3xl font-semibold">TITRE DE L'ARTICLE</h4>
                    <p className="line-clamp-3 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className="absolute flex flex-row bottom-0 left-0 text-black text-xs w-1/2">
                        <div className="w-1/4 h-[30px] bg-black">
                            <div className="w-full h-full bg-[#242424] rounded-br-3xl"></div>
                        </div>
                        <div className="w-1/2 h-[30px] bg-black text-white rounded-t-xl flex flex-row justify-center items-center">
                            <div className="underline decoration-[#DF0624] underline-offset-4 decoration-2">
                                <Link href="/">Voir l'article</Link>
                            </div>
                        </div>
                        <div className="w-1/4 h-[30px] bg-black">
                            <div className="w-full h-full bg-[#242424] rounded-bl-3xl"></div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='!flex justify-center items-center w-full'>
                <div className='w-[90%] bg-[#242424] p-12 flex flex-col justify-start items-start space-y-2 relative'>
                    <img src="images/Accueil/article.png" alt="Article" className="w-full h-[250px] object-cover" />
                    <p className="text-base text-[#BBBBBB]">date de publication</p>
                    <h4 className="text-3xl font-semibold">TITRE DE L'ARTICLE</h4>
                    <p className="line-clamp-3 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className="absolute flex flex-row bottom-0 left-0 text-black text-xs w-1/2">
                        <div className="w-1/4 h-[30px] bg-black">
                            <div className="w-full h-full bg-[#242424] rounded-br-3xl"></div>
                        </div>
                        <div className="w-1/2 h-[30px] bg-black text-white rounded-t-xl flex flex-row justify-center items-center">
                            <div className="underline decoration-[#DF0624] underline-offset-4 decoration-2">
                                <Link href="/">Voir l'article</Link>
                            </div>
                        </div>
                        <div className="w-1/4 h-[30px] bg-black">
                            <div className="w-full h-full bg-[#242424] rounded-bl-3xl"></div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='!flex justify-center items-center w-full'>
                <div className='w-[90%] bg-[#242424] p-12 flex flex-col justify-start items-start space-y-2 relative'>
                    <img src="images/Accueil/article.png" alt="Article" className="w-full h-[250px] object-cover" />
                    <p className="text-base text-[#BBBBBB]">date de publication</p>
                    <h4 className="text-3xl font-semibold">TITRE DE L'ARTICLE</h4>
                    <p className="line-clamp-3 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className="absolute flex flex-row bottom-0 left-0 text-black text-xs w-1/2">
                        <div className="w-1/4 h-[30px] bg-black">
                            <div className="w-full h-full bg-[#242424] rounded-br-3xl"></div>
                        </div>
                        <div className="w-1/2 h-[30px] bg-black text-white rounded-t-xl flex flex-row justify-center items-center">
                            <div className="underline decoration-[#DF0624] underline-offset-4 decoration-2">
                                <Link href="/">Voir l'article</Link>
                            </div>
                        </div>
                        <div className="w-1/4 h-[30px] bg-black">
                            <div className="w-full h-full bg-[#242424] rounded-bl-3xl"></div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='!flex justify-center items-center w-full'>
                <div className='w-[90%] bg-[#242424] p-12 flex flex-col justify-start items-start space-y-2 relative'>
                    <img src="images/Accueil/article.png" alt="Article" className="w-full h-[250px] object-cover" />
                    <p className="text-base text-[#BBBBBB]">date de publication</p>
                    <h4 className="text-3xl font-semibold">TITRE DE L'ARTICLE</h4>
                    <p className="line-clamp-3 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className="absolute flex flex-row bottom-0 left-0 text-black text-xs w-1/2">
                        <div className="w-1/4 h-[30px] bg-black">
                            <div className="w-full h-full bg-[#242424] rounded-br-3xl"></div>
                        </div>
                        <div className="w-1/2 h-[30px] bg-black text-white rounded-t-xl flex flex-row justify-center items-center">
                            <div className="underline decoration-[#DF0624] underline-offset-4 decoration-2">
                                <Link href="/">Voir l'article</Link>
                            </div>
                        </div>
                        <div className="w-1/4 h-[30px] bg-black">
                            <div className="w-full h-full bg-[#242424] rounded-bl-3xl"></div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
      )
}