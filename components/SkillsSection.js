import { skillGroups } from '../data/portfolio';
import SectionHeading from './SectionHeading';

export default function SkillsSection() {
  return (
    <section id="skill">
      <SectionHeading eyebrow="Recruiter Keywords" title="QA, Support & Technical Skills">
        My primary focus is testing and software support, with development knowledge used to analyze applications more effectively.
      </SectionHeading>
      <div className="skill-groups">
        {skillGroups.map((group) => (
          <article className="skill-group interactive-card" key={group.title}>
            <h3>{group.title}</h3>
            <div className="skill-cloud">
              {group.items.map((skill) => (
                <span className="skill-pill" key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
