import FadeInSection from "./FadeInSection";
import { SectionHeader } from "./ui/SectionHeader";
import ProjectCard from "./ui/projectCard";

export default function Projects() {
  return (
    <div
      id="projects"
      className="flex flex-col min-h-screen max-w-5xl px-6 pt-[175px] mx-auto snap-start justify-center items-start">
      <FadeInSection>
        <SectionHeader title="Projects" />
      </FadeInSection>

      <div className="flex w-full gap-6 flex-col">
        <ProjectCard
          link="https://www.kshitijy.me"
          github="https://github.com/kshitij-y/portfolio"
          name="Portfolio"
          learning="JWT usage in Hono and better auth flows"
          desc="A minimal, responsive portfolio site to showcase my projects and skills."
          techStack={["nextjs.svg", "mongo.svg"]}
        />
        <ProjectCard
          link="https://www.kshitijy.me"
          github="https://github.com/kshitij-y/portfolio"
          name="Portfolio"
          learning="Responsive layout and better UI practices"
          desc="A minimal, responsive portfolio site to showcase my projects and skills."
          techStack={["nextjs.svg", "mongo.svg"]}
        />
        <ProjectCard
          link="https://www.kshitijy.me"
          github="https://github.com/kshitij-y/portfolio"
          name="Portfolio"
          learning="Dark mode integration with Tailwind"
          desc="A minimal, responsive portfolio site to showcase my projects and skills."
          techStack={["nextjs.svg", "mongo.svg"]}
        />
      </div>
    </div>
  );
}
