import SectionHeading from './SectionHeading';

export default function AboutSection() {
  return (
    <section id="aboutme" className="about-section">
      <SectionHeading eyebrow="Professional Profile" title="QA testing and software support focused." />
      <div className="about-content split-card">
        <div>
          <p>
            I am Jay Modi, a QA Tester and Software Support Engineer focused on Manual Testing,
            Software Testing, Quality Assurance, Technical Support, Requirement Understanding,
            Client Communication, Issue Analysis, Troubleshooting, and Application Support.
          </p>
          <p>
            Currently, I work as a Software Support Engineer at Sapphire Software Solutions, where I
            handle software support, client guidance, requirement understanding, issue analysis,
            troubleshooting, software quality support, and real user problem solving.
          </p>
          <p>
            My development knowledge in HTML5, CSS, JavaScript, React.js, ASP.NET Core, SQL, MySQL,
            Microsoft SQL Server, Postman API, GitHub, and REST APIs supports my testing career by
            helping me understand how applications are built and how issues can be analyzed better.
          </p>
        </div>
        <div className="about-callout">
          <span>Career Direction</span>
          <strong>QA Testing + Software Support main, development knowledge secondary.</strong>
          <a href="#contact">Hire / Connect</a>
        </div>
      </div>
    </section>
  );
}
