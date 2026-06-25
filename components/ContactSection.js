'use client';

import { useState } from 'react';
import { socialLinks as portfolioSocialLinks } from '../data/portfolio';
import SectionHeading from './SectionHeading';

const initialStatus = { type: '', message: '' };
const socialLinks = portfolioSocialLinks || [];

export default function ContactSection() {
  const [status, setStatus] = useState(initialStatus);
  const [isSending, setIsSending] = useState(false);

  async function sendEmail(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get('name') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      subject: String(formData.get('subject') || '').trim(),
      message: String(formData.get('message') || '').trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus({ type: 'error', message: 'Please fill in your name, email, and message.' });
      return;
    }

    setIsSending(true);
    setStatus({ type: 'info', message: 'Sending your message...' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Unable to send message.');
      }

      form.reset();
      setStatus({ type: 'success', message: 'Thank you! Your message has been sent to Jay.' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: `${error.message} You can also email me directly at jaymodi993@gmail.com.`,
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section id="contact">
      <SectionHeading eyebrow="Get In Touch" title="Let's build something useful">
        Open to QA Tester, Manual Tester, Software Support, Technical Support, Application Support, and Junior QA Engineer opportunities.
      </SectionHeading>
      <div className="contact-content interactive-card">
        <div className="contact-info">
          <span className="availability-dot">Available for work</span>
          <p>Currently open for QA Testing, Manual Testing, Software Support, Technical Support, Application Support, and Junior QA Engineer opportunities.</p>
          <a href="mailto:jaymodi993@gmail.com" className="mail-link">jaymodi993@gmail.com</a>
          <p>Ahmedabad, Gujarat, India</p>
          <div className="mini-socials">
            {socialLinks.map((item) => (
              <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label}>
                {item.icon}
              </a>
            ))}
          </div>
        </div>
        <form className="contact-form" onSubmit={sendEmail}>
          <label>
            <span>Your Name</span>
            <input type="text" name="name" placeholder="Jay Modi" required autoComplete="name" />
          </label>
          <label>
            <span>Your Email</span>
            <input type="email" name="email" placeholder="you@example.com" required autoComplete="email" />
          </label>
          <label>
            <span>Subject</span>
            <input type="text" name="subject" placeholder="QA / Support opportunity" />
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" placeholder="Tell me about the role, issue, or opportunity..." required />
          </label>
          <button type="submit" disabled={isSending}>{isSending ? 'Sending...' : 'Send Message'}</button>
          {status.message ? <p className={`form-status ${status.type}`}>{status.message}</p> : null}
        </form>
      </div>
    </section>
  );
}
