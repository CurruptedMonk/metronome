import React, {useEffect, useState} from "react";
import {Button} from "antd";
import {MinusOutlined, PlusOutlined} from "@ant-design/icons";
import onHeld from "../handlers/onHeld";

const Beat = ({controller}) => {
    const STEP = 1;
    const HELD_DELAY = 100;
    const [beat, setBeat] = useState(0);

    useEffect(() => {
        const subscriberKey = Symbol();
        controller.beat.subscribe(subscriberKey, setBeat, true);

        return () => {
            controller.beat.unsubscribe(subscriberKey);
        };
    }, [controller]);

    return (
        <div style={{display: "flex", justifyContent: "space-around", textAlign: "center"}}>
            <span style={{fontSize: "1.2rem", margin: "0 .5rem"}}>Beats</span>
            <div>
                <Button  size={"default"} type="primary" shape="circle"  icon={<MinusOutlined/>} onMouseDown={(e) =>
                    onHeld(
                        e,
                        controller.beat.decreaseBy.bind(null, STEP),
                        HELD_DELAY
                    )
                }/>
                <span style={{fontSize: "1.2rem", margin: "0 .5rem"}}>{beat}</span>
                <Button  size={"default"} type="primary" shape="circle"  icon={<PlusOutlined/>} onMouseDown={(e) =>
                    onHeld(
                        e,
                        controller.beat.increaseBy.bind(null, STEP),
                        HELD_DELAY
                    )
                }/>
            </div>
        </div>
    );
};

export default Beat;