import Link from "next/link";
import Logo from "@/components/Logo";

export default function HomePage() {
  return (
    <section className="grid items-center gap-10 md:grid-cols-2">
      <div className="order-2 text-center md:order-1 md:text-left">
        <span className="inline-block rounded-full bg-sky-100 px-4 py-1 text-sm font-medium text-sky-700">
          Animation Studio
        </span>
        <h1 className="mt-4 text-4xl font-extrabold leading-tight text-blue-700 sm:text-5xl">
          Welcome to <span className="text-sky-500">Aoiro Studio</span>
        </h1>
        <p className="mt-4 text-slate-600">
          We are an animation studio passionate about turning ideas into moving
          stories. From original series to short films, our team blends
          imaginative worlds, expressive characters, and heartfelt storytelling
          to create animation that audiences remember.
        </p>
        <Link
          href="/team"
          className="mt-8 inline-block rounded-full bg-blue-600 px-7 py-3 font-medium text-white shadow-md transition hover:bg-blue-700"
        >
          Meet Our Team
        </Link>
      </div>
      <div className="order-1 flex justify-center md:order-2">
        <div className="rounded-full bg-gradient-to-br from-sky-100 to-blue-200 p-10 sm:p-14">
          <Logo size={260} priority />
        </div>
      </div>
    </section>
  );
}
