import '@styles/globals.css';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

const BASE_URL = 'https://carptravelling.vercel.app/';
const TITLE = 'CarpTravel';
const DESCRIPTION =
  'We offer you unforgettable trips to the most beautiful parts of the Carpathians. Enjoy stunning views, exciting expeditions, and the best service!';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: '/',
    siteName: TITLE,
    locale: 'en',
    type: 'website',
  },
  metadataBase: new URL(BASE_URL),
  manifest: '/meta/manifest.webmanifest',
  robots: 'all',
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: BASE_URL,
  },
};
