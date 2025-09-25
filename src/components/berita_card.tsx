"use client";

import Image from "next/image";

interface CardBeritaProps {
  name: string;
  deskripsi: string;
  image: string;
}

export default function CardBerita({ name, deskripsi, image }: CardBeritaProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden text-gray-800 hover:scale-105 transition-transform duration-300">
      {/* Gambar */}
      <div className="relative w-full h-48">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      {/* Konten */}
      <div className="p-4">
        <h3 className="font-bold text-sm">{name}</h3>
        <p className="text-xs text-gray-600">{deskripsi}</p>
      </div>
    </div>
  );
}
