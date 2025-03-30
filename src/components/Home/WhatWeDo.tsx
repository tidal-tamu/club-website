import { Standard } from "./WhatWeDo/WhatWeDoBubbles.tsx";
import { titles, bodies } from "./WhatWeDo/data.ts";

export default function WhatWeDo() {
    return (
        <>
            <div className="w-full h-1/3 pt-64 bg-[url('/waves/wave-1-180.svg')] bg-repeat-x"></div>
            <div>
                <Standard
                    titles={titles}
                    bodies={bodies}
                />
            </div>
        </>
    );
}
