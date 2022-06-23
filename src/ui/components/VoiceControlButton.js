import React, {useEffect, useRef, useState} from "react";
import {Button} from "antd";
import {PoweroffOutlined} from "@ant-design/icons";

const VoiceControlButton = ({controller}) => {
    const [isOn, setIsOn] = useState(false);
    const currentButtonRef = useRef(null);

    const keyboardHandler = (e) => {
        if (e.key.toLowerCase() === "m") {
            currentButtonRef.current.click();
        }
    };

    useEffect(() => {
        const subscriberKey = Symbol();
        controller.voiceControl.subscribeToState(subscriberKey, setIsOn);
        window.addEventListener("keyup", keyboardHandler);

        return () => {
            controller.voiceControl.unsubscribeFromState(subscriberKey);
            window.removeEventListener("keyup", keyboardHandler);
        };
    }, [controller]);

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