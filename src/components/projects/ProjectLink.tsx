import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function ProjectLink({
  icon,
  link,
  text,
  className,
}: {
  icon: IconDefinition;
  link: string;
  text?: string;
  className?: string;
}) {
  return (
    <Link
      className="text-black dark:text-white hover:text-light hover:dark:text-dark"
      href={link}
    >
      <FontAwesomeIcon className={className} icon={icon} />
      {text && <p>{text}</p>}
    </Link>
  );
}
