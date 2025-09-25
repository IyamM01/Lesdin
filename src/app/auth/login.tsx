"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState({ nis: "", password: "" });

  const slides = [
    {
      image: "/image/carousel-1.png",
      title: "Mencetak Generasi Unggul dan Berkarakter",
      description:
        "Kolaborasi dengan berbagai perusahaan terkemuka untuk memberikan pengalaman PKL terbaik bagi siswa.",
    },
    {
      image: "/image/carousel-2.png",
      title: "Pengalaman Nyata, Keahlian Nyata",
      description:
        "Menghadirkan pembelajaran bermakna melalui pengalaman nyata.",
    },
    {
      image: "/image/carousel-3.png",
      title: "Bersama Mencetak Generasi Emas",
      description:
        "Berkomitmen melahirkan generasi yang kreatif, inovatif, dan berdaya saing global.",
    },
  ];

  // Auto slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    console.log("Login attempt:", formData);
    // TODO: implement login logic
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side - Carousel (Mobile: Top, Desktop: Left) */}
      <div className="flex-1 relative overflow-hidden h-64 lg:h-screen">
        {/* Logo Sekolah */}
        <div className="absolute top-4 left-4 lg:top-6 lg:left-6 z-20 flex items-center gap-2 lg:gap-3">
          <Image
            src="/image/logo-sekolah.png"
            alt="SMK Negeri 2 Depok Sleman"
            width={32}
            height={32}
            className="lg:w-12 lg:h-12 object-contain rounded-full p-1 shadow-md"
            priority
          />
          <h1 className="font-bold text-sm lg:text-lg text-white drop-shadow">
            SMK Negeri 2 Depok Sleman
          </h1>
        </div>

        {/* Carousel Container */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Parent wajib relative + full size */}
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Overlay Text - Hidden on Mobile */}
            <div className="hidden lg:block absolute bottom-24 left-8 right-8 z-10">
              <h2 className="text-white text-3xl font-bold mb-3 max-w-md leading-snug">
                {slide.title}
              </h2>
              <p className="text-white/90 text-lg max-w-md leading-relaxed">
                {slide.description}
              </p>
            </div>

            {/* Mobile Overlay Text - Only visible on mobile */}
            <div className="lg:hidden absolute bottom-4 left-4 right-4 z-10">
              <h2 className="text-white text-lg font-bold mb-1 leading-tight">
                {slide.title}
              </h2>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={() =>
            setCurrentSlide(
              (prev) => (prev - 1 + slides.length) % slides.length
            )
          }
          className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 lg:w-12 lg:h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition"
        >
          <ChevronLeft size={16} className="lg:w-6 lg:h-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 lg:w-12 lg:h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition"
        >
          <ChevronRight size={16} className="lg:w-6 lg:h-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-2 left-4 lg:bottom-8 lg:left-8 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right Side - Login Form (Mobile: Bottom, Desktop: Right) */}
      <div className="flex-1 bg-gray-50 flex items-center justify-center p-4 lg:p-8">
        <div className="w-full max-w-md">
          {/* Welcome */}
          <div className="text-start mb-6 lg:mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#3C5148] mb-2">
              Selamat Datang!
            </h2>
            <p className="text-sm lg:text-base text-[#1B2727]">
              Setiap perjalanan dimulai dengan satu langkah. Mulailah di sini.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className="space-y-4 lg:space-y-6"
          >
            {/* NIS */}
            <input
              type="text"
              name="nis"
              placeholder="NIS"
              value={formData.nis}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-[#D5DDDF] rounded-lg focus:ring-2 focus:ring-[#3C5148] focus:border-transparent transition text-sm lg:text-base"
              required
            />

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Kata Sandi"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-[#D5DDDF] rounded-lg focus:ring-2 focus:ring-[#3C5148] focus:border-transparent transition pr-12 text-sm lg:text-base"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <EyeOff size={18} className="lg:w-5 lg:h-5" />
                ) : (
                  <Eye size={18} className="lg:w-5 lg:h-5" />
                )}
              </button>
            </div>

            {/* Remember Me & Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer text-xs lg:text-sm text-[#3C5148]/70">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-3 h-3 lg:w-4 lg:h-4 text-[#3C5148] border-gray-300 rounded focus:ring-green-600"
                />
                Ingat saya
              </label>
              <a
                href="#"
                className="text-[#3C5148]/70 hover:text-[#678E4D] text-xs lg:text-sm font-medium"
              >
                Lupa Kata Sandi?
              </a>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-[#3C5148] hover:bg-[#678E4D] text-white font-semibold py-3 rounded-lg focus:ring-2 focus:ring-green-600 focus:ring-offset-2 transition text-sm lg:text-base"
            >
              Masuk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
