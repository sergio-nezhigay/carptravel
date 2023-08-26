// import { Inter } from 'next/font/google';
import Head from 'next/head';

// const inter = Inter({ subsets: ['latin'] });
import './globals.css';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>CarpTravel</title>
        <meta
          name="description"
          content="Uncover Carpathian’s Secrets"
          key="desc"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <body>{children}</body>
      {/* <body className={inter.className}>{children}</body> */}
    </html>
  );
}

// export const metadata = {
//   title: 'CarpTravel',
//   description:
//     'We offer you unforgettable trips to the most beautiful parts of the Carpathians. Enjoy stunning views, exciting expeditions, and the best service!',
//   openGraph: {
//     title: 'Best travel site',
//     description:
//       'We offer you unforgettable trips to the most beautiful parts of the Carpathians. Enjoy stunning views, exciting expeditions, and the best service!',
//     url: process.env.BASE_URL,
//     siteName: 'CarpTravel',
//     images: [
//       {
//         url: '/images/hero-bg-768.jpg',
//         width: 768,
//         height: 530,
//       },
//     ],
//     locale: 'en_US',
//     type: 'website',
//   },
//   robots: {
//     index: false,
//     follow: true,
//     nocache: true,
//     googleBot: {
//       index: true,
//       follow: false,
//       noimageindex: true,
//       'max-video-preview': -1,
//       'max-image-preview': 'large',
//       'max-snippet': -1,
//     },
//   },
// };
