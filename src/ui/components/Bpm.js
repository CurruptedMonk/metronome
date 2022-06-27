import React, {useState} from "react";
import {Button, Slider} from "antd";
import {PlusOutlined, MinusOutlined} from "@ant-design/icons";
import onHeld from "../handlers/onHeld";
import useSubscribeEffect from "../hooks/useSubscribeEffect";

const Bpm = ({controller, bpmOptions}) => {
    const STEP = 1;
    const HELD_DELAY = 35;
    const [bpm, setBpm] = useState(0);

    useSubscribeEffect(controller.bpm, setBpm, true);

    return (
        <div >
            <div style={{display: "flex", justifyContent: "center", textAlign: "center"}}>
                <Button  size={"large"} type="primary" shape="circle"  icon={<MinusOutlined/>} onMouseDown={(e) =>
                    onHeld(
                        e,
                        controller.bpm.decreaseBy.bind(null, STEP),
                        HELD_DELAY
                    )
                }/>
                <Slider min={bpmOptions.range.from}
                        max={bpmOptions.range.to}
                        step={STEP}
                        value={bpm}
                        tooltipVisible={false}
                        onChange={(bpm) => controller.bpm.set(parseInt(bpm))}
                        style={{width: "100%"}}
                />
                <Button  size={"large"} type="primary" shape="circle"  icon={<PlusOutlined/>} onMouseDown={(e) =>
                    onHeld(
                        e,
                        controller.bpm.increaseBy.bind(null, STEP),
                        HELD_DELAY
                    )
                }/>
            </div>
        </div>
    );
};

export default Bpm;