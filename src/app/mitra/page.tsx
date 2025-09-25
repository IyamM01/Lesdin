"use client";

import Navbar from "@/components/Navbar";
import CardBerita from "@/components/berita_card";
import SearchBar from "@/components/search_bar";
import MitraCard from "@/components/mitra_card";

import Image from "next/image";
import Footer from "@/components/Footer";

export default function Home() {
  const berita = [
    {
      id: 1,
      name: "INFO LOWONGAN PEKERJAAN",
      deskripsi: "PT Cargloss membuka 100 lowongan pekerjaan",
      image: "/image/carglos.png",
    },
    {
      id: 2,
      name: "INFO LOWONGAN PEKERJAAN",
      deskripsi: "PT Cargloss membuka 100 lowongan pekerjaan",
      image: "/image/carglos.png",
    },
    {
      id: 3,
      name: "INFO LOWONGAN PEKERJAAN",
      deskripsi: "PT Cargloss membuka 100 lowongan pekerjaan",
      image: "/image/carglos.png",
    },
  ];

  const filterButtons = [
    "Smua",
    "SIJA",
    "DPIB",
    "TITL",
    "TOI",
    "TP",
    "TKR",
    "TBKR",
    "TEK",
  ];

  const perusahaan = [
    {
      id: 1,
      name: "PT Gamatechno",
      deskripsi:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
      lokasi: "Salatiga",
      logo: "/image/gama.png",
    },
    {
      id: 2,
      name: "PT Gamatechno",
      deskripsi:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
      lokasi: "Salatiga",
      logo: "/image/gama.png",
    },
  ];

  return (
    <div className="min-h-screen bg-[#3E5446] text-white pt-24">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto mt-10 px-4">
        <div className="bg-white text-gray-800 rounded-2xl p-8 flex justify-between items-center shadow-lg">
          <div>
            <h1 className="text-5xl text-[#3C5148] font-bold">Mitra PKL</h1>
            <p
              className="text-[#3C5148] mt-2 text-2xl"
              style={{ opacity: 0.7 }}
            >
              Unggul, Berkarakter, Kompeten
            </p>
          </div>
          <div className="ml-6">
            <Image
              src="/image/logo-sekolah.png"
              height={112}
              width={112}
              alt="Logo"
              className="w-28 h-28 object-contain"
            />
          </div>
        </div>
        {/* Search bar */}
        <div className="-mt-10 max-w-[85%] mx-auto w-full">
          <SearchBar />
        </div>
      </section>

      {/* Berita Terkini */}
      <section className="max-w-6xl mx-auto mt-12 px-4">
        <h2 className="text-xl font-bold mb-6">Berita Terkini</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {berita.map((item) => (
            <CardBerita
              key={item.id}
              name={item.name}
              deskripsi={item.deskripsi}
              image={item.image}
            />
          ))}
        </div>
      </section>

      {/* List Perusahaan */}
      <section className="max-w-6xl mx-auto mt-12 px-4">
        <h2 className="text-3xl font-bold mb-6">List Perusahaan</h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          {filterButtons.map((filter) => (
            <button
              key={filter}
              className="px-4 py-2 bg-white text-gray-700 rounded-full hover:bg-gray-100 transition-colors duration-200 text-sm font-medium"
            >
              {filter}
            </button>
          ))}
        </div>
        {/* Company Cards */}
        {perusahaan.map((item) => (
          <MitraCard
            key={item.id}
            name={item.name}
            deskripsi={item.deskripsi}
            lokasi={item.lokasi}
            logo={item.logo}
          />
        ))}
      </section>

      <Footer />
    </div>
  );
}
