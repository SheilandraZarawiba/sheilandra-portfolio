import SectionTitle from "./SectionTitle.jsx";
import ScrollReveal from "./reactbits/ScrollReveal.jsx";
import AnimatedContent from "./reactbits/AnimatedContent.jsx";

const TEXT =
  "Saya mahasiswi semester 5 D-IV Teknik Informatika di Politeknik Negeri Malang. Lewat proyek dan praktikum, saya terlibat dalam pengembangan antarmuka aplikasi, perancangan UI/UX, integrasi API, penyusunan dokumentasi teknis, dan pengujian perangkat lunak. Saya senang menganalisis masalah, bekerja dalam tim, dan ingin terus berkembang lewat kesempatan magang.";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <SectionTitle>Tentang saya</SectionTitle>
        <div className="about">
          <ScrollReveal baseOpacity={0.15} blurStrength={4} textClassName="about__text" wordAnimationEnd="center center">{TEXT}</ScrollReveal>
          <AnimatedContent distance={60} direction="horizontal" reverse blur>
            <aside className="edu" aria-labelledby="eduTitle">
              <h3 id="eduTitle">Pendidikan</h3>
              <p className="edu__school">Politeknik Negeri Malang</p>
              <p>D-IV Teknik Informatika</p>
              <p>Agustus 2024 sampai sekarang</p>
              <p>Perkiraan lulus: 2028</p>
              <p>IPK: 3.70</p>
            </aside>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
}
