import React, {useEffect, useState, useRef} from "react";
import {PlayCircleFilled} from "@ant-design/icons";
import {Button} from "antd";

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

    useEffect(() => {
        const subscriberKey = Symbol();
        controller.sequencer.subscribeToState(subscriberKey, setIsRunning);
        window.addEventListener("keyup", keyboardHandler);

        return () => {
            controller.sequencer.unsubscribeFromState(subscriberKey);
            window.removeEventListener("keyup", keyboardHandler);
        }
    }, [controller]);

    const currentButton = isRunning
        ? (
            <Button
                ref={currentButtonRef}
                onClick={controller.sequencer.stop}
                type="primary"
                size={"large"}
                icon={<PlayCircleFilled />}
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