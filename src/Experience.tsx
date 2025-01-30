interface ExperienceProps
{
    title: string,
    company: string,
    city: string,
    time: string,
    desc: string
};

function Experience({title, company, city, time, desc}: ExperienceProps)
{
    return (
        <div className="experience-item">
            <h3>{title}</h3>
            <p><strong>{company}</strong>{city} | {time}</p>
            <p>{desc}</p>
        </div>
    );
}

export default Experience;