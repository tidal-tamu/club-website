import { useMemo } from "react";
import { Meteors } from "../Meteors";

export default function LiveSchedule() {
    const meteors = useMemo(() => <Meteors number={7} />, []);

    return (
        <>
            <div className="w-full h-full bg-spaceBlack bg-[url('stars.svg')]"></div>
            <div className="w-full h-full">{meteors}</div>
        </>
    );
}
