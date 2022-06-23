import React, {useEffect, useRef} from "react";
import {Button} from "antd";
import onTap from "../handlers/onTap";

const TapButton = ({controller}) => {
    const currentButtonRef = useRef(null);
    const keyboardHandler = (e) => {
        if (e.key.toLowerCase() === "t") {
            currentButtonRef.current.click();
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", keyboardHandler);

        return () => {
            window.removeEventListener("keydown", keyboardHandler);
        };
    }, [controller]);

    return (
        <Button
            ref={currentButtonRef}
            type="primary"
            size={"large"}
            onClick={() => onTap(controller.bpm.set)}
        >
            Tap BPM
        </Button>
    );
};

export default TapButton;