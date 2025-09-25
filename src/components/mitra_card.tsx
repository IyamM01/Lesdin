import Image from "next/image";
import { MapPin } from "lucide-react";

interface MitraCardProps {
  name: string;
  deskripsi: string;
  lokasi: string;
  logo: string;
}

export default function MitraCard({
  name,
  deskripsi,
  lokasi,
  logo,
}: MitraCardProps) {
  return (
    <div className="relative flex items-center w-full max-w-5xl justify-center mx-auto mb-6">
      {/* Lingkaran logo */}
      <div className="bg-white rounded-full shadow-xl w-[185px] h-[185px] flex items-center justify-center z-10 absolute left-0">
        <Image
          src={logo}
          alt={`${name} Logo`}
          width={140}
          height={140}
          className="object-contain"
        />
      </div>

      {/* Kartu perusahaan */}
      <div className="bg-white rounded-2xl shadow-md w-full max-w-4xl h-[190px] pl-[170px] pr-10 flex flex-col justify-center relative overflow-hidden ml-[80px]">
        <h2 className="text-1xl font-bold text-black">{name}</h2>
        <p className="text-gray-500 text-l mt-2 leading-relaxed">
          {deskripsi}
        </p>
        <div className="flex items-center mt-3 text-gray-700">
          <MapPin className="w-6 h-6 mr-2" />
          <span className="text-base">{lokasi}</span>
        </div>

        {/* Lengkungan kanan ke dalam */}
        <div className="absolute top-0 left-0 h-full w-[90px] bg-[#3f544a] rounded-r-full"></div>
      </div>
    </div>
  );
}
