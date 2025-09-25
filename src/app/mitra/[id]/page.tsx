"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface CompanyContact {
  instagram: string;
  email: string;
  phone: string;
}

interface Company {
  name: string;
  location: string;
  image: string;
  mitra: number;
  divisi: number;
  kuota: number;
  description: string;
  jobs: string[];
  contact: CompanyContact;
}

const companies: Record<string, Company> = {
  cargloss: {
    name: "PT Cargloss",
    location: "Jakarta",
    image: "/image/carglos.png",
    mitra: 50,
    divisi: 20,
    kuota: 80,
    description: `Cargloss Group mampu menghasilkan 1500 ton produk Cat setiap bulan
      serta berbagai perlengkapan pelindung kendaraan dan helm berkualitas tinggi.`,
    jobs: [
      "Pelaksana Maintenance",
      "Quality Control",
      "Operator Produksi",
      "Teknisi Mesin",
    ],
    contact: {
      instagram: "@carglosshelmets",
      email: "cargloss@google.com",
      phone: "(021) 7381199",
    },
  },
  gamatechno: {
    name: "PT Gamatechno",
    location: "Yogyakarta",
    image: "/image/gamatechno.png",
    mitra: 100,
    divisi: 35,
    kuota: 120,
    description: `PT Gamatechno adalah perusahaan pemasaran digital
      yang menyediakan layanan branding, iklan online, dan strategi pemasaran modern.`,
    jobs: ["Digital Marketing", "Content Creator", "UI/UX Designer"],
    contact: {
      instagram: "@ptgamatechno",
      email: "info@gamatechno.com",
      phone: "(022) 1234567",
    },
  },
};

// 🔢 Hook animasi angka
const useCountUp = (target: number, duration = 1500) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 30);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);
    return () => clearInterval(timer);
  }, [target, duration]);
  return count;
};

export default function MitraDetailPage() {
  const { id } = useParams();
  const company = companies[id as string];

  const mitra = useCountUp(company?.mitra || 0);
  const divisi = useCountUp(company?.divisi || 0);
  const kuota = useCountUp(company?.kuota || 0);

  if (!company) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <p className="text-xl text-red-500 font-semibold">
            Perusahaan tidak ditemukan
          </p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      {/* Banner - FIXED */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-80 mt-16"
      >
        <Image
          src={company.image}
          alt={company.name}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gray-100/90 rounded-t-3xl shadow-lg p-6">
          <h1 className="text-3xl font-bold text-gray-800">{company.name}</h1>
          {/* 📍 Lokasi clickable ke Google Maps */}
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              company.location
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 text-lg hover:underline"
          >
            📍 {company.location}
          </a>
        </div>
      </motion.div>

      <main className="flex-grow px-6 py-10 max-w-5xl mx-auto space-y-10">
        {/* Info Box - FIXED */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-3 gap-6 text-center"
        >
          <div className="bg-green-900 text-white rounded-xl p-5 shadow-md">
            <p className="text-3xl font-bold">{mitra}+</p>
            <p>Mitra PT</p>
          </div>
          <div className="bg-green-900 text-white rounded-xl p-5 shadow-md">
            <p className="text-3xl font-bold">{divisi}+</p>
            <p>Divisi</p>
          </div>
          <div className="bg-green-900 text-white rounded-xl p-5 shadow-md">
            <p className="text-3xl font-bold">{kuota}+</p>
            <p>Kuota PKL</p>
          </div>
        </motion.div>

        {/* Tentang Perusahaan - FIXED */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-[#3C5148]">
            Tentang Perusahaan
          </h2>
          <p className="text-gray-700 leading-relaxed">{company.description}</p>
        </motion.section>

        {/* Posisi Pekerjaan - FIXED */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-[#3C5148]">
            Posisi Pekerjaan
          </h2>
          <div className="space-y-4">
            {company.jobs.map((job: string, index: number) => (
              <details
                key={index}
                className="bg-green-900 text-white rounded-xl px-5 py-4 shadow-md cursor-pointer"
              >
                <summary className="flex justify-between items-center font-medium">
                  {job}
                  <ChevronDown className="w-5 h-5" />
                </summary>
                <p className="mt-3 text-gray-100 text-sm leading-relaxed">
                  Deskripsi singkat untuk {job}.
                </p>
              </details>
            ))}
          </div>
        </motion.section>

        {/* Kontak */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-[#3C5148]">Kontak</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-gray-200 rounded-xl p-5 text-center shadow-sm">
              <p className="font-medium">Instagram</p>
              <p className="text-gray-700">{company.contact.instagram}</p>
            </div>
            <div className="bg-gray-200 rounded-xl p-5 text-center shadow-sm">
              <p className="font-medium">Email</p>
              <p className="text-gray-700">{company.contact.email}</p>
            </div>
            <div className="bg-gray-200 rounded-xl p-5 text-center shadow-sm">
              <p className="font-medium">Telepon</p>
              <p className="text-gray-700">{company.contact.phone}</p>
            </div>
          </div>
        </motion.section>

        {/* Button daftar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="text-center"
        >
          <Link href="/pendaftaran">
            <button className="bg-green-900 text-white px-8 py-4 rounded-xl shadow-lg hover:bg-green-800 transition">
              Daftar Sekarang →
            </button>
          </Link>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
