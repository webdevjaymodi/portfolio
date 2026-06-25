import Image from 'next/image';
import { projects } from '../data/portfolio';
import SectionHeading from './SectionHeading';

export default function ProjectsSection() {
  return (
    <section id="project">
      <SectionHeading eyebrow="What I Built" title="Projects" />
      <div className="project-content">
        {projects.map((project) => (
          <article className="project-item" key={project.title}>
            <Image src={project.image} alt={project.imageAlt} width={220} height={140} />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
