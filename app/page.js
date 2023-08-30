'use client';

import About from '@components/About/About';
import Contacts from '@components/Contacts/Contacts';
import Gallery from '@components/Gallery/Gallery';
import Hero from '@components/Hero/Hero';
import Navbar from '@components/Navbar/Navbar';
import Services from '@components/Services/Services';

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Contacts />
      </main>
    </>
  );
}
