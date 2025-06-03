// components/NavBarEs/NavBarEs.js
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaAlignRight, FaHandHoldingHeart } from "react-icons/fa";
import logo from "/public/img/logo-sumaconpalabras2.png";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // sombreado al hacer scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-colors ${
        scrolled ? "bg-darkHero/100 shadow-lg" : "bg-darkHero/100"
      }`}
    >
      <nav className="max-w-[1184px] mx-auto flex items-center justify-between py-2 px-3 md:px-6">
        {/* Logo */}
        <Link href="/" className="order-1 md:order-none">
          <Image
            src={logo}
            alt="Suma Con Palabras"
            priority
            className="w-32 md:w-40 h-auto"
          />
        </Link>

        {/* Hamburguesa */}
        <button
          className="order-2 md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaAlignRight />
        </button>

        {/* Links */}
        <ul
          className={`order-3 md:order-none md:flex items-center gap-6 font-medium z-40 ${
            menuOpen
              ? "absolute top-full left-0 w-full bg-darkHero/95 py-8 flex flex-col items-center gap-4"
              : "hidden"
          } md:static md:bg-transparent`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <Link
              href="/comofunciona"
              className="text-white hover:text-primaryLt transition-colors px-4 py-2"
            >
              ¿Cómo funciona?
            </Link>
          </li>

          <li>
            <Link
              href="/descargar"
              className="text-white hover:text-primaryLt transition-colors px-4 py-2"
            >
              Descargar
            </Link>
          </li>

          {/* Botón Donar */}
          <li className="w-full flex justify-center md:w-auto">
            <Link
              href="/donar"
              className="w-9/12 md:w-auto flex justify-center"
            >
              <button className="flex items-center justify-center gap-2 bg-cta text-darkHero font-bold px-6 py-3 rounded-full hover:bg-cta/80 transition w-full md:w-auto">
                <FaHandHoldingHeart /> Donar $5
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
