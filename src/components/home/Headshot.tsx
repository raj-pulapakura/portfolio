"use client";

import Image from "next/image";

export default function Headshot({ className }: { className: string }) {
  return (
    <div className={`animate-fadeIn ${className}`}>
      <Image
        className="ml-auto rounded-lg"
        src="/pfps/head.jpg"
        alt="Me"
        width="400"
        height="400"
      />
    </div>
  );
}
