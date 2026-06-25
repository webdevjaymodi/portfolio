// Legacy entry point kept for older deployments that may still reference this file.
// The active site loads app.js, which contains the current navigation, theme,
// animation, and contact-form logic.
if (typeof window.sendEmail !== 'function') {
  window.sendEmail = function sendEmail(event) {
    event.preventDefault();

    const name = document.getElementById('name')?.value.trim();
    const email = document.getElementById('em')?.value.trim();
    const subject = document.getElementById('su')?.value.trim() || 'Portfolio inquiry';
    const message = document.getElementById('msg')?.value.trim();

    if (!name || !email || !message) {
      alert('Please fill in your name, email, and message before sending.');
      return;
    }

    const body = [`Name: ${name}`, `Email: ${email}`, '', message].join('\n');
    window.location.href = `mailto:jaymodi993@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    event.target.reset();
  };
}
