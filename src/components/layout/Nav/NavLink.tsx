import Link from "next/link";

export default function NavLink({
  href,
  currentPathName,
  text,
  className,
  onClick,
}: {
  href: string;
  currentPathName: string;
  text: string;
  className?: string;
  onClick?: VoidFunction;
}) {
  return (
    <div className={className} onClick={onClick}>
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
