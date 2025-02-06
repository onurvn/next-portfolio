"use client"
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import gsap from "gsap";
import Socials from "@/app/components/Socials";
import ResumeButton from "@/app/components/ui/ResumeButton";
import Skills from "@/app/components/Skills";

export default function Home() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const techSectionRef = useRef(null); 

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power3.out" }
    );
    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 1, ease: "power3.out" }
    );
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, delay: 1.5, ease: "power3.out" }
    );

    gsap.fromTo(
      techSectionRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, delay: 2, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="flex flex-col gap-16 pb-16 text-white">
      <section
        ref={sectionRef}
        className="flex flex-col mt-8 gap-8 md:flex-row-reverse md:items-center md:justify-between"
      >
        <Image
          ref={imageRef}
          className="rounded-lg shadow-lg"
          src="/img/pfp.jpg"
          alt="pfp of Onur"
          width={175}
          height={175}
          priority
        />
        <div className="flex flex-col">
          <h1
            ref={titleRef}
            className="title text-4xl mb-2 font-extrabold text-gradient"
          >
            Onur Avan
          </h1>
          <h2
            ref={subtitleRef}
            className="text-xl text-gray-300 mb-4"
          >
            Front-end Developer
          </h2>
          <h3 className="text-lg text-gray-400 mb-4">Konya, Turkey</h3>
          <section className="mt-8 flex items-center gap-6">
            <ResumeButton />
            <Socials />
          </section>
        </div>
      </section>
      
      <section
        ref={techSectionRef}
        className="mb-4"
      >
        <div className="flex justify-between items-center border-b-2 border-gray-700 pb-2 mb-8">
          <h2 className="text-xl font-bold text-gray-100">
            Current technologies
          </h2>
          <Link
            href="/skills"
            className="link flex items-center gap-2 font-light hover:scale-105"
          >
            <ArrowRightIcon className="size-5" />
            <span>Full skill overview</span>
          </Link>
        </div>
        <Skills />
      </section>
    </div>
  );
}
