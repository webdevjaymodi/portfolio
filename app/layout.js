import './globals.css';

export const metadata = {
  title: 'Jay Modi - Web Developer Portfolio | Gujarat, India',
  description:
    'Portfolio of Jay Modi, a passionate Web Developer and Full Stack Programmer based in Mundra, Gujarat. Specializing in HTML, CSS, JavaScript, ASP.NET, and SQL.',
  keywords: [
    'Jay Modi',
    'Web Developer',
    'Portfolio',
    'Gujarat',
    'India',
    'Full Stack Developer',
    'ASP.NET',
    'JavaScript',
    'Freelancer',
    'Programmer',
  ],
  authors: [{ name: 'Jay Modi' }],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://jaymodi-portfolio.netlify.app/',
  },
  openGraph: {
    type: 'website',
    url: 'https://jaymodi-portfolio.netlify.app/',
    title: 'Jay Modi - Web Developer Portfolio',
    description:
      'Hire Jay Modi - A passionate Web Developer specializing in creating seamless user experiences.',
    images: [
      {
        url: 'https://jaymodi-portfolio.netlify.app/img/Jay\'s%20Portfolio_transparent.png',
        alt: 'Jay Modi Portfolio Logo',
      },
    ],
  },
  icons: {
    icon: "/img/Jay's Portfolio_transparent.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
