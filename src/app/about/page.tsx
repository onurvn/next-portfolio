"use client"
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const paragraphRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(titleRef.current, { 
      opacity: 0, 
      x: -100,
      rotationX: -45
    });
    
    gsap.set(containerRef.current, { 
      opacity: 0,
      clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)"
    });
    
    gsap.set(paragraphRefs.current, { 
      opacity: 0,
      x: 50,
      stagger: 0.2
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center+=100",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });

    tl.to(titleRef.current, {
      opacity: 1,
      x: 0,
      rotationX: 0,
      duration: 1.2,
      ease: "power4.out"
    });

    tl.to(containerRef.current, {
      opacity: 1,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      duration: 1.4,
      ease: "power3.inOut"
    }, "-=0.8");

    tl.to(paragraphRefs.current, {
      opacity: 1,
      x: 0,
      stagger: 0.3,
      duration: 1,
      ease: "power2.out"
    }, "-=1");

    if (containerRef.current) {
      const container = containerRef.current;
      const paragraphs = paragraphRefs.current;
      
      const handleMouseMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        const mouseX = (e.clientX - rect.left - rect.width / 2) / 20;
        const mouseY = (e.clientY - rect.top - rect.height / 2) / 20;

        paragraphs.forEach((p, index) => {
          if (p) {
            gsap.to(p, {
              x: mouseX * (index + 1) * 0.1,
              y: mouseY * (index + 1) * 0.1,
              duration: 0.6,
              ease: "power2.out"
            });
          }
        });

        const distance = Math.sqrt(mouseX * mouseX + mouseY * mouseY);
        const maxDistance = Math.sqrt(Math.pow(rect.width / 2, 2) + Math.pow(rect.height / 2, 2));
        const intensity = 1 - Math.min(distance / maxDistance, 1);

        gsap.to(container, {
          boxShadow: `
            0 0 ${20 + intensity * 30}px rgba(97, 218, 251, ${0.2 + intensity * 0.3}),
            0 0 ${40 + intensity * 60}px rgba(97, 218, 251, ${0.1 + intensity * 0.2})
          `,
          duration: 0.4
        });
      };

      const handleMouseLeave = () => {
        paragraphs.forEach(p => {
          if (p) {
            gsap.to(p, {
              x: 0,
              y: 0,
              duration: 0.6,
              ease: "power2.out"
            });
          }
        });

        gsap.to(container, {
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          duration: 0.6
        });
      };

      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return (
    <section ref={sectionRef} className="mt-8 pb-2">
      <h2 
        ref={titleRef}
        className="text-3xl font-bold mb-4 relative"
        style={{ transformStyle: "preserve-3d" }}
      >
        About Me
      </h2>
      <div 
        ref={containerRef}
        className="text-white p-8 mb-16 mt-8 rounded-lg bg-[#1a1a1a] shadow-lg transition-all duration-300"
      >
        <div className="mb-6 text-justify space-y-5">
          <p ref={el => { if (el) paragraphRefs.current[0] = el; }}>
            As a front-end developer, I am passionate about creating
            user-centric, performance-driven web applications. My journey
            started with foundational technologies like HTML, CSS, JavaScript,
            and jQuery, and over time, I have gained expertise in modern
            frameworks and libraries such as React.js, Next.js, and
            TypeScript. I also have experience with mobile development using
            React Native.
          </p>
          <p ref={el => { if (el) paragraphRefs.current[1] = el; }}>
            I enhance styling management with CSS preprocessors like SASS and
            LESS, and build fast, customizable designs using Tailwind CSS.
            Additionally, I develop full-stack applications with Node.js and
            Express.js, while managing data efficiently and securely with
            databases like MongoDB, MySQL, Supabase, and Firebase.
          </p>
          <p ref={el => { if (el) paragraphRefs.current[2] = el; }}>
            Staying up-to-date with technological advancements and
            continuously exploring new tools is essential to me. With every
            project, I focus on delivering creative, innovative solutions that
            meet business needs. As an open-minded, team-oriented, and
            solution-driven professional, I am eager to contribute to projects
            that create real value.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
