import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { team, getMemberBySlug } from "@/data/team";

export function generateStaticParams() {
  return team.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const member = getMemberBySlug(slug);
  return { title: member ? `${member.name} | Aoiro Studio` : "Aoiro Studio" };
}

export default async function TeamMemberPage({ params }) {
  const { slug } = await params;
  const member = getMemberBySlug(slug);

  if (!member) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-4xl">
      <Link href="/team" className="text-sm font-medium text-blue-600 hover:underline">
        ← Back to Team
      </Link>
      <div className="mt-6 grid items-center gap-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-blue-100 md:grid-cols-[auto_1fr] md:p-10">
        <Image
          src={member.image}
          alt={member.name}
          width={240}
          height={240}
          className="mx-auto h-44 w-44 rounded-full object-cover ring-8 ring-sky-100 sm:h-56 sm:w-56"
        />
        <div className="text-center md:text-left">
          <span className="inline-block rounded-full bg-sky-100 px-4 py-1 text-sm font-medium text-sky-700">
            {member.role}
          </span>
          <h1 className="mt-3 text-3xl font-extrabold text-blue-700 sm:text-4xl">
            {member.name}
          </h1>
          <p className="mt-4 text-justify text-slate-600">{member.bio}</p>
        </div>
      </div>
    </section>
  );
}
