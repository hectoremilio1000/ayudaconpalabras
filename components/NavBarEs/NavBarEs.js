// components/NavBarEs/NavBarEs.js
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import { FaAlignRight, FaHandHoldingHeart } from "react-icons/fa";

// Nuevo logo (SVG o PNG en /public/img)
import logo from "/public/img/logo-sumaconpalabras2.png";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();

  // Cambia bg al hacer scroll
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /** Donación flash desde la barra. */
  const handleDonate = async () => {
    try {
      await axios.post(`${apiUrl}/donate`, { amount: 1 });
      alert("¡Gracias por tu donación! 🎉");
    } catch (e) {
      console.error(e);
      alert("Ups, algo salió mal 😢");
    }
  };

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-colors ${
        scrolled ? "bg-darkHero/95 shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1184px] mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        {/* ---------- Logo & Toggle ---------- */}

        <Link href="/" className="order-1 md:order-none">
          <Image
            src={logo}
            alt="Suma Con Palabras logo"
            priority
            className="w-32 md:w-40 h-auto"
          />
        </Link>

        {/* Ícono hamburguesa – sólo visible en móvil */}
        <button
          className="order-2 md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaAlignRight />
        </button>

        {/* ---------- Links ---------- */}
        <ul
          className={`md:flex items-center gap-6 font-medium ${
            menuOpen
              ? "absolute top-full left-0 w-full bg-darkHero/95 py-6 flex flex-col"
              : "hidden"
          } md:static md:bg-transparent`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <Link
              href="/comofunciona"
              className="text-white hover:text-primaryLt"
            >
              ¿Cómo funciona?
            </Link>
          </li>
          <li>
            <Link href="/descargar" className="text-white hover:text-primaryLt">
              Descargar
            </Link>
          </li>
          <li>
            <Link href="/donar">
              <button
                onClick={handleDonate}
                className="flex items-center gap-2 bg-cta text-darkHero font-bold px-4 py-2 rounded-full hover:bg-cta/80"
              >
                <FaHandHoldingHeart /> Donar $5
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
