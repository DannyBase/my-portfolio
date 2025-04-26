import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";


const footerLinks = [
   {
    title: 'GitHub',
    href: 'https://github.com/DannyBase',
   },
   {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/daniel-igbinidu-a4715b259/',
   },
   {
    title: 'X',
    href: 'https://x.com/daniel_igb38356',
   },
]

export const Footer = () => {
  return (
    <footer className="relative z-20 overflow-x-clip"> {/* Changed z-10 to z-20 */}
      <div
        className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-teal-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-1"
        style={{ pointerEvents: 'none' }} // Prevent gradient div from blocking clicks
      ></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; {new Date().getFullYear()}. All rights reserved</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                className="inline-flex items-center gap-1.5 text-white/80 hover:text-white transition"
                target="_blank"
                rel="noopener noreferrer"
                style={{ pointerEvents: 'auto' }} // Ensure links are clickable
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};