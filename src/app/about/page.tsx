import React from 'react';

function About() {
    return (
        <>
            <section className="mt-8 pb-2">
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <div className="text-white p-8 mb-16 mt-8 rounded-lg bg-[#1a1a1a] shadow-lg">
                    <p className="mb-6">
                        I have been working with front-end technologies for approximately 2 years. During this time, I have utilized
                        technologies such as HTML, CSS, JavaScript, Sass, Less, Bootstrap, Tailwind, jQuery, Git, GitHub, React,
                        TypeScript, and Next.js. My career goals include developing Full-Stack applications using Node.js and
                        MongoDB, and gaining in-depth knowledge in this area. Additionally, I plan to expand my expertise by working
                        on projects with React Native in the field of mobile application development.
                    </p>
                    <div className="bg-gray-900 p-6 rounded-lg shadow-md">
                        <ul className="space-y-4">
                            <li>
                                <span className="text-red-400 font-bold">Front-End Technologies & Tools:</span>
                                <span className="ml-2 text-gray-300">
                                    HTML, CSS, JavaScript, jQuery, Sass, Less, React.js, Next.js, Astro, 
                                    Gatsby, Bootstrap, Tailwind CSS, Shadcn, Remix, Bulma
                                </span>
                            </li>
                            <li>
                                <span className="text-red-400 font-bold">Back-End Technologies & Tools:</span>
                                <span className="ml-2 text-gray-300">
                                    Node.js, Express.js, GraphQL, Socket.IO, Deno
                                </span>
                            </li>
                            <li>
                                <span className="text-red-400 font-bold">Database Technologies & Tools:</span>
                                <span className="ml-2 text-gray-300">
                                    MongoDB, Supabase, Prisma, Firebase
                                </span>
                            </li>
                            <li>
                                <span className="text-red-400 font-bold">Version Control & Deployment Tools:</span>
                                <span className="ml-2 text-gray-300">
                                    Git, GitHub, Vercel, Heroku, Netlify
                                </span>
                            </li>
                            <li>
                                <span className="text-red-400 font-bold">Mobile Technologies & Tools:</span>
                                <span className="ml-2 text-gray-300">
                                    React Native, Expo
                                </span>
                            </li>
                            <li>
                                <span className="text-red-400 font-bold">UI/UX Design Tools:</span>
                                <span className="ml-2 text-gray-300">
                                    Figma
                                </span>
                            </li>
                            <li>
                                <span className="text-red-400 font-bold">Security Tools:</span>
                                <span className="ml-2 text-gray-300">
                                    JWT
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
