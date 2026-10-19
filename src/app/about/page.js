import PageTitle from "@/components/PageTitle";

export const metadata = {
  title: "About | Aoiro Studio",
};

const sections = [
  {
    title: "Who We Are",
    text: "Aoiro Studio is an independent animation studio dedicated to creating original animated series, short films, and music videos. Founded in 2025, Aoiro Studio was built as a home for animators, illustrators, and storytellers who share a passion for bringing imagination to life one frame at a time.",
  },
  {
    title: "Our Name",
    text: "The name \"Aoiro\" means \"blue\" in Japanese, inspired by the endless sky and ocean that symbolize freedom and limitless possibilities. Just like that color, we want every story we animate to feel open, calm, and full of wonder for viewers of all ages.",
  },
  {
    title: "Our Mission",
    text: "Our mission is to produce high-quality animation that connects people through emotion and storytelling. From concept art and storyboards to final animation and sound, our team works closely together to make sure every project carries a unique style and a meaningful message.",
  },
];

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl">
      <PageTitle label="Get to know us">About Us</PageTitle>
      <div className="space-y-6">
        {sections.map((section, index) => (
          <article
            key={section.title}
            className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-blue-100 sm:flex-row"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
              0{index + 1}
            </span>
            <div>
              <h2 className="text-xl font-semibold text-blue-700">{section.title}</h2>
              <p className="mt-2 text-justify text-slate-600">{section.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
