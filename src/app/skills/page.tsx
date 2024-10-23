import React from 'react'
import data from "@/app/data/skills.json"
import TechCard from '@/app/components/ui/TechCard'

function page() {

    const Programming_Languages = data.Programming_Languages
    const WebDevelopment_Tech = data.WebDevelopment_Tech
    const Database_Technologies = data.Database_Technologies
    const Deployment_Tools = data.Deployment_Tools

    return (
        <div className='mt-8 flex flex-col gap-8 pb-16 p-1'>
            <h1 className="text-2xl font-semibold">Development stack I&apos;m familiar with</h1>
            <h3 className='text-xl'>Programming languages</h3>
            <div
                className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 items-center justify-between gap-4"
            >
                {Programming_Languages.map((cardItem) => (
                    <TechCard key={cardItem.name} cardInfo={cardItem} />
                ))}
            </div>
            <h3 className='text-xl'>Web developement technologies</h3>
            <div
                className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 items-center justify-between gap-4"
            >
                {WebDevelopment_Tech.map((cardItem) => (
                    <TechCard key={cardItem.name} cardInfo={cardItem} />
                ))}
            </div>
            <h3 className='text-xl'>Database technologies</h3>
            <div
                className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 items-center justify-between gap-4"
            >
                {Database_Technologies.map((cardItem) => (
                    <TechCard key={cardItem.name} cardInfo={cardItem} />
                ))}
            </div>
            <h3 className='text-xl'>Deployment tools</h3>
            <div
                className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 items-center justify-between gap-4"
            >
                {Deployment_Tools.map((cardItem) => (
                    <TechCard key={cardItem.name} cardInfo={cardItem} />
                ))}
            </div>
        </div>
    )
}

export default page