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
          link="https://github.com/aman717273/Expense-Wallet"
          github="https://github.com/aman717273/Expense-Wallet"
          name="Expense Wallet"
          learning="MongoDB, Express, React, Node.js, JWT, and Tailwind CSS"
          desc="A simple website to manage your expenses and income"
          techStack={[
            "nextjs.svg",
            "postgresql.svg",
            "prisma.svg",
            "tailwindcss.svg",
            "typescript.svg",
          ]}
        />
        <ProjectCard
          link="https://github.com/aman717273/FITFUSION"
          github="https://github.com/aman717273/FITFUSION"
          name="FITFUSION"
          learning="I learned about reactJS and JWT and Prisma and CRUD operations"
          desc="A simple website to manage your fitness and health"
          techStack={[
            "reactjs.svg",
            "mongo.svg",
            "prisma.svg",
            "tailwindcss.svg",
          ]}
        />
        <div className="text-2xl text-white font-medium"></div>
        <ProjectCard
          link="https://github.com/aman717273/Pustakalaya-main"
          github="https://github.com/aman717273/Pustakalaya-main"
          name="Pustakalaya"
          learning="I learned about Firebase, Mern, Better-Auth"
          desc="A website for library management system"
          techStack={[
            "nextjs.svg",
            "postgresql.svg",
            "prisma.svg",
            "tailwindcss.svg",
            "typescript.svg",
          ]}
        />
      </div>
    </div>
  );
}
