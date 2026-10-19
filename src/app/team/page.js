import PageTitle from "@/components/PageTitle";
import TeamCard from "@/components/TeamCard";
import { team } from "@/data/team";

export const metadata = {
  title: "Team | Aoiro Studio",
};

export default function TeamPage() {
  return (
    <section className="mx-auto max-w-5xl">
      <PageTitle label="The crew behind the frames">Our Team</PageTitle>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => (
          <TeamCard key={member.slug} member={member} />
        ))}
      </div>
    </section>
  );
}
