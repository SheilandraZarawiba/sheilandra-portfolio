import { CONTACT } from "../data/content.js";
import SectionTitle from "./SectionTitle.jsx";
import ShinyText from "./reactbits/ShinyText.jsx";
import Magnet from "./reactbits/Magnet.jsx";
import AnimatedContent from "./reactbits/AnimatedContent.jsx";

const ext = { target: "_blank", rel: "noopener noreferrer" };
const SOCIALS = [["GitHub", CONTACT.github], ["LinkedIn", CONTACT.linkedin], ["Instagram", CONTACT.instagram]];

export default function Contact({ theme = "dark" }) {
  return (
    <section className="section contact" id="contact">
      <div className="wrap contact__in">
        <SectionTitle>Kontak</SectionTitle>
        <p className="section__lead">
          <ShinyText text="Terbuka untuk magang Full-Stack / Web Developer dan Web Application Development & Technical Support." color={theme === "dark" ? "#c3cca6" : "#5b6a38"} shineColor={theme === "dark" ? "#fff8e8" : "#33401c"} speed={3} />
        </p>
        <AnimatedContent distance={40} blur>
          <p><a className="mail" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></p>
          <div className="hero__cta">
            <Magnet padding={60} magnetStrength={3}><a className="btn btn--accent" href={`mailto:${CONTACT.email}?subject=Lamaran%20Magang%20IT`}>Kirim email</a></Magnet>
            {SOCIALS.map(([name, url]) => (
              <Magnet key={name} padding={60} magnetStrength={3}><a className="btn btn--ghost" href={url} {...ext}>{name}</a></Magnet>
            ))}
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
