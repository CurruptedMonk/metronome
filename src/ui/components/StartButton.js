import React, {useEffect, useState, useRef} from "react";
import {PlayCircleFilled, PauseCircleFilled} from "@ant-design/icons";
import {Button} from "antd";
import useSubscribeEffect from "../hooks/useSubscribeEffect";

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

    useEffect(() => {
        window.addEventListener("keyup", keyboardHandler);

        return () => {
            window.removeEventListener("keyup", keyboardHandler);
        }
    }, []);


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