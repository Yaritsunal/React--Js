
import { services } from "../data/data";
import { ServiceCard } from "../components/Card";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <>
      <section className="bg-gradient-to-r from-blue-950 to-blue-700 px-5 py-20 text-center text-white">
        <p className="font-semibold text-blue-200">Apa yang Kami Tawarkan</p>
        <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">
          Layanan Kami
        </h1>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-100">
          Solusi teknologi yang membantu bisnis menjadi lebih efektif,
          inovatif, dan kompetitif.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      <section className="bg-blue-50 px-5 py-16 text-center">
        <h2 className="text-3xl font-extrabold">
          Punya Ide Proyek?
        </h2>
        <p className="mt-4 text-slate-600">
          Mari wujudkan ide Anda menjadi solusi digital.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Konsultasikan Proyek
        </Link>
      </section>
    </>
  );
}
