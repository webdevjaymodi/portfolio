import { services } from '../data/portfolio';
import SectionHeading from './SectionHeading';

export default function ServicesSection() {
  return (
    <section id="service">
      <SectionHeading eyebrow="Focus Areas" title="What I Can Help With" />
      <div className="service-content">
        {services.map((service, index) => (
          <article className="service-item" key={service.title}>
            <span className="service-number">0{index + 1}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
