import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'CarpTravel',
  description:
    'We offer you unforgettable trips to the most beautiful parts of the Carpathians. Enjoy stunning views, exciting expeditions, and the best service!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
