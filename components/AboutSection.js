import SectionHeading from './SectionHeading';

export default function AboutSection() {
  return (
    <section id="aboutme">
      <SectionHeading eyebrow="Who Am I" title="About Me" />
      <div className="about-content">
        <p>
          Hello! I&apos;m Jay Modi, a passionate web developer eager to embark on a journey in the
          ever-evolving world of technology. With a fresh perspective and a hunger to learn, I am
          excited to contribute my skills and creativity to innovative projects.
          <br />
          <br />
          My fascination with web development began from college, where I made a project on a hospital
          management system. Since then, I&apos;ve been on a quest to expand my knowledge and refine my
          craft. I have hands-on experience with HTML, CSS, JavaScript, and have dabbled in various
          frameworks and libraries like Bootstrap.
          <br />
          <br />
          What truly drives me is the opportunity to solve problems and create seamless user
          experiences. I thrive in collaborative environments, where I can brainstorm ideas and turn
          them into tangible solutions.
          <br />
          <br />
          Thank you for visiting my portfolio, and I look forward to connecting with you!
        </p>
      </div>
    </section>
  );
}
