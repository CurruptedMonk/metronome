import React from "react";
import {Slider} from "antd";
import {PlusOutlined, MinusOutlined} from "@ant-design/icons";
import useSubscribe from "../hooks/useSubscribe";
import HeldButton from "./HeldButton";

const Bpm = ({controller, bpmOptions}) => {
    const STEP = 1;
    const HELD_DELAY = 35;

    const [bpm] = useSubscribe(controller.bpm);

    return (
        <div>
            <div style={{display: "flex", justifyContent: "center", textAlign: "center"}}>
                <HeldButton
                    callback={controller.bpm.decreaseBy.bind(null, STEP)}
                    heldDelay={HELD_DELAY}
                    size={"large"}
                    type="primary"
                    shape="circle"
                    icon={<MinusOutlined />}
                />
                <Slider
                    min={bpmOptions.range.from}
                    max={bpmOptions.range.to}
                    step={STEP}
                    value={bpm}
                    tooltipVisible={false}
                    onChange={(bpm) => controller.bpm.set(parseInt(bpm))}
                    style={{ width: "100%" }}
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
        </div>
    );
};

export default Bpm;