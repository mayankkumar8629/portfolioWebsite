import FadeInSection from "./FadeInSection";
import { SectionHeader } from "./ui/SectionHeader";
import ProjectCard from "./ui/projectCard";

export default function Projects() {
  return (
    <div
      id="projects"
      className="flex flex-col min-h-screen max-w-5xl px-6 pt-[150px] mx-auto snap-start justify-center items-start">
      <FadeInSection>
        <SectionHeader title="Projects" />
      </FadeInSection>

      <div className="flex w-full gap-6 flex-col mb-10">
        <ProjectCard
          link="https://github.com/mayankkumar8629/WanderLust"
          github="https://github.com/mayankkumar8629/VeggieTO"
          name="VeggioTO"
          learning="MongoDB, Express, React, Node, Redis, Web Socket, Event Architecture,"
          desc="A Microservice based D2C E-Commerce Platform"
          techStack={[
            "reactjs.svg",
            "mongo.svg",
            "javascript.svg",
            "tailwindcss.svg",
            
          ]}
        />
        <ProjectCard
          link="https://github.com/mayankkumar8629/WanderLust"
          github="https://github.com/mayankkumar8629/mediConnect"
          name="MediConnect "
          learning="I learned about Microservice Architecture "
          desc="Multi-Role Healthcare management System build on Microservice Architecture"
          techStack={[
            "reactjs.svg",
            "mongo.svg",
            "tailwindcss.svg",
            "javascript.svg"
          ]}
        />
        <div className="text-2xl text-white font-medium"></div>
        <ProjectCard
          link="https://github.com/mayankkumar8629/WanderLust"
          github="https://github.com/mayankkumar8629/WanderLust"
          name="WanderLust"
          learning="I learned about EJS and CRUD Operations"
          desc="A web based platform for listing and booking short-term stays and experiences"
          techStack={[
            "mongo.svg",
            "javascript.svg"
          ]}
        />
      </div>
    </div>
  );
}
