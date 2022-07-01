import React from "react";
import SubscribedSlider from "./SubscribedSlider";
import { DecreaseButton, IncreaseButton } from "./button/buttons.js";

const Bpm = ({controller, bpmOptions}) => {
    const STEP = 1;
    const HELD_DELAY = 35;

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
            }}
        >
            <DecreaseButton
                controller={controller.bpm}
                step={STEP}
                heldDelay={HELD_DELAY}
                size={"large"}
                type="primary"
                shape="circle"
            />
            <SubscribedSlider
                style={{ width: "100%" }}
                controller={controller.bpm}
                min={bpmOptions.range.from}
                max={bpmOptions.range.to}
                step={STEP}
            />
            <IncreaseButton
                controller={controller.bpm}
                step={STEP}
                heldDelay={HELD_DELAY}
                size={"large"}
                type="primary"
                shape="circle"
            />
        </div>
    );
};

export default Bpm;