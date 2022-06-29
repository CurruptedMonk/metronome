import React from "react";
import {PlusOutlined, MinusOutlined} from "@ant-design/icons";
import HeldButton from "./HeldButton";
import SubscribedSlider from "./SubscribedSlider";

const Bpm = ({controller, bpmOptions}) => {
    const STEP = 1;
    const HELD_DELAY = 35;

    return (
        <div style={{display: "flex", justifyContent: "center", textAlign: "center"}}>
            <HeldButton
                callback={controller.bpm.decreaseBy.bind(null, STEP)}
                heldDelay={HELD_DELAY}
                size={"large"}
                type="primary"
                shape="circle"
                icon={<MinusOutlined />}
            />
            <SubscribedSlider
                style={{ width: "100%" }}
                controller={controller.bpm}
                min={bpmOptions.range.from}
                max={bpmOptions.range.to}
                step={STEP}
            />
            <HeldButton
                callback={controller.bpm.increaseBy.bind(null, STEP)}
                heldDelay={HELD_DELAY}
                size={"large"}
                type="primary"
                shape="circle"
                icon={<PlusOutlined />}
            />
        </div>
    );
};

export default Bpm;