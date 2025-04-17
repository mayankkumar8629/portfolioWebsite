import AboutPage from "@/components/about";
import FadeInSection from "@/components/FadeInSection";
import HomeSection from "@/components/home";
import Navigation from "@/components/navigation";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { Projector } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-black">
      <div className="fixed top-8 left-0 w-full z-50 ">
        <FadeInSection>
          <Navigation />
        </FadeInSection>
      </div>

      <div className="flex justify-center items-center h-[100vh] px-6 py-4 max-w-5xl mx-auto">
        <HomeSection />
      </div>
      <AboutPage />
      <Skills />
      <Projects />
    </div>
  );
}
