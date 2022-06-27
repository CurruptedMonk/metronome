import React, {useRef} from "react";
import {Button} from "antd";
import onTap from "../handlers/onTap";
import useWindowListener from "../hooks/useWindowListener";

const TapButton = ({controller}) => {
    const currentButtonRef = useRef(null);
    const keyboardHandler = (e) => {
        if (e.key.toLowerCase() === "t") {
            currentButtonRef.current.click();
        }
    };

    useWindowListener("keydown", keyboardHandler);

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