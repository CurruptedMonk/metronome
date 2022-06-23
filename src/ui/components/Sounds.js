import Sample from "./Sample";
import React from "react";

const Sounds = ({controller, sampleOptions}) => {
    return(
        <div style={{display: "flex", justifyContent: "end", textAlign: "center"}}>
            <Sample
                name={"Upbeat sound:"}
                sampleController={controller.upbeatSample}
                sampleOptions={sampleOptions.upbeat}
            />
            <Sample
                name={"Downbeat sound:"}
                sampleController={controller.downbeatSample}
                sampleOptions={sampleOptions.downbeat}
            />
        </div>
    );
};

export default Sounds;