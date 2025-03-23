"use client";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Solutions from "../components/Solutions";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { SmoothScroll } from "../components/SmoothScroll";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SmoothScroll />
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Solutions />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
