import { ReactNode } from "react";

export default function FixedTop({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`fixed top-10 z-100 left-1/2 -translate-x-1/2 ${className}`}
    >
      {children}
    </section>
  );
}
