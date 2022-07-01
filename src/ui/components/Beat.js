import React from "react";
import SubscribedValue from "./SubscribedValue.js";
import { DecreaseButton, IncreaseButton } from "./button/buttons.js";

const Beat = ({controller}) => {
    const STEP = 1;
    const HELD_DELAY = 100;

    const BeatValue = (
        <SubscribedValue
            controller={controller.beat}
            style={{ fontSize: "1.2rem", margin: "0 .5rem" }}
        />
    );
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-around",
                textAlign: "center",
            }}
        >
            <span style={{ fontSize: "1.2rem", margin: "0 .5rem" }}>Beats</span>
            <div>
                <DecreaseButton
                    controller={controller.beat}
                    step={STEP}
                    heldDelay={HELD_DELAY}
                    size={"default"}
                    type="primary"
                    shape="circle"
                />
                {BeatValue}
                <IncreaseButton
                    controller={controller.beat}
                    step={STEP}
                    heldDelay={HELD_DELAY}
                    size={"default"}
                    type="primary"
                    shape="circle"
                />
            </div>
        </div>
    );
};

export default Beat;