import PageTitle from "@/components/PageTitle";

export const metadata = {
  title: "Contact | Aoiro Studio",
};

const inputClass =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl">
      <PageTitle label="Contact us">Have a story to tell? Let&apos;s talk!</PageTitle>
      <div className="grid overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-blue-100 md:grid-cols-2">
        <div className="bg-gradient-to-br from-blue-700 to-sky-500 p-8 text-white md:p-10">
          <h2 className="text-2xl font-bold">Let&apos;s create something together</h2>
          <p className="mt-3 text-blue-50">
            Whether you have a project idea, a collaboration offer, or just want
            to say hi, send us a message and our team will get back to you.
          </p>
        </div>
        <form className="flex flex-col gap-4 p-8 md:p-10">
          <input type="text" placeholder="Your Name" required className={inputClass} />
          <input type="email" placeholder="Email Address" required className={inputClass} />
          <textarea rows={5} placeholder="Your Message" required className={inputClass} />
          <button
            type="submit"
            className="rounded-lg bg-blue-600 py-2.5 font-medium text-white transition hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
