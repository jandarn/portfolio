import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import NetworkBackground from "@/components/NetworkBackground";
import Projects from "@/components/Projects";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div
      id="top"
      className="mx-auto max-w-[1400px] px-6 py-12 md:px-12 md:py-16 lg:py-0 lg:px-24"
    >
      <NetworkBackground />
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-canvas"
      >
        Skip to content
      </a>
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Sidebar />
        <main id="content" className="pt-24 lg:w-[62%] lg:py-24">
          <About />
          <Education />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}
