// app/profile/page.tsx
"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Profile() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Header Background */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-52 md:h-60 bg-gradient-to-r from-[#3C5148] to-[#678E4D]"
      >
        {/* Pattern background */}
        <div className="absolute inset-0 bg-[url('/image/bg-dots.png')] bg-cover opacity-70"></div>

        {/* Bagian profil */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[92%] md:w-[80%] bg-white rounded-xl shadow-lg px-6 py-6 flex items-center justify-between"
        >
          {/* Foto + Info */}
          <div className="flex items-center gap-5">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-28 h-28 rounded-full overflow-hidden border-2 border-gray-300 shadow-md"
            >
              <Image
                src="/image/profile.png"
                alt="Foto Profil"
                width={120}
                height={120}
                className="object-cover w-full h-full"
              />
            </motion.div>
            <div>
              <h2 className="text-xl font-bold text-black">Dalil Nur Apriedo</h2>
              <p className="text-gray-700">Geologi Pertambangan</p>
            </div>
          </div>

          {/* Tombol Edit */}
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#e5e7eb" }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 bg-gray-200 text-black rounded-lg text-sm transition"
          >
            Edit Profil
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Konten Utama */}
      <main className="flex-1 px-6 md:px-40 mt-28 mb-20">
        <hr className="mb-10 border-gray-300" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Data Diri */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h3 className="font-bold text-lg mb-6 text-black">Data Diri</h3>
            <div className="space-y-5">
              {[
                { label: "Nama", value: "Dalil Nur Apriedo" },
                { label: "NIS", value: "21155" },
                { label: "Jurusan", value: "Geologi Pertambangan" },
                { label: "Email", value: "dllnrdoa@gmail.com" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.2 }}
                >
                  <p className="text-sm font-medium text-black">{item.label}</p>
                  <div className="bg-gray-100 rounded-md px-4 py-2 text-sm text-black">
                    {item.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Status Pendaftaran */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <h3 className="font-bold text-lg mb-6 text-black">Status Pendaftaran</h3>
            <div className="space-y-7">
              {[
                { company: "PT Cargloss", status: "Ditolak", color: "bg-red-600" },
                { company: "PT Gamatechno", status: "Diterima", color: "bg-green-600" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.2 }}
                >
                  <p className="text-sm font-medium text-black mb-2">
                    Perusahaan {i + 1}
                  </p>
                  <div className="flex justify-between items-center bg-gray-100 px-4 py-3 rounded-md">
                    <span className="font-medium text-black">{item.company}</span>
                    <span
                      className={`px-3 py-1 text-xs md:text-sm ${item.color} text-white rounded-md`}
                    >
                      {item.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
