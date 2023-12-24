"use client";

import Image from "next/image";

export default function Headshot() {
  return (
    <div className="lg:w-1/2 animate-fadeIn">
      <Image
        className="rounded-lg lg:text-right lg:ml-auto"
        src="/pfps/head.png"
        alt="Me"
        width="400"
        height="400"
      />
    </div>
  );
}
