// components/GradientAnimations.tsx
"use client";

import { useEffect, useRef, useState } from "react";

export default function GradientBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const animationFrameId = useRef<number>(0);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Use requestAnimationFrame for smooth animation
      cancelAnimationFrame(animationFrameId.current);
      
      animationFrameId.current = requestAnimationFrame(() => {
        const x = e.clientX;
        const y = e.clientY;
        
        // Smooth transition to new position
        setMousePosition({ x, y });
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);
  
  return (
    <>
      {/* Base deep purple to black gradient background */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-purple-900 via-purple-900 to-black"></div>
      
      {/* Mouse-following gradient */}
      <div 
        className="fixed pointer-events-none blur-3xl opacity-60 transition-all duration-300 ease-out"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(76, 29, 149, 0) 70%)",
          width: "80vw",
          height: "80vw",
          borderRadius: "50%",
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%)",
        }}
      />
      
      {/* Animated gradient circles - reduced number for cleaner look */}
      <div 
        className="fixed top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full opacity-30 mix-blend-screen blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, rgba(76, 29, 149, 0) 70%)",
          animation: "moveGradient1 25s infinite alternate ease-in-out",
        }}
      />
      
      <div 
        className="fixed bottom-1/4 right-1/4 w-[45vw] h-[45vw] rounded-full opacity-25 mix-blend-screen blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(216, 180, 254, 0.5) 0%, rgba(126, 34, 206, 0) 70%)",
          animation: "moveGradient3 28s infinite alternate ease-in-out",
        }}
      />
      
      {/* Subtle pink accent gradient */}
      <div 
        className="fixed top-1/3 right-1/5 w-[35vw] h-[35vw] rounded-full opacity-20 mix-blend-screen blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(244, 114, 182, 0.3) 0%, rgba(168, 85, 247, 0) 70%)",
          animation: "moveGradient4 32s infinite alternate-reverse ease-in-out",
        }}
      />
    </>
  );
}