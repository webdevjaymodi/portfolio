import SectionHeading from './SectionHeading';

export default function AboutSection() {
  return (
    <section id="aboutme" className="about-section">
      <SectionHeading eyebrow="Who Am I" title="Designing logic. Shaping experiences." />
      <div className="about-content split-card">
        <div>
          <p>
            Hello! I&apos;m Jay Modi, a passionate web developer eager to grow in the ever-evolving
            world of technology. I enjoy building practical, responsive interfaces and learning how
            thoughtful code can solve real user problems.
          </p>
          <p>
            My journey started with a college Hospital Management System project. Since then, I have
            continued sharpening my skills in HTML, CSS, JavaScript, Bootstrap, SQL, ASP.NET, and .NET.
          </p>
        </div>
        <div className="about-callout">
          <span>Currently focused on</span>
          <strong>Clean UI, strong fundamentals, and full-stack project building.</strong>
          <a href="#contact">Let&apos;s Talk</a>
        </div>
      </div>
    </section>
  );
}
