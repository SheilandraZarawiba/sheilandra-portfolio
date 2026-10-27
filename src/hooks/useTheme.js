import { useEffect, useState } from "react";

const KEY = "theme";

// Default gelap (senada dengan hero dan footer). Pilihan pengguna disimpan,
// kalau belum ada ikut preferensi sistem.
const initial = () => {
  try {
    const saved = localStorage.getItem(KEY);
    if (saved === "light" || saved === "dark") return saved;
  } catch { /* localStorage bisa diblok */ }
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
};

export function useTheme() {
  const [theme, setTheme] = useState(initial);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem(KEY, theme); } catch { /* abaikan */ }
  }, [theme]);
  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  return [theme, toggle];
}
