import { useState, useEffect } from "react";
import { Classic } from "@theme-toggles/react";
import "@theme-toggles/react/styles/classic.css";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      onClick={toggle}
      className="theme-toggle-btn hover:text-gray-400"
      style={{ cursor: "pointer", background: "none", border: "none", padding: 0, fontSize: "26px", transition: "color 0ms" }}
    >
      <Classic toggled={isDark} duration={750} />
    </button>
  );
}
