'use client';

import { useEffect, useMemo, useState } from 'react';

const navLinks = [
  ['Home', '#home'],
  ['About', '#aboutme'],
  ['Services', '#service'],
  ['Projects', '#project'],
  ['Contact-Me', '#contact'],
];

const typedWords = ['Web Developer', 'Programmer', 'Freelancer'];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkTheme(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkTheme) {
      document.body.setAttribute('data-theme', 'dark');
      window.localStorage.setItem('theme', 'dark');
    } else {
      document.body.removeAttribute('data-theme');
      window.localStorage.removeItem('theme');
    }
  }, [isDarkTheme]);

  useEffect(() => {
    const currentWord = typedWords[wordIndex];
    const delay = isDeleting ? 55 : 110;
    const pause = !isDeleting && typedText === currentWord ? 1200 : delay;

    const timer = window.setTimeout(() => {
      if (!isDeleting && typedText === currentWord) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setWordIndex((current) => (current + 1) % typedWords.length);
        return;
      }

      setTypedText((current) =>
        isDeleting
          ? currentWord.slice(0, Math.max(current.length - 1, 0))
          : currentWord.slice(0, current.length + 1),
      );
    }, pause);

    return () => window.clearTimeout(timer);
  }, [isDeleting, typedText, wordIndex]);

  useEffect(() => {
    const skillSection = document.getElementById('skill');
    if (!skillSection) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(skillSection);
    return () => observer.disconnect();
  }, []);

  const skillItems = useMemo(
    () => [
      ['HTML', '70%'],
      ['CSS', '50%'],
      ['JavaScript', '30%'],
      ['Bootstrap', '60%'],
      ['SQL', '70%'],
    ],
    [],
  );

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function sendEmail(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const subject = String(formData.get('subject') || '').trim() || 'Portfolio inquiry';
    const message = String(formData.get('message') || '').trim();

    if (!name || !email || !message) {
      window.alert('Please fill in your name, email, and message before sending.');
      return;
    }

    const body = [`Name: ${name}`, `Email: ${email}`, '', message].join('\n');
    window.location.href = `mailto:jaymodi993@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    event.currentTarget.reset();
  }

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="logo">
            <a href="#home" onClick={closeMenu}>
              <img src="/img/Jay's Portfolio_transparent.png" alt="Jay's Portfolio Logo" />
            </a>
          </div>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} id="primary-navigation">
            {navLinks.map(([label, href]) => (
              <li key={href}>
                <a href={href} onClick={closeMenu}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="theme-toggle-btn"
            type="button"
            aria-label="Toggle Dark Mode"
            onClick={() => setIsDarkTheme((current) => !current)}
          >
            {isDarkTheme ? '☀️' : '🌙'}
          </button>
          <button
            className={`menu-btn ${isMenuOpen ? 'active' : ''}`}
            type="button"
            aria-label="Open Menu"
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            &#9776;
          </button>
        </nav>
      </header>

      <main>
        <section id="home">
          <div className="home-content">
            <div className="home-text">
              <h3>Hi, My Name is</h3>
              <h1>Jay Modi</h1>
              <h2>
                and I am a <span id="element">{typedText}</span>
              </h2>
              <div className="social-links">
                <a href="https://github.com/jaymodi993" target="_blank" rel="noopener noreferrer">
                  Visit Github
                </a>
                <a
                  href="https://drive.google.com/file/d/1vEZaegPyb2rUV_1pmDj2_KbG1LLEnEmo/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV
                </a>
              </div>
            </div>
            <div className="home-img">
              <img src="/img/my.jpg" alt="Jay Modi - Web Developer" className="floating-img" />
            </div>
          </div>
        </section>

        <hr />

        <section id="aboutme">
          <p className="section-title">Who Am I</p>
          <h2 className="section-heading">About Me</h2>
          <div className="about-content">
            <p>
              Hello! I&apos;m Jay Modi, a passionate web developer eager to embark on a journey in the
              ever-evolving world of technology. With a fresh perspective and a hunger to learn, I am
              excited to contribute my skills and creativity to innovative projects.
              <br />
              <br />
              My fascination with web development began from college, where I made a project on a
              hospital management system. Since then, I&apos;ve been on a quest to expand my knowledge and
              refine my craft. I have hands-on experience with HTML, CSS, JavaScript, and have dabbled
              in various frameworks and libraries like Bootstrap.
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

        <hr />

        <section id="education">
          <p className="section-title">What I Study</p>
          <h2 className="section-heading">Education</h2>
          <div className="education-content">
            <div className="education-item">
              <img src="/img/t.jpeg" alt="Tolani F. G. Polytechnic Logo" />
              <h3>Diploma in Engineering (2019-2022)</h3>
              <p>Diploma in Computer Engineering at Tolani F. G. Polytechnic Adipur</p>
            </div>
            <div className="education-item">
              <img src="/img/sr.jpg" alt="Smt. S. R. Patel Engineering College Logo" />
              <h3>Bachelor of Engineering (2022-2025)</h3>
              <p>Bachelor of Computer Engineering at Smt. S. R. Patel Engineering College Unjha</p>
            </div>
          </div>
        </section>

        <hr />

        <section id="skill">
          <p className="section-title">What I Know</p>
          <h2 className="section-heading">My Skill</h2>
          <div className="skill-content">
            {skillItems.map(([name, width]) => (
              <div className="skill-bar" key={name}>
                <span>{name}</span>
                <div className="bar">
                  <div className="skill-fill" style={{ width: skillsVisible ? width : 0, opacity: skillsVisible ? 1 : 0 }}>
                    {width}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr />

        <section id="service">
          <p className="section-title">What I Provide</p>
          <h2 className="section-heading">My Services</h2>
          <div className="service-content">
            <div className="service-item">
              <h3>Web Development</h3>
              <p>Using HTML, CSS, and JavaScript</p>
            </div>
            <div className="service-item">
              <h3>Full Stack Development</h3>
              <p>Using HTML, CSS, JavaScript, SSMS, and ASP.NET</p>
            </div>
            <div className="service-item">
              <h3>Windows Development</h3>
              <p>Using .NET</p>
            </div>
          </div>
        </section>

        <hr />

        <section id="project">
          <p className="section-title">What I Built</p>
          <h2 className="section-heading">Projects</h2>
          <div className="project-content">
            <article className="project-item">
              <img src="/img/project-placeholder.png" alt="Hospital Management System project preview" />
              <div className="project-details">
                <h3>Hospital Management System</h3>
                <p>
                  A college project focused on managing patient, doctor, and appointment workflows with
                  a clear administrative interface.
                </p>
              </div>
            </article>
          </div>
        </section>

        <hr />

        <section id="contact">
          <p className="section-title">Get In Touch</p>
          <h2 className="section-heading">Contact</h2>
          <div className="contact-content">
            <div className="contact-info">
              <p>
                <strong>Name:</strong> Jay Modi
              </p>
              <p>
                <strong>Email:</strong> <a href="mailto:jaymodi993@gmail.com">jaymodi993@gmail.com</a>
              </p>
              <p>
                <strong>Address:</strong> Mundra, Gujarat, India
              </p>
            </div>
            <form className="contact-form" onSubmit={sendEmail}>
              <h4>Message</h4>
              <input type="text" name="name" placeholder="Name" required aria-label="Name" />
              <input type="email" name="email" placeholder="Email" required aria-label="Email" />
              <input type="text" name="subject" placeholder="Subject" aria-label="Subject" />
              <textarea name="message" placeholder="Message" aria-label="Message" required />
              <button type="submit">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-container">
          <div className="footer-logo">
            <a href="#home" aria-label="Back to Top">
              <img src="/img/Jay's Portfolio_transparent.png" alt="Jay Modi Portfolio Logo" />
            </a>
          </div>
          <div className="footer-links-wrapper">
            <ul className="footer-list">
              <li>
                <a href="#home"><i className="fa-solid fa-house" /> Home</a>
              </li>
              <li>
                <a href="#aboutme"><i className="fa-solid fa-user" /> About</a>
              </li>
              <li>
                <a href="#service"><i className="fa-solid fa-briefcase" /> Services</a>
              </li>
              <li>
                <a href="#project"><i className="fa-solid fa-code" /> Projects</a>
              </li>
            </ul>
            <ul className="footer-list">
              <li>
                <a href="https://www.linkedin.com/in/jay-modi-60965519a/" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-linkedin" /> Linkedin
                </a>
              </li>
              <li>
                <a href="https://twitter.com/jaymodi993" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-x-twitter" /> Twitter
                </a>
              </li>
              <li>
                <a href="https://github.com/jaymodi993" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-github" /> Github
                </a>
              </li>
              <li>
                <a href="https://wa.me/+918490093530" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-whatsapp" /> Whatsapp
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/jaymodi993/" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-instagram" /> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright-text">
          <p>copyright © jaymodi-portfolio.netlify.app | All right reserved</p>
        </div>
      </footer>
    </>
  );
}
