import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  faGithub,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Socials() {
  return (
    <section>
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
    <Link href={link}>
      <FontAwesomeIcon icon={icon} width="30" height="30" />
    </Link>
  );
}
