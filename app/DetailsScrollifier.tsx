"use client";

import { useEffect } from "react";

// it's jquery time

function scrollIt(el: HTMLDetailsElement) {
  const rect = el.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const offset = 10;
  window.scrollTo({
    top: rect.top + scrollTop - offset,
    behavior: "instant",
  });
}

export function DetailsScrollifier() {
  useEffect(() => {
    const handleToggle = (e: Event) => {
      const el = e.target as HTMLDetailsElement;
      if (el.tagName === "DETAILS" && el.open) {
        scrollIt(el);
      }
    };

    document.addEventListener("toggle", handleToggle, true);
    return () => document.removeEventListener("toggle", handleToggle, true);
  }, []);

  return null;
}
