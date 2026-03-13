import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import About from "@/components/page-sections/About";
import Blog from "@/components/page-sections/Blog";
import Contact from "@/components/page-sections/Contact";
import Education from "@/components/page-sections/Education";
import Experience from "@/components/page-sections/Experience";
import Hero from "@/components/page-sections/Hero";
import Projects from "@/components/page-sections/Project";
import Skills from "@/components/page-sections/Skill";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Blog />
      <Contact />
    </>
  );
}
