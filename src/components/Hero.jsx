import { asset } from "../lib/asset.js";
import SplitText from "./reactbits/SplitText.jsx";
import TextType from "./reactbits/TextType.jsx";
import Magnet from "./reactbits/Magnet.jsx";
import DotGrid from "./reactbits/DotGrid.jsx";
import ProfileCard from "./reactbits/ProfileCard.jsx";
import { CONTACT } from "../data/content.js";

const HEADLINE = "Building Digital Solutions Through Code, Systems & Data.";
const ROLES = [
  "UI/UX Designer",
  "Frontend Developer",
  "Mobile App Developer",
  "System Analyst",
  "API Integration Developer",
  "Technical Documentation",
];

export default function Hero({ theme = "dark" }) {
  const hasCv = true; // set false kalau assets/CV-Sheilandra.pdf belum ada
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return (
    <section className="hero" id="home">
      <div className="hero__bg" aria-hidden="true">
        <DotGrid baseColor={theme === "dark" ? "#263145" : "#f2c4da"} activeColor="#ec4899" dotSize={4} gap={22} paused={reduce} />
      </div>
      <div className="wrap hero__in">
        <div>
          <p className="hero__role">
            <TextType as="span" text={ROLES} typingSpeed={60} pauseDuration={1600} cursorColor="#ec4899" />
          </p>
          <SplitText tag="h1" text={HEADLINE} splitType="words" textAlign="left" delay={70} rootMargin="0px" className="hero__title" />
          <p className="hero__lead">
            Saya Sheilandra Zarawiba, mahasiswi semester 5 D-IV Teknik Informatika Politeknik Negeri Malang. Lewat proyek
            akademik dan praktikum, saya belajar mengembangkan aplikasi web dan mobile, menganalisis sistem, mengelola
            basis data, mengintegrasikan API, menyusun dokumentasi teknis, dan menguji perangkat lunak.
          </p>
          <div className="hero__cta">
            <Magnet padding={60} magnetStrength={3}><a className="btn btn--accent" href="#projects">Lihat proyek</a></Magnet>
            {hasCv && <Magnet padding={60} magnetStrength={3}><a className="btn btn--ghost" href={asset("assets/CV-Sheilandra.pdf")} download>Unduh CV</a></Magnet>}
          </div>
        </div>
        <div className="hero__card">
          <ProfileCard
            avatarUrl={asset("assets/images/profile.jpg")}
            name="Sheilandra Zarawiba"
            title="D-IV Teknik Informatika, Polinema"
            handle="SheilandraZarawiba"
            status="Mencari magang IT"
            contactText="Email"
            onContactClick={() => (window.location.href = `mailto:${CONTACT.email}`)}
            enableMobileTilt
            theme={theme}
          />
        </div>
      </div>
    </section>
  );
}
