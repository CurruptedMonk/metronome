import React, {useState, useRef} from "react";
import {PlayCircleFilled, PauseCircleFilled} from "@ant-design/icons";
import {Button} from "antd";
import useSubscribeEffect from "../hooks/useSubscribeEffect";
import useWindowListener from "../hooks/useWindowListener";

const StartButton = ({controller}) => {
    const [isRunning, setIsRunning] = useState(false);
    const currentButtonRef = useRef(null);
    const keyboardHandler = (e) => {
        if (
            e.key.toLowerCase() === "spacebar" ||
            e.key.toLowerCase() === " "
        ) {
            currentButtonRef.current.click();
        }
    };

    useSubscribeEffect(controller.sequencer, setIsRunning, false);
    useWindowListener("keyup", keyboardHandler);

    const currentButton = isRunning
        ? (
            <Button
                ref={currentButtonRef}
                onClick={controller.sequencer.stop}
                type="primary"
                size={"large"}
                icon={<PauseCircleFilled />}
            >
                Stop
            </Button>
        )
        : (
            <Button
                ref={currentButtonRef}
                onClick={controller.sequencer.play}
                type="primary"
                size={"large"}
                icon={<PlayCircleFilled />}
            >
                Play
            </Button>
        );

    return (
        <>
            {currentButton}
        </>
    );
};

export default StartButton;