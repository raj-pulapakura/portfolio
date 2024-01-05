import { ReactNode } from "react";

export default function Chip({
  children,
  secondary,
  className,
}: {
  children: ReactNode;
  secondary?: boolean;
  className?: string;
}) {
  const commonClasses =
    "inline-block py-1 px-3 rounded-full w-fit mr-2 mb-2 font-semibold";

  return secondary ? (
    <div
      className={`text-black bg-gray-200 dark:text-white  dark:bg-gray-900 ${commonClasses}  ${className}`}
    >
      {children}
    </div>
  ) : (
    <div
      className={`text-white bg-light dark:text-black  dark:bg-dark ${commonClasses} ${className}`}
    >
      {children}
    </div>
  );
}
