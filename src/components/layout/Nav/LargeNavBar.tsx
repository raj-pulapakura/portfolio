import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import DarkModeToggle from "../DarkModeToggle";

export default function LargeNavBar({ className }: { className?: string }) {
  const pathName = usePathname();

  return (
    <div className={className}>
      <section
        className={`flex rounded-full gap-7 shadow-navlight dark:shadow-navdark w-fit py-3 px-7 bg-white dark:bg-black items-center`}
      >
        <NavLink href="/" currentPathName={pathName} text="Home" />
        <NavLink href="/about" currentPathName={pathName} text="Journey" />
        <NavLink href="/projects" currentPathName={pathName} text="Projects" />
        <NavLink href="/articles" currentPathName={pathName} text="Articles" />
        <NavLink href="/videos" currentPathName={pathName} text="Videos" />
        <NavLink href="/resume" currentPathName={pathName} text="Resume" />
        <NavLink href="/contact" currentPathName={pathName} text="Contact" />
        <DarkModeToggle />
      </section>
    </div>
  );
}
