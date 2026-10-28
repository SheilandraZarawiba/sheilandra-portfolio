import { asset } from "../lib/asset.js";
import SplitText from "./reactbits/SplitText.jsx";
import TextType from "./reactbits/TextType.jsx";
import Magnet from "./reactbits/Magnet.jsx";
import Lanyard from "./reactbits/Lanyard.jsx";

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
  return (
    <section className="hero" id="home">
      <div className="hero__bg" aria-hidden="true" />
      <div className="wrap hero__in">
        <div className="hero__text">
          <p className="hero__role">
            <TextType as="span" text={ROLES} typingSpeed={60} pauseDuration={1600} cursorColor="#f48fa3" />
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
          <Lanyard
            frontImage={asset("assets/images/card-front.png")}
            backImage={asset("assets/images/card-back.png")}
            strapImage={asset("assets/images/lanyard-band.png")}
            strapColor={theme === "dark" ? "#46592f" : "#8aa04f"}
            cardColor="#fffbea"
            finish="glossy"
            metal="gold"
            cornerRadius={0.3}
            size={0.62}
            anchor="center"
            strapLength={0.5}
            strapWidth={0.65}
            interactive
            intro
          />
          <p className="hero__hint">Klik kartu untuk membaliknya</p>
        </div>
      </div>
    </section>
  );
}
