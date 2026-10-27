import StaggeredMenu from "./reactbits/StaggeredMenu.jsx";
import { asset } from "../lib/asset.js";
import { CONTACT } from "../data/content.js";

const ITEMS = [
  ["Home", "home"], ["About", "about"], ["Skills", "skills"],
  ["Projects", "projects"], ["Achievements", "achievements"], ["Contact", "contact"],
].map(([label, id]) => ({ label, ariaLabel: `Ke bagian ${label}`, link: `#${id}` }));

const SOCIALS = [
  { label: "GitHub", link: CONTACT.github },
  { label: "LinkedIn", link: CONTACT.linkedin },
  { label: "Instagram", link: CONTACT.instagram },
  { label: "Email", link: `mailto:${CONTACT.email}` },
];

export default function Navbar({ theme = "dark" }) {
  return (
    <StaggeredMenu
      isFixed
      position="right"
      items={ITEMS}
      socialItems={SOCIALS}
      displayItemNumbering={false}
      logoUrl={asset("assets/logo-sz.svg")}
      colors={["#1f2937", "#ec4899"]}
      accentColor="#ec4899"
      menuButtonColor={theme === "dark" ? "#f472b6" : "#be185d"}
      openMenuButtonColor="#111827"
    />
  );
}
