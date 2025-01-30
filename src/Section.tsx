import { ReactNode } from "react"

interface SectionProp
{
    header: string,
    content: ReactNode,
    side: boolean
};

function Section({header, content, side}: SectionProp)
{
    return (
        <div className={side ? "side-section" : "main-section"}>
            <h2>{header}</h2>
            {content}
        </div>
    );
}

export default Section;