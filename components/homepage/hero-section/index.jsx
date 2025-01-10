// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        {/* Left Content */}
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is <span className="text-pink-500">{personalData.name}</span>,{" "}
            I&apos;m a Professional{" "}
            <span className="text-[#16f2b3]">{personalData.designation}</span>.
          </h1>

          {/* Social Links */}
          <div className="my-12 flex items-center gap-5">
            {[
              { href: personalData.github, icon: <BsGithub size={30} /> },
              { href: personalData.linkedIn, icon: <BsLinkedin size={30} /> },
              //{ href: personalData.facebook, icon: <FaFacebook size={30} /> },
              { href: personalData.leetcode, icon: <SiLeetcode size={30} /> },
             // { href: personalData.twitter, icon: <FaTwitterSquare size={30} /> },
            ].map(({ href, icon }, index) => (
              <Link
                key={index}
                href={href}
                target="_blank"
                className="transition-all text-pink-500 hover:scale-125 duration-300"
              >
                {icon}
              </Link>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
            >
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link
              href={personalData.resume}
              target="_blank"
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>
        </div>

        {/* Right Content */}
        <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-green-500 to-blue-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-blue-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div>
                <span className="mr-2 text-green-500">val</span>
                <span className="mr-2 text-white">developer</span>
                <span className="mr-2 text-green-500">=</span>
                <span className="text-gray-400">Developer()</span>
              </div>
              {[
                { key: "name", value: `"Bhavesh Desale"` },
                {
                  key: "skills",
                  value: `listOf("Android", "Jetpack Compose", "Kotlin", "Java", "Firebase", "NodeJS", "Express.js", "MongoDB")`,
                },
                { key: "isHardWorker", value: `true` },
                { key: "isQuickLearner", value: `true` },
                { key: "isProblemSolver", value: `true` },
              ].map(({ key, value }, idx) => (
                <div key={idx}>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">
                    developer.{key}
                  </span>
                  <span className="mr-2 text-green-500">=</span>
                  <span className="text-gray-400">{value}</span>
                </div>
              ))}
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-green-500">fun</span>
                <span className="mr-2 text-white">hireable():</span>
                <span className="text-green-500">Boolean</span>{" "}
                <span className="text-gray-400">{`{`}</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 text-green-500">return</span>
                <span className="text-gray-400">(</span>
              </div>
              {[
                "developer.isHardWorker",
                "developer.isProblemSolver",
                "developer.skills.size >= 5",
              ].map((condition, idx) => (
                <div key={idx}>
                  <span className="ml-12 lg:ml-24 text-gray-400">{condition}</span>
                  {idx < 2 && <span className="text-green-500"> &&</span>}
                </div>
              ))}
              <div>
                <span className="ml-8 lg:ml-16 text-gray-400">)</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 text-gray-400">{`}`}</span>
              </div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
