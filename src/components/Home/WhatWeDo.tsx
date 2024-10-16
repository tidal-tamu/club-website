import { Standard } from "./WhatWeDo/parallax-scroll";
import { titles, bodies } from "./WhatWeDo/data.ts";

// https://chatgpt.com/share/66f0c3d7-c144-8006-a260-ba7a500ce4f6

export default function WhatWeDo() {
    return (
        <>
            <div className="w-full h-1/3 bg-[url('/waves/wave-1-180.svg')] bg-repeat-x"></div>
            <div>
                <Standard
                    titles={titles}
                    bodies={bodies}
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
