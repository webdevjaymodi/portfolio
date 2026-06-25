export default function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="section-heading-block">
      <p className="section-title">{eyebrow}</p>
      <h2 className="section-heading">{title}</h2>
      {children ? <p className="section-subtitle">{children}</p> : null}
    </div>
  );
}
