"use client";

import Image from "next/image";

export default function MitraMarquee() {
  // Data mitra berdasarkan yang terlihat di gambar
  const mitraLogos = [
    {
      name: "Citranet",
      logo: "/mitra/citranet.svg",
    },
    {
      name: "Toyota",
      logo: "/mitra/toyota.svg",
    },
    {
      name: "Astra",
      logo: "/mitra/astra.svg",
    },
    {
      name: "Citranet",
      logo: "/mitra/citranet.svg",
    },
    {
      name: "Toyota",
      logo: "/mitra/toyota.svg",
    },
    {
      name: "Astra",
      logo: "/mitra/astra.svg",
    },
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mitra Industri Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Bekerja sama dengan berbagai perusahaan terkemuka untuk memberikan
            pengalaman praktik kerja lapangan yang berkualitas bagi siswa-siswi
            kami.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee hover:pause-marquee">
            {/* First set of logos */}
            <div className="flex items-center justify-around min-w-full">
              {mitraLogos.map((mitra, index) => (
                <div
                  key={index}
                  className="flex items-center mx-6 flex-shrink-0"
                >
                  <Image
                    src={mitra.logo}
                    alt={`${mitra.name} Logo`}
                    width={100}
                    height={50}
                    className="object-contain h-12 w-auto opacity-70 hover:opacity-100 transition-all duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                            <span class="text-gray-500 text-sm font-semibold">${mitra.name}</span>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="flex items-center justify-around min-w-full">
              {mitraLogos.map((mitra, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="flex items-center mx-6 flex-shrink-0"
                >
                  <Image
                    src={mitra.logo}
                    alt={`${mitra.name} Logo`}
                    width={100}
                    height={50}
                    className="object-contain h-12 w-auto opacity-70 hover:opacity-100 transition-all duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                            <span class="text-gray-500 text-sm font-semibold">${mitra.name}</span>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partner Categories */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-blue-50 rounded-xl">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Teknologi & IT
            </h3>
            <p className="text-gray-600 text-sm">
              Partnership dengan perusahaan teknologi untuk program TKJ dan
              Multimedia
            </p>
          </div>

          <div className="text-center p-6 bg-green-50 rounded-xl">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Otomotif
            </h3>
            <p className="text-gray-600 text-sm">
              Kerjasama dengan dealer dan bengkel resmi untuk praktik otomotif
            </p>
          </div>

          <div className="text-center p-6 bg-purple-50 rounded-xl">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Industri & Bisnis
            </h3>
            <p className="text-gray-600 text-sm">
              Kolaborasi dengan berbagai industri untuk semua program keahlian
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
