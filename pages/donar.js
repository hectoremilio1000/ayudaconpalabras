// components/Donar.js
import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import axios from "axios";
import { FaHandHoldingHeart, FaRegSmileWink } from "react-icons/fa";
import NavBar from "../components/NavBarBlack/NavBarEs";

export default function Donar() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  // Estado de recaudación
  const [raised, setRaised] = useState(0);
  const goal = 2000; // meta mensual USD

  // useEffect(() => {
  //   // Trae datos reales si tienes endpoint
  //   axios.get(`${apiUrl}/raised-month`).then((res) => {
  //     setRaised(res.data.total || 0);
  //   });
  // }, []);

  // Función donación rápida
  const donate = async (amount) => {
    try {
      await axios.post(`${apiUrl}/donate`, { amount });
      setRaised((prev) => prev + amount);
      alert("¡Gracias por tu donación! 🎉");
    } catch (e) {
      alert("Ups, intenta de nuevo 😢");
    }
  };

  return (
    <>
      <NavBar />

      <section id="donar" className="w-full bg-secondary/10 pt-44 md:pt-44">
        <div className="max-w-[1080px] mx-auto px-6 text-center space-y-10">
          {/* Título */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-secondary">
            Dona y <span className="text-primary">abraza</span> un futuro mejor
          </h2>

          {/* Barra de progreso */}
          <div className="w-full bg-white rounded-full h-5 shadow-inner overflow-hidden">
            <div
              className="bg-primary h-full transition-all duration-700"
              style={{ width: `${Math.min((raised / goal) * 100, 100)}%` }}
            />
          </div>
          <p className="text-textMain">
            <CountUp end={raised} duration={1} prefix="$" /> / ${goal}{" "}
            recaudados este mes
          </p>

          {/* Botones de donación */}
          <div className="flex flex-wrap justify-center gap-4">
            {[5, 10].map((amt) => (
              <button
                key={amt}
                onClick={() => donate(amt)}
                className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-3 rounded-full shadow-lg hover:bg-primaryLt transition"
              >
                <FaHandHoldingHeart /> Donar ${amt}
              </button>
            ))}
          </div>

          {/* Beneficio emocional */}
          <div className="flex flex-col items-center gap-3 mt-8">
            <FaRegSmileWink className="text-4xl text-secondary" />
            <p className="text-textMain max-w-sm">
              Cada niño envía un audio de agradecimiento y tú obtienes un badge
              de “Padrino Estrella” ⭐
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
