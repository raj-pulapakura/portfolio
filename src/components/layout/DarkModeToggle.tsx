"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  }

  return (
    <FontAwesomeIcon
      className="hover:cursor-pointer"
      onClick={toggle}
      icon={isDark ? faSun : faMoon}
    />
  );
}
