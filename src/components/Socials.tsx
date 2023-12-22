import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  faGithub,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Socials({ className }: { className?: string }) {
  return (
    <section className={`flex flex-row gap-10 ${className}`}>
      <SocialsIcon icon={faGithub} link={"https://github.com/raj-pulapakura"} />
      <SocialsIcon
        icon={faLinkedin}
        link={"https://www.linkedin.com/in/rajpulapakura/"}
      />
      <SocialsIcon
        icon={faMedium}
        link={"https://medium.com/@raj.pulapakura"}
      />
    </section>
  );
}

function SocialsIcon({ icon, link }: { icon: IconDefinition; link: string }) {
  return (
    <Link className="hover:text-light hover:dark:text-dark" href={link}>
      <FontAwesomeIcon className="fa-2xl" icon={icon} />
    </Link>
  );
}
