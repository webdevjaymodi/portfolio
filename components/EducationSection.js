import Image from 'next/image';
import { certification, education } from '../data/portfolio';
import SectionHeading from './SectionHeading';

export default function EducationSection() {
  return (
    <section id="education">
      <SectionHeading eyebrow="Education & Certification" title="Academic Foundation" />
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
        <article className="timeline-card certification-card">
          <div className="experience-marker" aria-hidden="true">AI</div>
          <div>
            <div className="timeline-topline"><span>{certification.issued}</span><span>{certification.issuer}</span></div>
            <h3>{certification.title}</h3>
            <p>{certification.description}</p>
            <p className="credential-id">Credential ID: {certification.credentialId}</p>
          </div>
        </article>
      </div>
    </section>
  );
}
