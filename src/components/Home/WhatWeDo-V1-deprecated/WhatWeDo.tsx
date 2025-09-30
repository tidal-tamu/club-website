import { Standard } from "./WhatWeDoBubbles";
import { titles, bodies } from "./data";

export default function WhatWeDo_Dep() {
    return (
        <>
            <div className="w-full h-1/3 pt-64 bg-[url('/waves/wave-1-180.svg')] bg-repeat-x"></div>
            <div>
                <Standard titles={titles} bodies={bodies} />
            </div>
        </>
    );
}
