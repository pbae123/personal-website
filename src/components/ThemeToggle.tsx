import { useState, useEffect, useRef } from "react";
import { Classic } from "@theme-toggles/react";
import "@theme-toggles/react/styles/classic.css";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const isMounted = useRef(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    isMounted.current = true;
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
      className="theme-toggle"
      style={{ cursor: "pointer", background: "none", border: "none", padding: 0, fontSize: "26px" }}
    >
      <Classic toggled={isDark || undefined} duration={isMounted.current ? 750 : 0} />
    </button>
  );
}
