import { useReveal } from "../hooks/useReveal.js";

export default function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const [ref, seen] = useReveal();
  return <Tag ref={ref} className={`reveal ${seen ? "is-in" : ""} ${className}`} {...rest}>{children}</Tag>;
}
