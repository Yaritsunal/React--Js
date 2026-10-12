
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 md:grid-cols-3">
        <div>
          <h2 className="text-2xl font-extrabold text-white">
            TechNova.
          </h2>
          <p className="mt-3 max-w-sm text-sm leading-7">
            Partner teknologi digital untuk membantu bisnis berkembang
            melalui solusi yang inovatif dan modern.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-white">Navigasi</h3>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <Link to="/">Beranda</Link>
            <Link to="/about">Tentang Kami</Link>
            <Link to="/services">Layanan</Link>
            <Link to="/portfolio">Portofolio</Link>
            <Link to="/contact">Kontak</Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-white">Hubungi Kami</h3>
          <p className="mt-3 text-sm leading-7">
            Jakarta, Indonesia
            <br />
            Email: hello@technova.example
          </p>
          <div className="mt-3 flex gap-4 text-sm text-blue-300">
            <a href="https://instagram.com/" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 px-5 py-5 text-center text-xs">
        © {new Date().getFullYear()} TechNova Digital Solutions. All rights
        reserved.
      </div>
    </footer>
  );
}
