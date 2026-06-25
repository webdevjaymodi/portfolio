import { services } from '../data/portfolio';
import SectionHeading from './SectionHeading';

export default function ServicesSection() {
  return (
    <section id="service">
      <SectionHeading eyebrow="What I Provide" title="My Services" />
      <div className="service-content">
        {services.map((service) => (
          <article className="service-item" key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
