import Image from "next/image";
import Link from "next/link";

export default function TeamCard({ member }) {
  return (
    <Link
      href={`/team/${member.slug}`}
      className="group flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-blue-100 transition hover:-translate-y-1 hover:shadow-lg hover:ring-blue-300"
    >
      <Image
        src={member.image}
        alt={member.name}
        width={120}
        height={120}
        className="h-24 w-24 rounded-full object-cover ring-4 ring-sky-100 transition group-hover:ring-sky-300"
      />
      <h2 className="mt-4 text-lg font-semibold text-blue-700">{member.name}</h2>
      <p className="mt-1 text-sm text-slate-500">{member.role}</p>
    </Link>
  );
}
