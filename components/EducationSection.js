import Image from 'next/image';
import { education } from '../data/portfolio';
import SectionHeading from './SectionHeading';

export default function EducationSection() {
  return (
    <section id="education">
      <SectionHeading eyebrow="Experience & Education" title="Education Timeline" />
      <div className="timeline-list">
        {education.map((item) => (
          <article className="timeline-card" key={item.title}>
            <Image src={item.image} alt={item.imageAlt} width={76} height={76} />
            <div>
              <div className="timeline-topline"><span>{item.period}</span><span>{item.meta}</span></div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
