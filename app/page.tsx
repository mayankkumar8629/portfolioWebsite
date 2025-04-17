import Contact from "@/components/contact";
import HomeSection from "@/components/home";
import Navigation from "@/components/navigation";


export default function Home() {
  return (
    <div className="">
      <Navigation />
      <div className="flex justify-center px-6 py-4 mt-18 max-w-[1000px] mx-auto md:justify-start md:mt-30">
        <HomeSection />
      </div>
      <Contact />
    </div>
  );
}
