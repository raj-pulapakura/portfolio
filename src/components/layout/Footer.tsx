import Link from "next/link";
import Socials from "../Socials";

export default function Footer({ className }: { className?: string }) {
  return (
    <section
      className={`flex  flex-col md:flex-row md:justify-between bg-contentBoxLight dark:bg-contentBoxDark border-t-2 mt-10 p-5 pt-10 pb-10 w-full ${className}`}
    >
      <Socials className="gap-5" />
      <div>
        <p className="mb-1">Raj Pulapakura</p>
        <p className="text-sm">Built with Next.JS</p>
      </div>
    </section>
  );
}
