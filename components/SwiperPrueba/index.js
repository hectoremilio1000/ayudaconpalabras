// components/SwiperPrueba/index.js
import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

export default function MySwiper() {
  return (
    <section className="relative w-full h-[540px] md:h-[90vh] overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{ enabled: true }} // oculta flechas en todas
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="w-full h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-full flex items-center justify-center bg-[url('/img/ayudaaprende.png')] bg-cover bg-center">
            <div className="absolute inset-0 bg-darkHero/70" />
            <div className="relative z-10 text-center text-white px-4 max-w-sm sm:max-w-lg md:max-w-2xl">
              <h2 className="text-xl sm:text-2xl md:text-5xl font-extrabold mb-4 leading-tight">
                20 palabras · 1 minuto · Diversión
              </h2>
              <p className="text-base sm:text-lg mb-6 mx-8">
                Los niños repasan tarjetas flash con audio y video, ¡y tú puedes
                apoyarlos con un abrazo digital!
              </p>
              <Link
                href="#descargar"
                className="inline-block bg-primary px-6 py-2 sm:px-8 sm:py-3 rounded-full font-bold text-sm sm:text-base hover:bg-primaryLt transition"
              >
                Descargar app
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-full flex items-center justify-center bg-[url('/img/palabrasjuego.png')] bg-cover bg-center">
            <div className="absolute inset-0 bg-secondary/80" />
            <div className="relative z-10 text-center text-white px-4 max-w-sm sm:max-w-lg md:max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
                Dona $5 y envía un ❤️
              </h2>
              <p className="text-base sm:text-lg mb-6 mx-4">
                Cada peso mejora la vida de las familias.
              </p>
              <Link
                href="#donar"
                className="inline-block bg-cta text-darkHero px-6 py-2 sm:px-8 sm:py-3 rounded-full font-bold text-sm sm:text-base hover:bg-cta/80 transition"
              >
                Donar ahora
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
