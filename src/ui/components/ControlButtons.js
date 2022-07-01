import React from "react";
import { StartButton, TapButton, VoiceControlButton } from "./button/buttons";
const ControlButtons = ({controller}) => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <StartButton
                controller={controller.sequencer}
                keyboardEvent={"keydown"}
                keyboardKeys={[" ", "spacebar"]}
            />

            <TapButton
                controller={controller.bpm}
                keyboardEvent={"keydown"}
                keyboardKeys={["q"]}
            />

            <VoiceControlButton
                controller={controller.voiceControl}
                keyboardEvent={"keyup"}
                keyboardKeys={["m"]}
            />
        </div>
    );
};

export default ControlButtons;