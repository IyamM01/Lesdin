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
    <div className="min-h-screen flex">
      {/* Left Side - Carousel */}
      <div className="flex-1 relative overflow-hidden">
        {/* Logo Sekolah */}
        <div className="absolute top-6 left-6 z-20 flex items-center gap-3">
          <Image
            src="/image/logo-sekolah.png"
            alt="SMK Negeri 2 Depok Sleman"
            width={48}
            height={48}
            className="object-contain rounded-full p-1 shadow-md"
            priority
          />
          <h1 className="font-bold text-lg text-white drop-shadow">
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

            {/* Overlay Text */}
            <div className="absolute bottom-24 left-8 right-8 z-10">
              <h2 className="text-white text-3xl font-bold mb-3 max-w-md leading-snug">
                {slide.title}
              </h2>
              <p className="text-white/90 text-lg max-w-md leading-relaxed">
                {slide.description}
              </p>
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
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-8 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 bg-gray-50 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Welcome */}
          <div className="text-start mb-8">
            <h2 className="text-3xl font-bold text-[#3C5148] mb-2">
              Selamat Datang!
            </h2>
            <p className="color-[rgba(0, 0, 0, 0.80)]">
              Setiap perjalanan dimulai dengan satu langkah. Mulailah di sini.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className="space-y-6"
          >
            {/* NIS */}
            <input
              type="text"
              name="nis"
              placeholder="NIS"
              value={formData.nis}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition pr-12"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Remember Me & Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-600">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-600"
                />
                Ingat saya
              </label>
              <a
                href="#"
                className="text-green-600 hover:text-green-700 text-sm font-medium"
              >
                Lupa Kata Sandi?
              </a>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg focus:ring-2 focus:ring-green-600 focus:ring-offset-2 transition"
            >
              Masuk
            </button>
          </form>

          {/* Link tambahan */}
          <p className="text-center mt-6 text-sm text-gray-600">
            Belum punya akun?{" "}
            <a
              href="#"
              className="text-green-600 hover:text-green-700 font-semibold"
            >
              Daftar di sini
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
