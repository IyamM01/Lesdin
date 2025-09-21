"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Mail, Instagram, Facebook, X } from "lucide-react";
import Link from "next/link";

const allCompanies = [
  {
    id: 1,
    slug: "gamatechno",
    name: "PT Gamatechno",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    location: "Jakarta",
    category: "SIJA",
    image: "/cargloss.png",
    logo: "/gama_logo.png",
  },
  {
    id: 2,
    slug: "cargloss",
    name: "PT Cargloss",
    description:
      "Perusahaan otomotif terkemuka dengan berbagai peluang magang.",
    location: "Bogor",
    category: "DPIB",
    image: "/cargloss.png",
    logo: "/gama_logo.png",
  },
  {
    id: 3,
    slug: "telkom",
    name: "PT Telkom",
    description: "Perusahaan telekomunikasi terbesar di Indonesia.",
    location: "Bandung",
    category: "TITL",
    image: "/cargloss.png",
    logo: "/gama_logo.png",
  },
  {
    id: 4,
    slug: "pln",
    name: "PT PLN",
    description: "Perusahaan listrik negara dengan jaringan nasional.",
    location: "Jakarta",
    category: "TOI",
    image: "/cargloss.png",
    logo: "/gama_logo.png",
  },
];

const categories = ["SIJA", "DPIB", "TITL", "TOI", "TP", "TKR", "TBKR", "TEK"];

const MitraPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [selectedCompany, setSelectedCompany] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter perusahaan sesuai kategori + search
  const filteredCompanies = allCompanies.filter((c) => {
    const matchesCategory =
      selectedCategory === "Semua" || c.category === selectedCategory;
    const matchesSearch =
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#2F4A44] min-h-screen font-sans text-gray-900">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 pt-36 pb-16">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8 flex justify-between items-center"
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Mitra PKL</h1>
            <p className="text-gray-600">Unggul, Berkarakter, Kompeten</p>
          </div>
          <img src="https://links.stembayo.sch.id/_next/image?url=%2Flogo-stembayo.png&w=3840&q=75" alt="Logo Sekolah" className="w-24 h-24" />
        </motion.section>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10"
        >
          <div className="bg-gray-100 flex items-center px-4 rounded-full shadow-lg">
            <input
              type="text"
              placeholder="Temukan mitra industri di sini..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow bg-transparent py-3 px-2 outline-none text-sm"
            />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </motion.div>
        {/* Berita Terkini */}
<motion.section
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 0.6 }}
  className="mt-16"
>
  <h2 className="text-2xl font-bold mb-6 text-white text-center">
    Berita Terkini
  </h2>

  <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide">
    {[
      {
        id: 1,
        title: "INFO LOWONGAN PEKERJAAN",
        desc: "PT Cargloss membuka 100 lowongan pekerjaan",
        img: "/cargloss.png",
      },
      {
        id: 2,
        title: "INFO LOWONGAN PEKERJAAN",
        desc: "PT Cargloss membuka 100 lowongan pekerjaan",
        img: "/cargloss.png",
      },
      {
        id: 3,
        title: "INFO LOWONGAN PEKERJAAN",
        desc: "PT Cargloss membuka 100 lowongan pekerjaan",
        img: "/cargloss.png",
      },
      {
        id: 4,
        title: "INFO LOWONGAN PEKERJAAN",
        desc: "PT Cargloss membuka 100 lowongan pekerjaan",
        img: "/cargloss.png",
      },
    ].map((news, index) => (
      <motion.div
        key={news.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 * index, duration: 0.5 }}
        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg cursor-pointer flex-shrink-0 w-72"
      >
        <img
          src={news.img}
          alt={news.title}
          className="w-full h-40 object-cover"
        />
        <div className="p-4">
          <h3 className="font-bold text-gray-900 text-base">{news.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{news.desc}</p>
        </div>
      </motion.div>
    ))}
  </div>
</motion.section>

        {/* List Perusahaan */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-2xl font-bold mb-6 text-white text-center">
            List Perusahaan
          </h2>

          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["Semua", ...categories].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-gray-300 text-gray-900 shadow-md"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Companies */}
          <div className="space-y-6">
            {filteredCompanies.map((company, index) => (
              <motion.div
                key={company.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="bg-white rounded-xl shadow-md flex p-5 items-center cursor-pointer hover:shadow-lg transition"
                onClick={() => setSelectedCompany(company)} // klik card untuk popup
              >
                <div className="flex-shrink-0 w-20 h-20 rounded-full overflow-hidden border shadow">
                  <img
                    src={company.logo}
                    alt="logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="ml-5">
                  <h3 className="font-bold text-gray-900 text-lg">
                    {company.name}
                  </h3>
                  <p className="text-sm text-gray-600">{company.description}</p>
                  <p className="text-sm text-gray-500 mt-1 flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {company.location}
                  </p>
                </div>
              </motion.div>
            ))}
            {filteredCompanies.length === 0 && (
              <p className="text-center text-white opacity-80">
                Tidak ada perusahaan yang cocok dengan pencarian.
              </p>
            )}
          </div>
        </motion.section>
      </main>

      {/* Popup Click */}
      <AnimatePresence>
        {selectedCompany && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
            onClick={() => setSelectedCompany(null)} // klik luar popup close
          >
            <div
              className="bg-white w-[450px] rounded-2xl shadow-lg overflow-hidden relative"
              onClick={(e) => e.stopPropagation()} // biar klik dalam popup gak close
            >
              {/* Tombol Close */}
              <button
                onClick={() => setSelectedCompany(null)}
                className="absolute top-3 right-3 bg-gray-200 rounded-full p-1 hover:bg-gray-300"
              >
                <X className="w-5 h-5" />
              </button>

              <img
                src={selectedCompany.image}
                alt={selectedCompany.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={selectedCompany.logo}
                    alt="logo"
                    className="h-14 w-14 rounded-full border"
                  />
                  <div>
                    <h2 className="text-xl font-bold">
                      {selectedCompany.name}
                    </h2>
                    <p className="flex items-center text-gray-500 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {selectedCompany.location}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {selectedCompany.description}
                </p>
                <div className="flex gap-6 text-gray-600 mb-5">
                  <Mail className="w-5 h-5 cursor-pointer hover:text-red-500" />
                  <Instagram className="w-5 h-5 cursor-pointer hover:text-pink-500" />
                  <Facebook className="w-5 h-5 cursor-pointer hover:text-blue-600" />
                </div>

                {/* Redirect ke halaman detail */}
                <Link href={`/mitra/${selectedCompany.slug}`}>
                  <button className="bg-green-700 text-white px-5 py-2 rounded-lg shadow hover:bg-green-800 transition w-full">
                    Lihat Selengkapnya
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default MitraPage;
