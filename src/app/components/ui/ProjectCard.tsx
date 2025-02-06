"use client"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./Card";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ProjectLink {
  href: string;
  name: string;
  icon: string;
}

interface Project {
  name: string;
  href?: string;
  description: string;
  image?: string;
  tags?: string[];
  links?: ProjectLink[];
}

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  const { name, href, description, image, tags, links } = project;
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const imageWrapper = imageRef.current;
    const content = contentRef.current;
    const tagsWrapper = tagsRef.current;
    const linksWrapper = linksRef.current;

    if (!card || !content) return;

    gsap.fromTo(
      card,
      { 
        opacity: 0,
        y: 50,
        scale: 0.95
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          end: "top center",
          scrub: 1,
          toggleActions: "play none none reverse"
        }
      }
    );

    if (imageWrapper) {
      const image = imageWrapper.querySelector('img');
      if (image) {
        gsap.set(imageWrapper, { overflow: 'hidden' });
        
        const mask = document.createElement('div');
        mask.style.position = 'absolute';
        mask.style.top = '0';
        mask.style.left = '0';
        mask.style.width = '100%';
        mask.style.height = '100%';
        mask.style.background = 'linear-gradient(90deg, transparent, #fff, transparent)';
        imageWrapper.appendChild(mask);

        gsap.fromTo(
          image,
          { 
            scale: 1.2,
            filter: 'grayscale(1) blur(5px)'
          },
          {
            scale: 1,
            filter: 'grayscale(0) blur(0px)',
            duration: 1.5,
            scrollTrigger: {
              trigger: imageWrapper,
              start: "top bottom-=50",
              end: "top center",
              scrub: 1,
              toggleActions: "play none none reverse"
            }
          }
        );

        gsap.fromTo(
          mask,
          { x: '-100%', opacity: 0.8 },
          {
            x: '200%',
            opacity: 0,
            duration: 1.5,
            scrollTrigger: {
              trigger: imageWrapper,
              start: "top bottom-=50",
              end: "top center",
              scrub: 1,
              onEnter: () => mask.style.display = 'block',
              onLeaveBack: () => mask.style.display = 'none'
            }
          }
        );

        const hoverTl = gsap.timeline({ paused: true });
        hoverTl.to(image, {
          scale: 1.05,
          filter: 'brightness(1.1)',
          duration: 0.4,
          ease: "power2.out"
        });

        imageWrapper.addEventListener('mouseenter', () => hoverTl.play());
        imageWrapper.addEventListener('mouseleave', () => hoverTl.reverse());
      }
    }

    gsap.fromTo(
      content.children,
      {
        opacity: 0,
        y: 20
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: content,
          start: "top bottom-=50",
          end: "top center",
          scrub: 1,
          toggleActions: "play none none reverse"
        }
      }
    );

    if (tagsWrapper) {
      gsap.fromTo(
        tagsWrapper.children,
        {
          opacity: 0,
          scale: 0.8,
          x: -15
        },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 1,
          stagger: {
            each: 0.1,
            from: "random"
          },
          scrollTrigger: {
            trigger: tagsWrapper,
            start: "top bottom-=30",
            end: "top center+=100",
            scrub: 1,
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    if (linksWrapper) {
      gsap.fromTo(
        linksWrapper.children,
        {
          opacity: 0,
          y: 15
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          scrollTrigger: {
            trigger: linksWrapper,
            start: "top bottom-=20",
            end: "top center+=150",
            scrub: 1,
            toggleActions: "play none none reverse"
          }
        }
      );
    
      linksWrapper.childNodes.forEach((link) => {
       
        const linkElement = link as HTMLElement;
    
        const linkHoverTl = gsap.timeline({ paused: true });
        linkHoverTl
          .to(linkElement, {
            y: -2,
            duration: 0.2,
            ease: "power2.out"
          })
          .to(linkElement.querySelector('span') as HTMLElement, {  
            scale: 1.02,
            duration: 0.2,
            ease: "power2.out"
          }, 0);
    
        linkElement.addEventListener('mouseenter', () => linkHoverTl.play());
        linkElement.addEventListener('mouseleave', () => linkHoverTl.reverse());
      });
    }
    

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <Card className="flex flex-col" ref={cardRef}>
      <CardHeader>
        {image && (
          <Link href={href || image}>
            <div ref={imageRef} className="overflow-hidden rounded relative">
              <Image
                src={image}
                alt={name}
                width={500}
                height={300}
                className="h-32 w-full object-cover object-top transform-gpu will-change-transform"
              />
            </div>
          </Link>
        )}
      </CardHeader>
      <CardContent className="flex flex-col gap-2 text-center" ref={contentRef}>
        <CardTitle>{name}</CardTitle>
        <Markdown className="max-w-full text-pretty font-sans text-xs">
          {description}
        </Markdown>
      </CardContent>
      <CardFooter className="flex h-full flex-col items-start justify-between gap-4">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1" ref={tagsRef}>
            {tags.sort().map((tag) => (
              <span
                key={tag}
                className="inline-flex bg-green-500 bg-opacity-30 px-3 py-1 text-xs font-medium text-green-500 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-4" ref={linksRef}>
            {links.sort().map((link, idx) => (
              <Link
                href={link?.href}
                key={idx}
                target="_blank"
                className="flex border rounded-md px-2.5 py-0.5 items-center text-gray-300 hover:text-white transition-colors duration-300"
                aria-label={`Link to ${link.name}`}
              >
                {link.name === "Live Demo" ? (
                  <FaExternalLinkAlt className="size-4 mr-2" />
                ) : (
                  <FaGithub className="size-4 mr-2" />
                )}
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}