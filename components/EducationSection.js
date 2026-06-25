import Image from 'next/image';
import { education } from '@/data/portfolio';
import SectionHeading from './SectionHeading';

export default function EducationSection() {
  return (
    <section id="education">
      <SectionHeading eyebrow="What I Study" title="Education" />
      <div className="education-content">
        {education.map((item) => (
          <article className="education-item" key={item.title}>
            <Image src={item.image} alt={item.imageAlt} width={120} height={80} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
