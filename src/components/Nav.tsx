import Link from "next/link";

export default function Nav() {
  return (
    <section>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/articles">Articles</Link>
      <Link href="/resume">Resume</Link>
      <Link href="/contact">Contact</Link>
    </section>
  );
}
