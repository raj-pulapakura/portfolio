import Email from "@/components/Email";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { IconDefinition, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main>
      <h1 className="text-4xl font-black mb-10">
        I would love to get in touch
      </h1>
      <p className="leading-relaxed mb-5">
        Contacting me is easy, just drop me an email at <Email />. I welcome the
        opportunity to discuss potential job opportunities and project ideas.
      </p>
      <p className="leading-relaxed mb-10">
        If you're a technical recruiter, kindly{" "}
        <Link href="/resume">
          <span className="underline underline-offset-2 decoration-light dark:decoration-dark">
            download my resume
          </span>{" "}
        </Link>
        to learn more about how I can add value to your organization. I am open
        to roles as a Software Engineer, Full Stack Developer, and Machine
        Learning Engineer.
      </p>
      <ContactLink
        className="mb-2"
        text="Follow me on GitHub"
        icon={faGithub}
        href="https://github.com/raj-pulapakura"
      />
      <ContactLink
        className="mb-2"
        text="Follow me on LinkedIn"
        icon={faLinkedin}
        href="https://www.linkedin.com/in/rajpulapakura/"
      />
      <ContactLink
        className="mb-2"
        text="Follow me on Medium"
        icon={faMedium}
        href="https://medium.com/@raj.pulapakura"
      />
      <ContactLink
        className="mb-2"
        text="Subscribe to my YouTube channel"
        icon={faYoutube}
        href="https://www.youtube.com/@rajpulapakura9119"
      />
    </main>
  );
}

function ContactLink({
  text,
  icon,
  className,
  href,
}: {
  text: string;
  icon: IconDefinition;
  href: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 ${className} hover:underline hover:underline-offset-2 hover:decoration-light hover:dark:decoration-dark`}
    >
      <FontAwesomeIcon width={32} icon={icon} />
      <p>{text}</p>
    </Link>
  );
}
