import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./Card";

import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

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

    return (
        <Card className="flex flex-col">
            <CardHeader>
                {image && (
                    <Link href={href || image}>
                        <Image
                            src={image}
                            alt={name}
                            width={500}
                            height={300}
                            className="h-40 w-full rounded object-cover object-top hover:scale-105 transition-transform duration-300"
                        />
                    </Link>
                )}
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
                <CardTitle>{name}</CardTitle>
                <Markdown className="max-w-full text-pretty font-sans text-xs">
                    {description}
                </Markdown>
            </CardContent>
            <CardFooter className="flex h-full flex-col items-start justify-between gap-4">
                {tags && tags.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1">
                        {tags.sort().map((tag) => (
                            <span key={tag} className={`inline-flex bg-green-500 bg-opacity-30 px-3 py-1 text-xs font-medium text-green-500 rounded-full`}>
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
                {links && links.length > 0 && (
                    <div className="flex flex-row flex-wrap items-start gap-4">
                        {links.sort().map((link, idx) => (
                            <Link href={link?.href} key={idx} target="_blank" className="flex border rounded-md px-2.5 py-0.5 items-center text-gray-300 hover:text-white transition-colors duration-300" aria-label={`Link to ${link.name}`}>
                                {link.name === "Live Demo" ? <FaExternalLinkAlt className="size-4 mr-2" /> : <FaGithub className="size-4 mr-2" />}
                                <span>{link.name}</span>
                            </Link>

                        ))}
                    </div>
                )}
            </CardFooter>
        </Card>
    );
}
