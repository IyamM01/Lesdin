export default function SchoolInfo() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mengapa Memilih SMK Negeri 2 Depok?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Sekolah menengah kejuruan yang berkomitmen menghasilkan lulusan
            berkualitas, siap kerja, dan memiliki karakter yang kuat untuk
            menghadapi tantangan masa depan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Siswa Aktif */}
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                />
              </svg>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">1500+</div>
            <div className="text-gray-600">Siswa Aktif</div>
          </div>

          {/* Program Keahlian */}
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">12</div>
            <div className="text-gray-600">Program Keahlian</div>
          </div>

          {/* Mitra Industri */}
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-purple-600"
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
            <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
            <div className="text-gray-600">Mitra Industri</div>
          </div>

          {/* Tingkat Kelulusan */}
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-yellow-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
            <div className="text-gray-600">Tingkat Kelulusan</div>
          </div>
        </div>

        {/* Program Keahlian Detail */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Program Keahlian Unggulan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors duration-300">
              <h4 className="font-semibold text-gray-900 mb-2">
                Teknik Komputer dan Jaringan
              </h4>
              <p className="text-gray-600 text-sm">
                Mempelajari instalasi, konfigurasi, dan pemeliharaan sistem
                komputer dan jaringan.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors duration-300">
              <h4 className="font-semibold text-gray-900 mb-2">Multimedia</h4>
              <p className="text-gray-600 text-sm">
                Mengembangkan kreativitas dalam desain grafis, video editing,
                dan animasi.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors duration-300">
              <h4 className="font-semibold text-gray-900 mb-2">
                Akuntansi dan Keuangan
              </h4>
              <p className="text-gray-600 text-sm">
                Mendalami pencatatan keuangan, analisis laporan, dan sistem
                akuntansi.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors duration-300">
              <h4 className="font-semibold text-gray-900 mb-2">Otomotif</h4>
              <p className="text-gray-600 text-sm">
                Perawatan dan perbaikan kendaraan bermotor dengan teknologi
                terkini.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors duration-300">
              <h4 className="font-semibold text-gray-900 mb-2">Tata Boga</h4>
              <p className="text-gray-600 text-sm">
                Seni kuliner dan manajemen usaha makanan dengan standar
                industri.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors duration-300">
              <h4 className="font-semibold text-gray-900 mb-2">
                Dan 7 Program Lainnya
              </h4>
              <p className="text-gray-600 text-sm">
                Berbagai program keahlian sesuai kebutuhan industri masa depan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
