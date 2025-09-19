import { Facebook, Instagram, Youtube, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#3C5148] text-white px-6 md:px-40 py-10">
      {/* Slogan */}
      <h2 className="text-2xl md:text-3xl font-bold mb-15 mt-5">
        Jiwa Kesatria, Prestasi Mendunia
      </h2>

      {/* Grid 4 kolom */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Kolom 1 */}
        <div>
          <h3 className="font-bold mb-5">SMK Negeri 2 Depok</h3>
          <p className="text-sm leading-relaxed mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="flex gap-4 text-lg">
            <a href="#">
              <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com/_terse_rah_/">
              <Instagram size={20} />
            </a>
            <a href="#">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        {/* Kolom 2 */}
        <div>
          <h3 className="font-bold mb-5">Navigasi</h3>
          <ul className="space-y-1">
            <li>
              <a href="#">Beranda</a>
            </li>
            <li>
              <a href="#">Mitra</a>
            </li>
          </ul>
        </div>

        {/* Kolom 3 */}
        <div>
          <h3 className="font-bold mb-5">Kontak</h3>
          <p className="flex items-center gap-2">
            <Phone size={18} /> (0274) 513515
          </p>
          <p className="flex items-center gap-2 mt-2">
            <Mail size={18} /> info@smkn2depoksleman.sch.id
          </p>
          <div className="mt-4 flex items-start gap-2">
            <Clock size={18} className="mt-1" />
            <div>
              <p>Senin : 07.00 WIB - 15.00 WIB</p>
              <p>Jumat : 07.00 WIB - 15.00 WIB</p>
            </div>
          </div>
        </div>

        {/* Kolom 4 */}
        <div>
          <h3 className="font-bold mb-5">Lokasi</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.29665125938!2d110.38938057483126!3d-7.772964177108618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a583a61290129%3A0x668d51a34b3a7ee8!2sSMK%20Negeri%202%20Depok%20-%20Sleman!5e1!3m2!1sid!2sid!4v1755249577114!5m2!1sid!2sid"
            width="100%"
            height="150"
            style={{ border: 0, borderRadius: "10px" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Garis dan Copyright */}
      <div className="border-t border-gray-300 mt-10 pt-4 text-center text-sm">
        Copyright © 2025 SMK Negeri 2 Depok Sleman. All Rights Reserved
      </div>
    </footer>
  );
}