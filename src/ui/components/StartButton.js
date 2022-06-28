import React, {useRef} from "react";
import {PlayCircleFilled, PauseCircleFilled} from "@ant-design/icons";
import {Button} from "antd";
import useWindowListener from "../hooks/useWindowListener";
import onKeyBoard from "../handlers/onKeyboard";
import useSubscribe from "../hooks/useSubscribe";

const StartButton = ({controller, keyBoardKeys}) => {
    const buttonRef = useRef(null);
    const buttonCallback = () => buttonRef.current.click();

    const [isRunning] = useSubscribe(controller);
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