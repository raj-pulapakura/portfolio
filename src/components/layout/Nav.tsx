"use client";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faPage4,
  faPagelines,
  faRProject,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBook,
  faDownload,
  faFile,
  faHome,
  faInfo,
  faInfoCircle,
  faMailBulk,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathName = usePathname();

  return (
    <section className="flex rounded-full gap-7 shadow-navlight dark:shadow-navdark w-fit py-3 px-7 bg-white dark:bg-black">
      <NavLink
        mobileIcon={faHome}
        href="/"
        currentPathName={pathName}
        text="Home"
      />
      <NavLink
        mobileIcon={faInfoCircle}
        href="/about"
        currentPathName={pathName}
        text="About"
      />
      <NavLink
        mobileIcon={faFile}
        href="/projects"
        currentPathName={pathName}
        text="Projects"
      />
      <NavLink
        mobileIcon={faBook}
        href="/articles"
        currentPathName={pathName}
        text="Articles"
      />
      <NavLink
        mobileIcon={faDownload}
        href="/resume"
        currentPathName={pathName}
        text="Resume"
      />
      <NavLink
        mobileIcon={faMailBulk}
        href="/contact"
        currentPathName={pathName}
        text="Contact"
      />
    </section>
  );
}

function NavLink({
  href,
  currentPathName,
  text,
  mobileIcon,
}: {
  href: string;
  currentPathName: string;
  text: string;
  mobileIcon: IconDefinition;
}) {
  return (
    <Link
      href={href}
      className={`${
        currentPathName == href
          ? "text-light dark:text-dark"
          : "text-black dark:text-white"
      } text-sm hover:text-light hover:dark:text-dark `}
    >
      <FontAwesomeIcon className="md:hidden" icon={mobileIcon} width="20" />
      <p className="hidden md:block md:text-base">{text}</p>
    </Link>
  );
}
