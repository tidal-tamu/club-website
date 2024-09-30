import PrizeList from "./PrizeList";

const firstPlace = {
    place: "1st Place",
    desc: "$750 + Product Prizes!",
    icon: "./icons/shapes/yellow-star.svg",
};

const secondPlace = {
    place: "2nd Place",
    desc: "$450 + Product Prizes!",
    icon: "./icons/shapes/yellow-star.svg",
};

const thirdPlace = {
    place: "3rd Place",
    desc: "$300 + Product Prizes!",
    icon: "./icons/shapes/yellow-star.svg",
};

export default function Prizes() {
    return (
        <div className="pt-44 lg:pt-64 bg-[url('./waves/wave-1.svg')] bg-repeat-x bg-right-top transition-[padding]">
            <div className="bg-lightBlue w-full flex flex-col items-center">
                <h1 className="text-navy text-5xl lg:text-6xl font-bold text-center text-nowrap mb-16">
                    Prizes
                </h1>
                <div className="flex w-full flex-wrap justify-center gap-4 my-auto px-4">
                    <PrizeList details={firstPlace} />
                    <PrizeList details={secondPlace} />
                    <PrizeList details={thirdPlace} />
                </div>
            </div>
            <div className="w-full h-[260px] bg-[url('./waves/wave-1-180.svg')] bg-repeat-x"></div>
        </div>
    );
}
