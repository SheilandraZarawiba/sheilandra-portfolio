import { useState } from "react";
import { ACHIEVEMENTS } from "../data/content.js";
import { asset } from "../lib/asset.js";
import SectionTitle from "./SectionTitle.jsx";
import AnimatedContent from "./reactbits/AnimatedContent.jsx";
import GlareHover from "./reactbits/GlareHover.jsx";

function Cert({ a, i }) {
  const [imgOk, setImgOk] = useState(Boolean(a.image));
  return (
    <AnimatedContent distance={60} delay={i * 0.12} blur scale={0.97} className={a.main ? "cert-wrap cert-wrap--main" : "cert-wrap"}>
      <GlareHover width="100%" height="100%" borderRadius="8px" glareColor="#f48fa3" glareOpacity={0.3}>
        <article className={"cert" + (a.main ? " cert--main" : "")}>
          {imgOk && (
            <div className="thumb thumb--cert">
              <img src={asset(a.image)} alt={`Bukti: ${a.title}`} loading="lazy" onError={() => setImgOk(false)} />
            </div>
          )}
          <div className="cert__body">
            <h3>{a.title}</h3>
            <p>{a.meta}</p>
            {a.doc && <a className="btn btn--small" href={asset(a.doc)} target="_blank" rel="noopener noreferrer">Lihat dokumen</a>}
          </div>
        </article>
      </GlareHover>
    </AnimatedContent>
  );
}

export default function Achievements() {
  return (
    <section className="section section--tint" id="achievements">
      <div className="wrap">
        <SectionTitle>Pencapaian dan sertifikat</SectionTitle>
        <div className="certs">{ACHIEVEMENTS.map((a, i) => <Cert key={a.title} a={a} i={i} />)}</div>
      </div>
    </section>
  );
}
