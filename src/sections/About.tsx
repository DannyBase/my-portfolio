'use client'
import Image from "next/image";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";

import StarIcon from "@/assets/icons/star.svg";
import MapImage from "@/assets/images/map.jpg";
import SmileMemoji from "@/assets/images/smile.png";
import CheckIcon from "@/assets/icons/check-circle.svg";

import HtmlIcon from "@/assets/icons/html.png";
import CssIcon from "@/assets/icons/css.png";
import ReactIcon from "@/assets/icons/react.png";
import NextjsIcon from "@/assets/icons/nextjs.png";
import VuejsIcon from "@/assets/icons/vue.png";
import ThreejsIcon from "@/assets/icons/threejs.png";
import JsIcon from "@/assets/icons/JavaScript.png";
import GsapIcon from "@/assets/icons/gsap.png";
import TailwindIcon from "@/assets/icons/tailwind.png";
import FigmaIcon from "@/assets/icons/figma.png";
import GithubIcon from "@/assets/icons/github.png";
import LaravelIcon from "@/assets/icons/laravel.png";
import PhpIcon from "@/assets/icons/php.png";
import SassIcon from "@/assets/icons/sass.png";
import VscodeIcon from "@/assets/icons/vscode.png";
import ChromeIcon from "@/assets/icons/chrome.png";
import JqueryIcon from "@/assets/icons/jQuery.png";
import BootstrapIcon from "@/assets/icons/bootstrap.png";
import ResponsiveDesignIcon from "@/assets/icons/responsive-design.png";
import TypeScriptIcon from "@/assets/icons/typescript.png";
import NodejsIcon from "@/assets/icons/nodejs.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "JavaScript",
    icon: JsIcon,
  },
  {
    title: "JQuery",
    icon: JqueryIcon,
  },
  {
    title: "Three.js",
    icon: ThreejsIcon,
  },
  {
    title: "Gsap",
    icon: GsapIcon,
  },
  {
    title: "React",
    icon: ReactIcon,
  },
  {
    title: "Vue.js",
    icon: VuejsIcon,
  },
  {
    title: "Next.js",
    icon: NextjsIcon,
  },
  {
    title: "HTML",
    icon: HtmlIcon,
  },
  {
    title: "CSS",
    icon: CssIcon,
  },
  {
    title: "Bootstrap",
    icon: BootstrapIcon,
  },
  {
    title: "Sass",
    icon: SassIcon,
  },
  {
    title: "TailwindCSS",
    icon: TailwindIcon,
  },
  {
    title: "Responsive Design",
    icon: ResponsiveDesignIcon,
  },
  {
    title: "TypeScript",
    icon: TypeScriptIcon,
  },
  {
    title: "Github",
    icon: GithubIcon,
  },
  {
    title: "Chrome",
    icon: ChromeIcon,
  },
  {
    title: "Figma",
    icon: FigmaIcon,
  },
  {
    title: "Node.js",
    icon: NodejsIcon,
  },
  {
    title: "Vscode",
    icon: VscodeIcon,
  },
  {
    title: "Php",
    icon: PhpIcon,
  },
  {
    title: "Laravel",
    icon: LaravelIcon,
  },
];

const steps = [
  "Ideate",
  "Design",
  "Develop",
  "Launch",
];


const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
    left: "5%",
    top: "5%"
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "55%",
    top: "5%"
  },
  {
    title: "Cooking",
    emoji: "🍳",
    left: "30%",
    top: "5%"
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%"
  },
  {
    title: "Music",
    emoji: "🎶",
    left: "35%",
    top: "40%"
  },
  {
    title: "reading",
    emoji: "📖",
    left: "70%",
    top: "45%"
  },
  {
    title: "Fitness",
    emoji: "🏋",
    left: "5%",
    top: "65%"
  },
  {
    title: "Hiking",
    emoji: "👢",
    left: "45%",
    top: "70%"
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null)
  return (
    <div className="py-20 lg:py-28" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="An Advanture Into My World"
          description="Learn about my journey, my process, and the inspiration behind my work."

        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
          <Card className="h-[320px] md:col-span-2 lg:col-span-1">
            <CardHeader
              title="My Steps"
              description="Key steps I take to deliver clean user experience."
              className=""
            />
            <div className="px-6">
              <ul className="flex flex-col gap-4 lg:gap-2">
                {steps.map((step, index) => (
                  <li key={index} className="flex gap-2 text-md text-white/50">
                    <CheckIcon className="size-5" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
          <Card className="h-[320px] md:col-span-3 lg:col-span-2">
            <CardHeader
              title="My Toolbox"
              description="A curated collection of the technologies, frameworks, and tools I use to craft seamless, scalable, and engaging digital experiences."
            className=""/>
            <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]"/>
            <ToolboxItems items={toolboxItems} itemsWrapperClassName="animate-move-right [animation-duration:15s]" className="mt-6" />
          </Card>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
          <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
            <CardHeader
              title="Beyond the Code"
              description="Outside of coding, I enjoy the little things that spark creativity music, art, coffee, and quiet moments."
              className="px-6 py-6"
            />
            <div className="relative flex-1" ref={constraintRef}>
              {hobbies.map((hobby) => (
                <motion.div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-teal-300 to-green-400 rounded-full py-1.5 absolute" style={{
                  left: hobby.left,
                  top: hobby.top,

                }}
                drag
                dragConstraints={constraintRef}
                >
                  <span className="font-medium text-teal-950">{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </motion.div>
              ))}
            </div>
          </Card>
          <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
            <Image src={MapImage} alt="Map" className="h-full w-full object-cover object-left-top"/>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-teal-300 to-green-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-teal-950/30">
            <Image src={SmileMemoji} alt="Smile" className="size-20"/>
            </div>
          </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
