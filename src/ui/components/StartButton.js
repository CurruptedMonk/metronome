import React, {useState, useRef} from "react";
import {PlayCircleFilled, PauseCircleFilled} from "@ant-design/icons";
import {Button} from "antd";
import useSubscribeEffect from "../hooks/useSubscribeEffect";
import useWindowListener from "../hooks/useWindowListener";
import onKeyBoard from "../handlers/onKeyboard";

const StartButton = ({controller, keyBoardKeys}) => {
    const [isRunning, setIsRunning] = useState(false);
    const buttonRef = useRef(null);
    const buttonCallback = () => buttonRef.current.click();

    useSubscribeEffect(controller, setIsRunning, false);
    useWindowListener("keyup", onKeyBoard.bind(null, buttonCallback, keyBoardKeys));

    return (
        <Button
            ref={buttonRef}
            onClick={isRunning ? controller.stop : controller.play}
            type="primary"
            size={"large"}
            icon={isRunning ? <PauseCircleFilled /> : <PlayCircleFilled />}
        >
            {isRunning ? "Stop" : "Play"}
        </Button>
    );
};

export default StartButton;