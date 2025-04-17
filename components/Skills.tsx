import Image from "next/image";
import FadeInSection from "./FadeInSection";
import { Card } from "./ui/card";
import { SectionHeader } from "./ui/SectionHeader";

export default function Skills() {
  return (
    <div
      id="skills"
      className="min-h-screen px-6 py-16 max-w-5xl mx-auto text-white pt-42">
      <FadeInSection>
        <SectionHeader title="Skills" />
      </FadeInSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12 mb-8">
        {/* Frontend Card */}
        <Card className="bg-zinc-900 shadow-lg hover:shadow-xl transition-shadow duration-300 px-6 py-6">
          <p className="text-3xl font-bold text-white">Frontend</p>
          <div className="flex flex-wrap gap-4">
            <Image
              src="/reactjs.svg"
              alt="ReactJS Logo"
              width={50}
              height={50}
              className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform hover:scale-110"
            />
            <Image
              src="/nextjs.svg"
              alt="NextJS Logo"
              width={50}
              height={50}
              className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform hover:scale-110"
            />
            <Image
              src="/tailwindcss.svg"
              alt="TailwindCSS Logo"
              width={50}
              height={50}
              className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform hover:scale-110"
            />
          </div>
        </Card>

        {/* Backend Card */}
        <Card className="bg-zinc-900 shadow-lg hover:shadow-xl transition-shadow duration-50 px-4">
          <p className="text-2xl font-bold text-white">Backend</p>
          <div className="flex flex-wrap gap-4">
            <Image
              src="/nodejs.svg"
              alt="nodejs Logo"
              width={50}
              height={50}
              className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform hover:scale-110"
            />
            <Image
              src="/postgresql.svg"
              alt="postgresql Logo"
              width={50}
              height={50}
              className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform hover:scale-110"
            />
            <Image
              src="/mongo.svg"
              alt="mongo Logo"
              width={50}
              height={50}
              className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform hover:scale-110"
            />
            <Image
              src="/prisma.svg"
              alt="prisma Logo"
              width={50}
              height={50}
              className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform hover:scale-110"
            />
          </div>
        </Card>

        {/* DevOps tools Card */}
        <Card className="bg-zinc-900 shadow-lg hover:shadow-xl transition-shadow duration-300 px-4">
          <p className="text-2xl font-bold text-white">DevOps / Tools</p>
          <div className="flex flex-wrap gap-4">
            <Image
              src="/git.svg"
              alt="git Logo"
              width={50}
              height={50}
              className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform hover:scale-110"
            />
            <Image
              src="/github.svg"
              alt="github Logo"
              width={50}
              height={50}
              className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform hover:scale-110"
            />
            <Image
              src="/docker.svg"
              alt="docker Logo"
              width={50}
              height={50}
              className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform hover:scale-110"
            />
          </div>
        </Card>

        <Card className="bg-zinc-900 shadow-lg hover:shadow-xl transition-shadow duration-300 px-4">
          <p className="text-2xl font-bold text-white">Language</p>
          <div className="flex flex-wrap gap-4">
            <Image
              src="/c.png"
              alt="c Logo"
              width={50}
              height={50}
              className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform hover:scale-110"
            />
            <Image
              src="/c++.png"
              alt="c++ Logo"
              width={50}
              height={50}
              className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform hover:scale-110"
            />
            <Image
              src="/java.svg"
              alt="java Logo"
              width={50}
              height={50}
              className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform hover:scale-110"
            />
            <Image
              src="/javascript.svg"
              alt="javascript Logo"
              width={50}
              height={50}
              className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform hover:scale-110"
            />
            <Image
              src="/typescript.svg"
              alt="typescript Logo"
              width={50}
              height={50}
              className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform hover:scale-110"
            />
            <Image
              src="/sql.svg"
              alt="sql Logo"
              width={50}
              height={50}
              className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform hover:scale-110"
            />
          </div>
        </Card>
      </div>

      <Card className="bg-zinc-900 shadow-lg hover:shadow-xl transition-shadow duration-300 px-4">
        <p className="text-2xl font-bold text-white">
          Data Structure & Algorithms
        </p>
      </Card>
    </div>
  );
}
