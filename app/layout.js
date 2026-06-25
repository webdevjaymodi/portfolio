import './globals.css';

export const metadata = {
  title: 'Jay Modi - QA Tester & Software Support Engineer | Ahmedabad, Gujarat',
  description:
    'Portfolio of Jay Modi, a QA Tester and Software Support Engineer based in Ahmedabad, Gujarat. Focused on Manual Testing, Software Testing, Technical Support, Requirement Understanding, SQL, Web Testing, Database Testing, API Testing, and basic Web Development.',
  keywords: [
    'Jay Modi',
    'QA Tester',
    'Manual Testing',
    'Software Testing',
    'Software Support Engineer',
    'Technical Support',
    'Requirement Understanding',
    'SQL',
    'Web Testing',
    'Database Testing',
    'API Testing',
    'Portfolio',
    'Ahmedabad',
    'Gujarat',
    'India',
  ],
  authors: [{ name: 'Jay Modi' }],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://jaymodi-portfolio.netlify.app/',
  },
  openGraph: {
    type: 'website',
    url: 'https://jaymodi-portfolio.netlify.app/',
    title: 'Jay Modi - QA Tester & Software Support Engineer',
    description:
      'Hire Jay Modi - QA-focused Software Support Engineer with Manual Testing, Software Testing, Technical Support, SQL, Web Testing, Database Testing, and API Testing knowledge.',
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
      <body>
        {children}
      </body>
    </html>
  );
}
