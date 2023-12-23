import { faCaretDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from "next/navigation";
import { useState } from "react";
import DarkModeToggle from "../DarkModeToggle";
import NavLink from "./NavLink";

export default function MobileNavBar({ className }: { className?: string }) {
  const [isMenuShowing, setMenuShowing] = useState(false);

  return (
    <section className={` ${className}`}>
      <div
        className={`flex ${
          isMenuShowing ? "rounded-t-3xl" : "rounded-full"
        } gap-7 shadow-navlight dark:shadow-navdark w-fit py-3 px-7 bg-white dark:bg-black items-center`}
      >
        <p className="text-nowrap z-10">Raj Pulapakura</p>
        <FontAwesomeIcon
          className="z-10"
          onClick={() => setMenuShowing(!isMenuShowing)}
          icon={isMenuShowing ? faCaretDown : faBars}
          width="20"
        />
        <DarkModeToggle className="z-10" />
      </div>
      {isMenuShowing && (
        <>
          <DropdownMenu />
          <MobileMenuShadowBlocker />
          <MobileMenuHighlight />
        </>
      )}
    </section>
  );
}

function MobileMenuShadowBlocker() {
  return (
    <div className="absolute w-full h-6 bg-white dark:bg-black -translate-y-5"></div>
  );
}

function MobileMenuHighlight() {
  return (
    <div className="absolute w-full h-0.5 bg-gray-300 dark:bg-softBlack"></div>
  );
}

function DropdownMenu() {
  const pathName = usePathname();
  return (
    <div className="absolute shadow-boxlight dark:shadow-boxdark w-full rounded-b-3xl bg-white dark:bg-black py-5 px-7">
      <NavLink
        className="mb-2 text-xl"
        href="/"
        currentPathName={pathName}
        text="Home"
      />
      <NavLink
        className="mb-2 text-xl"
        href="/about"
        currentPathName={pathName}
        text="About"
      />
      <NavLink
        className="mb-2 text-xl"
        href="/projects"
        currentPathName={pathName}
        text="Projects"
      />
      <NavLink
        className="mb-2 text-xl"
        href="/articles"
        currentPathName={pathName}
        text="Articles"
      />
      <NavLink
        className="mb-2 text-xl"
        href="/resume"
        currentPathName={pathName}
        text="Resume"
      />
      <NavLink
        className="text-xl"
        href="/contact"
        currentPathName={pathName}
        text="Contact"
      />
    </div>
  );
}
