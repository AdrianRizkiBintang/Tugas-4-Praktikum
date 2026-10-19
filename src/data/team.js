export const team = [
  {
    slug: "monkey-d-luffy",
    name: "Monkey D. Luffy",
    role: "Baka Sencho",
    image: "/team/luffy.png",
    bio: "Monkey D. Luffy is the reckless but lovable captain of Aoiro Studio, which is exactly why the crew calls him Baka Sencho. He rarely reads the plan, often thinks about meat, and always rushes in first, yet his unshakable spirit is what keeps everyone sailing toward the same dream.",
  },
  {
    slug: "roronoa-zoro",
    name: "Roronoa Zoro",
    role: "Marimo",
    image: "/team/zoro.png",
    bio: "Roronoa Zoro, better known as Marimo thanks to his green hair, is the strongest swordsman on the team. He trains day and night and never backs down from a challenge, although he still somehow manages to get lost on the way to his own desk.",
  },
  {
    slug: "nami",
    name: "Nami",
    role: "Navigator",
    image: "/team/nami.png",
    bio: "Nami is the brilliant navigator who keeps the whole crew on course. She reads the weather, draws precise maps, and manages every single coin the team owns, making sure Aoiro Studio never loses its way or its budget.",
  },
  {
    slug: "usopp",
    name: "Usopp",
    role: "Knight",
    image: "/team/usopp.png",
    bio: "Usopp proudly calls himself the brave Knight of the Sea. He may tell tall tales and tremble when danger appears, but when his friends truly need him, he stands his ground and proves that real courage comes from a loyal heart.",
  },
  {
    slug: "sanji",
    name: "Sanji",
    role: "Chef",
    image: "/team/sanji.png",
    bio: "Sanji is the crew's chef, whose cooking keeps everyone full of energy for every adventure. He believes no one should ever go hungry, fights using only his legs to protect his precious hands, and always treats every guest with the utmost hospitality.",
  },
  {
    slug: "brook",
    name: "Brook",
    role: "Violinist",
    image: "/team/brook.png",
    bio: "Brook is the gentleman violinist of the crew, a cheerful skeleton who fills every journey with music. His melodies lift everyone's spirits during hard times, and his famous skull jokes never fail to make the whole team laugh. Yohohoho!",
  },
];

export function getMemberBySlug(slug) {
  return team.find((member) => member.slug === slug);
}
