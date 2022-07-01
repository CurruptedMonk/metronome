import Sample from "./Sample";
import React from "react";
import SampleSelect from "./select/SampleSelect";

const Sounds = ({controller, sampleOptions}) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "end",
                textAlign: "center",
            }}
        >
            <SampleSelect
                name={"Upbeat sound:"}
                controller={controller.upbeatSample}
                available={sampleOptions.upbeat.available}
            />

            <SampleSelect
                name={"Downbeat sound:"}
                controller={controller.downbeatSample}
                available={sampleOptions.downbeat.available}
            />
        </div>
    );
};

export default Sounds;