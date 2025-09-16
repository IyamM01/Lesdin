"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap } from "lucide-react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Hero() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src="/image/bg-sekolah.png"
          alt="Hero Image"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <Navbar />

        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          variants={fadeInUp}
          className="relative z-10 flex flex-col items-start justify-center h-full text-white max-w-6xl pl-16 md:pl-39"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
            className="bg-[#3C5148] hover:bg-[#678E4D] text-sm font-semibold px-6 py-2 rounded-full shadow-md transition mb-6"
          >
            Info PKL Baca Selengkapnya
            <ArrowRight className="inline-block ml-2 h-4 w-4" />
          </motion.button>

          <motion.h1
            variants={fadeInUp}
            transition={{ delay: 0.5 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg"
          >
            SMK NEGERI 2 DEPOK
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            transition={{ delay: 0.7 }}
            className="text-lg font-light mt-2 drop-shadow"
          >
            Unggul, Berkarakter, Kompeten
          </motion.p>
        </motion.div>
      </section>

      {/* Running Logo Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white py-6 relative overflow-hidden"
      >
        <div className="flex w-max animate-infinite-scroll">
          {[
            "/image/citra.png",
            "/image/carglos.png",
            "/image/gama.png",
            "/image/citra.png",
            "/image/carglos.png",
            "/image/gama.png",
            "/image/citra.png",
            "/image/carglos.png",
            "/image/gama.png",
            "/image/citra.png",
            "/image/carglos.png",
            "/image/gama.png",
          ].map((src, i) => (
            <Image
              key={i}
              src={src}
              alt="Logo Mitra"
              width={80}
              height={40}
              className="mx-8 inline-block"
            />
          ))}
        </div>
      </motion.section>

      {/* Tentang Sekolah + Visi Misi */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="w-full relative"
      >
        {/* Gambar background */}
        <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
          <Image
            src="/image/bg-sekolah-2.png"
            alt="Foto Sekolah"
            fill
            className="object-cover object-center"
          />
          {/* Card biru di atas gambar */}
          <motion.div
            variants={slideInRight}
            transition={{ duration: 0.8 }}
            className="absolute top-8 right-8 md:right-24 bg-[#3C5148] bg-opacity-95 rounded-xl shadow-lg p-6 max-w-md text-white"
          >
            <motion.h3
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-2xl font-bold mb-2"
            >
              SMK Negeri 2 Depok Sleman
            </motion.h3>
            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.5 }}
              className="text-sm md:text-base leading-relaxed"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </motion.p>
          </motion.div>
        </div>

        {/* Card putih di bawah gambar */}
        <div className="container mx-auto px-4 md:px-0 -mt-16 relative z-10 flex justify-center">
          <motion.div
            variants={scaleIn}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-4 md:p-6 text-center max-w-xl w-full"
          >
            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="text-green-600 font-medium mb-2 flex items-center justify-center gap-2"
            >
              <GraduationCap className="h-5 w-5" />
              Visi dan Misi
            </motion.p>
            <motion.h3
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
              className="text-2xl md:text-3xl font-bold text-[#678E4D] mb-6"
            >
              Visi Membangun Masa Depan
            </motion.h3>
            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.8 }}
              className="text-gray-700 text-lg md:text-xl mb-8"
            >
              Menghasilkan peserta didik yang unggul, berkarakter, kompeten, dan
              berwawasan lingkungan.
            </motion.p>
            <motion.a
              variants={fadeInUp}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.05 }}
              href="#misi"
              className="inline-flex items-center text-base font-semibold text-gray-800 hover:text-green-700"
            >
              Misi <ArrowRight className="ml-2 h-4 w-4" />
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* Info PKL */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger}
        className="py-20 px-6 bg-white"
      >
        <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto">
          {/* Background hijau di belakang gambar */}
          <motion.div
            variants={slideInLeft}
            transition={{ duration: 0.8 }}
            className="relative md:w-1/2 w-full flex-shrink-0 flex justify-center"
          >
            <div className="absolute left-0 top-6 w-[90%] h-[90%] bg-[#B7CDB0] rounded-lg -z-10" />
            <Image
              src="/image/bg-sekolah-3.png"
              alt="Kegiatan PKL"
              width={370}
              height={220}
              className="rounded-lg shadow-lg relative z-10"
              style={{ objectFit: "cover" }}
            />
          </motion.div>

          {/* Card Putih */}
          <motion.div
            variants={slideInRight}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8 md:ml-8 mt-8 md:mt-0 md:w-1/2 w-full"
          >
            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="text-green-600 text-sm font-medium flex items-center gap-2 mb-2"
            >
              <svg
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              Info Praktik Kerja Lapangan
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl font-bold mb-2 text-[#678E4D]"
            >
              Pengalaman Nyata untuk Masa Depan Karier
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.8 }}
              className="text-gray-700 text-sm leading-relaxed"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Statistik Mitra */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger}
        className="py-12 bg-white"
      >
        <div className="max-w-3xl mx-auto">
          <motion.p
            variants={fadeInUp}
            className="text-green-600 text-sm font-medium flex items-center gap-2 justify-center mb-4"
          >
            <GraduationCap />
            Jumlah Mitra Industri
          </motion.p>
          <motion.div
            variants={scaleIn}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#3C5148] rounded-xl shadow-lg flex flex-col md:flex-row justify-between items-center px-4 py-8 gap-6"
          >
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="flex-1 text-center text-white"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-1">100 +</h3>
              <p className="text-base font-medium opacity-80">Jumlah Mitra</p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
              className="flex-1 text-center text-white"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-1">80 +</h3>
              <p className="text-base font-medium opacity-80">Dalam Provinsi</p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.8 }}
              className="flex-1 text-center text-white"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-1">20 +</h3>
              <p className="text-base font-medium opacity-80">Luar Provinsi</p>
            </motion.div>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            transition={{ delay: 1 }}
            className="flex justify-center mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#3C5148] hover:bg-[#678E4D] text-white font-semibold py-3 px-8 rounded-lg shadow transition flex items-center gap-2 text-lg"
            >
              Mitra PKL
              <ArrowRight className="inline-block h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
      <style jsx global>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 8s linear infinite;
          display: flex;
        }
      `}</style>
    </div>
  );
}
