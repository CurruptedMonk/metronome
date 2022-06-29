import React from "react";
import {MinusOutlined, PlusOutlined} from "@ant-design/icons";
import SubscribedValue from "./SubscribedValue.js";
import HeldButton from "./HeldButton";

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
        <div style={{display: "flex", justifyContent: "space-around", textAlign: "center"}}>
            <span style={{fontSize: "1.2rem", margin: "0 .5rem"}}>Beats</span>
            <div>
                <HeldButton
                    callback={controller.beat.decreaseBy.bind(null, STEP)}
                    heldDelay={HELD_DELAY}
                    size={"default"}
                    type="primary"
                    shape="circle"
                    icon={<MinusOutlined />}
                />
                {BeatValue}
                <HeldButton
                    callback={controller.beat.increaseBy.bind(null, STEP)}
                    heldDelay={HELD_DELAY}
                    size={"default"}
                    type="primary"
                    shape="circle"
                    icon={<PlusOutlined />}
                />
            </div>
        </div>
    );
};

export default Beat;