import Link from 'next/link';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

export default function Socials() {
    return (
        <section className="flex gap-5 md:gap-6">
            <Link
                href="https://linkedin.com/in/onur-avan"
                target="_blank"
                className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
                rel="noopener noreferrer"
            >
                <span className="sr-only">Linkedin</span>
                <FaLinkedin aria-hidden="true" className="w-5 h-5" />
            </Link>
            <Link
                href="https://github.com/onurvn"
                target="_blank"
                className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
                rel="noopener noreferrer"
            >
                <span className="sr-only">Github</span>
                <FaGithub aria-hidden="true" className="w-5 h-5" />
            </Link>
            <Link
                href="mailto:avanonur@hotmail.com"
                target="_blank"
                className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
                rel="noopener noreferrer"
            >
                <span className="sr-only">Email</span>
                <FaEnvelope aria-hidden="true" className="w-5 h-5" />
            </Link>
        </section>
    );
}
