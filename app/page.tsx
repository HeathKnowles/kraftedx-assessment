// app/page.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GradientAnimations from "@/components/GradientBackground";
import Login from "./login/page";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="relative min-h-screen overflow-hidden text-white font-sans">
      <GradientAnimations />

      <div className="relative z-10 flex flex-col min-h-screen justify-between max-w-7xl mx-auto px-6">
        {/* Header */}
        <header className="flex justify-between items-center pt-8">
          <Image
            src="/kx-logo.png"
            alt="KraftedX Logo"
            width={180}
            height={45}
            className="object-contain"
            priority
          />
          <div className="flex items-center gap-6">
            <button className="text-sm tracking-wide uppercase hover:underline hover:text-white/80 transition-all">
              Careers
            </button>
            <button className="bg-orange-500 hover:bg-orange text-sm font-medium tracking-wide text-white px-6 py-2 rounded-full uppercase transition-colors">
              Contact Us
            </button>
          </div>
        </header>

        {/* Center Content */}
        <div className="flex-grow flex flex-col items-center justify-center text-center px-4">
          <p className="text-white/70 text-base sm:text-lg mb-4 max-w-2xl">
            in a world where work is often related with chaos and stress
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-light leading-tight max-w-4xl mb-6">
            creative teams deserve delight!
          </h1>

          {/* New Subtitle */}
          <p className="text-white/80 text-lg sm:text-xl mb-4">
            Let's begin our journey
          </p>

          <Link href="/login">
          <button
            title="Login"
            className="bg-orange-500 hover:bg-orange-600 text-sm font-medium tracking-wide text-white px-6 py-2 rounded-full uppercase transition-colors"
          >
            Join Us Now
          </button>
          </Link>
        </div>

        {/* Footer */}
        <footer className="flex justify-between items-center py-6 text-sm text-white/70">
          <div className="flex gap-6">
            <span className="cursor-pointer hover:underline hover:text-white/90 transition-colors">
              hello@kraftedx.com
            </span>
            <span className="cursor-pointer hover:underline hover:text-white/90 transition-colors">
              Instagram
            </span>
            <span className="cursor-pointer hover:underline hover:text-white/90 transition-colors">
              LinkedIn
            </span>
          </div>
          <div className="text-white/50">
            All Rights Reserved © 2025 KraftedX
          </div>
        </footer>
      </div>
    </main>
  );
}
