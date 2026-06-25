'use client';

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
      <SectionHeading eyebrow="Get In Touch" title="Contact" />
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
  );
}
