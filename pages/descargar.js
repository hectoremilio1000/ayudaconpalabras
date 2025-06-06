// components/Descargar.js
import React from "react";
import CountUp from "react-countup";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";
import NavBar from "../components/NavBarBlack/NavBarEs";

export default function Descargar() {
  const downloadsTotal = 12845;

  return (
    <>
      <NavBar />

      <section
        id="descargar"
        // nav 56px + safe-area (iOS notch)
        className="w-full pt-[calc(10rem+env(safe-area-inset-top))] md:pt-44 pb-4 overflow-hidden"
      >
        <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* ------------ Ilustración ------------ */}
          <div className="relative flex justify-center md:justify-end order-1 md:order-2">
            <Image
              src="/img/download.png"
              alt=""
              width={260}
              height={520}
              className="animate-float"
              priority // se descarga antes
              placeholder="blur" // opcional: quita el flash
              blurDataURL="/img/blur-mockup.png" // tiny blur (10×10 px, 1 KB)
            />
          </div>

          {/* Texto + CTA */}
          <div className="text-center md:text-left space-y-6 order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight">
              ¡Descarga y juega
              <br />
              <span className="text-cta">gratis</span> ahora!
            </h2>

            <p className="text-textMain max-w-md mx-auto md:mx-0">
              Sólo necesitas 50&nbsp;segundos al día para cambiar vidas.
              Aprende, comparte, dona y celebra ⭐.
            </p>

            {/* Badges tienda */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#descargar">
                <Image
                  src="https://www.safestamper.com/public/img/apps/es/android.png"
                  alt="Google Play"
                  width={180}
                  height={54}
                  className="hover:scale-110 transition drop-shadow-lg"
                />
              </a>
              <a href="#descargar">
                <Image
                  src="https://www.safestamper.com/public/img/apps/es/ios.png"
                  alt="App Store"
                  width={180}
                  height={54}
                  className="hover:scale-110 transition drop-shadow-lg"
                />
              </a>
            </div>

            {/* Contador descargas */}
            <div className="inline-flex items-center gap-3 mt-6 bg-white rounded-full px-6 py-6 shadow-md">
              <FaArrowDown className="text-primary text-xl" />
              <CountUp
                end={downloadsTotal}
                duration={2}
                separator=","
                className="text-primary font-bold text-xl"
              />
              <span className="text-textMain">descargas</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
