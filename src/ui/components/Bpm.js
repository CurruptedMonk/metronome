import React, {useEffect, useState} from "react";
import {Button, Slider} from "antd";
import {PlusOutlined, MinusOutlined} from "@ant-design/icons";
import onHeld from "../handlers/onHeld";

const Bpm = ({controller, bpmOptions}) => {
    const STEP = 1;
    const HELD_DELAY = 35;
    const [bpm, setBpm] = useState(0);

    useEffect(() => {
        const subscriberKey = Symbol();
        controller.bpm.subscribe(subscriberKey,setBpm, true);

        return () => {
            controller.bpm.unsubscribe(subscriberKey);
        }
    }, [controller]);

    return (
        <div >
            <div style={{display:"flex",justifyContent: "center", textAlign: "center", flexDirection: "column", fontSize:"2rem"}}>
                <div>
                    <span>BPM</span>
                </div>
                <div>{bpm}</div>
            </div>
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