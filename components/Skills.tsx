import Image from "next/image";
import FadeInSection from "./FadeInSection";
import { Card } from "./ui/card";
import { SectionHeader } from "./ui/SectionHeader";

export default function Skills() {
  return (
    <div
      id="skills"
      className="flex flex-col min-h-screen px-6 py-16 max-w-5xl mx-auto text-white items-start justify-center snap-start">
      <FadeInSection>
        <SectionHeader title="Skills" />
      </FadeInSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-4 mb-8 mx-auto w-full">
        <FadeInSection>
          <Card className="bg-zinc-900 shadow-lg hover:shadow-xl transition-shadow duration-300 px-6 py-6">
            <p className="text-3xl font-bold text-white">Frontend</p>
            <div className="flex flex-wrap gap-4">
              <div className="relative group w-fit">
                <Image
                  src="/reactjs.svg"
                  alt="ReactJS Logo"
                  width={50}
                  height={50}
                  className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                />

                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                  React
                </span>
              </div>
              <div className="relative group w-fit">
                <Image
                  src="/nextjs.svg"
                  alt="NextJS Logo"
                  width={50}
                  height={50}
                  className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform hover:scale-110"
                />

                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                  Next
                </span>
              </div>
              <div className="relative group w-fit">
                <Image
                  src="/tailwindcss.svg"
                  alt="TailwindCSS Logo"
                  width={50}
                  height={50}
                  className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform hover:scale-110"
                />

                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                  TailwindCSS
                </span>
              </div>
            </div>
          </Card>
        </FadeInSection>

        <FadeInSection>
          <Card className="bg-zinc-900 shadow-lg hover:shadow-xl transition-shadow duration-50 px-4">
            <p className="text-2xl font-bold text-white">Backend</p>
            <div className="flex flex-wrap gap-4">
              {/* Node.js */}
              <div className="relative group w-fit">
                <Image
                  src="/nodejs.svg"
                  alt="NodeJS Logo"
                  width={50}
                  height={50}
                  className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                />
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                  Node.js
                </span>
              </div>

              {/* PostgreSQL */}
              <div className="relative group w-fit">
                <Image
                  src="/postgresql.svg"
                  alt="PostgreSQL Logo"
                  width={50}
                  height={50}
                  className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                />
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                  PostgreSQL
                </span>
              </div>

              {/* MongoDB */}
              <div className="relative group w-fit">
                <Image
                  src="/mongo.svg"
                  alt="MongoDB Logo"
                  width={50}
                  height={50}
                  className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                />
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                  MongoDB
                </span>
              </div>

              {/* Prisma */}
              <div className="relative group w-fit">
                <Image
                  src="/prisma.svg"
                  alt="Prisma Logo"
                  width={50}
                  height={50}
                  className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                />
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                  Prisma
                </span>
              </div>
            </div>
          </Card>
        </FadeInSection>

        <FadeInSection>
          <Card className="bg-zinc-900 shadow-lg hover:shadow-xl transition-shadow duration-300 px-4">
            <p className="text-2xl font-bold text-white">DevOps / Tools</p>
            <div className="flex flex-wrap gap-4">
              {/* Git */}
              <div className="relative group w-fit">
                <Image
                  src="/git.svg"
                  alt="Git Logo"
                  width={50}
                  height={50}
                  className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                />
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                  Git
                </span>
              </div>

              {/* GitHub */}
              <div className="relative group w-fit">
                <Image
                  src="/github.svg"
                  alt="GitHub Logo"
                  width={50}
                  height={50}
                  className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                />
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                  GitHub
                </span>
              </div>

              {/* Docker */}
              <div className="relative group w-fit">
                <Image
                  src="/docker.svg"
                  alt="Docker Logo"
                  width={50}
                  height={50}
                  className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                />
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                  Docker
                </span>
              </div>

              <div className="relative group w-fit">
                <Image
                  src="/jenkins.svg"
                  alt="jenkins Logo"
                  width={50}
                  height={50}
                  className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                />
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                  jenkins
                </span>
              </div>
            </div>
          </Card>
        </FadeInSection>

        <FadeInSection>
          <Card className="bg-zinc-900 shadow-lg hover:shadow-xl transition-shadow duration-300 px-4">
            <p className="text-2xl font-bold text-white">Language</p>
            <div className="flex flex-wrap gap-4">
              {/* C */}
              <div className="relative group w-fit">
                <Image
                  src="/c.png"
                  alt="C Logo"
                  width={50}
                  height={50}
                  className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                />
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  C
                </span>
              </div>

              {/* C++ */}
              <div className="relative group w-fit">
                <Image
                  src="/c++.png"
                  alt="C++ Logo"
                  width={50}
                  height={50}
                  className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                />
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  C++
                </span>
              </div>

              {/* Java */}
              <div className="relative group w-fit">
                <Image
                  src="/java.svg"
                  alt="Java Logo"
                  width={50}
                  height={50}
                  className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                />
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  Java
                </span>
              </div>

              {/* JavaScript */}
              <div className="relative group w-fit">
                <Image
                  src="/javascript.svg"
                  alt="JavaScript Logo"
                  width={50}
                  height={50}
                  className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                />
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  JavaScript
                </span>
              </div>

              {/* TypeScript */}
              <div className="relative group w-fit">
                <Image
                  src="/typescript.svg"
                  alt="TypeScript Logo"
                  width={50}
                  height={50}
                  className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                />
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  TypeScript
                </span>
              </div>

              {/* SQL */}
              <div className="relative group w-fit">
                <Image
                  src="/sql.svg"
                  alt="SQL Logo"
                  width={50}
                  height={50}
                  className="object-cover rounded-[10px] transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                />
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  SQL
                </span>
              </div>
            </div>
          </Card>
        </FadeInSection>
      </div>

      <FadeInSection>
        <Card className="grid grid-cols-1 bg-zinc-900 shadow-lg hover:shadow-xl transition-shadow duration-300 px-4">
          <p className="text-2xl font-bold text-white">
            Data Structure & Algorithms
          </p>
          drth
        </Card>
      </FadeInSection>
    </div>
  );
}
