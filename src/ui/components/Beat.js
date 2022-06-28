import React from "react";
import {Button} from "antd";
import {MinusOutlined, PlusOutlined} from "@ant-design/icons";
import onHeld from "../handlers/onHeld";
import useSubscribe from "../hooks/useSubscribe";

const Beat = ({controller}) => {
    const STEP = 1;
    const HELD_DELAY = 100;

    const [beat]  = useSubscribe(controller.beat);

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