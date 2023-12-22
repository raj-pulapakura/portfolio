import { ReactNode } from "react";
import Footer from "./Footer";

export default function ContentBox({ children }: { children?: ReactNode }) {
  return (
    <section className="pt-48 px-8 md:px-16 md:mx-16 lg:px-24 lg:mx-32 bg-contentBoxLight dark:bg-contentBoxDark">
      {children}
      <Footer />
    </section>
  );
}
