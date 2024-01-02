import Socials from "../Socials";

export default function Footer({ className }: { className?: string }) {
  return (
    <section
      className={`flex flex-col items-center md:flex-row md:justify-between md:items-center bg-contentBoxLight dark:bg-contentBoxDark border-t-2 mt-10 pt-10 pb-10 w-full ${className}`}
    >
      <Socials className="gap-5 mb-7 md:mb-0" />
      <p className="mb-1">Raj Pulapakura</p>
    </section>
  );
}
