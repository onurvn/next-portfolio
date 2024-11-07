
import React from 'react';


function About() {
    return (
        <>
            <section className='mt-8 pb-2'>
                <h2 className="text-3xl font-bold mb-4">About me</h2>
                <div className="text-white p-6 mb-16 mt-8 rounded-lg bg-[#1a1a1a]">
                    <p>I have been working with Front-end technologies for approximately 2 years. During this time, I have utilized
                        technologies such as HTML, CSS, JavaScript, Sass, Less, Bootstrap, Tailwind, jQuery, Git, GitHub, React,
                        TypeScript, and Next.js. My career goals include developing Full-Stack applications using Node.js and
                        MongoDB, and gaining in-depth knowledge in this area. Additionally, I plan to expand my expertise by working
                        on projects with React Native in the field of mobile application development.
                    </p>
                    <p className='bg-gray-900 p-2 mt-5 rounded-sm shadow-2xl'>
                        <span className='text-red-400 font-bold'>Front-end Technologies and Tools:</span> Html, Css, Javascript, jQuery, Sass, Less, React.js, Typescript, Next.js, Astro,
                        Gatsby, Deno, Three.js, Bootstrap, Tailwind CSS, Shadcn, Remix, JWT, Bulma, Figma, <br />
                        <span className='text-red-400 font-bold'>Back-end Technologies and Tools:</span> Node.js, Express.js, GraphQL, Socket.IO <br />
                        <span className='text-red-400 font-bold'>Database Technologies and Tools:</span> Mongo DB, Supabase, Prisma, Firebase <br />
                        <span className='text-red-400 font-bold'>Deployment Tools:</span> Git, Vercel, Heroku, Netlify <br />
                        <span className='text-red-400 font-bold'>Mobile Technologies and Tools:</span> React Native, Expo
                    </p>
                </div>
            </section>
        </>
    );
}

export default About;
