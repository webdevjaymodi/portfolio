import { skills } from '../data/portfolio';
import SectionHeading from './SectionHeading';

export default function SkillsSection() {
  return (
    <section id="skill">
      <SectionHeading eyebrow="Technical Arsenal" title="Skills">
        Tools and technologies I use to create responsive, useful, and maintainable projects.
      </SectionHeading>
      <div className="skill-cloud">
        {skills.map((skill) => (
          <span className="skill-pill" key={skill}>{skill}</span>
        ))}
      </div>
    </section>
  );
}
