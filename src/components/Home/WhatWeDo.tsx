import { Standard } from "./WhatWeDo/parallax-scroll";
import { titles, bodies } from "../../../public/data.ts";

// https://chatgpt.com/share/66f0c3d7-c144-8006-a260-ba7a500ce4f6

export default function WhatWeDo() {
    return (
        <>
            <div className="w-full h-1/3 bg-[url('./waves/wave-1-180.svg')] bg-repeat-x"></div>
            
            <div>
                <Standard
                    titles={titles}
                    bodies={bodies}
                />
                
                <img
                    src="../../../public/icons/shapes/yellow-star.svg"
                    className="absolute right-0 -translate-x-1/2 -translate-y-1/2 w-[100px] lg:w-[200px]"
                />  
            </div>

            {/* <div style={{ backgroundColor: 'pink'}} className="items-center m-auto pb-5">
                <ParallaxScroll
                    titles={titles}
                    bodies={bodies}
                />
            </div> */}
        </>
    );
}
