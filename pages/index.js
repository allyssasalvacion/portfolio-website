import Container from "../components/Container";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <Container>
      <Hero />
      <About />
      <Experience />
      <Projects />
    </Container>
  );
}
