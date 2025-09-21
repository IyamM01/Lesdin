// app/pendaftaran/page.tsx
"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PendaftaranPage() {
  const [step, setStep] = useState(1);

  const steps = [
    "Data Siswa",
    "Data Orang Tua/Wali",
    "Pilihan Tempat PKL",
    "Dokumen Pendukung",
    "Persetujuan",
  ];

  const nextStep = () => setStep((prev) => (prev < steps.length ? prev + 1 : prev));
  const prevStep = () => setStep((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navigasi */}
      <Navbar />

      <main className="flex-1 pt-28 pb-10 text-[#3C5148]">
  <div className="max-w-6xl mx-auto px-6 md:px-10">
    <h1 className="text-2xl md:text-3xl font-bold text-center mb-10">
      Pendaftaran Praktik Kerja Lapangan
    </h1>


          <div className="bg-white rounded-lg shadow-md flex flex-col md:flex-row overflow-hidden">
            {/* Sidebar Step */}
            <div className="bg-[#3C5148] text-white w-full md:w-1/4 py-10 px-6">
              <ul className="space-y-6">
                {steps.map((s, i) => (
                  <li
                    key={i}
                    className={`flex items-center gap-2 ${
                      step === i + 1 ? "text-[#C8FF8C] font-semibold" : "text-gray-200"
                    }`}
                  >
                    <span
                      className={`h-3 w-3 rounded-full ${
                        step === i + 1 ? "bg-[#C8FF8C]" : "bg-gray-400"
                      }`}
                    ></span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Form Section */}
            <div className="flex-1 p-8">
              {/* STEP 1 */}
              {step === 1 && (
                <div>
                <h2 className="text-xl font-bold text-[#3C5148] mb-6">Data Siswa</h2>
<div className="space-y-5">

                    {[
                      "Nama Lengkap",
                      "NISN",
                      "Kelas dan Jurusan",
                      "Tempat, tanggal Lahir",
                      "Jenis Kelamin",
                      "Alamat",
                      "Nomor Telepon",
                      "Email",
                    ].map((field, i) => (
                      <input
                        key={i}
                        type="text"
                        placeholder={field}
                        className="w-full border border-gray-300 rounded-full px-5 py-3 text-sm text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#678E4D]"
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div>
                  <h2 className="text-xl font-bold text-black mb-6">Data Orang Tua/Wali</h2>
                  <div className="space-y-5">
                    {["Nama Orang Tua/Wali", "Pekerjaan", "Nomor Telepon"].map((field, i) => (
                      <input
                        key={i}
                        type="text"
                        placeholder={field}
                        className="w-full border border-gray-300 rounded-full px-5 py-3 text-sm text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#678E4D]"
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 3 */}
{step === 3 && (
  <div>
    <h2 className="text-xl font-bold text-[#3C5148] mb-6">Pilihan Tempat PKL</h2>
    <div className="space-y-5">
      {["Pilihan 1", "Pilihan 2", "Pilihan 3"].map((label, i) => (
        <div key={i} className="space-y-2">
          <label className="block text-sm font-medium text-[#3C5148]">
            {label}
          </label>
          <select
            className="w-full border border-gray-300 rounded-full px-5 py-3 text-sm text-[#3C5148] focus:outline-none focus:ring-2 focus:ring-[#678E4D]"
          >
            <option value="">-- Pilih PT --</option>
            <option value="cargloss">PT Cargloss</option>
            <option value="gamatechno">PT Gamatechno</option>
            <option value="citranet">PT Citranet</option>
          </select>
        </div>
      ))}
    </div>
  </div>
)}

              {/* STEP 4 */}
              {step === 4 && (
                <div>
                  <h2 className="text-xl font-bold text-black mb-6">Dokumen Pendukung</h2>
                  <div className="space-y-5">
                    <input
                      type="file"
                      className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#678E4D]"
                    />
                  </div>
                </div>
              )}

              {/* STEP 5 */}
              {step === 5 && (
                <div>
                  <h2 className="text-xl font-bold text-black mb-6">Persetujuan</h2>
                  <div className="space-y-5">
                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="w-5 h-5" />
                      <span className="text-sm text-black">
                        Saya menyetujui data yang saya isi sudah benar.
                      </span>
                    </label>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-10">
                {step > 1 && (
                  <button
                    onClick={prevStep}
                    className="px-6 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400"
                  >
                    Kembali
                  </button>
                )}
                {step < steps.length ? (
                  <button
                    onClick={nextStep}
                    className="ml-auto px-6 py-2 bg-[#3C5148] text-white rounded-lg hover:bg-[#2d3d34]"
                  >
                    Selanjutnya
                  </button>
                ) : (
                  <button
                    onClick={() => alert("Form berhasil dikirim!")}
                    className="ml-auto px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    Kirim
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
