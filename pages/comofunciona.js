// components/Comofunciona.js
import React from "react";
import {
  FaDownload,
  FaPlayCircle,
  FaHandHoldingHeart,
  FaSmile,
} from "react-icons/fa";
import NavBar from "../components/NavBarBlack/NavBarEs";

const steps = [
  {
    icon: <FaDownload className="text-4xl text-primary" />,
    title: "Descarga la app",
    desc: "Disponible gratis en Android y iOS.",
  },
  {
    icon: <FaPlayCircle className="text-4xl text-primary" />,
    title: "Juega 1 minuto",
    desc: "20 palabras flash con audio divertido.",
  },
  {
    icon: <FaHandHoldingHeart className="text-4xl text-primary" />,
    title: "Dona $5",
    desc: "Envía un abrazo digital al niño.",
  },
  {
    icon: <FaSmile className="text-4xl text-primary" />,
    title: "Reciben su recompensa",
    desc: "Cada fin de mes la familia cobra lo reunido.",
  },
];

export default function Comofunciona() {
  return (
    <>
      <NavBar />
      <section id="como-funciona" className="bg-white pt-44 md:pt-44 pb-8">
        <div className="max-w-[1080px] mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-12">Así de fácil</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {steps.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="flex flex-col items-center text-textMain space-y-4"
              >
                {icon}
                <h3 className="font-bold text-xl">{title}</h3>
                <p className="max-w-[200px]">{desc}</p>
              </div>
            ))}
          </div>

          {/* Mockups de pantalla */}
          <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8">
            <img
              src="/img/juego.png"
              alt="Pantalla de juego"
              className="w-64 drop-shadow-xl"
            />
            <img
              src="/img/corazon.png"
              alt="Pantalla de donación"
              className="w-64 drop-shadow-xl"
            />
          </div>
        </div>
      </section>
    </>
  );
}
