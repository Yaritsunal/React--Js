
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const links = [
  { name: "Beranda", path: "/" },
  { name: "Tentang", path: "/about" },
  { name: "Layanan", path: "/services" },
  { name: "Portofolio", path: "/portfolio" },
  { name: "Kontak", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `block rounded-lg px-3 py-2 text-sm font-medium ${
      isActive
        ? "bg-blue-50 text-blue-700"
        : "text-slate-600 hover:text-blue-600"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link
          to="/"
          className="text-xl font-extrabold tracking-tight text-blue-700"
          onClick={() => setOpen(false)}
        >
          Tech<span className="text-slate-900">Nova.</span>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={linkClass}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          className="rounded-lg border px-3 py-2 text-sm md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Buka menu navigasi"
        >
          {open ? "Tutup ✕" : "Menu ☰"}
        </button>
      </div>

      {open && (
        <div className="space-y-1 border-t border-slate-100 px-5 py-3 md:hidden">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
