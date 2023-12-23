import Link from "next/link";

export default function NavLink({
  href,
  currentPathName,
  text,
  className,
}: {
  href: string;
  currentPathName: string;
  text: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <Link
        href={href}
        className={`${
          currentPathName == href
            ? "text-light dark:text-dark"
            : "text-black dark:text-white"
        } text-md hover:text-light hover:dark:text-dark `}
      >
        <p>{text}</p>
      </Link>
    </div>
  );
}
