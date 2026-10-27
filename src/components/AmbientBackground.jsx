// Latar bergerak yang ringan: hanya 3 gradien lembut yang bergeser lewat
// transform (dikerjakan GPU), tanpa canvas/WebGL dan tanpa JS per frame.
// Reduced motion dimatikan lewat aturan global di index.css.
export default function AmbientBackground() {
  return (
    <div className="ambient" aria-hidden="true">
      <span className="ambient__blob ambient__blob--a" />
      <span className="ambient__blob ambient__blob--b" />
      <span className="ambient__blob ambient__blob--c" />
      <span className="ambient__dots" />
    </div>
  );
}
