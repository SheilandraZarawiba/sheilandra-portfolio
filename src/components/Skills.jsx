import { SKILLS } from "../data/content.js";
import SectionTitle from "./SectionTitle.jsx";
import SpotlightCard from "./reactbits/SpotlightCard.jsx";
import AnimatedContent from "./reactbits/AnimatedContent.jsx";

export default function Skills({ theme = "dark" }) {
  return (
    <section className="section section--tint" id="skills">
      <div className="wrap">
        <SectionTitle>Skills</SectionTitle>
        <p className="section__lead">Teknologi yang pernah saya pakai di proyek dan praktikum. Tanpa persentase, karena kemampuan lebih jelas dilihat dari proyeknya.</p>
        <AnimatedContent stagger={0.08} distance={50} scale={0.95} duration={0.7}>
          <div className="skills">
            {SKILLS.map(([name, items]) => (
              <SpotlightCard key={name} theme={theme} spotlightColor="#ec4899" className="skill-card">
                <h3>{name}</h3>
                <ul className="chips">{items.map((i) => <li key={i}>{i}</li>)}</ul>
              </SpotlightCard>
            ))}
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
