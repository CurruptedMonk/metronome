import React, {useRef, useState} from "react";
import {Button} from "antd";
import {PoweroffOutlined} from "@ant-design/icons";
import useSubscribeEffect from "../hooks/useSubscribeEffect";
import useWindowListener from "../hooks/useWindowListener";
import onKeyBoard from "../handlers/onKeyboard";

const VoiceControlButton = ({controller, keyBoardKeys}) => {
    const [isOn, setIsOn] = useState(false);
    const buttonRef = useRef(null);
    const buttonCallback = () => buttonRef.current.click();

    useSubscribeEffect(controller, setIsOn, false);
    useWindowListener("keyup", onKeyBoard.bind(null, buttonCallback, keyBoardKeys));

    return (
        <Button
            ref={buttonRef}
            onClick={controller.toggle}
            type={isOn ?  "primary" : "default"}
            size={"large"}
            icon={<PoweroffOutlined />}
        >
            {isOn ? "Microphone Off" : "Microphone On"}
        </Button>
    );
};

export default VoiceControlButton;