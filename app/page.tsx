import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Specialization from "@/components/Specialization";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Specialization />
      <Projects />
      <Footer />
    </main>
  );
}
