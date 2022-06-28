import React, {useRef} from "react";
import {Button} from "antd";
import {PoweroffOutlined} from "@ant-design/icons";
import useWindowListener from "../hooks/useWindowListener";
import onKeyBoard from "../handlers/onKeyboard";
import useSubscribe from "../hooks/useSubscribe";

const VoiceControlButton = ({controller, keyBoardKeys}) => {
    const buttonRef = useRef(null);
    const buttonCallback = () => buttonRef.current.click();

    const [isOn] = useSubscribe(controller);
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