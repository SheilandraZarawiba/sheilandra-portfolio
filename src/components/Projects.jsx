import { useRef, useState } from "react";
import { PROJECTS, FILTERS } from "../data/projects.js";
import { asset } from "../lib/asset.js";
import AnimatedContent from "./reactbits/AnimatedContent.jsx";
import GlareHover from "./reactbits/GlareHover.jsx";
import Magnet from "./reactbits/Magnet.jsx";

const Chips = ({ items }) => (
  <ul className="chips">{items.map((i) => <li key={i}>{i}</li>)}</ul>
);

function Shot({ src, alt }) {
  const [ok, setOk] = useState(true);
  return (
    <div className="thumb">
      {ok
        ? <img src={asset(src)} alt={alt} loading="lazy" onError={() => setOk(false)} />
        : <span className="thumb__fallback">Screenshot belum tersedia</span>}
    </div>
  );
}

function Row({ p, i, onOpen }) {
  const [alt, setAlt] = useState(true);
  if (p.comingSoon) {
    return (
      <AnimatedContent distance={70} direction="horizontal" reverse={i % 2 === 1} duration={0.9} blur>
        <article className={"row" + (i % 2 ? " row--flip" : "")}>
          <div className="row__media"><div className="frame frame--empty">Segera hadir</div></div>
          <div className="row__text">
            <p className="card__cat">{p.category}</p>
            <h3>{p.title}</h3>
            <p>{p.summary}</p>
          </div>
        </article>
      </AnimatedContent>
    );
  }
  return (
    <AnimatedContent distance={70} direction="horizontal" reverse={i % 2 === 1} duration={0.9} blur>
      <article className={"row" + (i % 2 ? " row--flip" : "")}>
        <GlareHover width="100%" borderRadius="10px" glareColor="#ec4899" glareOpacity={0.35} className="row__media">
          <div className="frame">
            <img className="frame__a" src={asset(p.images[0])} alt={`Tampilan ${p.title}`} loading="lazy" />
            {alt && <img className="frame__b" src={asset(p.images[1])} alt="" loading="lazy" onError={() => setAlt(false)} />}
          </div>
        </GlareHover>
        <div className="row__text">
          <p className="card__cat">{p.category}</p>
          <h3>{p.title}</h3>
          <p>{p.summary}</p>
          <p className="card__role"><strong>Role:</strong> {p.role}</p>
          <Chips items={p.projectStack} />
          <Magnet padding={50} magnetStrength={3}>
            <button className="btn btn--small" onClick={(e) => onOpen(p, e.currentTarget)}>Lihat detail</button>
          </Magnet>
        </div>
      </article>
    </AnimatedContent>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [current, setCurrent] = useState(null);
  const dialog = useRef(null);
  const trigger = useRef(null);

  const shown = PROJECTS.filter((p) => filter === "all" || p.tags.includes(filter));
  const open = (p, el) => { trigger.current = el; setCurrent(p); requestAnimationFrame(() => dialog.current.showModal()); };
  const close = () => dialog.current.close();

  return (
    <section className="section projects" id="projects">
      <div className="wrap">
        <h2>Proyek pilihan</h2>
        <p className="section__lead">Tiga proyek akademik. Arahkan kursor ke gambar untuk melihat tampilan lainnya.</p>

        <div className="filters" role="group" aria-label="Filter proyek">
          {FILTERS.map(([k, label]) => (
            <button key={k} className={"filter" + (filter === k ? " is-active" : "")}
              aria-pressed={filter === k} onClick={() => setFilter(k)}>{label}</button>
          ))}
        </div>

        <div className="rows" key={filter}>{shown.map((p, i) => <Row key={p.id} p={p} i={i} onOpen={open} />)}</div>
        {shown.length === 0 && <p className="empty">Belum ada proyek di kategori ini. Pilih kategori lain.</p>}
      </div>

      <dialog ref={dialog} className="modal" aria-labelledby="mTitle"
        onClick={(e) => e.target === dialog.current && close()}
        onClose={() => trigger.current?.focus()}>
        {current && (
          <>
            <div className="modal__bar">
              <button className="btn btn--small" onClick={close}>Kembali</button>
              <button className="modal__x" onClick={close} aria-label="Tutup detail">&times;</button>
            </div>
            <div className="modal__body">
              <p className="card__cat">{current.category}</p>
              <h2 id="mTitle">{current.title}</h2>
              <p>{current.summary}</p>
              <h3>Role</h3><p>{current.role}</p>
              <h3>Kontribusi saya</h3>
              <ul>{current.contributions.map((c) => <li key={c}>{c}</li>)}</ul>
              <h3>Fokus kontribusi saya</h3><Chips items={current.myStack} />
              <h3>Teknologi proyek secara keseluruhan</h3><Chips items={current.projectStack} />
              {current.diagrams && (<><h3>Diagram dalam dokumentasi</h3><Chips items={current.diagrams} /></>)}
              {current.achievement && (<><h3>Pencapaian</h3><p>{current.achievement}</p></>)}
              <h3>Screenshot</h3>
              <div className="gallery">
                {current.images.map((s) => <Shot key={s} src={s} alt={`Screenshot ${current.title}`} />)}
              </div>
              <div className="links">
                <a className="btn btn--small" href={current.repo} target="_blank" rel="noopener noreferrer">GitHub</a>
                {current.repo2 && <a className="btn btn--small" href={current.repo2} target="_blank" rel="noopener noreferrer">GitHub (CMS)</a>}
              </div>
            </div>
          </>
        )}
      </dialog>
    </section>
  );
}
