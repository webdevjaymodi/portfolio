import { experiences } from '../data/portfolio';
import SectionHeading from './SectionHeading';

export default function ExperienceSection() {
  return (
    <section id="experience">
      <SectionHeading eyebrow="Professional Journey" title="Experience & Training">
        Real-world support experience, QA training, and development internship work that strengthen my testing mindset.
      </SectionHeading>
      <div className="timeline-list">
        {experiences.map((item) => (
          <article className="timeline-card experience-card" key={`${item.role}-${item.company}`}>
            <div className="experience-marker" aria-hidden="true">QA</div>
            <div>
              <div className="timeline-topline">
                <span>{item.period}</span>
                <span>{item.location}</span>
              </div>
              <h3>{item.role}</h3>
              <p className="company-name">{item.company}</p>
              <p>{item.description}</p>
              <div className="tag-row">
                {item.highlights.map((highlight) => <span key={highlight}>{highlight}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
