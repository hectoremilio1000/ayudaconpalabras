// pages/index.js
import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useAppContext } from "../components/context/Context";
import * as fbq from "../lib/fpixel"; // si usas Facebook Pixel
import dynamic from "next/dynamic";
import Link from "next/link";
import axios from "axios";
import CountUp from "react-countup";

// Componentes que ya tienes
import NavBar from "../components/NavBarEs/NavBarEs";
import CasosEstudio from "../components/CasosEstudio";
import CasosExitosos from "../components/CasosExitosos";
import About from "../components/About";
import WhatsappButton from "../components/WhatsappButton";

import { InlineWidget } from "react-calendly";
import { Button } from "antd";
import { FaMobileAlt, FaVideo } from "react-icons/fa";
import Image from "next/image";

const wordsToday = 437840;
// Carga perezosa (sin SSR) para el Swiper
const MySwiper = dynamic(() => import("../components/SwiperPrueba"), {
  ssr: false,
});

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const { ingles, espa } = useAppContext();
  const router = useRouter();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  // Abre/cierra modal
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  // Validar formulario
  const validateForm = (data) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const whatsappRegex = /^[0-9]{10}$/;
    const fieldErrors = {};

    if (!data.first_name) {
      fieldErrors.first_name = "Por favor, ingresa tu nombre.";
    }
    if (!data.last_name) {
      fieldErrors.last_name = "Por favor, ingresa tu apellido.";
    }
    if (!emailRegex.test(data.email)) {
      fieldErrors.email = "Por favor, ingresa un correo electrónico válido.";
    }
    if (!whatsappRegex.test(data.whatsapp)) {
      fieldErrors.whatsapp =
        "Por favor, ingresa un número de WhatsApp válido (10 dígitos).";
    }

    setErrors(fieldErrors);
    return Object.keys(fieldErrors).length === 0;
  };

  // Manejo del envío del form
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setAlertMessage("");
    setAlertType("");
    setErrors({});

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    if (!validateForm(data)) {
      setAlertMessage("Por favor, corrige los errores en el formulario.");
      setAlertType("error");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(`${apiUrl}/prospectsmeeting`, data);
      if (response.status === 200) {
        alert("¡Información enviada!");
        e.target.reset();
        toggleModal();
      } else {
        alert("¡Información enviada!");
        e.target.reset();
        toggleModal();
      }
    } catch (error) {
      console.error(
        "Error al enviar el formulario:",
        error.response?.data || error.message
      );
      setAlertMessage(
        "Hubo un error al enviar tu información. Por favor, intenta de nuevo."
      );
      setAlertType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Suma Con Palabras — Regala 1 minuto, cambia una vida</title>
        <meta
          name="description"
          content="En menos de 50 s ayudas a que un niño aprenda 20 palabras nuevas. Dona desde $1 USD al completar el reto."
        />
        {/* --- Open Graph (Facebook / WhatsApp) --- */}
        <meta property="og:title" content="Suma Con Palabras" />
        <meta
          property="og:description"
          content="Micro-donaciones para enseñar a leer a niñas y niños de zonas rurales."
        />
        <meta
          property="og:url"
          content="https://ayudaconpalabras.vercel.app/"
        />
        <meta property="og:type" content="website" />
        {/* imagen que quieres que aparezca */}
        <meta
          property="og:image"
          content="https://ayudaconpalabras.vercel.app/og/logo.png?v=2"
        />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="314" />
        {/* --- Twitter --- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://ayudaconpalabras.vercel.app/og/logo.png?v=2"
        />
      </Head>

      <NavBar />

      {/* HERO */}

      {/* Carrusel */}
      <MySwiper />
      <section className="w-full bg-primary text-white text-center py-10">
        <p className="text-xl mb-2">Palabras enseñadas hoy</p>
        <CountUp
          start={0}
          end={wordsToday}
          duration={3}
          separator=","
          className="text-5xl md:text-6xl font-extrabold text-darkHero"
        />
      </section>
      {/* Cómo funciona */}
      <section id="como-funciona" className="w-full bg-primaryLt/20 py-16">
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 items-center">
          {/* Tarjetas paso a paso */}
          <div className="grid gap-6">
            {[
              ["📲", "Descarga la app", "Disponible gratis en Android y iOS."],
              [
                "🎯",
                "Elige 20 palabras",
                "Temática de animales, frutas o colores.",
              ],
              [
                "⏱️",
                "1 minuto de juego",
                "Cada palabra aparece 5 s con audio divertido.",
              ],
              [
                "🤗",
                "Envía un ‘abrazo’",
                "Dona $1 o $5 para motivar al peque.",
              ],
              [
                "🎉",
                "Recompensa mensual",
                "La familia cobra su saldo y celebra.",
              ],
            ].map(([emoji, title, desc]) => (
              <div
                key={title}
                className="flex items-start gap-4 bg-white rounded-2xl p-4 shadow-md"
              >
                <span className="text-3xl">{emoji}</span>
                <div>
                  <h3 className="font-bold text-lg text-primary">{title}</h3>
                  <p className="text-textMain text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mock-up gigante */}
          <img
            src="/img/vaca.png"
            alt="Pantalla de la app"
            className="w-full max-w-sm mx-auto drop-shadow-2xl rounded-2xl"
          />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
          {/* Ilustración graciosa */}
          <img
            src="/img/padrino.png"
            alt="Ilustración padrino feliz"
            className="w-full max-w-xs mx-auto md:mx-0 animate-bounce-slow"
          />

          {/* Texto motivador */}
          <div className="text-center md:text-left space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-secondary leading-tight">
              ¡Hazte <span className="text-primary">Padrino</span> y suma
              sonrisas!
            </h2>
            <p className="text-textMain">
              Con <strong>$5 </strong> financias <strong>toda la semana</strong>{" "}
              de lecturas para un niño. Obtén tu <em>badge</em>, sal en nuestro
              Hall of Fame y recibe un audio de agradecimiento ❤️.
            </p>

            <button
              onClick={() => donate(5)}
              disabled={loading}
              className="inline-flex items-center gap-2 bg-cta text-darkHero font-bold px-10 py-4 rounded-full hover:opacity-90 shadow-lg text-lg"
            >
              🌟 Ser padrino ($5)
            </button>
          </div>
        </div>
      </section>

      {/* Descargas */}
      <section id="descargar" className="w-full bg-primaryLt/10 py-16">
        <div className="max-w-[1180px] mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Descarga gratis
          </h2>
          <p className="text-textMain mb-8">
            Sólo 50&nbsp;segundos al día para cambiar vidas ⭐
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.tuapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/img/google-play-badge.svg"
                alt="Disponible en Google Play"
                width={180}
                height={54}
                className="h-12 sm:h-14 w-auto hover:scale-105 transition"
              />
            </a>

            <a
              href="https://apps.apple.com/app/id123456789"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/img/app-store-badge.svg"
                alt="Disponible en la App Store"
                width={180}
                height={54}
                className="h-12 sm:h-14 w-auto hover:scale-105 transition"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
