import { Outfit } from 'next/font/google';
import MouseTracker from '../components/MouseTracker';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'], display: 'swap', variable: '--font-outfit' });

export const metadata = {
  metadataBase: new URL('https://jaymodi-portfolio.vercel.app'),
  title: {
    default: 'Jay Modi — QA Tester & Software Support Engineer | Ahmedabad, Gujarat',
    template: '%s | Jay Modi Portfolio',
  },
  description:
    'Portfolio of Jay Modi, a QA Tester and Software Support Engineer based in Ahmedabad, Gujarat. Specializing in Manual Testing, Software Testing, Technical Support, SQL, Web Testing, Database Testing, and API Testing.',
  keywords: [
    'Jay Modi',
    'QA Tester',
    'Manual Testing',
    'Software Testing',
    'Software Support Engineer',
    'Technical Support',
    'SQL',
    'Web Testing',
    'Database Testing',
    'API Testing',
    'Portfolio',
    'Ahmedabad',
    'Gujarat',
    'India',
    'Quality Assurance',
    'Bug Tracking',
    'Regression Testing',
    'Postman',
    'React.js Developer',
  ],
  authors: [{ name: 'Jay Modi', url: 'https://jaymodi-portfolio.vercel.app' }],
  creator: 'Jay Modi',
  publisher: 'Jay Modi',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://jaymodi-portfolio.vercel.app/',
  },
  openGraph: {
    type: 'website',
    url: 'https://jaymodi-portfolio.vercel.app/',
    siteName: 'Jay Modi — QA Tester & Software Support Engineer',
    locale: 'en_IN',
    title: 'Jay Modi — QA Tester & Software Support Engineer',
    description:
      'Hire Jay Modi — QA-focused Software Support Engineer with expertise in Manual Testing, Quality Assurance, SQL, Web Testing, Database Testing, and API Testing.',
    images: [
      {
        url: '/img/my.jpg',
        width: 1200,
        height: 630,
        alt: 'Jay Modi — QA Tester & Software Support Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jay Modi — QA Tester & Software Support Engineer',
    description:
      'Portfolio of Jay Modi, a QA Tester and Software Support Engineer based in Ahmedabad, Gujarat.',
    creator: '@jaymodi993',
    images: ['/img/my.jpg'],
  },
  icons: {
    icon: [
      { url: '/img/favicon.jpg', sizes: 'any' },
    ],
    apple: '/img/favicon.jpg',
  },
  verification: {
    google: '',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jay Modi',
  jobTitle: 'QA Tester & Software Support Engineer',
  url: 'https://jaymodi-portfolio.vercel.app',
  image: 'https://jaymodi-portfolio.vercel.app/img/my.jpg',
  description: 'QA Tester and Software Support Engineer specializing in Manual Testing, SQL, Web Testing, and API Testing.',
  sameAs: [
    'https://www.linkedin.com/in/jay-modi-60965519a/',
    'https://github.com/jaymodi993',
    'https://twitter.com/jaymodi993',
    'https://www.instagram.com/jaymodi993/',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    addressCountry: 'IN',
  },
  knowsAbout: [
    'Manual Testing', 'Quality Assurance', 'Software Testing', 'SQL',
    'Web Testing', 'Database Testing', 'API Testing', 'React.js',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.variable}>
      <head>
        <link rel="icon" href="/img/favicon.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/img/favicon.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <MouseTracker />
        {children}
      </body>
    </html>
  );
}
