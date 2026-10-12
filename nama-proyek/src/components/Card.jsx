
export function ServiceCard({ service }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-3xl">
        {service.icon}
      </div>
      <h3 className="text-lg font-bold text-slate-900">
        {service.title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        {service.description}
      </p>
    </article>
  );
}

export function PortfolioCard({ project }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg">
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="h-56 w-full object-cover"
      />
      <div className="p-6">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
          {project.category}
        </span>
        <h3 className="mt-2 text-xl font-bold">{project.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          {project.description}
        </p>
      </div>
    </article>
  );
}

export function TeamCard({ member }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
      <img
        src={member.image}
        alt={member.name}
        loading="lazy"
        className="mx-auto h-28 w-28 rounded-full object-cover"
      />
      <h3 className="mt-4 font-bold text-slate-900">{member.name}</h3>
      <p className="mt-2 text-sm text-blue-600">{member.role}</p>
    </article>
  );
}
