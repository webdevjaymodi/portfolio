import Image from 'next/image';
import { projects } from '../data/portfolio';
import SectionHeading from './SectionHeading';

export default function ProjectsSection() {
  return (
    <section id="project">
      <SectionHeading eyebrow="Featured Projects" title="Selected Work">
        Personal and academic applications showcasing database design, user flows, and clean interfaces.
      </SectionHeading>
      <div className="project-content">
        {projects.map((project) => (
          <article className="project-item" key={project.title}>
            <Image src={project.image} alt={project.imageAlt} width={320} height={210} />
            <div className="project-details">
              <span className="project-date">{project.date}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
