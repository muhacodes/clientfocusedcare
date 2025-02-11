// pages/index.tsx
"use client";
import { useState } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

const HomePage: NextPage = () => {
  // Controls the mobile drawer
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation items
  const navLinks = [
    { name: "Home Caresss", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Link Three", href: "#" },
  ];

  return (
    <div onClick={() => {alert('alert')}} className="flex flex-col min-h-screen">
      {/* HEADER */}
      <header className="relative z-10 w-full bg-white">
        <div className="flex items-center justify-between px-4 py-4 mx-auto max-w-7xl md:px-6">
          {/* LEFT: Nav Items (hidden on mobile) */}
          <nav className="items-center hidden space-x-6 md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-gray-500"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CENTER: Logo */}
          <div className="flex-1 text-center md:static md:flex-none">
            <Link href="/" className="text-lg font-bold tracking-wider">
              Logo
            </Link>
          </div>

          {/* RIGHT: "Button" on desktop, Hamburger on mobile */}
          <div className="flex items-center">
            {/* Desktop "Button" */}
            <button className="hidden px-4 py-2 text-sm font-medium text-white bg-black hover:bg-gray-800 md:block">
              Contact
            </button>

            {/* Mobile Hamburger */}
            <button
              className="block text-gray-700 md:hidden hover:text-gray-500 focus:outline-none"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* MOBILE SLIDE-OUT MENU */}
        <div
          className={`fixed top-0 left-0 h-full w-[70%] bg-white transform transition-transform duration-300
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        >
          <div className="flex flex-col h-full p-4">
            {/* Close Icon */}
            <button
              className="self-end mb-4 text-gray-700 hover:text-gray-500 focus:outline-none"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Nav Links (mobile) */}
            <nav className="flex flex-col mt-4 space-y-4">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)} // close menu on click
                  className="text-sm font-medium text-gray-800 hover:text-gray-600"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Spacer */}
            <div className="flex-grow" />

            {/* Mobile "Button" at bottom */}
            <button className="px-4 py-2 mt-auto text-sm font-medium text-white bg-black hover:bg-gray-800">
              Button
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative flex-1 w-full text-white">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://plus.unsplash.com/premium_photo-1663099986867-464ba02e934a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // <-- replace with your own image
            alt="Hero background"
            sizes="cover"
            fill
            className="object-fill object-center"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        {/* Hero Content */}
        <div className="px-4 py-16 mx-auto max-w-7xl md:px-6 md:py-28">
          <div className="max-w-lg">
            <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-5xl">
              Compassionate Care for Your Loved Ones
            </h1>
            <p className="mb-8 text-gray-200 sm:text-lg">
              At ClientFocusedCare, we prioritize the well-being of our elderly
              clients and individuals with disabilities. Our dedicated team is
              here to provide personalized support tailored to your unique
              needs.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <button className="px-6 py-2 font-medium text-black bg-white hover:bg-gray-200">
                Learn More
              </button>
              <button className="px-6 py-2 font-medium text-white bg-black border border-white hover:bg-gray-900">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
