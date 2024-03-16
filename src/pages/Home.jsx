import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Menu } from "../components/Menu";
import { BookATablePage } from '../components/BookATable';
import { Footer } from "../components/Footer";

import { useAuth } from "../hooks/AuthProvider";

export function Home() {
  return (
    <>

      <Header />
      <Hero />
      <About />
      <Menu />
      <BookATablePage />
      <Footer />
    </>
  );
}
