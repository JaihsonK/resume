import { useEffect, useState } from "react";
import { MoonIcon } from "@heroicons/react/24/outline";
import { SunIcon } from "@heroicons/react/24/outline";

function DarkLightButton()
{
    const [isDark, setIsDark] = useState(false);
    
    useEffect(()=>
    {
        const stylesheet = document.getElementById("light-dark") as HTMLLinkElement;
        stylesheet.href = isDark ? "src/css/light.css" : "src/css/dark.css";
    }, [isDark]);


    return(
        <>
            <button onClick={() => setIsDark(!isDark)}>{!isDark ? <SunIcon width={25} height={25} /> : <MoonIcon width={30} height={30}/>}</button>
        </>
    );
}

export default DarkLightButton;