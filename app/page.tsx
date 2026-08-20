"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/ui/LoadingScreen";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-bg overflow-x-hidden">
      <LoadingScreen />
      <Navbar />
      <main className="flex w-full max-w-[100vw] flex-col items-center gap-12 pt-16 md:gap-24 lg:gap-32">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
