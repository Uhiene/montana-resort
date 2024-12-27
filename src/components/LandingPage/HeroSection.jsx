import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const heroImages = [
    "/assets/img/banner/about_banner.png",
    "/assets/img/banner/banner.png",
    "/assets/img/banner/banner2.png",
    "/assets/img/banner/banner2.png",
    "/assets/img/banner/bradcam.png",
    "/assets/img/banner/bradcam2.png",
    "/assets/img/banner/bradcam3.png",
  ];
const HeroSection = () => {
  return (
    <div>
        <Swiper
         modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
         spaceBetween={50}
         navigation
         pagination={{ clickable: true }}
         scrollbar={{ draggable: true }}
         autoplay={{ delay: 3000, disableOnInteraction: false }}

         className='h-full w-full'
         >
            {heroImages.map((image, index) => (
                <SwiperSlide key={index}>
                    <div 
                    className='h-screen bg-cover bg-center flex flex-col justify-center items-center text-white'
                    style={{ backgroundImage: `url(${image})`}}>
                        <h1 className='text-4xl drop-shadow-lg tracking-wider mb-2'>Montana Resort</h1>
                        <p className='font-light text-md'>Unlock the enjoy view of Montana</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default HeroSection