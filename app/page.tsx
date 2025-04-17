import AboutPage from "@/components/about";
import FadeInSection from "@/components/FadeInSection";
import HomeSection from "@/components/home";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <div className="bg-black">
      <div className="fixed top-8 left-0 w-full z-50 ">
        <FadeInSection>
          <Navigation />
        </FadeInSection>
      </div>

      <div className="flex justify-center items-center h-[100vh] px-6 py-4 max-w-[1000px] mx-auto md:justify-start">
        <HomeSection />
      </div>
      {/* <div style={{ border: "0.1px solid white" }}></div> */}

      <AboutPage />
    </div>
  );
}
