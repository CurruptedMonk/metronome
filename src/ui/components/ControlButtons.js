import React from "react";
import StartButton from "./StartButton";
import VoiceControlButton from "./VoiceControlButton";
import TapButton from "./TapButton";

const ControlButtons = ({controller}) => {
    return (
        <div style={{display:"flex", alignItems: "center", justifyContent: "center"}}>
            <StartButton controller={controller.sequencer} keyBoardKeys={[" ", "spacebar"]}/>
            <VoiceControlButton controller={controller}/>
            <TapButton controller={controller}/>
        </div>
    );
};

export default ControlButtons;