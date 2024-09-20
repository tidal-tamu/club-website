import { ParallaxScroll } from "./WhatWeDo/parallax-scroll";
import { titles, bodies } from "../../../public/data.ts";

export default function WhatWeDo() {
    return (
        <>
            <div className="w-full h-1/3 bg-[url('./waves/wave-1-180.svg')] bg-repeat-x"></div>
            <h1 className="text-navy font-bold text-5xl lg:text-6xl text-center py-5">
                WHAT WE DO
            </h1>
            
            <img
                src="../../../public/icons/shapes/red-star.svg"
                className="absolute translate-x-1/2 translate-y w-[100px] lg:w-[200px] z-10"
            />

            <div className="items-center m-auto pt-5">
                <ParallaxScroll
                    titles={titles}
                    bodies={bodies}
                />
            </div>

            <img
                src="../../../public/icons/shapes/yellow-star.svg"
                className="absolute right-0 -translate-x-1/2 -translate-y-1/2 w-[100px] lg:w-[200px]"
            />
        </>
    );
}
