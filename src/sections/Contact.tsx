import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import GrainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20" id="contact">
      <div className="container">
        <div className="bg-gradient-to-r from-teal-300 to-green-400 text-teal-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 -z-10 opacity-5"
            style={{
              backgroundImage: `url(${GrainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
          <h2 className="font-poppins text-2xl md:text-3xl">
          Let’s Build Something Incredible
          </h2>
          <p className="text-sm md:text-base mt-2">
          With a blend of creativity and expertise, I’ll help bring your ideas to life and create something truly remarkable.
          </p>
          </div>
          <div>
          <a href="mailto:danieligbinidu@gmail.com" className="text-white bg-teal-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-teal-900 hover:scale-105 transition-transform duration-300 ease-in-out">
            <span className="font-semibold">Contact Me</span>
            <ArrowUpRightIcon className="size-4" />
          </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
