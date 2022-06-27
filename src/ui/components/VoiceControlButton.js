import React, {useRef, useState} from "react";
import {Button} from "antd";
import {PoweroffOutlined} from "@ant-design/icons";
import useSubscribeEffect from "../hooks/useSubscribeEffect";
import useWindowListener from "../hooks/useWindowListener";

const VoiceControlButton = ({controller}) => {
    const [isOn, setIsOn] = useState(false);
    const currentButtonRef = useRef(null);

    const keyboardHandler = (e) => {
        if (e.key.toLowerCase() === "m") {
            currentButtonRef.current.click();
        }
    };

    useSubscribeEffect(controller.voiceControl, setIsOn, false);
    useWindowListener("keyup", keyboardHandler);

    return (
        <Button
            ref={currentButtonRef}
            onClick={controller.voiceControl.toggle}
            type={isOn ?  "primary" : "default"}
            size={"large"}
            icon={<PoweroffOutlined />}
        >
            {isOn ? "Microphone Off" : "Microphone On"}
        </Button>
    );
};

export default VoiceControlButton;