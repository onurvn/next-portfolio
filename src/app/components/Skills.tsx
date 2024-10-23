import TechCard from "@/app/components/ui/TechCard";
import data from "@/app/data/skills.json";

const Skills = () => {
    const techCardsItems = data.currentTech;

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-between gap-4">
            {techCardsItems.length > 0 ? (
                techCardsItems.map((cardItem) => (
                    <TechCard key={cardItem.name} cardInfo={cardItem} />
                ))
            ) : (
                <p className="text-gray-300">No skills available.</p>
            )}
        </div>
    );
};

export default Skills;
