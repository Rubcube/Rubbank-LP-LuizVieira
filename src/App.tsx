import React, { useState } from 'react';
import { Menu } from './components/Menu';
import { HeroSection } from './components/HeroSection';
import { Vantagens } from './components/Vantagens';
import { Avaliacoes } from './components/Avaliacoes';
import { Faq } from './components/Faq';
import { Recall } from './components/Recall';
import { Footer } from './components/Footer';

function App() {
  const [menu, setMenu] = useState("initial");
  const [page, setPage] = useState("inicio")

  const handleScroll = () => {

    if (document.documentElement.scrollTop > 10) {
      setMenu("scrolling");
    } else {
      setMenu("initial");
    }

    if (document.documentElement.scrollTop >= 0 && document.documentElement.scrollTop < 700) {
      setPage("inicio");
    } else if (document.documentElement.scrollTop >= 700 && document.documentElement.scrollTop < 2600) {
      setPage("vantagens");
    } else if (document.documentElement.scrollTop >= 2600){
      setPage("faq");
    }
  }

  window.onscroll = () => handleScroll();

  return (
    <>
      <Menu menu={menu} pageActive={page} />
      <HeroSection />
      <Vantagens />
      <Avaliacoes />
      <Faq />
      <Recall />
      <Footer />
    </>
  );
}

export default App;
