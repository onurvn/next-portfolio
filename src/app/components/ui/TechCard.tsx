"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TechCard = ({
    cardInfo,
}: {
    cardInfo: {
        name: string;
        description: string;
        imageUrl: string;
        bgColor: string;
    };
}) => {
    const { name, description, imageUrl, bgColor } = cardInfo;
    const opacity = bgColor === "white" ? 0.9 : 0.2;
    const cardRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        if (cardRef.current) {
            gsap.set(cardRef.current, {
                opacity: 0,
                rotationY: -45,
                transformPerspective: 2000,
                transformOrigin: "left center"
            });

            gsap.to(cardRef.current, {
                opacity: 1,
                rotationY: 0,
                duration: 2.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top bottom-=100",
                    toggleActions: "play none none reverse"
                }
            });

            const card = cardRef.current;
            const content = contentRef.current;
            const imageWrapper = imageRef.current;

            const handleMouseMove = (e: MouseEvent) => {
                const rect = card.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const mouseX = e.clientX - centerX;
                const mouseY = e.clientY - centerY;
                
                gsap.to(card, {
                    rotationY: mouseX * 0.05,
                    rotationX: -mouseY * 0.05,
                    duration: 0.5,
                    ease: "power2.out"
                });

                if (content) {
                    gsap.to(content, {
                        x: mouseX * 0.02,
                        y: mouseY * 0.02,
                        duration: 0.5
                    });
                }

                if (imageWrapper) {
                    gsap.to(imageWrapper, {
                        x: mouseX * 0.04,
                        y: mouseY * 0.04,
                        rotation: mouseX * 0.02,
                        duration: 0.5
                    });
                }
            };

            const handleMouseEnter = () => {
                gsap.to(card, {
                    scale: 1.05,
                    boxShadow: `
                        0 0 20px rgba(97, 218, 251, 0.3),
                        0 0 60px rgba(97, 218, 251, 0.1)
                    `,
                    duration: 0.4,
                    ease: "power2.out"
                });

                if (imageWrapper) {
                    gsap.to(imageWrapper, {
                        rotation: 360,
                        duration: 0.8,
                        ease: "power1.inOut"
                    });
                }

                card.addEventListener("mousemove", handleMouseMove);
            };

            const handleMouseLeave = () => {
                gsap.to(card, {
                    scale: 1,
                    rotationY: 0,
                    rotationX: 0,
                    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                    duration: 0.6,
                    ease: "power3.out"
                });

                if (content) {
                    gsap.to(content, {
                        x: 0,
                        y: 0,
                        duration: 0.6
                    });
                }

                if (imageWrapper) {
                    gsap.to(imageWrapper, {
                        x: 0,
                        y: 0,
                        rotation: 0,
                        duration: 0.6
                    });
                }

                card.removeEventListener("mousemove", handleMouseMove);
            };

            card.addEventListener("mouseenter", handleMouseEnter);
            card.addEventListener("mouseleave", handleMouseLeave);

            return () => {
                card.removeEventListener("mouseenter", handleMouseEnter);
                card.removeEventListener("mouseleave", handleMouseLeave);
                card.removeEventListener("mousemove", handleMouseMove);
            };
        }
    }, []);

    return (
        <div 
            ref={cardRef}
            className="flex items-center whitespace-nowrap gap-4 p-2 rounded-xl border border-transparent bg-[#1E1E1E] hover:bg-[#2a2a2a] transition-colors duration-300 shadow-md transform will-change-transform"
            style={{
                transformStyle: "preserve-3d"
            }}
            aria-label={`Technology: ${name}, Description: ${description}`}
        >
            <div 
                ref={imageRef} 
                className="relative flex-shrink-0"
                style={{ transform: "translateZ(20px)" }}
            >
                <div
                    className="absolute inset-0 rounded"
                    style={{
                        backgroundColor: bgColor,
                        opacity: opacity
                    }}
                />
                <div className="p-1 rounded-2xl w-fit relative z-10">
                    <Image
                        src={imageUrl}
                        alt={`${name} logo`}
                        width={40}
                        height={40}
                        className="size-8 rounded"
                    />
                </div>
            </div>
            <div 
                ref={contentRef} 
                className="relative z-10 text-ellipsis overflow-hidden ..."
                style={{ transform: "translateZ(10px)" }}
            >
                <h5 className="text-sm font-semibold text-white text-ellipsis overflow-hidden ...">{name}</h5>
                <p className="text-xs text-gray-400 text-ellipsis overflow-hidden ...">{description}</p>
            </div>
        </div>
    );
};

export default TechCard;