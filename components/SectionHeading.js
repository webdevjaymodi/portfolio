export default function SectionHeading({ eyebrow, title }) {
  return (
    <>
      <p className="section-title">{eyebrow}</p>
      <h2 className="section-heading">{title}</h2>
    </>
  );
}
