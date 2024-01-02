import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  faGithub,
  faLinkedin,
  faMedium,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Socials({ className }: { className?: string }) {
  return (
    <section
      className={`flex flex-row flex-wrap gap-5 ${className} items-center`}
    >
      <SocialsIcon icon={faGithub} link={"https://github.com/raj-pulapakura"} />
      <SocialsIcon
        icon={faLinkedin}
        link={"https://www.linkedin.com/in/rajpulapakura/"}
      />
      <SocialsIcon
        icon={faMedium}
        link={"https://medium.com/@raj.pulapakura"}
      />
      <SocialsIcon
        icon={faYoutube}
        link={"https://www.youtube.com/@rajpulapakura9119"}
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
