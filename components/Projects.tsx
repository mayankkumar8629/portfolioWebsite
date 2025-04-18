import Image from "next/image";
import FadeInSection from "./FadeInSection";
import { Card } from "./ui/card";
import { SectionHeader } from "./ui/SectionHeader";

export default function Projects() {
  return (
    <div id="projects" className="min-h-screen snap-start">
      <FadeInSection>
        <SectionHeader title="Projects" />
      </FadeInSection>
    </div>
  );
}
