'use client';

import { socialLinks } from '../data/portfolio';
import SectionHeading from './SectionHeading';

export default function ContactSection() {
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
    <section id="contact">
      <SectionHeading eyebrow="Get In Touch" title="Let's build something useful" />
      <div className="contact-content">
        <div className="contact-info">
          <p>Currently open for opportunities, freelance work, and project collaborations.</p>
          <a href="mailto:jaymodi993@gmail.com" className="mail-link">jaymodi993@gmail.com</a>
          <p>Mundra, Gujarat, India</p>
          <div className="mini-socials">{socialLinks.map((item) => <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer">{item.icon}</a>)}</div>
        </div>
        <form className="contact-form" onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required aria-label="Name" />
          <input type="email" name="email" placeholder="Your Email" required aria-label="Email" />
          <input type="text" name="subject" placeholder="Subject" aria-label="Subject" />
          <textarea name="message" placeholder="Message" aria-label="Message" required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
