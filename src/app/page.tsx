import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <FAQ />
      <ContactForm />
    </main>
  );
}
