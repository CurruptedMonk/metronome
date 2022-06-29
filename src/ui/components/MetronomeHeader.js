import React from "react";
import SubscribedValue from "./SubscribedValue.js";

const MetronomeHeader = ({ entities }) => {
    const BpmValue = <SubscribedValue controller={entities.bpm} />;
    const BeatValue = <SubscribedValue controller={entities.beat} />;
    const DurationValue = <SubscribedValue controller={entities.duration} />;

    return (
        <div style={{display:"flex",justifyContent: "center", textAlign: "center", flexDirection: "column", fontSize:"2rem"}}>
            <div>{BpmValue}&nbsp;BPM</div>
            <div>
                {BeatValue}/{DurationValue}
            </div>
        </div>
    );
};

export default MetronomeHeader;
