"use client";

import MobileNavBar from "./MobileNavBar";
import LargeNavBar from "./LargeNavBar";

export default function Nav() {
  return (
    <>
      <LargeNavBar className="hidden lg:block" />
      <MobileNavBar className="block lg:hidden" />
    </>
  );
}
