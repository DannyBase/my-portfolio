"use client";
import iphoneShowcaseWebsite from "@/assets/images/Apple.png";
import metaverseLandingPage from "@/assets/images/Metaversus.png";
import LogisticsWebsite from "@/assets/images/Transport-Logistics-Service.png";
import skateboardLandingPage from "@/assets/images/Suburbia-Skateboards.png";
import poolCleaningServiceWebsite from "@/assets/images/Pool-Cleaning-Services.png";
import electricalServiceWebsite from "@/assets/images/Current-Electricity-Services.png";
import gymWebsite from "@/assets/images/Gym-Website.png";
import marketingAgencyWebsite from "@/assets/images/Marketing-Agency.png";
import GlowingProjectGrid from "@/components/GlowingProjectGrid";
import HtmlIcon from "@/assets/icons/html.png";
import CssIcon from "@/assets/icons/css.png";
import TailwindIcon from "@/assets/icons/tailwind.png";
import BootstrapIcon from "@/assets/icons/bootstrap.png";
import ReactIcon from "@/assets/icons/react.png";
import NextjsIcon from "@/assets/icons/nextjs.png";
import VuejsIcon from "@/assets/icons/vue.png";
import JqueryIcon from "@/assets/icons/jQuery.png";
import SassIcon from "@/assets/icons/sass.png";
import ThreejsIcon from "@/assets/icons/threejs.png";
import JsIcon from "@/assets/icons/JavaScript.png";
import GsapIcon from "@/assets/icons/gsap.png";
import FramerMotionIcon from "@/assets/icons/framer.png";
import TypeScriptIcon from "@/assets/icons/typescript.png";
import { SectionHeader } from "@/components/SectionHeader";


const portfolioProjects = [
  {
    title: "iPhone showcase website",
    description: "A stylish product-focused design showcasing an iPhone model, featuring bold visuals and smooth transitions for a sleek user experience.",
    link: "https://iphone-website-react.vercel.app/",
    image: iphoneShowcaseWebsite,
    tech: [
      { icon: ReactIcon, name: "React" },
      { icon: ThreejsIcon, name: "Three.js" },
      { icon: GsapIcon, name: "GSAP" },
      { icon: TailwindIcon, name: "Tailwind CSS" }
    ],
  },
  {
    title: "Metaverse Landing Page",
    description: "A modern landing page concept for a metaverse platform, built with clean animations, responsive layouts, and strong futuristic aesthetics.",
    link: "https://metaverse-beige-three.vercel.app/",
    image: metaverseLandingPage,
    tech: [
      { icon: NextjsIcon, name: "Next.js" },
      { icon: FramerMotionIcon, name: "Framer Motion" },
      { icon: TailwindIcon, name: "Tailwind CSS" }
    ],
  },
  {
    title: "Logistics website",
    description: "A dynamic layout tailored for logistics and transport services, featuring structured sections, responsive design, and intuitive visual hierarchy.",
    link: "https://logistics-and-transport.vercel.app/",
    image: LogisticsWebsite,
    tech: [
      { icon: HtmlIcon, name: "HTML" },
      { icon: CssIcon, name: "CSS" },
      { icon: BootstrapIcon, name: "Bootstrap" },
      { icon: GsapIcon, name: "GSAP" },
      { icon: JqueryIcon, name: "jQuery" }
    ],
  },
  {
    title: "skateboard landing page",
    description: "A bold and energetic landing page design for a skateboard brand, combining sharp typography and vibrant colors to capture attention instantly.",
    link: "https://modern-skateboard-website-next-js.vercel.app/",
    image: skateboardLandingPage,
    tech: [
      { icon: TypeScriptIcon, name: "TypeScript" },
      { icon: NextjsIcon, name: "Next.js" },
      { icon: TailwindIcon, name: "Tailwind CSS" }
    ],
  },
  {
    title: "pool cleaning service site",
    description: "A clean and approachable website for pool maintenance services, with structured pages, consistent design, and user-friendly navigation flow.",
    link: "https://pool-cleaning-service-bay.vercel.app/",
    image: poolCleaningServiceWebsite,
    tech: [
      { icon: HtmlIcon, name: "HTML" },
      { icon: CssIcon, name: "CSS" },
      { icon: BootstrapIcon, name: "Bootstrap" },
      { icon: GsapIcon, name: "GSAP" },
      { icon: JsIcon, name: "JavaScript" }
    ],
  },
  {
    title: "electrical service site",
    description: "A professional web layout for electrical solutions, built with trust-building elements, service highlights, and an easy-to-navigate structure.",
    link: "https://electricity-services.vercel.app/",
    image: electricalServiceWebsite,
    tech: [
      { icon: HtmlIcon, name: "HTML" },
      { icon: CssIcon, name: "CSS" },
      { icon: JsIcon, name: "JavaScript" },
      { icon: GsapIcon, name: "GSAP" },
      { icon: BootstrapIcon, name: "Bootstrap" }
    ],
  },
  {
    title: "gym website",
    description: "An impactful gym website design with strong visuals, motivating copy, and interactive sections to boost engagement and promote fitness goals.",
    link: "https://gym-website-phi-five.vercel.app/",
    image: gymWebsite,
    tech: [
      { icon: HtmlIcon, name: "HTML" },
      { icon: CssIcon, name: "CSS" },
      { icon: JsIcon, name: "JavaScript" },
      { icon: BootstrapIcon, name: "Bootstrap" }
    ],
  },
  {
    title: "marketing agency site",
    description: "A modern agency web design combining strategic layout, animated sections, and clear CTAs to convey creativity and business value effectively.",
    link: "https://marketing-agency-website-iota.vercel.app/",
    image: marketingAgencyWebsite,
    tech: [
      { icon: VuejsIcon, name: "Vue.js" },
      { icon: CssIcon, name: "CSS" },
      { icon: SassIcon, name: "Sass" },
      { icon: BootstrapIcon, name: "Bootstrap" },
      { icon: TypeScriptIcon, name: "TypeScript" }
    ],
  },
];



export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="Explore the digital stories I've built from simple ideas."
        />
        <GlowingProjectGrid portfolioProjects={portfolioProjects} />
      </div>
    </section>
  );
};
