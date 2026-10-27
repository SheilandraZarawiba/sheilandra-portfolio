import SplitText from "./reactbits/SplitText.jsx";

export default function SectionTitle({ children }) {
  return <SplitText tag="h2" text={children} splitType="chars" textAlign="left" delay={30} rootMargin="0px" className="section__title" />;
}
