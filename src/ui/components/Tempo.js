import React from "react";
import {
    BpmValue,
    BeatValue,
    DurationValue,
} from "./value/subscribedValues.js";


const Tempo = ({ entities }) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                flexDirection: "column",
                fontSize: "2rem",
            }}
        >
            <div>
                <BpmValue bpmController={entities.bpm} />
                &nbsp;BPM 
            </div>
            <div>
                <BeatValue beatController={entities.beat} />
                /
                <DurationValue durationController={entities.duration} />
            </div>
        </div>
    );
};

export default Tempo;
