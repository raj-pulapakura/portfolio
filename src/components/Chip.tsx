import { ReactNode } from "react";

export default function Chip({ children }: { children: ReactNode }) {
  return (
    <div className=" text-white dark:text-black bg-light dark:bg-dark py-1 px-3 rounded-full w-fit inline-block m-1 font-semibold">
      {children}
    </div>
  );
}
