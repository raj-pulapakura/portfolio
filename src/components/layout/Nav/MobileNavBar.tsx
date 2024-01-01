"use client";

import { faCaretDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from "next/navigation";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import DarkModeToggle from "../DarkModeToggle";
import NavLink from "./NavLink";
import Link from "next/link";

export default function MobileNavBar({ className }: { className?: string }) {
  const [isMenuShowing, setMenuShowing] = useState(false);

  const closeMenu = (e: MouseEvent) => {
    if (
      dropDownRef.current &&
      !dropDownRef.current.contains(e.target as Node)
    ) {
      setMenuShowing(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeMenu);
  }, []);

  const dropDownRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={dropDownRef} className={` ${className}`}>
      <div
        className={`flex ${
          isMenuShowing ? "rounded-t-3xl" : "rounded-full"
        } gap-7 justify-center shadow-navlight dark:shadow-navdark py-3 px-7 bg-white dark:bg-black items-center`}
      >
        <Link href="/" className="hover:cursor-pointer">
          <p className="text-nowrap z-10">Raj Pulapakura</p>
        </Link>
        <FontAwesomeIcon
          className="z-10 hover:cursor-pointer"
          onClick={() => setMenuShowing(!isMenuShowing)}
          icon={isMenuShowing ? faCaretDown : faBars}
          width="20"
        />
        <DarkModeToggle className="z-10" />
      </div>
      {isMenuShowing && (
        <>
          <DropdownMenu onClick={() => setMenuShowing(false)} />
          <MobileMenuShadowBlocker />
          <MobileMenuHighlight />
        </>
      )}
    </section>
  );
}

function MobileMenuShadowBlocker() {
  return (
    <div className="absolute w-full h-6 bg-white dark:bg-black -translate-y-2"></div>
  );
}

function MobileMenuHighlight() {
  return (
    <div className="absolute w-full h-0.5 bg-gray-300 dark:bg-softBlack"></div>
  );
}

function DropdownMenu({
  onClick,
  ref,
}: {
  onClick?: VoidFunction;
  ref?: MutableRefObject<null>;
}) {
  const pathName = usePathname();
  return (
    <div
      ref={ref}
      className="absolute shadow-boxlight dark:shadow-boxdark w-full rounded-b-3xl bg-white dark:bg-black py-5 px-7"
    >
      <NavLink
        className="mb-2 text-xl"
        href="/"
        currentPathName={pathName}
        text="Home"
        onClick={onClick}
      />
      <NavLink
        className="mb-2 text-xl"
        href="/about"
        currentPathName={pathName}
        onClick={onClick}
        text="Journey"
      />
      <NavLink
        className="mb-2 text-xl"
        href="/projects"
        currentPathName={pathName}
        onClick={onClick}
        text="Projects"
      />
      <NavLink
        className="mb-2 text-xl"
        href="/articles"
        currentPathName={pathName}
        onClick={onClick}
        text="Articles"
      />
      <NavLink
        className="mb-2 text-xl"
        href="/videos"
        currentPathName={pathName}
        onClick={onClick}
        text="Videos"
      />
      <NavLink
        className="mb-2 text-xl"
        href="/resume"
        onClick={onClick}
        currentPathName={pathName}
        text="Resume"
      />
      <NavLink
        className="text-xl"
        href="/contact"
        onClick={onClick}
        currentPathName={pathName}
        text="Contact"
      />
    </div>
  );
}
