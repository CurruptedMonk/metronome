import React from "react";
import { StartButton, TapButton, VoiceControlButton } from "./button/buttons";

const ControlButtons = ({ controller }) => {
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
                type={"primary"}
                size={"large"}
            />
            <TapButton
                controller={controller.bpm}
                type={"primary"}
                size={"large"}
            />
            <VoiceControlButton
                controller={controller.voiceControl}
                type={"primary"}
                size={"large"}
            />
        </div>
    );
};

export default ControlButtons;
