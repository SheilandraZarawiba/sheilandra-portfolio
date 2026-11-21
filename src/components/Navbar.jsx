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
      colors={theme === "dark" ? ["#3a2c27", "#4f86bd"] : ["#e2dac8", "#6aa7e3"]}
      accentColor="#2c68a6"
      menuButtonColor={theme === "dark" ? "#f1ebdf" : "#2a1a16"}
      openMenuButtonColor={theme === "dark" ? "#f1ebdf" : "#2a1a16"}
    />
  );
}
